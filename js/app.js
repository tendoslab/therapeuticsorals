/* Thera Orals Simulator: app logic. No build step, no framework.
 * Case data lives in js/data/*.js (one file per topic); each file pushes cases onto window.CASES.
 * Step types: 'reveal' (examiner gives info), 'mcq' (single best answer), 'multi' (select all that apply),
 * 'match' (dropdown matching) and 'viva' (say your answer out loud, then tick the key points you covered).
 * Optional step fields: critical (safety-critical), recall (what past candidates said vs what's correct),
 * exhibit (on reveal steps), fixedOrder (mcq/multi options keep their order). */
(() => {
  'use strict';

  const STORE_KEY = 'theraOrals.v2';
  const LEGACY_KEY = 'theraOrals.progress.v1';
  const MOCK_MINUTES = 20;
  const PASS_PCT = 70;   // a case below this counts as missed
  const PTS = 10;        // each scored step is out of 10
  const STEP_PASS = 8;   // a step below this goes on the "My mistakes" list

  const CASES = window.CASES || [];
  const CATS = window.CATEGORIES || [];
  const CORRECTIONS = window.CORRECTIONS || [];
  // Where each case came from (matches the `years` field on every case), newest first;
  // sources with no date sit at the end.
  const SOURCES = [
    { id: '2025', label: '2025 orals' },
    { id: 'Mock 2025', label: '2025 YO mock orals' },
    { id: 'Case studies 2022', label: '2022 case studies' },
    { id: 'YO mock', label: 'YO mock orals (2022 notes)' },
    { id: '2019', label: '2019 orals' },
    { id: '2018', label: '2018 orals' },
    { id: 'Case studies 2016', label: '2016 case studies' },
    { id: 'Peer recalls', label: 'Peer recalls (other candidates)' },
    { id: 'Exam recall', label: 'Undated exam recall' },
    { id: 'Mini oral prep', label: 'Mini oral prep' },
    { id: 'Practice orals', label: 'Practice orals deck' },
  ];
  const sourceLabel = (id) => (SOURCES.find((s) => s.id === id) || { label: id }).label;

  const view = document.getElementById('view');
  const scorePill = document.getElementById('score-pill');
  const timerPill = document.getElementById('timer-pill');
  const missBadge = document.getElementById('miss-badge');

  // ------------------------------------------------------------------ storage (per-viewer convenience only)
  let saved = { cases: {}, missed: {}, seen: {} };
  try { saved = Object.assign(saved, JSON.parse(localStorage.getItem(STORE_KEY)) || {}); } catch (e) { /* storage unavailable */ }
  try {
    const old = JSON.parse(localStorage.getItem(LEGACY_KEY));
    if (old && !Object.keys(saved.cases).length) saved.cases = old;
  } catch (e) { /* ignore */ }
  const persist = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(saved)); } catch (e) { /* ignore */ } };
  const stepKey = (c, i) => `${c.id}#${i}`;
  const today = () => new Date().toISOString().slice(0, 10);

  // ------------------------------------------------------------------ helpers
  const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const strip = (html) => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.trim(); };
  const shuffled = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const range = (n) => Array.from({ length: n }, (_, i) => i);
  const cat = (id) => CATS.find((x) => x.id === id) || { id, title: id, icon: '', hue: 225, half: '' };
  const catPill = (id) => `<span class="pill tint" style="--h:${cat(id).hue}">${esc(cat(id).title)}</span>`;
  const sourceRank = (id) => { const i = SOURCES.findIndex((s) => s.id === id); return i < 0 ? SOURCES.length : i; };
  const sourcePills = (c) => [...(c.years || [])].sort((a, b) => sourceRank(a) - sourceRank(b)).map((y) => `<span class="pill">${esc(sourceLabel(y))}</span>`).join('');
  const scored = (c) => c.steps.map((s, i) => i).filter((i) => c.steps[i].type !== 'reveal');
  const caseMissed = (c) => c.steps.some((_, i) => saved.missed[stepKey(c, i)]) || (saved.cases[c.id] && saved.cases[c.id].last < PASS_PCT);
  const missedKeys = () => Object.keys(saved.missed).filter((k) => {
    const [id, i] = k.split('#');
    const c = CASES.find((x) => x.id === id);
    return c && c.steps[Number(i)];
  });
  const outcomeOf = (pts) => (pts >= STEP_PASS ? 'good' : pts >= 4 ? 'part' : 'bad');

  // The correct answer to a step, written out in full (review page, end screen, case record).
  function answerHTML(st) {
    if (st.type === 'mcq') return `<p>${st.options[st.answer]}</p>`;
    if (st.type === 'multi') return `<ul>${st.answers.map((a) => `<li>${st.options[a]}</li>`).join('')}</ul>`;
    if (st.type === 'match') return `<ul>${st.pairs.map((p) => `<li><b>${p.label}</b> → ${p.answer}</li>`).join('')}</ul>`;
    if (st.type === 'viva') return `<ul>${st.points.map((p) => `<li>${p}</li>`).join('')}</ul>`;
    return st.text || '';
  }

  // ------------------------------------------------------------------ simulator state
  const sim = {
    cats: new Set(CATS.map((c) => c.id)),
    source: 'all', pool: 'all', count: 5,
    s: null, // the current session (practice, mock or drill); it survives tab switches
  };
  let timerHandle = null;

  const sourceMatch = (c) => sim.source === 'all' || (c.years || []).includes(sim.source);
  const inScope = (c) => sim.cats.has(c.category) && sourceMatch(c);
  function poolCases(pool = sim.pool) {
    return CASES.filter(inScope).filter((c) => {
      if (pool === 'new') return !saved.cases[c.id] && !scored(c).some((i) => saved.seen[stepKey(c, i)]);
      if (pool === 'missed') return caseMissed(c);
      return true;
    });
  }
  const active = () => sim.s && !sim.s.finished;

  function newSession(mode, items) {
    stopTimer();
    sim.s = { mode, items, i: 0, score: 0, max: 0, results: [], picked: new Set(), perm: null, draft: {}, last: null, view: 'question', parked: false, finished: false, timeUp: false };
    prepItem();
    location.hash === '#sim' ? render() : (location.hash = '#sim');
  }
  const caseItems = (cases) => cases.flatMap((c) => [{ c, intro: true }, ...c.steps.map((_, s) => ({ c, s }))]);
  function startPractice() {
    const pool = shuffled(poolCases());
    if (!pool.length || !confirmReplace()) return;
    newSession('practice', caseItems(pool.slice(0, Math.min(sim.count, pool.length))));
  }
  function startCase(id) {
    const c = CASES.find((x) => x.id === id);
    if (!c || !confirmReplace()) return;
    newSession('practice', caseItems([c]));
  }
  function startMock() {
    const avail = CASES.filter(inScope);
    const pick = (half) => shuffled(avail.filter((c) => cat(c.category).half === half));
    const anterior = pick('anterior'), posterior = pick('posterior');
    if (!anterior.length || !posterior.length || !confirmReplace()) return;
    const warmup = shuffled(CASES.filter((c) => c.warmup))[0];
    const order = [...(warmup ? [warmup] : []), anterior[0], posterior[0]];
    // The panel often adds a bonus case when you move quickly.
    const bonus = shuffled([...anterior.slice(1), ...posterior.slice(1)])[0];
    newSession('mock', caseItems(bonus ? [...order, bonus] : order));
    sim.s.bonusFrom = order.length;
    sim.s.endsAt = Date.now() + MOCK_MINUTES * 60000;
    startTimer();
  }
  // Drill only the questions you got wrong. The case record keeps each one in context.
  function startDrill(keys) {
    const items = keys.map((k) => { const [id, i] = k.split('#'); return { c: CASES.find((x) => x.id === id), s: Number(i) }; })
      .filter((it) => it.c && it.c.steps[it.s])
      .sort((a, b) => CASES.indexOf(a.c) - CASES.indexOf(b.c) || a.s - b.s);
    if (!items.length || !confirmReplace()) return;
    newSession('drill', items);
  }
  function confirmReplace() {
    return !active() || confirm('Replace the session in progress? Your answers so far are already saved to My mistakes.');
  }

  const cur = () => sim.s.items[sim.s.i];
  const curStep = () => { const it = cur(); return it && !it.intro ? it.c.steps[it.s] : null; };

  function prepItem() {
    const s = sim.s, st = curStep();
    s.view = cur() && cur().intro ? 'intro' : 'question';
    s.picked = new Set(); s.last = null; s.draft = {}; s.perm = null;
    if (!st) return;
    if (st.type === 'mcq' || st.type === 'multi') s.perm = st.fixedOrder ? range(st.options.length) : shuffled(range(st.options.length));
    else if (st.type === 'match') s.perm = shuffled([...new Set([...st.pairs.map((p) => p.answer), ...(st.distractors || [])])]);
  }

  function record(points, said) {
    const s = sim.s, it = cur(), k = stepKey(it.c, it.s);
    s.score += points; s.max += PTS;
    s.results.push({ c: it.c, s: it.s, points, said });
    saved.seen[k] = 1;
    if (points < STEP_PASS) saved.missed[k] = { score: points, said, date: today() };
    else delete saved.missed[k];
    persist();
  }

  function submit() {
    const s = sim.s, st = curStep();
    if (st.type === 'mcq') {
      const pick = [...s.picked][0];
      if (pick === undefined) return;
      const pts = pick === st.answer ? PTS : 0;
      s.last = { points: pts, pick };
      record(pts, strip(st.options[pick]));
    } else if (st.type === 'multi') {
      if (!s.picked.size) return;
      const want = new Set(st.answers), chosen = [...s.picked];
      const hits = chosen.filter((x) => want.has(x)).length, wrong = chosen.length - hits;
      const pts = Math.max(0, Math.round((PTS * (hits - wrong)) / want.size));
      s.last = { points: pts, picked: chosen };
      record(pts, chosen.map((x) => strip(st.options[x])).join(' · '));
    } else if (st.type === 'match') {
      const vals = st.pairs.map((_, i) => { const v = (document.getElementById(`m-${i}`) || {}).value; return v === '' || v === undefined ? null : s.perm[Number(v)]; });
      const right = vals.filter((v, i) => v === st.pairs[i].answer).length;
      const pts = Math.round((PTS * right) / st.pairs.length);
      s.last = { points: pts, vals };
      record(pts, st.pairs.map((p, i) => `${strip(p.label)} → ${vals[i] ? strip(vals[i]) : '(nothing)'}`).join(' · '));
    } else if (st.type === 'viva') {
      // Scored when you confirm your ticks on the feedback screen.
      s.last = { viva: true, ticked: st.points.map(() => false), notes: s.draft['viva-notes'] || '' };
    }
    s.view = 'feedback';
    render();
  }

  function next() {
    const s = sim.s, it = cur(), st = curStep();
    if (s.view === 'feedback' && s.last && s.last.viva) {
      const n = s.last.ticked.filter(Boolean).length;
      const missedPts = st.points.filter((_, i) => !s.last.ticked[i]).map(strip);
      record(Math.round((PTS * n) / st.points.length), `Covered ${n} of ${st.points.length} key points.${missedPts.length ? ' Missed: ' + missedPts.join(' · ') : ''}`);
    }
    const nx = s.items[s.i + 1];
    if (s.mode !== 'drill' && !it.intro && (!nx || nx.c !== it.c || nx.intro)) completeCase(it.c);
    s.i++;
    if (s.i >= s.items.length) { finish(); return; }
    prepItem(); render();
  }
  function skip() {
    const st = curStep();
    if (st && st.type !== 'reveal') record(0, 'Skipped');
    sim.s.last = null; sim.s.view = 'question';
    next();
  }
  function completeCase(c) {
    const rs = sim.s.results.filter((r) => r.c === c);
    const max = scored(c).length * PTS;
    if (!max || rs.length < scored(c).length) return;
    const pct = Math.round((100 * rs.reduce((a, r) => a + r.points, 0)) / max);
    const p = saved.cases[c.id] || { attempts: 0, best: 0 };
    Object.assign(p, { attempts: p.attempts + 1, best: Math.max(p.best, pct), last: pct, date: today() });
    saved.cases[c.id] = p; persist();
  }
  function finish() {
    stopTimer();
    sim.s.finished = true; sim.s.view = 'end'; sim.s.parked = false;
    render();
  }

  // ------------------------------------------------------------------ mock oral timer
  function startTimer() {
    stopTimer();
    tick();
    timerHandle = setInterval(tick, 1000);
  }
  function tick() {
    const s = sim.s;
    if (!s || !s.endsAt || s.finished) { stopTimer(); return; }
    const left = Math.max(0, s.endsAt - Date.now());
    timerPill.hidden = false;
    timerPill.textContent = `⏱ ${Math.floor(left / 60000)}:${String(Math.floor((left % 60000) / 1000)).padStart(2, '0')}`;
    timerPill.classList.toggle('low', left < 3 * 60000);
    if (left === 0) {
      s.timeUp = true;
      if (s.view === 'feedback' && s.last && s.last.viva) next();
      if (!s.finished) finish();
    }
  }
  function stopTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = null;
    timerPill.hidden = true;
  }

  // ------------------------------------------------------------------ simulator views
  function renderSim() {
    const s = sim.s;
    if (!s || s.parked || (s.finished && s.view !== 'end')) { view.innerHTML = `<div class="fade">${viewStart()}</div>`; return false; }
    const fn = { intro: viewIntro, question: viewQuestion, feedback: viewFeedback, end: viewEnd }[s.view];
    view.innerHTML = `<div class="fade ${s.mode === 'mock' ? 'mocking' : ''}">${fn()}</div>`;
    // Put back anything typed or chosen before a tab switch.
    if (s.view === 'question') Object.entries(s.draft).forEach(([id, v]) => { const el = document.getElementById(id); if (el) el.value = v; });
    return true;
  }

  function examinerFor(c) {
    if (!sim.s || sim.s.mode !== 'mock') return 'Examiner';
    const half = cat(c.category).half;
    if (half === 'casereport') return 'Both examiners';
    return half === 'anterior' ? 'Examiner 1 · anterior eye' : 'Examiner 2 · glaucoma & posterior eye';
  }

  function viewStart() {
    const avail = poolCases();
    const max = avail.length;
    if (sim.count > max) sim.count = max;
    if (sim.count < 1 && max) sim.count = 1;
    const counts = { all: poolCases('all').length, new: poolCases('new').length, missed: poolCases('missed').length };
    const inScopeAll = CASES.filter(inScope);
    const mockReady = inScopeAll.some((c) => cat(c.category).half === 'anterior') && inScopeAll.some((c) => cat(c.category).half === 'posterior');
    const nMissed = missedKeys().length;
    const totalSteps = CASES.reduce((a, c) => a + scored(c).length, 0);
    const s = sim.s;
    const banner = active() ? `<div class="banner">
        <div><b>${s.mode === 'mock' ? 'Mock oral' : s.mode === 'drill' ? 'Mistakes drill' : 'Practice session'} in progress</b>
        <span class="muted">${esc(cur().c.title)} · score ${s.score} / ${s.max}${s.mode === 'mock' ? ' · the clock is still running' : ''}</span></div>
        <div class="row" style="gap:.5rem"><button class="btn primary" data-act="resume">Resume</button><button class="btn" data-act="finish">End &amp; see results</button><button class="btn ghost" data-act="discard">Discard</button></div>
      </div>` : '';
    const catList = CATS.map((c) => {
      const n = CASES.filter((x) => x.category === c.id && sourceMatch(x)).length;
      const on = sim.cats.has(c.id);
      return `<button class="cat" style="--h:${c.hue}" data-act="toggle-cat" data-v="${c.id}" aria-pressed="${on}">
        <span class="ico" aria-hidden="true">${c.icon}</span>
        <span><b>${esc(c.title)}</b><small>${esc(c.subtitle)} · ${n} case${n === 1 ? '' : 's'}</small></span>
        <span class="tick" aria-hidden="true">${on ? '✓' : ''}</span></button>`;
    }).join('');
    return `${banner}
    <section class="hero"><div>
      <p class="label">Therapeutics oral practice</p>
      <h1>Talk through the case before the panel does</h1>
      <p>${CASES.length} cases (${totalSteps} examiner questions) from the 2018, 2019 and 2025 recalls, the 2025 Young Optometrists mock orals, peer recalls, the 2016 and 2022 case-study notes and the Young Optometrists mock orals, checked against Australian practice. Each case keeps the questions from the sitting or notes it came from. Pick topics, then practise whole cases or sit a timed mock oral.</p>
    </div></section>
    <div class="grid-2">
      <section class="card stack" aria-labelledby="topics-h">
        <div class="row" style="justify-content:space-between">
          <h2 id="topics-h" style="font-size:1.15rem">Topics</h2>
          <div class="row" style="gap:.4rem"><button class="chip" data-act="all-cats">All</button><button class="chip" data-act="no-cats">None</button></div>
        </div>
        <div class="cat-list">${catList}</div>
      </section>
      <section class="stack">
        <div class="card stack">
          <div>
            <p class="label">Source</p>
            <div class="row" style="gap:.4rem">${sourceChips()}</div>
          </div>
          <div>
            <p class="label">Practice pool</p>
            <div class="seg">${['all', 'new', 'missed'].map((p) => `<button data-act="pool" data-v="${p}" aria-pressed="${sim.pool === p}" ${counts[p] ? '' : 'disabled'}>${p[0].toUpperCase() + p.slice(1)}<small>${counts[p]}</small></button>`).join('')}</div>
          </div>
          <div>
            <div class="row" style="justify-content:space-between"><p class="label">Cases</p><span class="muted mono" style="font-size:.85rem">${max} available</span></div>
            <div class="stepper">
              <button class="btn" data-act="count" data-v="-1" aria-label="Fewer cases">−</button>
              <output id="count-out">${sim.count}</output>
              <button class="btn" data-act="count" data-v="1" aria-label="More cases">+</button>
              <button class="btn" data-act="count-max">Max</button>
            </div>
            <input type="range" id="count-range" min="1" max="${Math.max(1, max)}" value="${Math.max(1, sim.count)}" aria-label="Number of cases" ${max ? '' : 'disabled'}>
          </div>
          <button class="btn primary big" data-act="start" id="start-btn" ${max ? '' : 'disabled'}>${startLabel()}</button>
        </div>
        <div class="card stack mock-card">
          <div>
            <h2 style="font-size:1.15rem">Mock oral</h2>
            <p class="muted" style="margin:.4rem 0 0">Runs like the real thing: a ${MOCK_MINUTES}-minute clock and two examiners. A case-report warm-up, then one anterior-eye case and one glaucoma/posterior case, plus a bonus case if you move quickly. Uses the topics and source picked here.</p>
          </div>
          <button class="btn mock big" data-act="mock" ${mockReady ? '' : 'disabled'}>⏱ Start ${MOCK_MINUTES}-minute mock oral</button>
          ${mockReady ? '' : '<p class="warn-text">Select at least one anterior-eye topic and one glaucoma or neuro topic.</p>'}
        </div>
        <div class="card">
          <div class="row" style="justify-content:space-between">
            <div><p class="label">My mistakes</p><p style="margin:0">${nMissed ? `<b>${nMissed}</b> question${nMissed === 1 ? '' : 's'} to revisit` : 'No missed questions yet.'}</p></div>
            ${nMissed ? '<div class="row" style="gap:.5rem"><button class="btn small" data-act="drill-all">Drill them</button><a class="btn small ghost" href="#review">Review →</a></div>' : ''}
          </div>
          ${Object.keys(saved.cases).length || nMissed ? '<button class="btn ghost small" data-act="reset" style="margin-top:.6rem">Reset my progress</button>' : ''}
        </div>
      </section>
    </div>`;
  }
  const startLabel = () => `Start practice · ${sim.count} case${sim.count === 1 ? '' : 's'}`;
  function sourceChips() {
    const chip = (id, label, n) => `<button class="chip" data-act="source" data-v="${esc(id)}" aria-pressed="${sim.source === id}">${esc(label)} <small>${n}</small></button>`;
    return chip('all', 'All sources', CASES.length) + SOURCES.map((s) => chip(s.id, s.label, CASES.filter((c) => (c.years || []).includes(s.id)).length)).join('');
  }

  function caseNumbers() {
    const s = sim.s;
    const intros = s.items.filter((x) => x.intro);
    return { no: s.items.slice(0, s.i + 1).filter((x) => x.intro).length, of: intros.length };
  }

  function viewIntro() {
    const s = sim.s, c = cur().c;
    const { no, of } = caseNumbers();
    const bonus = s.mode === 'mock' && no > s.bonusFrom;
    return `${toolbar()}<article class="intro card stack">
      <div class="pills">${catPill(c.category)}<span class="pill">${esc(c.theme)}</span><span class="pill ${s.mode === 'mock' ? 'mock' : ''}">Case ${no} of ${of}${bonus ? ' · bonus, time permitting' : ''}</span></div>
      <h1>${c.title}</h1>
      <div class="pills"><span class="muted" style="font-size:.85rem">Source:</span>${sourcePills(c)}</div>
      <div class="says"><span class="who">${esc(examinerFor(c))} says</span><p style="font-size:1.08rem;font-weight:600">${c.patient}</p><p>${c.stem}</p></div>
      ${c.exhibit ? exhibitHTML(c.exhibit) : ''}
      <button class="btn primary big" data-act="begin">${no === 1 ? 'Enter the exam room' : 'Begin case'} →</button>
    </article>`;
  }
  const exhibitHTML = (text) => `<div class="exhibit"><p class="label">📷 Exhibit handed to you</p><p>${text}</p></div>`;

  // Always-visible way out: back to setup (session kept), skip, or end and see results.
  function toolbar(canSkip) {
    const s = sim.s;
    const mode = { practice: 'Practice', mock: 'Mock oral', drill: 'Mistakes drill' }[s.mode];
    return `<div class="toolbar">
      <span class="pill ${s.mode === 'mock' ? 'mock' : 'accent'}">${mode}</span>
      <div class="row" style="gap:.25rem">
        <button class="btn ghost small" data-act="park">← Setup</button>
        ${canSkip ? '<button class="btn ghost small" data-act="skip">Skip question</button>' : ''}
        <button class="btn ghost small" data-act="finish">End &amp; see results</button>
      </div>
    </div>`;
  }

  function progressBar() {
    const s = sim.s, it = cur(), c = it.c;
    let label, frac;
    if (s.mode === 'drill') {
      label = `Question ${s.i + 1} of ${s.items.length}`;
      frac = s.i / s.items.length;
    } else {
      const { no, of } = caseNumbers();
      label = `Case ${no} of ${of} · Step ${it.s + 1} of ${c.steps.length}`;
      frac = it.s / c.steps.length;
    }
    return `<div class="row" style="justify-content:space-between;margin-top:.8rem"><span class="label" style="margin:0">${label}</span><span class="muted mono" style="font-size:.85rem">${s.score} / ${s.max}</span></div>
      <div class="progress" aria-hidden="true"><i style="width:${(frac * 100).toFixed(1)}%"></i></div>`;
  }

  /* The case record beside every question: who the patient is, what was presented, and everything
     that has happened in the case so far (results the examiner revealed and the answers to earlier
     questions), so moving to the next question is never disorienting. */
  function recordPanel(c, upto) {
    const s = sim.s;
    const scoreFor = (j) => { const r = s.results.filter((x) => x.c === c && x.s === j).pop(); return r ? r.points : undefined; };
    const items = c.steps.slice(0, upto).map((st, j) => {
      if (st.type === 'reveal') {
        return `<li class="found"><div class="ph">${st.phase}<span>found</span></div><div class="ans prose">${st.text}</div>${st.exhibit ? `<div class="ans muted">📷 ${st.exhibit}</div>` : ''}</li>`;
      }
      const p = scoreFor(j);
      const cls = p === undefined ? '' : outcomeOf(p);
      const n = st.type === 'multi' ? st.answers.length : st.type === 'match' ? st.pairs.length : st.type === 'viva' ? st.points.length : 0;
      return `<li class="${cls}"><div class="ph">${st.phase}<span>${p === undefined ? '' : `${p}/10`}</span></div>
        ${st.type === 'mcq' ? `<div class="ans prose">${answerHTML(st)}</div>` : `<details><summary>Model answer · ${n} key point${n === 1 ? '' : 's'}</summary><div class="ans prose">${answerHTML(st)}</div></details>`}</li>`;
    }).join('');
    const openSoFar = !matchMedia('(max-width: 800px)').matches;
    return `<aside class="record card" aria-label="Case record">
      <div><p class="label">Case</p><h3>${c.title}</h3><div class="pills" style="margin-top:.35rem">${catPill(c.category)}</div></div>
      <div><p class="label">Patient</p><p style="margin:0">${c.patient}</p></div>
      <div><p class="label">Presenting</p><p style="margin:0">${c.stem}</p></div>
      ${c.exhibit ? `<div><p class="label">Exhibit</p><p style="margin:0">${c.exhibit}</p></div>` : ''}
      ${upto > 0 ? `<details class="sofar" ${openSoFar ? 'open' : ''}><summary><span class="label" style="margin:0">Case so far</span></summary><ol class="timeline">${items}</ol></details>` : ''}
    </aside>`;
  }

  function qHead(c, st) {
    return `<div class="qhead"><span class="phase pill" style="background:var(--highlight);color:var(--highlight-ink)">${st.phase}</span>
      <span class="muted" style="font-size:.85rem">${esc(examinerFor(c))}</span>
      ${st.critical ? '<span class="pill bad">Safety-critical</span>' : ''}</div>`;
  }

  function viewQuestion() {
    const s = sim.s, it = cur(), c = it.c, st = curStep();
    let body = '';
    if (st.type === 'reveal') {
      body = `<div class="reveal-box prose">${st.text}</div>
        ${st.exhibit ? `<div style="margin-top:.8rem">${exhibitHTML(st.exhibit)}</div>` : ''}
        <button class="btn primary big" data-act="continue" style="margin-top:1rem">Continue →</button>`;
    } else if (st.type === 'mcq' || st.type === 'multi') {
      const multi = st.type === 'multi';
      body = `${multi ? '<p class="label" style="color:var(--accent)">Select all that apply</p>' : ''}
        <div class="opts" role="group">${s.perm.map((oi) => `<button class="opt ${multi ? 'box' : ''}" data-act="pick" data-v="${oi}" aria-pressed="${s.picked.has(oi)}"><span class="dot" aria-hidden="true"></span><span>${st.options[oi]}</span><span></span></button>`).join('')}</div>
        <div class="row" style="margin-top:1rem"><button class="btn primary" data-act="submit" id="submit-btn" ${s.picked.size ? '' : 'disabled'}>${multi ? 'Submit selection' : 'Lock in answer'}</button>
        <span class="muted" style="font-size:.88rem">${multi ? 'Tap every option you would say to the panel.' : 'Pick one, then lock it in. You can change your mind before locking in.'}</span></div>`;
    } else if (st.type === 'match') {
      body = `<div>${st.pairs.map((p, i) => `<div class="matchrow"><label for="m-${i}"><b>${p.label}</b></label>
        <select id="m-${i}"><option value="">Choose…</option>${s.perm.map((o, oi) => `<option value="${oi}">${esc(strip(o))}</option>`).join('')}</select></div>`).join('')}</div>
        <button class="btn primary" data-act="submit" style="margin-top:1rem">Submit matches</button>`;
    } else if (st.type === 'viva') {
      body = `<p class="muted" style="font-size:.92rem">Answer out loud as you would to the panel (jot notes if you like), then reveal the model answer and tick what you actually covered.</p>
        <textarea id="viva-notes" placeholder="Your answer…"></textarea>
        <button class="btn primary" data-act="submit" style="margin-top:1rem">Reveal model answer</button>`;
    }
    return `${toolbar(st.type !== 'reveal')}${progressBar()}<div class="qlayout">${recordPanel(c, it.s)}
      <section class="card qcard">${qHead(c, st)}<h2>${st.type === 'reveal' ? (st.question || 'The examiner gives you more information') : st.question}</h2>${body}</section></div>`;
  }

  function viewFeedback() {
    const s = sim.s, it = cur(), c = it.c, st = curStep(), L = s.last;
    let head, detail = '';
    if (L.viva) {
      const n = L.ticked.filter(Boolean).length;
      head = `<div class="verdict viva"><span class="mark" aria-hidden="true">✎</span><div><h2 style="margin:0">Model answer</h2><span class="muted">Tick each point you actually said · <b class="mono" id="viva-score">${Math.round((PTS * n) / st.points.length)} / 10</b></span></div></div>`;
      detail = `${L.notes ? `<div class="model" style="margin-bottom:.8rem"><p class="label">Your notes</p><p style="margin:0;white-space:pre-wrap">${esc(L.notes)}</p></div>` : ''}
        <div class="points">${st.points.map((p, i) => `<label class="point"><input type="checkbox" data-tick="${i}" ${L.ticked[i] ? 'checked' : ''}><span>${p}</span></label>`).join('')}</div>`;
    } else {
      const o = outcomeOf(L.points);
      const [mark, title] = { good: ['✓', 'Clinically sound'], part: ['½', 'Partly there'], bad: ['✕', 'Examiner unconvinced'] }[o];
      head = `<div class="verdict ${o}"><span class="mark" aria-hidden="true">${mark}</span><div><h2 style="margin:0">${title}</h2><span class="muted mono">${L.points} / 10</span>${st.critical && L.points < PTS ? ' <span class="critical-note">· safety-critical: this kind of error fails an oral</span>' : ''}</div></div>`;
      if (st.type === 'mcq' || st.type === 'multi') {
        const want = new Set(st.type === 'mcq' ? [st.answer] : st.answers);
        const got = new Set(st.type === 'mcq' ? [L.pick] : L.picked);
        detail = `<div class="opts">${s.perm.map((oi) => {
          const cls = want.has(oi) ? 'right' : got.has(oi) ? 'wrong' : 'dim';
          const tag = want.has(oi) && got.has(oi) ? '✓ Your pick' : want.has(oi) ? (st.type === 'multi' ? '✓ Missed' : '✓ Correct') : got.has(oi) ? '✕ Your pick' : '';
          return `<div class="opt ${st.type === 'multi' ? 'box' : ''} ${cls}"><span class="dot" aria-hidden="true"></span><span>${st.options[oi]}</span><span class="tag">${tag}</span></div>`;
        }).join('')}</div>`;
      } else if (st.type === 'match') {
        detail = `<div class="tablewrap"><table class="t"><tr><th>Item</th><th>Correct match</th><th>You chose</th></tr>${st.pairs.map((p, i) => {
          const ok = L.vals[i] === p.answer;
          return `<tr><td><b>${p.label}</b></td><td>${p.answer}</td><td class="${ok ? 'ok' : 'no'}">${ok ? '✓' : `✕ ${L.vals[i] || '(nothing)'}`}</td></tr>`;
        }).join('')}</table></div>`;
      }
    }
    const nx = s.items[s.i + 1];
    const nextLabel = !nx ? 'See results' : nx.intro ? 'Next case' : (L.viva ? 'Confirm & next question' : 'Next question');
    return `${toolbar(false)}${progressBar()}<div class="qlayout">${recordPanel(c, it.s)}
      <section class="card qcard stack">
        <div>${head}<p class="muted" style="margin:0">${st.question}</p></div>
        ${detail}
        <div class="model"><p class="label">🧑‍⚕️ Examiner notes</p><div class="prose">${st.explain}</div></div>
        ${st.recall ? `<div class="recall"><p class="label">⚠️ Recall check: what past candidates said vs what's correct</p><div class="prose">${st.recall}</div></div>` : ''}
        <button class="btn primary big" data-act="next">${nextLabel} →</button>
      </section></div>`;
  }

  function viewEnd() {
    const s = sim.s;
    const pct = s.max ? Math.round((100 * s.score) / s.max) : 0;
    const msg = pct >= 90 ? 'Excellent. Safe, structured and you could justify your choices: exactly what the panel wants.'
      : pct >= PASS_PCT ? 'A solid pass. Tighten up the weaker steps below, especially contraindications, doses and referral timing.'
        : 'Not there yet. Work through the missed questions, the Answer audit and the safety-critical red flags before the real thing.';
    const cases = [...new Set(s.items.map((x) => x.c))];
    const rows = cases.map((c) => {
      const rs = s.results.filter((r) => r.c === c);
      const max = (s.mode === 'drill' ? rs.length : scored(c).length) * PTS;
      const got = rs.reduce((a, r) => a + r.points, 0);
      const status = !rs.length ? 'Not reached' : rs.length < (s.mode === 'drill' ? s.items.filter((x) => x.c === c).length : scored(c).length) ? `Unfinished · ${got}/${rs.length * PTS}` : `${got}/${max} · ${Math.round((100 * got) / max)}%`;
      const misses = rs.filter((r) => r.points < STEP_PASS);
      return `<div class="result">
        <div class="result-head"><div><div class="pills">${catPill(c.category)}</div><b style="display:block;margin-top:.3rem">${c.title}</b></div><span class="mono">${status}</span></div>
        ${misses.length ? `<div class="stack" style="gap:.4rem;margin-top:.6rem">${misses.map((r) => missItem(c, r.s, { score: r.points, said: r.said })).join('')}</div>` : rs.length ? '<p class="muted" style="margin:.4rem 0 0">Clean sweep.</p>' : ''}
        <button class="btn ghost small" data-act="case" data-v="${c.id}" style="margin-top:.5rem">Retry this case →</button>
      </div>`;
    }).join('');
    return `<section class="card stack" style="max-width:52rem;margin:1rem auto">
      <p class="label">${s.timeUp ? "🔔 Time's up" : 'Session complete'} · ${{ practice: 'Practice summary', mock: 'Mock oral · panel verdict', drill: 'Mistakes drill' }[s.mode]}</p>
      <div class="row" style="align-items:baseline"><span class="big-score">${s.score}</span><span class="muted mono" style="font-size:1.4rem">/ ${s.max} · ${pct}%</span></div>
      <div class="says"><span class="who">Final feedback</span><p>${msg}</p></div>
      <div class="stack" style="gap:.7rem">${rows}</div>
      <div class="row"><button class="btn primary" data-act="restart">Back to setup</button><a class="btn" href="#review">All my mistakes</a></div>
    </section>`;
  }

  // One missed question, expandable: what you said, the correct answer and the examiner notes.
  function missItem(c, i, m, withActions) {
    const st = c.steps[i], k = stepKey(c, i);
    return `<details class="qitem missed">
      <summary><div><div class="qtext">${st.question}</div><div class="pills" style="margin-top:.35rem"><span class="pill">${st.phase}</span><span class="pill bad">${m.score}/10</span>${st.critical ? '<span class="pill bad">Safety-critical</span>' : ''}${m.date ? `<span class="muted" style="font-size:.8rem">${esc(m.date)}</span>` : ''}</div></div><span class="muted" aria-hidden="true">▾</span></summary>
      <div class="body">
        ${m.said ? `<div class="yousaid"><p class="label">You said</p>${esc(m.said)}</div>` : ''}
        <div class="model"><p class="label">${st.type === 'viva' ? 'Key points the panel listens for' : 'Correct answer'}</p><div class="prose">${answerHTML(st)}</div></div>
        <div class="model"><p class="label">🧑‍⚕️ Examiner notes</p><div class="prose">${st.explain}</div></div>
        ${st.recall ? `<div class="recall"><p class="label">⚠️ Recall check</p><div class="prose">${st.recall}</div></div>` : ''}
        ${withActions ? `<div class="row"><button class="btn small" data-act="drill-one" data-v="${esc(k)}">Try this question again</button><button class="btn small ghost" data-act="learned" data-v="${esc(k)}">✓ Got it now, remove</button></div>` : ''}
      </div>
    </details>`;
  }

  // ------------------------------------------------------------------ my mistakes
  const review = { cat: 'all' };
  function renderReview() {
    const keys = missedKeys();
    const byCase = new Map();
    keys.forEach((k) => {
      const [id, i] = k.split('#');
      const c = CASES.find((x) => x.id === id);
      if (review.cat !== 'all' && c.category !== review.cat) return;
      if (!byCase.has(c)) byCase.set(c, []);
      byCase.get(c).push(Number(i));
    });
    const shown = [...byCase.values()].reduce((a, v) => a + v.length, 0);
    const counts = {};
    keys.forEach((k) => { const c = CASES.find((x) => x.id === k.split('#')[0]); counts[c.category] = (counts[c.category] || 0) + 1; });
    const groups = [...byCase.entries()].sort((a, b) => CASES.indexOf(a[0]) - CASES.indexOf(b[0])).map(([c, idx]) => `<section class="case-group">
      <header><div><div class="pills">${catPill(c.category)}${sourcePills(c)}</div><h3 style="margin-top:.35rem">${c.title}</h3></div>
        <button class="btn small" data-act="case" data-v="${c.id}">Retry whole case →</button></header>
      ${idx.sort((a, b) => a - b).map((i) => missItem(c, i, saved.missed[stepKey(c, i)], true)).join('')}
    </section>`).join('');
    view.innerHTML = `<div class="fade">
      <section class="hero"><div><p class="label">My mistakes</p><h1>Questions to revisit</h1>
        <p>Every question you scored under ${STEP_PASS}/10 on, or skipped, with what you said and the model answer. Drill them on their own (the case record keeps each one in context), or retry the whole case. A question drops off once you get it right.</p>
        ${keys.length ? `<div class="row" style="margin-top:.9rem"><button class="btn primary" data-act="drill-shown">Drill ${shown === keys.length ? 'all' : 'these'} ${shown} question${shown === 1 ? '' : 's'}</button></div>` : ''}
      </div></section>
      ${keys.length ? `<div class="row" style="gap:.4rem;margin-bottom:1.2rem">
        <button class="chip" data-act="review-cat" data-v="all" aria-pressed="${review.cat === 'all'}">All topics <small>${keys.length}</small></button>
        ${CATS.filter((c) => counts[c.id]).map((c) => `<button class="chip" data-act="review-cat" data-v="${c.id}" aria-pressed="${review.cat === c.id}">${c.icon} ${esc(c.title)} <small>${counts[c.id]}</small></button>`).join('')}
      </div>` : ''}
      ${groups || `<div class="card empty"><h2 style="font-size:1.2rem">Nothing to revisit${review.cat === 'all' ? ' yet' : ' in this topic'}</h2><p class="muted">Questions you get wrong in practice, mock orals or drills land here automatically.</p><a class="btn primary" href="#sim">Go to the simulator</a></div>`}
    </div>`;
  }
  function shownReviewKeys() {
    return missedKeys().filter((k) => review.cat === 'all' || CASES.find((x) => x.id === k.split('#')[0]).category === review.cat);
  }

  // ------------------------------------------------------------------ recall bank
  function renderBank() {
    const years = SOURCES.map((s) => s.id).filter((y) => CASES.some((c) => (c.years || []).includes(y)));
    const sections = CATS.map((ct) => {
      const cs = CASES.filter((c) => c.category === ct.id && sourceMatch(c));
      if (!cs.length) return '';
      const rows = cs.map((c) => {
        const p = saved.cases[c.id];
        const nm = c.steps.filter((_, i) => saved.missed[stepKey(c, i)]).length;
        return `<tr><td><b>${c.title}</b><br><small class="muted">${esc(c.theme)}</small></td>
          ${years.map((y) => `<td class="c">${(c.years || []).includes(y) ? '<span class="dotyes">●</span>' : '<span class="dotno">·</span>'}</td>`).join('')}
          <td class="c">${nm ? `<a href="#review" class="no">${nm}</a>` : '<span class="dotno">—</span>'}</td>
          <td class="c mono ${p ? (p.last >= PASS_PCT ? 'ok' : 'no') : ''}">${p ? p.last + '%' : '<span class="dotno">—</span>'}</td>
          <td><button class="btn small" data-act="case" data-v="${c.id}">Practise →</button></td></tr>`;
      }).join('');
      return `<section class="card hue-top" style="--h:${ct.hue};margin-bottom:1rem">
        <div class="row" style="gap:.5rem;margin-bottom:.6rem"><span style="font-size:1.2rem">${ct.icon}</span><h2 style="font-size:1.1rem">${esc(ct.title)}</h2><span class="muted" style="font-size:.85rem">${cs.length} case${cs.length === 1 ? '' : 's'}</span></div>
        <div class="tablewrap"><table class="t bank-table"><tr><th>Case</th>${years.map((y) => `<th class="c">${esc(sourceLabel(y).replace(' orals', '').replace(' case studies', ' notes'))}</th>`).join('')}<th class="c">Missed Qs</th><th class="c">Last</th><th></th></tr>${rows}</table></div>
      </section>`;
    }).join('');
    view.innerHTML = `<div class="fade">
      <section class="hero"><div><p class="label">Recall bank</p><h1>Every case, by topic and source</h1>
      <p>● = that case was recalled from that exam or set of notes. Jump straight into any case.</p></div></section>
      <div class="row" style="gap:.4rem;margin-bottom:1.2rem">${sourceChips()}</div>
      ${sections || '<p class="muted">No cases match this source.</p>'}
    </div>`;
  }

  // ------------------------------------------------------------------ answer audit
  function renderAudit() {
    const tag = { Incorrect: 'bad', 'Partly correct': 'warn', Correct: 'good' };
    const groups = CATS.map((ct) => {
      const items = CORRECTIONS.filter((x) => x.category === ct.id);
      if (!items.length) return '';
      return `<section style="margin-bottom:1.6rem"><h2 style="font-size:1.15rem;margin-bottom:.7rem">${ct.icon} ${esc(ct.title)}</h2>
        <div class="stack" style="gap:.7rem">${items.map((it) => `<article class="card audit">
          <div class="pills"><span class="pill ${tag[it.verdict]}">${esc(it.verdict)}</span><span class="muted" style="font-size:.82rem">${esc(it.source)}</span></div>
          <p class="claim">Candidate answer: “${it.claim}”</p><p style="margin:0">${it.correction}</p></article>`).join('')}</div></section>`;
    }).join('');
    const wrong = CORRECTIONS.filter((x) => x.verdict === 'Incorrect').length;
    view.innerHTML = `<div class="fade">
      <section class="hero"><div><p class="label">Answer audit</p><h1>What the recalls got wrong</h1>
      <p>The recall documents are student-written, so ${CORRECTIONS.length} specific answers were checked against Australian practice (AMH/eTG, TGA pregnancy categories, product information, the OBA scheduled medicines guideline, the RANZCO glaucoma referral pathway and landmark trials). ${wrong} were wrong outright. The same corrections appear inside the matching case steps as “Recall check” boxes.</p></div></section>
      ${groups}</div>`;
  }

  // ------------------------------------------------------------------ exam guide
  function renderGuide() {
    const card = (title, html, hue) => `<section class="card hue-top prose" style="--h:${hue}"><h2 style="font-size:1.1rem;margin-bottom:.6rem">${title}</h2>${html}</section>`;
    view.innerHTML = `<div class="fade">
      <section class="hero"><div><p class="label">Exam guide</p><h1>How the real oral runs</h1><p>Pieced together from candidate recalls across 2016–2025.</p></div></section>
      <div class="guide-grid">
        ${card('Format', `<ul>
          <li><strong>~20 minutes</strong>, two examiners: usually one runs an <strong>anterior-eye</strong> case and the other a <strong>glaucoma / posterior / neuro</strong> case. Each examiner only asks about their own case.</li>
          <li>Many sessions open with <strong>case report questions</strong> (“What did you learn?”, then questions built from the marker's feedback). Some panels skip them.</li>
          <li>If you're quick, expect a <strong>third or fourth case</strong>. Finishing early is not a bad sign. They will stop you once you've said enough.</li>
          <li>Photos are often <strong>blurry printouts</strong> (some panels use none and keep it conversational). Describe what you can see and say what you'd want to confirm.</li>
          <li>Pen and paper availability varied by panel.</li></ul>`, 225)}
        ${card('The usual flow of a case', `<ul>
          <li><strong>Describe</strong> the photo (location, size, depth, colour, laterality).</li>
          <li><strong>History</strong> questions, in lay language (“have you started any new creams?”).</li>
          <li><strong>Differentials</strong>, most likely first, and why each is or isn't it.</li>
          <li><strong>Work-up</strong>: the panel then reveals results (IOP, CCT, gonio, VF, OCT).</li>
          <li><strong>Management</strong>: generic name, concentration, dose, frequency, duration, after checking <strong>contraindications</strong>.</li>
          <li><strong>Review</strong> timing and what you expect to see; <strong>referral</strong> triggers and urgency; <strong>prognosis</strong>.</li>
          <li>Pharmacology on demand: mechanism of action, drug class, Gram coverage, pregnancy category, PBS status.</li>
          <li>Expect a twist: “now the ulcer is central”, “now the IOP is 40”, “now the field is full”. Re-plan out loud.</li></ul>`, 170)}
        ${card('Australian scope reminders', `<ul>
          <li>Endorsed optometrists prescribe <strong>topical</strong> ocular medicines. Oral drugs (acetazolamide, antivirals, antibiotics, doxycycline, azithromycin) go through the GP, ophthalmologist or ED. Say who you'd call and why.</li>
          <li>Glaucoma: under the OBA scheduled-medicines guideline, refer to an ophthalmologist <strong>within 4 months</strong> of starting treatment, with a collaborative care plan. Use the <strong>RANZCO referral pathway</strong> to decide what suits collaborative care (secondary and complex glaucomas usually don't).</li>
          <li>Fortified antibiotics and antifungals are hospital-compounded: refer.</li>
          <li>Quote <strong>TGA (Australian) pregnancy categories</strong>, not US FDA ones.</li>
          <li>Check the current OBA guideline, PBS schedule and product information; they change.</li></ul>`, 40)}
        ${card('General red flags', `<ol>
          <li>No topical steroid for microbial keratitis until there is clear improvement on the antibiotic or antiviral.</li>
          <li>Always taper a steroid used for more than a short course, and check IOP.</li>
          <li>Don't taper an antibiotic below QID (resistance).</li>
          <li>No non-selective β-blocker (timolol) with asthma, severe COPD, bradycardia or heart block.</li>
          <li>Avoid PGAs with active or past uveitis, HSV keratitis or CMO.</li></ol>`, 0)}
        ${card('What examiners rewarded', `<ul>
          <li>Saying “<em>provided there are no contraindications</em>”, then naming them.</li>
          <li>“Patients have two eyes”: check the fellow eye (angle, disc, field).</li>
          <li>Always dilating uveitis to rule out posterior involvement.</li>
          <li>Checking BP before and after phenylephrine 10%.</li>
          <li>Knowing <em>why</em>: e.g. prednisolone acetate is a lipophilic suspension, so it penetrates the cornea better than sodium phosphate.</li>
          <li>Standing your ground when you're right (“Are you sure?” is often a test). Say “inattention”, not “malingering”.</li>
          <li>Quoting trials accurately: OHTS, EMGT, CNTGS, AGIS, LoGTS, LiGHT, ZAP, EAGLE, SCUT, MUTT, HEDS.</li></ul>`, 135)}
        ${card('Landmark trials: one-liners', `<ul>
          <li><strong>OHTS</strong>: treating OHT (≥20% IOP reduction) cut 5-year conversion from 9.5% to 4.4%. Risk factors: age, IOP, thin CCT, larger VCDR, PSD.</li>
          <li><strong>EMGT</strong>: treatment halved progression; each 1 mmHg lower ≈ 10% less risk. Untreated MD loss: PXF ≈ −3.1, high-tension ≈ −1.3, NTG ≈ −0.4 dB/yr.</li>
          <li><strong>CNTGS</strong>: 30% IOP reduction in NTG → progression 12% vs 35% untreated.</li>
          <li><strong>AGIS</strong>: advanced glaucoma with IOP always below 18 mmHg showed almost no field progression.</li>
          <li><strong>LoGTS</strong>: fewer NTG patients progressed on brimonidine than timolol (more brimonidine dropouts from allergy).</li>
          <li><strong>LiGHT</strong>: primary SLT, ~74% drop-free at 3 years; cost-effective; safe.</li>
          <li><strong>ZAP</strong>: prophylactic LPI in PACS (Chinese) gave a real but small benefit; not routinely needed.</li>
          <li><strong>EAGLE</strong>: clear lens extraction beat LPI for PAC (IOP ≥30) / PACG.</li>
          <li><strong>SCUT</strong>: adjunct steroid (pred phosphate 1%, after 48 h moxifloxacin) gave no overall benefit; possible help in severe central ulcers; avoid in Nocardia.</li>
          <li><strong>MUTT I</strong>: natamycin beat voriconazole for filamentous (esp. Fusarium) keratitis.</li>
          <li><strong>HEDS</strong>: oral aciclovir 400 mg BD halved HSV recurrences; topical steroid + antiviral helps stromal keratitis.</li></ul>`, 290)}
        ${card('Case combinations from past sittings', `<p>From the 2016–17 Orals notes. Typically case reports, fields, a glaucoma case and 2–3 anterior-eye cases.</p><ul>
          <li>Hyphaema → blunt trauma → angle recession glaucoma (list consequences front to back)</li>
          <li>Marginal keratitis + NTG; ocular allergy + NTG; CLPC + PXF</li>
          <li>Uveitis + steroid-induced IOP rise; AAU + PXG; AAU + steroid response + PXG</li>
          <li>Herpes zoster + acute angle closure (plus lots of fields, binasal hemianopia)</li>
          <li>Blepharoconjunctivitis from α-agonists + blunt trauma (hyphaema, angle recession)</li>
          <li>PDS + NTG + MK; PXG + EKC; PXF + VF differentials + bacterial conjunctivitis</li>
          <li>Angle recession + chlamydial conjunctivitis; angle closure + MK</li>
          <li>Stellate KP uveitis + POAG; Fuchs/Possner–Schlossman + PXG</li>
          <li>NTG (sectoral pallor → rule out compressive causes) + bacterial keratitis</li></ul>
          <p>Usual anterior cases: CLMK, CLPU, HSV epithelial/stromal, HZO, hyphaema, infiltrative keratitis, AAU. Rarely the obscure ones (SLK, Thygeson’s, unusual viral).</p>`, 330)}
        ${card('Answer framework to practise', `<ol>
          <li>What I see → most likely diagnosis.</li>
          <li>Top 3 differentials + the one sign or test that separates each.</li>
          <li>Work-up I'd do (and why).</li>
          <li>Management: generic drug, strength, frequency, duration, after checking contraindications.</li>
          <li>Review: when, and what I expect to see.</li>
          <li>Refer: who, how urgently, what they'll do.</li>
          <li>Educate: compliance, warning signs, prognosis.</li></ol>`, 250)}
      </div></div>`;
  }

  // ------------------------------------------------------------------ routing and chrome
  const ROUTES = { sim: null, review: renderReview, bank: renderBank, audit: renderAudit, guide: renderGuide };
  const route = () => { const r = location.hash.slice(1); return r in ROUTES ? r : 'sim'; };
  function render(opts = {}) {
    const r = route();
    document.querySelectorAll('.nav a').forEach((a) => a.setAttribute('aria-current', a.getAttribute('href') === `#${r}` ? 'page' : 'false'));
    const n = missedKeys().length;
    missBadge.hidden = !n; missBadge.textContent = n;
    const y = window.scrollY;
    if (r === 'sim') renderSim(); else ROUTES[r]();
    scorePill.hidden = !active();
    if (active()) scorePill.textContent = `Score ${sim.s.score} / ${sim.s.max}`;
    window.scrollTo({ top: opts.keepScroll ? y : 0 });
  }
  window.addEventListener('hashchange', () => render());

  document.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-act]');
    if (!b) return;
    const act = b.dataset.act, v = b.dataset.v, s = sim.s;
    const again = () => render({ keepScroll: true });
    switch (act) {
      case 'toggle-cat': sim.cats.has(v) ? sim.cats.delete(v) : sim.cats.add(v); again(); break;
      case 'all-cats': CATS.forEach((c) => sim.cats.add(c.id)); again(); break;
      case 'no-cats': sim.cats.clear(); again(); break;
      case 'source': sim.source = v; again(); break;
      case 'pool': sim.pool = v; again(); break;
      case 'count': sim.count = Math.max(1, Math.min(poolCases().length, sim.count + Number(v))); updateCount(); break;
      case 'count-max': sim.count = poolCases().length; updateCount(); break;
      case 'start': startPractice(); break;
      case 'mock': startMock(); break;
      case 'case': startCase(v); break;
      case 'drill-all': startDrill(missedKeys()); break;
      case 'drill-shown': startDrill(shownReviewKeys()); break;
      case 'drill-one': startDrill([v]); break;
      case 'learned': delete saved.missed[v]; persist(); again(); break;
      case 'review-cat': review.cat = v; again(); break;
      case 'reset':
        if (confirm('Clear your saved case results and your list of missed questions?')) { saved = { cases: {}, missed: {}, seen: {} }; persist(); try { localStorage.removeItem(LEGACY_KEY); } catch (e) { /* ignore */ } again(); }
        break;
      case 'resume': s.parked = false; render(); break;
      case 'park': s.parked = true; render(); break;
      case 'discard': stopTimer(); sim.s = null; again(); break;
      case 'finish': finish(); break;
      case 'restart': sim.s = null; render(); break;
      case 'begin': s.i++; prepItem(); render(); break;
      case 'continue': next(); break;
      case 'skip': skip(); break;
      case 'pick': {
        const st = curStep(), n = Number(v);
        if (st.type === 'mcq') s.picked = new Set([n]);
        else s.picked.has(n) ? s.picked.delete(n) : s.picked.add(n);
        document.querySelectorAll('.opt[data-act="pick"]').forEach((el) => el.setAttribute('aria-pressed', String(s.picked.has(Number(el.dataset.v)))));
        const sb = document.getElementById('submit-btn'); if (sb) sb.disabled = !s.picked.size;
        break;
      }
      case 'submit': submit(); break;
      case 'next': next(); break;
      case 'theme': {
        const root = document.documentElement;
        const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
        root.dataset.theme = dark ? 'light' : 'dark';
        try { localStorage.setItem(STORE_KEY + ':theme', root.dataset.theme); } catch (e) { /* ignore */ }
        break;
      }
      default: break;
    }
  });
  // Updates the counter in place, so the page never re-draws or jumps while you adjust it.
  function updateCount() {
    const o = document.getElementById('count-out'), r = document.getElementById('count-range'), b = document.getElementById('start-btn');
    if (o) o.textContent = sim.count;
    if (r) r.value = sim.count;
    if (b) b.textContent = startLabel();
  }
  // Remember what's typed or chosen so a tab switch doesn't wipe it.
  function remember(el) {
    if (sim.s && sim.s.view === 'question' && el.id && /^(m-\d+|viva-notes)$/.test(el.id)) sim.s.draft[el.id] = el.value;
  }
  document.addEventListener('input', (ev) => {
    remember(ev.target);
    if (ev.target.id === 'count-range') { sim.count = Number(ev.target.value); updateCount(); }
  });
  document.addEventListener('change', (ev) => {
    remember(ev.target);
    const t = ev.target.dataset && ev.target.dataset.tick;
    if (t !== undefined && sim.s && sim.s.last && sim.s.last.viva) {
      sim.s.last.ticked[Number(t)] = ev.target.checked;
      const st = curStep(), n = sim.s.last.ticked.filter(Boolean).length;
      const out = document.getElementById('viva-score');
      if (out) out.textContent = `${Math.round((PTS * n) / st.points.length)} / 10`;
    }
  });
  // Warn before closing the tab mid-session (the session itself isn't saved across reloads).
  window.addEventListener('beforeunload', (ev) => { if (active() && sim.s.results.length) { ev.preventDefault(); ev.returnValue = ''; } });

  try { const t = localStorage.getItem(STORE_KEY + ':theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) { /* ignore */ }
  render();
})();
