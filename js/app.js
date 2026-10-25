/* Thera Orals Simulator: app logic. No build step, no framework.
 * Case data lives in js/data/*.js (one file per topic); each file pushes cases onto window.CASES.
 * Step types: 'reveal' (examiner gives info), 'mcq' (single best answer), 'multi' (select all that apply),
 * 'match' (dropdown matching) and 'viva' (say your answer out loud, then tick the key points you covered).
 * Optional step fields: critical (safety-critical), recall (what past candidates said vs what's correct),
 * exhibit (on reveal steps), fixedOrder (mcq/multi options keep their order), marker (the case-report marker's comment).
 * Photos and printouts for a case live in js/data/images.js (window.CASE_IMAGES, keyed by case id). */
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
  const IMAGES = window.CASE_IMAGES || {};
  // Where each case came from (matches the `years` field on every case), newest first;
  // sources with no date follow, and your own case report comes last.
  const SOURCES = [
    { id: '2025', label: '2025 orals', short: '2025' },
    { id: 'Mock 2025', label: '2025 YO mock orals', short: '2025 YO mock' },
    { id: 'Case studies 2022', label: '2022 case studies', short: '2022 case studies' },
    { id: 'YO mock', label: 'YO mock orals (2022 notes)', short: 'YO mock 2022' },
    { id: '2019', label: '2019 orals', short: '2019' },
    { id: '2018', label: '2018 orals', short: '2018' },
    { id: 'Case studies 2016', label: '2016 case studies', short: '2016 case studies' },
    { id: 'Anterior notes', label: 'Anterior notes', short: 'Ant. notes' },
    { id: 'Posterior notes', label: 'Posterior notes', short: 'Post. notes' },
    { id: 'Peer recalls', label: 'Peer recalls (other candidates)', short: 'Peer recalls' },
    { id: 'Exam recall', label: 'Undated exam recall', short: 'Undated recall' },
    { id: 'Mini oral prep', label: 'Mini oral prep', short: 'Mini oral' },
    { id: 'Practice orals', label: 'Practice orals deck', short: 'Practice deck' },
    { id: 'My case report', label: 'My case report (RCE / EBMD)', short: 'My report' },
  ];
  const sourceLabel = (id) => (SOURCES.find((s) => s.id === id) || { label: id }).label;

  const view = document.getElementById('view');
  const scorePill = document.getElementById('score-pill');
  const timerPill = document.getElementById('timer-pill');
  const missBadge = document.getElementById('miss-badge');
  const masterBadge = document.getElementById('master-badge');

  // ------------------------------------------------------------------ storage (per-viewer convenience only)
  // A damaged or hand-edited save falls back to empty lists rather than breaking the page.
  const isMap = (v) => !!v && typeof v === 'object' && !Array.isArray(v);
  function cleanSaved(o) {
    const s = { cases: {}, missed: {}, seen: {}, mastered: {} };
    if (isMap(o)) Object.keys(o).forEach((k) => { if (!(k in s) || isMap(o[k])) s[k] = o[k]; });
    return s;
  }
  let saved = cleanSaved();
  try { saved = cleanSaved(JSON.parse(localStorage.getItem(STORE_KEY))); } catch (e) { /* storage unavailable */ }
  try {
    const old = JSON.parse(localStorage.getItem(LEGACY_KEY));
    if (old && !Object.keys(saved.cases).length) saved.cases = old;
  } catch (e) { /* ignore */ }
  // Answers saved before the Mastered tab existed: a question you've seen that isn't on My mistakes was right last time.
  Object.keys(saved.seen).forEach((k) => { if (!saved.missed[k] && !saved.mastered[k]) saved.mastered[k] = { score: STEP_PASS, streak: 1 }; });
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
  const masteredKeys = () => Object.keys(saved.mastered).filter((k) => {
    const [id, i] = k.split('#');
    const c = CASES.find((x) => x.id === id);
    return c && c.steps[Number(i)] && c.steps[Number(i)].type !== 'reveal';
  });
  // Store the latest attempt at a question: a pass moves it to Mastered (a miss before it makes it a comeback),
  // a fail moves it to My mistakes. (Ocumon fights call this too, but nothing here touches Ocumon.)
  function track(k, points, said) {
    saved.seen[k] = 1;
    const prev = saved.mastered[k], wasMissed = !!saved.missed[k];
    if (points < STEP_PASS) { saved.missed[k] = { score: points, said, date: today() }; delete saved.mastered[k]; }
    else {
      saved.mastered[k] = { score: points, date: today(), streak: prev ? (prev.streak || 1) + 1 : 1, comeback: !!(wasMissed || (prev && prev.comeback)) };
      delete saved.missed[k];
    }
  }
  const outcomeOf = (pts) => (pts >= STEP_PASS ? 'good' : pts >= 4 ? 'part' : 'bad');

  // The correct answer to a step, written out in full (review page, end screen, case record).
  function answerHTML(st) {
    if (st.type === 'mcq') return `<p>${st.options[st.answer]}</p>`;
    if (st.type === 'multi') return `<ul>${st.answers.map((a) => `<li>${st.options[a]}</li>`).join('')}</ul>`;
    if (st.type === 'match') return `<ul>${st.pairs.map((p) => `<li><b>${p.label}</b> → ${p.answer}</li>`).join('')}</ul>`;
    if (st.type === 'viva') return `<ul>${st.points.map((p) => `<li>${p}</li>`).join('')}</ul>`;
    return st.text || '';
  }

  // Photos for a case up to step `upto` (-1 = only those shown from the start). The source is held back
  // until the case has an answer in this session, because a document or slide title can name the diagnosis.
  const imagesFor = (c, upto) => (IMAGES[c.id] || []).filter((im) => (im.step === undefined ? -1 : im.step) <= upto);
  const creditShown = (c) => !!sim.s && sim.s.results.some((r) => r.c === c);
  function photosHTML(c, upto) {
    const ims = imagesFor(c, upto);
    if (!ims.length) return '';
    const credit = creditShown(c);
    return `<div class="photos">${ims.map((im) => `<figure class="photo">
      <button type="button" data-act="zoom" data-v="${esc(im.src)}" aria-label="Enlarge: ${esc(im.caption)}"><img src="${esc(im.src)}" width="${im.w}" height="${im.h}" alt="${esc(im.caption)}" loading="lazy"></button>
      <figcaption>${esc(im.caption)}<span class="credit">${credit ? `Source: ${esc(im.credit)}` : 'Source shown after your first answer in this case'}</span></figcaption>
    </figure>`).join('')}</div>`;
  }
  // The written exhibit gives the findings away, so with a photo it starts folded.
  const exhibitBlock = (c, upto) => {
    if (!c.exhibit) return '';
    if (!imagesFor(c, upto).length) return exhibitHTML(c.exhibit);
    return `<details class="exhibit"><summary class="label">📷 Written description (try reading the image first)</summary><p>${c.exhibit}</p></details>`;
  };

  // ------------------------------------------------------------------ simulator state
  const sim = {
    cats: new Set(CATS.map((c) => c.id)),
    sources: new Set(), pool: 'all', count: 5, // no sources picked = all sources
    s: null, // the current session (practice, mock or drill); it survives tab switches
  };
  let timerHandle = null;

  const sourceMatch = (c) => !sim.sources.size || (c.years || []).some((y) => sim.sources.has(y));
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
    // Panels ask about your own case report, so its cases come first.
    const warmups = CASES.filter((c) => c.warmup);
    const own = warmups.filter((c) => (c.years || []).includes('My case report'));
    const warmup = shuffled(own.length ? own : warmups)[0];
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
    track(k, points, said);
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
            <p class="muted" style="margin:.4rem 0 0">Runs like the real thing: a ${MOCK_MINUTES}-minute clock and two examiners. A case-report warm-up, then one anterior-eye case and one glaucoma/posterior case, plus a bonus case if you move quickly. Uses the topics and sources picked here.</p>
          </div>
          <button class="btn mock big" data-act="mock" ${mockReady ? '' : 'disabled'}>⏱ Start ${MOCK_MINUTES}-minute mock oral</button>
          ${mockReady ? '' : '<p class="warn-text">Select at least one anterior-eye topic and one glaucoma or neuro topic.</p>'}
        </div>
        <div class="card">
          <div class="row" style="justify-content:space-between">
            <div><p class="label">My mistakes</p><p style="margin:0">${nMissed ? `<b>${nMissed}</b> question${nMissed === 1 ? '' : 's'} to revisit` : 'No missed questions yet.'}</p></div>
            ${nMissed ? '<div class="row" style="gap:.5rem"><button class="btn small" data-act="drill-all">Drill them</button><a class="btn small ghost" href="#review">Review →</a></div>' : ''}
          </div>
          <div class="row" style="gap:.5rem;margin-top:.6rem">${saveButtons()}${Object.keys(saved.cases).length || nMissed ? '<button class="btn ghost small" data-act="reset">Reset my progress</button>' : ''}</div>
        </div>
      </section>
    </div>`;
  }
  const startLabel = () => `Start practice · ${sim.count} case${sim.count === 1 ? '' : 's'}`;
  // Tap sources to combine them; "All sources" clears the selection.
  function sourceChips() {
    const chip = (id, label, n, on) => `<button class="chip" data-act="source" data-v="${esc(id)}" aria-pressed="${on}">${esc(label)} <small>${n}</small></button>`;
    return chip('all', 'All sources', CASES.length, !sim.sources.size)
      + SOURCES.map((s) => chip(s.id, s.label, CASES.filter((c) => (c.years || []).includes(s.id)).length, sim.sources.has(s.id))).join('');
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
      ${photosHTML(c, -1)}
      ${exhibitBlock(c, -1)}
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
  function recordPanel(c, upto, scoreFor = (j) => { const r = sim.s.results.filter((x) => x.c === c && x.s === j).pop(); return r ? r.points : undefined; }) {
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
      <div><p class="label">Case</p><h3>${c.title}</h3><div class="pills" style="margin-top:.35rem">${catPill(c.category)}${sourcePills(c)}</div></div>
      <div><p class="label">Patient</p><p style="margin:0">${c.patient}</p></div>
      <div><p class="label">Presenting</p><p style="margin:0">${c.stem}</p></div>
      ${photosHTML(c, upto)}
      ${c.exhibit ? (imagesFor(c, upto).length ? exhibitBlock(c, upto) : `<div><p class="label">Exhibit</p><p style="margin:0">${c.exhibit}</p></div>`) : ''}
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
        ${st.marker ? `<div class="marker"><p class="label">📝 Marker's comment on your case report</p><div class="prose">${st.marker}</div></div>` : ''}
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
        ${st.marker ? `<div class="marker"><p class="label">📝 Marker's comment</p><div class="prose">${st.marker}</div></div>` : ''}
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

  // ------------------------------------------------------------------ mastered
  // One question you got right last time: the model answer stays a tap away for a refresher.
  function masterItem(c, i) {
    const st = c.steps[i], k = stepKey(c, i), m = saved.mastered[k];
    return `<details class="qitem mastered">
      <summary><div><div class="qtext">${st.question}</div><div class="pills" style="margin-top:.35rem"><span class="pill">${st.phase}</span><span class="pill good">${m.score}/10</span>${m.streak > 1 ? `<span class="pill good">✓ ${m.streak} in a row</span>` : ''}${m.comeback ? '<span class="pill tint" style="--h:270">Comeback</span>' : ''}${st.critical ? '<span class="pill">Safety-critical</span>' : ''}${m.date ? `<span class="muted" style="font-size:.8rem">${esc(m.date)}</span>` : ''}</div></div><span class="muted" aria-hidden="true">▾</span></summary>
      <div class="body">
        <div class="model"><p class="label">${st.type === 'viva' ? 'Key points the panel listens for' : 'Correct answer'}</p><div class="prose">${answerHTML(st)}</div></div>
        <div class="model"><p class="label">🧑‍⚕️ Examiner notes</p><div class="prose">${st.explain}</div></div>
        <div class="row"><button class="btn small" data-act="drill-one" data-v="${esc(k)}">Test me again</button></div>
      </div>
    </details>`;
  }
  const mastery = { cat: 'all' };
  function renderMastered() {
    const keys = masteredKeys();
    const caseOf = (k) => CASES.find((x) => x.id === k.split('#')[0]);
    const counts = {};
    keys.forEach((k) => { const c = caseOf(k); counts[c.category] = (counts[c.category] || 0) + 1; });
    const byCase = new Map();
    keys.forEach((k) => {
      const c = caseOf(k);
      if (mastery.cat !== 'all' && c.category !== mastery.cat) return;
      if (!byCase.has(c)) byCase.set(c, []);
      byCase.get(c).push(Number(k.split('#')[1]));
    });
    const shown = [...byCase.values()].reduce((a, v) => a + v.length, 0);
    const comebacks = keys.filter((k) => saved.mastered[k].comeback).length;
    // Progress per topic: questions mastered out of every scored question in that topic.
    const bars = CATS.map((ct) => {
      const total = CASES.filter((c) => c.category === ct.id).reduce((a, c) => a + scored(c).length, 0);
      if (!total) return '';
      const n = counts[ct.id] || 0, pct = Math.round((100 * n) / total);
      return `<div class="mastery-row"><span>${ct.icon} ${esc(ct.title)}</span><div class="mastery-bar" style="--h:${ct.hue}" role="img" aria-label="${n} of ${total} mastered"><i style="width:${pct}%"></i></div><span class="mono muted">${n}/${total}</span></div>`;
    }).join('');
    const groups = [...byCase.entries()].sort((a, b) => CASES.indexOf(a[0]) - CASES.indexOf(b[0])).map(([c, idx]) => {
      const full = idx.length === scored(c).length;
      return `<section class="case-group">
      <header><div><div class="pills">${catPill(c.category)}${sourcePills(c)}${full ? '<span class="pill good">Whole case mastered</span>' : ''}</div><h3 style="margin-top:.35rem">${c.title}</h3></div>
        <button class="btn small" data-act="case" data-v="${c.id}">Run whole case →</button></header>
      ${idx.sort((a, b) => a - b).map((i) => masterItem(c, i)).join('')}
    </section>`;
    }).join('');
    view.innerHTML = `<div class="fade">
      <section class="hero"><div><p class="label">Mastered</p><h1>What you've got right</h1>
        <p>Every question you scored ${STEP_PASS}/10 or better on last time you answered it, with the model answer for a quick refresher. <b>Comeback</b> marks one you'd missed before. Miss it again and it moves back to My mistakes.</p>
        ${keys.length ? `<p style="margin-top:.6rem"><b>${keys.length}</b> question${keys.length === 1 ? '' : 's'} mastered${comebacks ? `, <b>${comebacks}</b> of them comebacks` : ''}.</p>
        <div class="row" style="margin-top:.9rem"><button class="btn primary" data-act="drill-mastered">Keep them fresh: quiz ${shown === keys.length ? 'all' : 'these'} ${shown}</button></div>` : ''}
      </div></section>
      ${keys.length ? `<section class="card stack" style="gap:.5rem;margin-bottom:1.2rem"><p class="label">Progress by topic</p>${bars}</section>
      <div class="row" style="gap:.4rem;margin-bottom:1.2rem">
        <button class="chip" data-act="mastered-cat" data-v="all" aria-pressed="${mastery.cat === 'all'}">All topics <small>${keys.length}</small></button>
        ${CATS.filter((c) => counts[c.id]).map((c) => `<button class="chip" data-act="mastered-cat" data-v="${c.id}" aria-pressed="${mastery.cat === c.id}">${c.icon} ${esc(c.title)} <small>${counts[c.id]}</small></button>`).join('')}
      </div>` : ''}
      ${groups || `<div class="card empty"><h2 style="font-size:1.2rem">Nothing mastered${mastery.cat === 'all' ? ' yet' : ' in this topic'}</h2><p class="muted">Questions you score ${STEP_PASS}/10 or better on in practice, mock orals, drills or the lightning round land here automatically.</p><a class="btn primary" href="#sim">Go to the simulator</a></div>`}
    </div>`;
  }
  function shownMasteredKeys() {
    return masteredKeys().filter((k) => mastery.cat === 'all' || CASES.find((x) => x.id === k.split('#')[0]).category === mastery.cat);
  }

  // ------------------------------------------------------------------ recall bank
  function renderBank() {
    // Only the picked sources get a column, so narrowing the sources also narrows the table.
    const years = SOURCES.map((s) => s.id).filter((y) => (!sim.sources.size || sim.sources.has(y)) && CASES.some((c) => (c.years || []).includes(y)));
    const sections = CATS.map((ct) => {
      const cs = CASES.filter((c) => c.category === ct.id && sourceMatch(c));
      if (!cs.length) return '';
      const rows = cs.map((c) => {
        const p = saved.cases[c.id];
        const nm = c.steps.filter((_, i) => saved.missed[stepKey(c, i)]).length;
        return `<tr><td><button class="case-link" data-act="case" data-v="${c.id}" title="Practise this case"><b>${c.title}</b></button><br><small class="muted">${esc(c.theme)}</small></td>
          ${years.map((y) => `<td class="c">${(c.years || []).includes(y) ? '<span class="dotyes">●</span>' : '<span class="dotno">·</span>'}</td>`).join('')}
          <td class="c">${nm ? `<a href="#review" class="no">${nm}</a>` : '<span class="dotno">—</span>'}</td>
          <td class="c mono ${p ? (p.last >= PASS_PCT ? 'ok' : 'no') : ''}">${p ? p.last + '%' : '<span class="dotno">—</span>'}</td></tr>`;
      }).join('');
      return `<section class="card hue-top" style="--h:${ct.hue};margin-bottom:1rem">
        <div class="row" style="gap:.5rem;margin-bottom:.6rem"><span style="font-size:1.2rem">${ct.icon}</span><h2 style="font-size:1.1rem">${esc(ct.title)}</h2><span class="muted" style="font-size:.85rem">${cs.length} case${cs.length === 1 ? '' : 's'}</span></div>
        <div class="tablewrap"><table class="t bank-table"><tr><th>Case</th>${years.map((y) => `<th class="c" title="${esc(sourceLabel(y))}">${esc(SOURCES.find((s) => s.id === y).short)}</th>`).join('')}<th class="c">Missed</th><th class="c">Last</th></tr>${rows}</table></div>
      </section>`;
    }).join('');
    view.innerHTML = `<div class="fade">
      <section class="hero"><div><p class="label">Recall bank</p><h1>Every case, by topic and source</h1>
      <p>● = that case was recalled from that exam or set of notes. Tap a case title to practise it. Pick several sources to compare just those columns.</p></div></section>
      <div class="row" style="gap:.4rem;margin-bottom:1.2rem">${sourceChips()}</div>
      ${sections || '<p class="muted">No cases match these sources.</p>'}
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

  // ------------------------------------------------------------------ play: two quick games built from the case bank
  // Lightning round: the single-best-answer questions against the clock, with lives and a streak multiplier.
  // Pair rush: the matching questions as tap-to-pair boards against a shared clock.
  // Lightning answers count towards My mistakes like any other answer; the pair boards don't.
  const BOLT_SECS = 30, BOLT_LIVES = 3, RUSH_SECS = 90, RUSH_PAIRS = 5;
  const arc = { cats: new Set(CATS.map((c) => c.id)), g: null, handle: null };
  const bests = () => (saved.arcade = saved.arcade || {});
  const arcMcqs = () => CASES.filter((c) => arc.cats.has(c.category)).flatMap((c) => c.steps.map((st, s) => ({ c, s, st }))).filter((x) => x.st.type === 'mcq');
  const arcBoards = () => CASES.filter((c) => arc.cats.has(c.category)).flatMap((c) => c.steps.map((st, s) => ({ c, s, st }))).filter((x) => x.st.type === 'match' && x.st.pairs.length >= 3);
  const boltMult = (streak) => (streak >= 10 ? 4 : streak >= 6 ? 3 : streak >= 3 ? 2 : 1);

  function arcStop() { if (arc.handle) clearInterval(arc.handle); arc.handle = null; }
  function arcClock(onTick) { arcStop(); arc.handle = setInterval(onTick, 200); }

  function startBolt() {
    const queue = shuffled(arcMcqs());
    if (!queue.length) return;
    arc.g = { game: 'bolt', queue, i: 0, lives: BOLT_LIVES, score: 0, streak: 0, bestStreak: 0, right: 0, missed: [], last: null, over: false };
    boltQuestion();
  }
  function boltQuestion() {
    const g = arc.g, q = g.queue[g.i];
    g.perm = q.st.fixedOrder ? range(q.st.options.length) : shuffled(range(q.st.options.length));
    g.last = null;
    g.endsAt = Date.now() + BOLT_SECS * 1000;
    renderPlay();
    arcClock(() => {
      const left = Math.max(0, g.endsAt - Date.now());
      const bar = document.getElementById('arc-bar'), sec = document.getElementById('arc-sec');
      if (bar) { bar.style.width = `${(100 * left) / (BOLT_SECS * 1000)}%`; bar.classList.toggle('low', left < 8000); }
      if (sec) sec.textContent = Math.ceil(left / 1000);
      if (!left) boltAnswer(null);
    });
  }
  function boltAnswer(pick) {
    const g = arc.g;
    if (!g || g.game !== 'bolt' || g.last) return;
    arcStop();
    const q = g.queue[g.i], ok = pick === q.st.answer, k = stepKey(q.c, q.s);
    const secsLeft = Math.ceil(Math.max(0, g.endsAt - Date.now()) / 1000);
    let gain = 0;
    track(k, ok ? PTS : 0, pick === null ? 'Ran out of time (lightning round)' : strip(q.st.options[pick]));
    if (ok) {
      g.streak++; g.right++;
      g.bestStreak = Math.max(g.bestStreak, g.streak);
      gain = (100 + 5 * secsLeft) * boltMult(g.streak);
      g.score += gain;
    } else {
      g.streak = 0; g.lives--;
      g.missed.push({ q, pick });
    }
    persist();
    g.last = { pick, ok, gain };
    if (g.lives <= 0 || g.i + 1 >= g.queue.length) arcOver();
    renderPlay();
  }
  function boltNext() {
    const g = arc.g;
    if (g.over) { g.showEnd = true; renderPlay(); return; }
    g.i++;
    boltQuestion();
  }

  function startRush() {
    const boards = shuffled(arcBoards());
    if (!boards.length) return;
    arc.g = { game: 'rush', boards, b: -1, score: 0, combo: 0, pairs: 0, cleared: 0, missed: [], over: false, endsAt: Date.now() + RUSH_SECS * 1000, flash: '' };
    rushBoard();
    arcClock(() => {
      const g = arc.g;
      if (!g || g.over) return;
      const left = Math.max(0, g.endsAt - Date.now());
      const bar = document.getElementById('arc-bar'), sec = document.getElementById('arc-sec');
      if (bar) { bar.style.width = `${Math.min(100, (100 * left) / (RUSH_SECS * 1000))}%`; bar.classList.toggle('low', left < 15000); }
      if (sec) sec.textContent = Math.ceil(left / 1000);
      if (!left) { arcOver(); renderPlay(); }
    });
  }
  function rushBoard() {
    const g = arc.g;
    g.b++;
    if (g.b >= g.boards.length) { arcOver(); renderPlay(); return; }
    const { st } = g.boards[g.b];
    const pairs = shuffled(st.pairs).slice(0, RUSH_PAIRS);
    g.left = shuffled(pairs.map((p, i) => i));
    g.rightOrder = shuffled(pairs.map((p, i) => i));
    g.pairsNow = pairs; g.done = new Set(); g.doneR = new Set(); g.selL = null; g.selR = null; g.wrong = null;
    renderPlay();
  }
  function rushPick(side, i) {
    const g = arc.g;
    if (!g || g.game !== 'rush' || g.over || (side === 'L' ? g.done : g.doneR).has(i)) return;
    if (side === 'L') g.selL = g.selL === i ? null : i; else g.selR = g.selR === i ? null : i;
    g.wrong = null; g.flash = '';
    if (g.selL !== null && g.selR !== null) {
      const L = g.pairsNow[g.selL], R = g.pairsNow[g.selR];
      // Two items can share an answer, so compare the text rather than the index.
      if (L.answer === R.answer) {
        g.done.add(g.selL);
        g.doneR.add(g.selR);
        g.combo = Math.min(5, g.combo + 1);
        const gain = 100 * g.combo;
        g.score += gain; g.pairs++;
        g.flash = `+${gain}`;
      } else {
        g.combo = 0;
        g.endsAt -= 5000;
        g.wrong = [g.selL, g.selR];
        g.missed.push({ label: L.label, answer: L.answer, chose: R.answer, q: g.boards[g.b] });
        g.flash = '−5 s';
      }
      g.selL = null; g.selR = null;
      if (g.done.size === g.pairsNow.length) {
        g.cleared++; g.endsAt += 8000;
        g.flash = `Board clear! +8 s`;
        renderPlay();
        setTimeout(() => { if (arc.g === g && !g.over) rushBoard(); }, 700);
        return;
      }
    }
    renderPlay();
  }

  function arcOver() {
    const g = arc.g;
    arcStop();
    g.over = true;
    const b = bests(), prev = b[g.game] || 0;
    g.record = g.score > prev;
    if (g.record) { b[g.game] = g.score; persist(); }
    g.prevBest = prev;
  }
  function arcQuit() { arcStop(); arc.g = null; }

  function renderPlay() {
    const g = arc.g;
    if (!g) return playSetup();
    if (g.over && (g.game === 'rush' || g.showEnd)) return playEnd();
    return g.game === 'bolt' ? playBolt() : playRush();
  }
  function playSetup() {
    const b = bests(), nQ = arcMcqs().length, nB = arcBoards().length;
    const chips = CATS.map((c) => `<button class="chip" data-act="arc-cat" data-v="${c.id}" aria-pressed="${arc.cats.has(c.id)}">${c.icon} ${esc(c.title)}</button>`).join('');
    view.innerHTML = `<div class="fade">
      <section class="hero"><div><p class="label">Play</p><h1>Learn it the fun way</h1>
      <p>Two quick games built from the same questions as the simulator. Beat your best score, keep your streak alive, and anything you miss in the lightning round goes on your My mistakes list to revisit.</p></div></section>
      <div class="row" style="gap:.4rem;margin-bottom:1.2rem"><span class="label" style="margin:0 .3rem 0 0">Topics</span>${chips}
        <button class="chip" data-act="arc-all">All</button></div>
      <div class="arc-games">
        <section class="card arc-game hue-top" style="--h:45">
          <div class="arc-ico" aria-hidden="true">⚡</div>
          <h2>Lightning round</h2>
          <p class="muted">Single-best-answer questions, ${BOLT_SECS} seconds each. You have ${BOLT_LIVES} lives. Answer fast for a time bonus, and chain correct answers to build a multiplier up to ×4.</p>
          <ul class="arc-rules"><li>❤️ ${BOLT_LIVES} lives: a wrong answer or a timeout costs one</li><li>🔥 Streak 3 → ×2, 6 → ×3, 10 → ×4</li><li>⌨️ Keys 1–4 to answer, Enter for next</li></ul>
          <div class="arc-best"><span class="label" style="margin:0">Your best</span><b class="mono">${(b.bolt || 0).toLocaleString()}</b></div>
          <button class="btn primary big" data-act="arc-bolt" ${nQ ? '' : 'disabled'}>Play · ${nQ} questions</button>
        </section>
        <section class="card arc-game hue-top" style="--h:170">
          <div class="arc-ico" aria-hidden="true">🧩</div>
          <h2>Pair rush</h2>
          <p class="muted">Tap an item, then its match. ${RUSH_SECS} seconds on the clock; clear a board to win back time. A wrong pair costs 5 seconds and breaks your combo.</p>
          <ul class="arc-rules"><li>🎯 Each pair scores 100 × your combo (up to ×5)</li><li>⏱ Clear a board: +8 seconds</li><li>✕ Wrong pair: −5 seconds</li></ul>
          <div class="arc-best"><span class="label" style="margin:0">Your best</span><b class="mono">${(b.rush || 0).toLocaleString()}</b></div>
          <button class="btn primary big" data-act="arc-rush" ${nB ? '' : 'disabled'}>Play · ${nB} boards</button>
        </section>
      </div></div>`;
  }
  function hud(g) {
    const lives = g.game === 'bolt' ? `<span class="arc-lives" aria-label="${g.lives} lives left">${range(BOLT_LIVES).map((i) => `<span class="${i < g.lives ? '' : 'lost'}">❤️</span>`).join('')}</span>` : '';
    const mult = g.game === 'bolt' ? boltMult(g.streak) : g.combo;
    const combo = g.game === 'bolt' ? `🔥 ${g.streak} streak${mult > 1 ? ` · ×${mult}` : ''}` : `🎯 combo ×${Math.max(1, g.combo)}`;
    return `<div class="arc-hud">
      ${lives}
      <span class="arc-score mono">${g.score.toLocaleString()}</span>
      <span class="arc-combo ${mult > 1 ? 'hot' : ''}">${combo}</span>
      <span class="arc-sec mono" id="arc-sec">${Math.ceil(Math.max(0, g.endsAt - Date.now()) / 1000)}</span>
      <button class="btn ghost small" data-act="arc-quit">Quit</button>
    </div>
    <div class="arc-track"><div class="arc-bar" id="arc-bar" style="width:${Math.min(100, (100 * Math.max(0, g.endsAt - Date.now())) / ((g.game === 'bolt' ? BOLT_SECS : RUSH_SECS) * 1000))}%"></div></div>`;
  }
  function playBolt() {
    const g = arc.g, q = g.queue[g.i], L = g.last;
    const opts = g.perm.map((oi, n) => {
      if (!L) return `<button class="opt arc-opt" data-act="arc-pick" data-v="${oi}"><span class="arc-key mono" aria-hidden="true">${n + 1}</span><span>${q.st.options[oi]}</span><span></span></button>`;
      const cls = oi === q.st.answer ? 'right' : oi === L.pick ? 'wrong' : 'dim';
      return `<div class="opt arc-opt ${cls}"><span class="arc-key mono" aria-hidden="true">${n + 1}</span><span>${q.st.options[oi]}</span><span class="tag">${oi === q.st.answer ? '✓' : oi === L.pick ? '✕' : ''}</span></div>`;
    }).join('');
    const verdict = !L ? '' : L.ok
      ? `<div class="arc-verdict good"><b>✓ Correct</b><span class="arc-gain mono">+${L.gain.toLocaleString()}</span></div>`
      : `<div class="arc-verdict bad"><b>${L.pick === null ? '⏱ Time’s up' : '✕ Not quite'}</b><span>−1 ❤️</span></div>`;
    view.innerHTML = `<div class="fade arc-play">${hud(g)}
      <section class="card stack">
        <div class="pills">${catPill(q.c.category)}${sourcePills(q.c)}<span class="pill">Question ${g.i + 1}</span>${q.st.critical ? '<span class="pill bad">Safety-critical</span>' : ''}</div>
        <p class="arc-ctx muted"><b>${esc(q.c.patient || '')}</b> ${q.c.stem || ''}</p>
        <h2 class="arc-q">${q.st.question}</h2>
        <div class="opts">${opts}</div>
        ${L ? `${verdict}<div class="model"><p class="label">🧑‍⚕️ Why</p><div class="prose">${q.st.explain}</div></div>
          <div class="row"><button class="btn primary" data-act="arc-next" id="arc-next">${g.over ? 'See results' : 'Next question'} →</button><button class="btn ghost small" data-act="case" data-v="${q.c.id}">Open the full case</button></div>` : ''}
      </section></div>`;
    if (L) { const nb = document.getElementById('arc-next'); if (nb) nb.focus({ preventScroll: true }); }
  }
  function playRush() {
    const g = arc.g, { c, st } = g.boards[g.b];
    const tile = (side, i, text) => {
      const done = (side === 'L' ? g.done : g.doneR).has(i);
      const sel = side === 'L' ? g.selL === i : g.selR === i;
      const bad = g.wrong && g.wrong[side === 'L' ? 0 : 1] === i;
      return `<button class="arc-tile ${done ? 'done' : ''} ${sel ? 'sel' : ''} ${bad ? 'shake' : ''}" data-act="arc-tile" data-v="${side}${i}" ${done ? 'disabled' : ''} aria-pressed="${sel}">${text}</button>`;
    };
    view.innerHTML = `<div class="${g.done.size || g.wrong ? '' : 'fade'} arc-play">${hud(g)}
      <section class="card stack">
        <div class="pills">${catPill(c.category)}${sourcePills(c)}<span class="pill">Board ${g.b + 1}</span><span class="pill">${g.done.size} / ${g.pairsNow.length} matched</span>${g.flash ? `<span class="arc-flash ${g.flash.startsWith('−') ? 'bad' : 'good'}">${g.flash}</span>` : ''}</div>
        <h2 class="arc-q">${st.question}</h2>
        <div class="arc-board">
          <div class="arc-col">${g.left.map((i) => tile('L', i, g.pairsNow[i].label)).join('')}</div>
          <div class="arc-col">${g.rightOrder.map((i) => tile('R', i, g.pairsNow[i].answer)).join('')}</div>
        </div>
      </section></div>`;
  }
  function playEnd() {
    const g = arc.g;
    const stats = g.game === 'bolt'
      ? [['Score', g.score.toLocaleString()], ['Correct', `${g.right} / ${g.i + 1}`], ['Best streak', g.bestStreak]]
      : [['Score', g.score.toLocaleString()], ['Pairs', g.pairs], ['Boards cleared', g.cleared]];
    const missed = g.game === 'bolt'
      ? g.missed.map(({ q, pick }) => `<article class="card arc-miss"><p class="muted" style="margin:0 0 .3rem">${q.st.question}</p>
          ${pick !== null ? `<p class="no" style="margin:0 0 .2rem">✕ ${q.st.options[pick]}</p>` : '<p class="no" style="margin:0 0 .2rem">⏱ Ran out of time</p>'}
          <p class="ok" style="margin:0 0 .5rem">✓ ${q.st.options[q.st.answer]}</p>
          <button class="btn small" data-act="case" data-v="${q.c.id}">Practise this case →</button></article>`).join('')
      : g.missed.map((m) => `<article class="card arc-miss"><p style="margin:0 0 .2rem"><b>${m.label}</b></p>
          <p class="no" style="margin:0 0 .2rem">✕ ${m.chose}</p><p class="ok" style="margin:0 0 .5rem">✓ ${m.answer}</p>
          <button class="btn small" data-act="case" data-v="${m.q.c.id}">Practise this case →</button></article>`).join('');
    const msg = g.record ? (g.prevBest ? `New personal best! You beat ${g.prevBest.toLocaleString()}.` : 'First score on the board!') : `Your best is ${(bests()[g.game] || 0).toLocaleString()}. Have another go!`;
    view.innerHTML = `<div class="fade">
      <section class="hero arc-end ${g.record ? 'record' : ''}"><div><p class="label">${g.game === 'bolt' ? '⚡ Lightning round' : '🧩 Pair rush'} · game over</p>
        <h1>${g.record ? '🏆 ' : ''}${g.score.toLocaleString()} points</h1><p>${msg}</p></div></section>
      <div class="arc-stats">${stats.map(([k, v]) => `<div class="card"><p class="label">${k}</p><b class="mono">${v}</b></div>`).join('')}</div>
      <div class="row" style="margin:1rem 0 1.4rem"><button class="btn primary" data-act="arc-${g.game}">Play again</button><button class="btn" data-act="arc-quit">Back to games</button>${g.game === 'bolt' && g.missed.length ? '<a class="btn ghost" href="#review">My mistakes →</a>' : ''}</div>
      ${missed ? `<h2 style="font-size:1.15rem;margin-bottom:.7rem">Worth another look</h2><div class="stack" style="gap:.7rem">${missed}</div>` : ''}
    </div>`;
  }
  document.addEventListener('keydown', (ev) => {
    const g = arc.g;
    if (route() !== 'play' || !g || g.game !== 'bolt' || ev.ctrlKey || ev.metaKey || ev.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName)) return;
    if (!g.last && /^[1-9]$/.test(ev.key)) { const oi = g.perm[Number(ev.key) - 1]; if (oi !== undefined) { ev.preventDefault(); boltAnswer(oi); } }
    else if (g.last && ev.key === 'Enter' && ev.target.tagName !== 'BUTTON') { ev.preventDefault(); boltNext(); }
  });

  // ------------------------------------------------------------------ Ocumon: raise partners by catching eye conditions
  // Inspired by Ankimon, with its problems designed out:
  // - Its own thing: only fights on this tab count. A fight is one whole case, start to finish, and the case is the
  //   boss: get MON_NEED of it right to catch the creature. The simulator, drills and games never touch it, though
  //   fight answers still update My mistakes and Mastered.
  // - Rewards accuracy, not volume: a correct answer hits the wild creature, a wrong one hurts your companion.
  //   Fixing a question from My mistakes is a critical hit. Repeating a question you already got right today does
  //   half damage and earns no XP, and XP slows to a quarter after MON_DAILY_XP in a day.
  // - It can be switched off without losing anything.
  // - Can't break the page: the save is checked on load and import (bad values fall back to defaults), the art is
  //   local (pixel sprites in img/sprites, emoji for wild creatures), and nothing is fetched from elsewhere.
  //   Export / import moves all progress to another device.
  // You pick one starter partner; another joins your team every MON_UNLOCK new catches, and each keeps its own level.
  const MON = window.OCUMON || { partners: [], wild: [] };
  const MON_MAX_LV = 40, MON_RANK = [8, 18], MON_UNLOCK = 2, MON_DAILY_XP = 400, MON_LOG = 8;
  const TIER_HP = [0, 40, 70, 110];
  const TIER_LV = [0, 10, 25, 40]; // shown as the wild creature's level: more HP, more XP, and Lv 40 ones turn up half as often
  const MON_NEED = [0, 0.6, 0.7, 0.8]; // share of its case you need right to catch it, by level
  const MON_PAIRS = 4; // most pairs a matching question asks in a fight
  const wildLv = (w) => `Lv${TIER_LV[w.tier]}`;
  const monMaxHp = (lv) => 40 + 4 * lv;
  const xpNeed = (lv) => 40 + 20 * lv;
  const wildById = (id) => MON.wild.find((w) => w.id === id);
  const partnerById = (id) => MON.partners.find((p) => p.id === id);
  const rankOf = (lv) => (lv >= MON_RANK[1] ? 2 : lv >= MON_RANK[0] ? 1 : 0); // ★ at Lv 8, ★★ at Lv 18
  const companion = (m = mon()) => { const p = partnerById(m.active); return p && Object.assign({}, p, { rank: rankOf(m.level) }); };
  const wildRe = {};
  const inPool = (w, c) => c.category === w.cat && (wildRe[w.id] = wildRe[w.id] || new RegExp(w.match, 'i')).test(`${c.title} ${c.theme || ''}`);
  let hunt = null, lastCat = null;

  // Keeps only values that make sense, so an old, damaged or edited save can never stop the page loading.
  function cleanMon(o) {
    o = isMap(o) ? o : {};
    const num = (v, lo, hi, d) => (Number.isFinite(v) ? Math.min(hi, Math.max(lo, Math.round(v))) : d);
    const party = {};
    if (isMap(o.party)) Object.keys(o.party).forEach((id) => {
      const v = o.party[id];
      if (!partnerById(id) || !isMap(v)) return;
      const lv = num(v.level, 1, MON_MAX_LV, 1);
      party[id] = { level: lv, xp: num(v.xp, 0, xpNeed(lv) - 1, 0), hp: num(v.hp, 1, monMaxHp(lv), monMaxHp(lv)) };
    });
    const dex = {};
    if (isMap(o.dex)) Object.keys(o.dex).forEach((id) => { const d = o.dex[id]; if (wildById(id) && isMap(d)) dex[id] = { n: num(d.n, 1, 1e6, 1), first: typeof d.first === 'string' ? d.first.slice(0, 10) : today() }; });
    const w = isMap(o.wild) && wildById(o.wild.id);
    const day = typeof o.day === 'string' ? o.day.slice(0, 10) : today();
    const m = {
      on: o.on !== false,
      party, active: party[o.active] ? o.active : Object.keys(party)[0] || null, // saves from before the party start over
      wild: w ? { id: w.id, hp: num(o.wild.hp, 1, TIER_HP[w.tier], TIER_HP[w.tier]) } : null,
      dex, day, dayXp: num(o.dayXp, 0, 1e6, 0),
      done: isMap(o.done) && day === today() ? o.done : {},
      log: Array.isArray(o.log) ? o.log.filter((x) => isMap(x) && typeof x.msg === 'string').slice(0, MON_LOG) : [],
    };
    // m.level, m.xp and m.hp read and write the active partner's stats. They aren't enumerable, so the save
    // (JSON) only holds the party.
    ['level', 'xp', 'hp'].forEach((key) => Object.defineProperty(m, key, {
      get() { const v = this.party[this.active]; return v ? v[key] : key === 'level' ? 1 : key === 'hp' ? monMaxHp(1) : 0; },
      set(x) { const v = this.party[this.active]; if (v) v[key] = x; },
    }));
    return m;
  }
  saved.mon = cleanMon(saved.mon);
  const mon = () => saved.mon;
  const monLog = (msg, kind = '') => { mon().log.unshift({ msg, kind, date: today() }); mon().log.length = Math.min(mon().log.length, MON_LOG); };

  // A new day: the whole team wakes up healed, and the XP pace and the repeat list start over.
  function monDay() {
    const m = mon();
    if (m.day === today()) return;
    Object.assign(m, { day: today(), dayXp: 0, done: {} });
    Object.values(m.party).forEach((v) => { v.hp = monMaxHp(v.level); });
  }
  // Who joins next: the partners that aren't starters, in list order, then the two starters you didn't pick.
  const joinOrder = () => [...MON.partners.filter((p) => !p.starter), ...MON.partners.filter((p) => p.starter)];
  const caughtCount = (m = mon()) => Object.keys(m.dex).length;
  const joinsAt = (i) => i * MON_UNLOCK; // the i-th partner after your starter joins at this many species caught
  // Adds every partner your catches have earned. They join a couple of levels under your strongest, so they're usable.
  function monUnlock() {
    const m = mon(), want = Math.min(MON.partners.length, 1 + Math.floor(caughtCount(m) / MON_UNLOCK)), joined = [];
    if (!m.active) return joined;
    while (Object.keys(m.party).length < want) {
      const p = joinOrder().find((x) => !m.party[x.id]);
      if (!p) break;
      const lv = Math.max(1, Math.max(...Object.values(m.party).map((v) => v.level)) - 2);
      m.party[p.id] = { level: lv, xp: 0, hp: monMaxHp(lv) };
      joined.push(p);
      monLog(`${p.name} joined your team at Lv ${lv}!`, 'good');
    }
    return joined;
  }
  function monSwitch(id) {
    const m = mon();
    if (!m.party[id] || m.active === id) return false;
    m.active = id; persist();
    return true;
  }
  // Uncaught creatures, topics with open mistakes and the topic you're studying turn up more often; rare ones less.
  function monSpawn(id) {
    const m = mon();
    let w = wildById(id);
    if (!w) {
      const open = new Set(missedKeys().map((k) => (CASES.find((c) => c.id === k.split('#')[0]) || {}).category));
      const weights = MON.wild.map((x) => (m.dex[x.id] ? 1 : 3) * (open.has(x.cat) ? 2 : 1) * (x.cat === lastCat ? 2 : 1) * (x.tier === 3 ? 0.5 : 1));
      let r = Math.random() * weights.reduce((a, b) => a + b, 0);
      w = MON.wild.find((x, i) => (r -= weights[i]) < 0) || MON.wild[0];
    }
    m.wild = w ? { id: w.id, hp: TIER_HP[w.tier] } : null;
  }
  function monChoose(id) {
    const m = mon();
    const p = partnerById(id);
    if (!p || !p.starter || m.active) return;
    Object.assign(m, cleanMon({ on: true, dex: m.dex }), { party: { [id]: { level: 1, xp: 0, hp: monMaxHp(1) } }, active: id });
    monSpawn();
    monLog(`${p.name} joined you. A wild ${wildById(m.wild.id).name} appeared!`);
    monUnlock(); // catches from before the team existed still count
    persist(); render();
  }
  function monChase(id) {
    if (!wildById(id) || !mon().active || !mon().dex[id]) return; // new creatures only turn up in the wild
    monSpawn(id); hunt = null; persist();
    location.hash === '#mon' ? render() : (location.hash = '#mon');
  }
  function monReroll() {
    const prev = mon().wild && mon().wild.id;
    for (let i = 0; i < 5 && mon().wild && mon().wild.id === prev; i++) monSpawn();
    hunt = null; persist(); render();
  }

  // Called for every scored turn of a fight (and nothing else: the simulator, drills and games leave Ocumon alone).
  // The case is the boss: the creature's HP is shared out over the case's questions so that getting MON_NEED of
  // the case right catches it. o: { key, fixed (was on My mistakes), weight (share of a step), units (scored steps) }.
  function monHit(c, points, o) {
    const m = mon();
    monDay();
    const w = wildById(m.wild.id), pal = companion();
    const fx = { w, cat: c.category, dmg: 0, hurt: 0, xp: 0, crit: false, eff: false, repeat: false, tired: false };
    lastCat = c.category;
    if (points >= 4) {
      const pass = points >= STEP_PASS;
      fx.repeat = pass && !!m.done[o.key];
      fx.crit = pass && o.fixed;
      fx.eff = pal.strong.includes(c.category);
      let d = (TIER_HP[w.tier] * o.weight * points) / (PTS * MON_NEED[w.tier] * o.units);
      if (fx.crit) d *= 1.5;
      if (fx.eff) d *= 1.25;
      d *= 1 + 0.1 * rankOf(m.level); // ★ +10%, ★★ +20%
      if (fx.repeat) d *= 0.5;
      fx.dmg = Math.max(1, Math.round(d));
      m.wild.hp -= fx.dmg;
      if (!fx.repeat) fx.xp = Math.max(1, Math.round((pass ? (fx.crit ? 20 : 10) : 4) * o.weight));
      if (pass) m.done[o.key] = 1;
    } else {
      fx.hurt = Math.max(1, Math.round((5 + 4 * w.tier) * o.weight));
      m.hp -= fx.hurt;
    }
    if (m.wild.hp <= 0) {
      fx.caught = w;
      const d = m.dex[w.id];
      m.dex[w.id] = { n: d ? d.n + 1 : 1, first: d ? d.first : today() };
      fx.firstCatch = !d;
      fx.xp += 25 * w.tier;
      m.hp = Math.min(monMaxHp(m.level), Math.max(m.hp, 0) + Math.round(monMaxHp(m.level) / 4));
      monLog(`Caught ${w.name}${d ? ` (×${d.n + 1})` : ' (new!)'}`, 'good');
    } else if (m.hp <= 0) {
      fx.fainted = w;
      m.hp = monMaxHp(m.level);
      monLog(`${pal.name} fainted and ${w.name} got away. No XP lost.`, 'bad');
    } else if (fx.dmg) monLog(`${w.name} −${fx.dmg}${fx.crit ? ' · critical: mistake fixed' : ''}${fx.eff ? ' · super effective' : ''}${fx.repeat ? ' · repeat today' : ''}`);
    else monLog(`${w.name} hit ${pal.name} −${fx.hurt}`, 'bad');
    if (fx.caught || fx.fainted) monSpawn();
    monXp(fx);
    if (fx.caught) fx.joined = monUnlock();
    monChip();
    return fx;
  }
  // XP slows to a quarter once the day's allowance is used, so a long grind is never the best way to level.
  function monXp(fx) {
    const m = mon();
    if (!fx.xp) return;
    const room = Math.max(0, MON_DAILY_XP - m.dayXp), full = Math.min(fx.xp, room);
    fx.tired = fx.xp > room;
    fx.xp = full + Math.ceil((fx.xp - full) / 4);
    m.dayXp += fx.xp; m.xp += fx.xp;
    while (m.level < MON_MAX_LV && m.xp >= xpNeed(m.level)) {
      m.xp -= xpNeed(m.level); m.level++;
      m.hp = monMaxHp(m.level);
      fx.lvUp = m.level;
      if (MON_RANK.includes(m.level)) { fx.ranked = rankOf(m.level); monLog(`${companion().name} ranked up to ${'★'.repeat(fx.ranked)}!`, 'good'); }
    }
    if (m.level >= MON_MAX_LV) m.xp = Math.min(m.xp, xpNeed(m.level) - 1);
    if (fx.lvUp) monLog(`${companion().name} reached Lv ${fx.lvUp}`, 'good');
  }

  // The Ocumon tab's badge: how much HP the wild creature has left (details on hover).
  function monChip() {
    const badge = document.getElementById('mon-badge'), link = document.getElementById('mon-link'), m = mon(), pal = companion();
    if (!badge) return;
    const w = m.on && pal && m.wild && wildById(m.wild.id);
    badge.hidden = !w;
    link.title = w ? `${pal.name}, Lv ${m.level}, ${m.hp}/${monMaxHp(m.level)} HP. Wild ${w.name}: ${m.wild.hp}/${TIER_HP[w.tier]} HP` : '';
    if (w) { badge.textContent = `${Math.ceil((100 * m.wild.hp) / TIER_HP[w.tier])}%`; badge.setAttribute('aria-label', `: wild ${w.name} at ${badge.textContent} HP`); }
  }

  // ---- fights: one case from start to finish, against a wild creature from its topic
  // Every step becomes one or more turns in the battle's pick-one format: single best answer as it is; select-all
  // as "which one is right" (or "which one isn't" when nearly all options are right); matching as one pick per
  // pair (up to MON_PAIRS); viva as think, reveal, then tick what you said; reveals as the examiner's next findings.
  function huntTurns(c) {
    const turns = [];
    c.steps.forEach((st, s) => {
      const k = stepKey(c, s), base = { s, k, st, key: k, weight: 1, last: true };
      if (st.type === 'reveal') turns.push(Object.assign(base, { kind: 'reveal' }));
      else if (st.type === 'mcq') turns.push(Object.assign(base, { kind: 'pick', options: st.options, answer: st.answer, keep: st.fixedOrder }));
      else if (st.type === 'viva') turns.push(Object.assign(base, { kind: 'tick', points: st.points }));
      else if (st.type === 'multi') {
        const yes = shuffled(st.answers), no = shuffled(range(st.options.length).filter((i) => !st.answers.includes(i)));
        if (!no.length) { turns.push(Object.assign(base, { kind: 'tick', points: st.answers.map((i) => st.options[i]) })); return; }
        const odd = no.length < 3 && yes.length >= 3;
        const xs = odd ? [...yes.slice(0, 3), no[0]] : [yes[0], ...no.slice(0, 3)];
        turns.push(Object.assign(base, { kind: 'pick', options: xs.map((i) => st.options[i]), answer: odd ? 3 : 0,
          sub: odd ? 'Three of these are right. Which one isn’t?' : 'Only one of these is right. Which one?' }));
      } else if (st.type === 'match') {
        const pool = [...new Set([...st.pairs.map((p) => p.answer), ...(st.distractors || [])])];
        const pairs = shuffled(range(st.pairs.length)).slice(0, MON_PAIRS).sort((a, b) => a - b).map((i) => st.pairs[i]);
        pairs.forEach((p, j) => turns.push(Object.assign({}, base, { kind: 'pick', key: `${k}/${j}`, weight: 1 / pairs.length, last: j === pairs.length - 1, part: [j + 1, pairs.length],
          sub: p.label, options: [p.answer, ...shuffled(pool.filter((a) => a !== p.answer)).slice(0, 3)], answer: 0 })));
      }
    });
    turns.forEach((t) => { if (t.kind === 'pick') t.perm = t.keep ? range(t.options.length) : shuffled(range(t.options.length)); });
    return turns;
  }
  // The creature brings a case that matches it: one with your mistakes in it first, then one you haven't seen,
  // and a case you've already got fully right today last.
  function huntCase(w) {
    const m = mon(), scored = (c) => c.steps.some((st) => st.type !== 'reveal');
    let xs = CASES.filter((c) => inPool(w, c) && scored(c));
    if (!xs.length) xs = CASES.filter((c) => c.category === w.cat && scored(c));
    if (!xs.length) return null;
    const rank = (c) => {
      const ks = c.steps.map((st, s) => (st.type === 'reveal' ? null : stepKey(c, s))).filter(Boolean);
      return ks.every((k) => m.done[k]) ? 3 : ks.some((k) => saved.missed[k]) ? 0 : ks.some((k) => !saved.seen[k]) ? 1 : 2;
    };
    const top = Math.min(...xs.map(rank));
    return shuffled(xs.filter((c) => rank(c) === top))[0];
  }
  function huntStart() {
    const m = mon();
    if (!m.on || !m.active) return;
    monDay();
    if (!m.wild) monSpawn();
    const w = wildById(m.wild.id), c = huntCase(w);
    if (!c) { monReroll(); return; }
    m.wild.hp = TIER_HP[w.tier]; // a new case: the creature starts at full HP
    hunt = { c, w, turns: huntTurns(c), i: 0, units: c.steps.filter((st) => st.type !== 'reveal').length, got: 0,
      fixed: c.steps.map((_, s) => !!saved.missed[stepKey(c, s)]), scores: {}, pts: 0, said: [], over: null, endS: null, last: null, think: false, finished: false };
    persist(); render();
  }
  // Scores the current turn: damage (or a hit back) while the battle is on, and My mistakes / Mastered once
  // the step's last turn is in. When the case runs out of questions with the creature still standing, it gets away.
  function huntScore(points, said, extra) {
    if (!hunt || hunt.last || hunt.finished) return;
    const t = hunt.turns[hunt.i], w = hunt.w, before = hunt.over ? null : btNow('');
    let fx = null;
    if (!hunt.over) {
      fx = monHit(hunt.c, points, { key: t.key, fixed: hunt.fixed[t.s], weight: t.weight, units: hunt.units });
      if (fx.caught) hunt.over = 'caught'; else if (fx.fainted) hunt.over = 'fainted';
    }
    hunt.got += (points / PTS) * t.weight;
    hunt.pts += points * t.weight; hunt.said.push(said);
    if (t.last) {
      const p = Math.round(hunt.pts);
      track(t.k, p, hunt.said.join(' · '));
      if (p >= STEP_PASS) mon().done[t.k] = 1;
      hunt.scores[t.s] = p; hunt.pts = 0; hunt.said = [];
    }
    if (!hunt.over && hunt.turns.slice(hunt.i + 1).every((x) => x.kind === 'reveal')) {
      fx.fled = w; hunt.over = 'fled';
      monLog(`${w.name} got away: get ${Math.round(100 * MON_NEED[w.tier])}% of its case right to catch it.`, 'bad');
      monSpawn(); monChip();
    }
    if (fx && hunt.over) hunt.endS = btAfter(before, fx);
    hunt.last = Object.assign({ points, ok: points >= STEP_PASS, before, fx }, extra);
    persist(); render({ keepScroll: true });
  }
  function huntPick(oi) {
    const t = hunt && hunt.turns[hunt.i];
    if (!t || t.kind !== 'pick' || hunt.last) return;
    huntScore(oi === t.answer ? PTS : 0, strip(t.options[oi]), { pick: oi });
  }
  function huntTick() {
    const t = hunt && hunt.turns[hunt.i];
    if (!t || t.kind !== 'tick' || hunt.last) return;
    const ticked = t.points.map((_, i) => !!(view.querySelector(`[data-mtick="${i}"]`) || {}).checked), n = ticked.filter(Boolean).length;
    huntScore(Math.round((PTS * n) / t.points.length), `Covered ${n} of ${t.points.length} key points.`, { ticked });
  }
  function huntNext() {
    if (!hunt) return;
    const t = hunt.turns[hunt.i];
    if (hunt.finished) { hunt = null; render(); return; }
    if (t && t.kind !== 'reveal' && !hunt.last) return;
    hunt.i++; hunt.last = null; hunt.think = false;
    if (hunt.i >= hunt.turns.length) hunt.finished = true;
    render(); huntScroll();
  }
  // Brings the next question up under whatever stays on screen (the battle on a phone, the top bar on a wide screen).
  function huntScroll() {
    const ask = view.querySelector('.bt-ask'), bt = view.querySelector('.fight .bt');
    if (!ask || !bt) return;
    const above = getComputedStyle(bt).position === 'sticky' ? bt.offsetHeight : document.querySelector('.topbar').offsetHeight;
    window.scrollTo({ top: Math.max(0, ask.getBoundingClientRect().top + window.scrollY - above - 12) });
  }
  // ---- views: the tab is drawn like a handheld Pokémon battle (layout, HP colours and the intro follow the
  // battle GUI in tendoslab/pokemon), and every answer plays out on it: attack, HP drain, catch, level-up.
  const MOVES = { glaucoma: 'Tonometry', retina: 'Fundus Flash', neuro: 'Field Test', cornea: 'Fluorescein', uveitis: 'Cycloplegia', allergy: 'Lid Scrub', conj: 'Swab Strike', professional: 'Referral' };
  const calm = () => !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const hpTone = (pct) => (pct <= 20 ? 'low' : pct <= 50 ? 'mid' : ''); // same thresholds as the game's HP bar
  const pctOf = (v, max) => Math.max(0, Math.min(100, (100 * v) / max));
  const btHp = (hp, max, label) => `<div class="bt-hp" role="img" aria-label="${esc(label)}: ${Math.max(0, hp)} of ${max} HP"><b aria-hidden="true">HP</b><div class="bt-track"><span class="${hpTone(pctOf(hp, max))}" style="width:${pctOf(hp, max)}%"></span></div></div>`;
  let fxRun = 0, fxFast = false, introSeen = null, swapIn = false;

  // Pixel sprites, cut from the two asset packs by hand into img/sprites (see js/data/ocumon.js). 'char' sheets have
  // 64px frames and one row per animation, facing right; 'animal' sheets have 32px frames: front idle, then the
  // back view (your side of the battle) idle, attack, hurt and faint. Each animation: [row, frames, ms a frame, loops].
  const SPR = {
    char: { cols: 12, rows: 7, anims: { front: [0, 4, 160, 1], idle: [0, 4, 160, 1], hurt: [1, 4, 110], faint: [2, 10, 90], spawn: [3, 12, 55], attack: [4, 8, 70], power: [5, 12, 70], vanish: [6, 11, 55] } },
    animal: { cols: 5, rows: 5, anims: { front: [0, 2, 420, 1], idle: [1, 2, 420, 1], attack: [2, 5, 90], hurt: [3, 3, 130], faint: [4, 4, 160] } },
  };
  const pxAnim = (p, anim) => SPR[p.kind].anims[anim];
  // The url goes straight into background-image: a relative url inside a custom property can resolve against the stylesheet.
  const pxStyle = (p, a) => `background-image:url('img/sprites/${p.sprite}.png');--cols:${SPR[p.kind].cols};--rows:${SPR[p.kind].rows};--row:${a[0]};--n:${a[1]};--ms:${a[2]}`;
  const pxSprite = (p, anim = 'front', cls = '') => { const a = pxAnim(p, anim) || pxAnim(p, 'idle'); return `<i class="px ${a[3] ? 'loop' : 'once'} ${p.kind} ${cls}" style="${pxStyle(p, a)}" aria-hidden="true"></i>`; };
  // Plays one animation on a sprite; returns how long it takes, or 0 if this kind of sprite doesn't have it.
  function pxPlay(el, p, anim) {
    const a = el && pxAnim(p, anim);
    if (!a) return 0;
    el.setAttribute('style', pxStyle(p, a));
    el.classList.toggle('loop', !!a[3]); el.classList.toggle('once', !a[3]);
    el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
    return a[1] * a[2];
  }
  const rankStars = (p) => (p.rank ? ` <em class="bt-rank" title="Rank">${'★'.repeat(p.rank)}</em>` : '');

  // A battle frame. S is what it shows: { w, wHp, pal, lv, hp, xp, msg }, so an answer can be drawn as it was
  // before the hit and then animated to what it is now.
  function btScene(S, menu, cls = '') {
    const wMax = TIER_HP[S.w.tier], pMax = monMaxHp(S.lv), caught = mon().dex[S.w.id];
    return `<section class="bt ${cls}" aria-label="Battle: ${esc(S.pal.name)} against a wild ${esc(S.w.name)}">
      <div class="bt-stage" data-act="bt-skip">
        <div class="bt-sky" aria-hidden="true"></div>
        <div class="bt-pad foe" aria-hidden="true"></div><div class="bt-pad pal" aria-hidden="true"></div>
        <div class="bt-mon foe ${S.wHp / wMax <= 0.25 ? 'slow' : ''}" aria-hidden="true"><div class="bt-fx"><span>${S.w.icon}</span></div></div>
        <div class="bt-mon pal ${S.pal.kind} ${S.hp / pMax <= 0.25 ? 'slow' : ''}" style="--rank:${S.pal.rank}" aria-hidden="true"><div class="bt-fx">${pxSprite(S.pal, 'idle')}</div></div>
        <div class="bt-box foe"><div class="bt-name"><span>${esc(S.w.name)}</span>${caught ? '<i class="bt-ball" title="Caught before"></i>' : ''}<small>${wildLv(S.w)}</small></div>${btHp(S.wHp, wMax, `Wild ${S.w.name}`)}</div>
        <div class="bt-box pal"><div class="bt-name"><span>${esc(S.pal.name)}${rankStars(S.pal)}</span><small class="bt-lv">Lv${S.lv}</small></div>${btHp(S.hp, pMax, S.pal.name)}
          <div class="bt-hpnum">${Math.max(0, S.hp)}/${pMax}</div><div class="bt-xp" aria-hidden="true"><span style="width:${S.lv >= MON_MAX_LV ? 100 : pctOf(S.xp, xpNeed(S.lv))}%"></span></div></div>
      </div>
      <div class="bt-bar"><p class="bt-msg" data-act="bt-skip" aria-live="polite">${esc(S.msg || '')}</p>${menu || ''}</div>
    </section>`;
  }
  const btAfter = (P, fx) => { const m = mon(); return Object.assign({}, P, { wHp: fx.caught ? 0 : fx.fainted || fx.fled ? Math.max(0, P.wHp - fx.dmg) : m.wild.hp, pal: companion(), lv: m.level, hp: m.hp, xp: m.xp, msg: '' }); };
  const btNow = (msg) => { const m = mon(); return { w: wildById(m.wild.id), wHp: m.wild.hp, pal: companion(), lv: m.level, hp: m.hp, xp: m.xp, msg }; };

  // Animation helpers. Each run gets a number; a new render or run makes the old one stop where it is.
  // A click on the scene speeds the rest of the run up, and reduced motion skips straight to the end.
  function btKit() {
    const run = ++fxRun, root = view.querySelector('.bt');
    fxFast = false;
    const live = () => run === fxRun && !!root && root.isConnected;
    const q = (s) => root.querySelector(s);
    const wait = (ms) => new Promise((r) => setTimeout(r, fxFast ? ms / 6 : ms));
    async function say(text, hold = 650) {
      const el = q('.bt-msg');
      if (!live() || !el) return;
      el.textContent = '';
      for (let i = 1; i <= text.length; i++) {
        if (!live()) return;
        if (fxFast) { el.textContent = text; break; }
        el.textContent = text.slice(0, i);
        await wait(18);
      }
      await wait(hold);
    }
    async function act(sel, name, ms) {
      const el = q(sel);
      if (!live() || !el) return;
      el.classList.remove(name); void el.offsetWidth; el.classList.add(name);
      await wait(ms);
      el.classList.remove(name);
    }
    // Drains (or fills) an HP bar, changing colour as it passes half and a fifth, like the game.
    function drain(side, from, to, max) {
      const bar = q(`.bt-box.${side} .bt-track > span`), num = side === 'pal' && q('.bt-hpnum');
      if (!live() || !bar) return Promise.resolve();
      const ms = (fxFast ? 0.2 : 1) * Math.min(1100, Math.max(350, (1400 * Math.abs(from - to)) / max)), t0 = performance.now();
      return new Promise((done) => {
        const step = (t) => {
          if (!live()) return done();
          const k = Math.min(1, (t - t0) / ms), v = from + (to - from) * k, pct = pctOf(v, max);
          bar.style.width = `${pct}%`; bar.className = hpTone(pct);
          if (num) num.textContent = `${Math.max(0, Math.round(v))}/${max}`;
          if (k < 1) requestAnimationFrame(step); else done();
        };
        requestAnimationFrame(step);
      });
    }
    function fill(sel, to) {
      const el = q(sel);
      if (!live() || !el) return Promise.resolve();
      el.style.width = `${to}%`;
      return wait(700);
    }
    function pop(text, kind) {
      const st = q('.bt-stage');
      if (!live() || !st) return;
      const d = document.createElement('span');
      d.className = `bt-pop ${kind}`; d.textContent = text;
      st.appendChild(d);
      setTimeout(() => d.remove(), 1200);
    }
    // Plays a sprite animation on your partner and waits for it; 'idle' again afterwards unless told to keep the last frame.
    async function px(p, anim, keep) {
      const el = q('.bt-mon.pal .px');
      if (!live() || !el) return;
      const ms = pxPlay(el, p, anim);
      if (!ms) return;
      await wait(ms);
      if (!keep && live()) pxPlay(el, p, 'idle');
    }
    return { root, live, q, wait, say, act, drain, fill, pop, px };
  }

  // Wild creature appears: white flash, the platforms slide in, the silhouette fills in, then your companion is sent out.
  async function btIntro() {
    const K = btKit(), m = mon(), w = wildById(m.wild.id), pal = companion();
    if (!K.root) return;
    if (swapIn && !calm()) { swapIn = false; return btSwapIn(K, pal); }
    swapIn = false;
    if (calm() || introSeen === m.wild.id) { K.root.classList.remove('bt-intro'); K.q('.bt-msg').textContent = `What will ${pal.name} do?`; return; }
    introSeen = m.wild.id;
    void K.root.offsetWidth;
    K.root.classList.add('in1');
    await K.wait(900);
    await K.say(`A wild ${w.name} appeared!`, 500);
    if (!K.live()) return;
    K.root.classList.add('in2');
    K.px(pal, 'spawn');
    await K.say(`Go! ${pal.name}!`, 700);
    if (!K.live()) return;
    K.root.classList.remove('bt-intro', 'in1', 'in2');
    await K.say(`What will ${pal.name} do?`, 0);
  }

  // One answer, played out: P is the state before the answer, fx what monHit() did.
  async function btAnswer(P, fx, ok) {
    const K = btKit(), m = mon(), wMax = TIER_HP[P.w.tier];
    if (!K.root || !fx) return;
    const left = fx.dmg ? `${P.w.name} has ${Math.max(0, P.wHp - fx.dmg)} HP left.` : `${P.pal.name} has ${m.hp} HP left.`;
    const end = fx.caught ? `Gotcha! ${P.w.name} was caught!` : fx.fainted ? `${P.pal.name} fainted! ${P.w.name} got away.` : fx.fled ? `${left} The case is over… ${P.w.name} got away!` : left;
    const side = K.q('.bt-side'), sideHTML = side ? side.outerHTML : '';
    if (calm()) {
      // No motion: draw the end state and say what happened in one line.
      K.root.outerHTML = btScene(btAfter(P, fx), sideHTML, `hunt ${fx.caught ? 'caught' : fx.fainted ? 'fainted' : fx.fled ? 'fled' : ''}`);
      view.querySelector('.bt-msg').textContent = [fx.crit && 'A critical hit!', fx.eff && 'It’s super effective!', end, fx.lvUp && `${companion().name} grew to Lv ${fx.lvUp}!`].filter(Boolean).join(' ');
      return;
    }
    if (ok || fx.dmg) {
      await K.say(`${P.pal.name} used ${MOVES[fx.cat] || 'Diagnosis'}!`, 250);
      K.px(P.pal, 'attack');
      await K.act('.bt-mon.pal .bt-fx', 'lunge', 320);
      K.pop(`−${fx.dmg}`, fx.crit ? 'crit' : '');
      if (fx.crit) K.act('.bt-stage', 'quake', 450);
      await K.act('.bt-mon.foe .bt-fx', 'hit', 650);
      await K.drain('foe', P.wHp, Math.max(0, P.wHp - fx.dmg), wMax);
      if (fx.crit) await K.say('A critical hit! (mistake fixed)');
      if (fx.eff) await K.say('It’s super effective!');
      if (fx.repeat) await K.say('Already right today… it’s not very effective.');
      if (fx.caught) {
        await K.say(`${P.w.name} is worn out!`, 300);
        if (!K.live()) return;
        K.q('.bt-stage').insertAdjacentHTML('beforeend', '<div class="bt-throw" aria-hidden="true"><i class="bt-ball big"></i></div>');
        await K.wait(750);
        await K.act('.bt-mon.foe', 'absorb', 550);
        if (!K.live()) return;
        K.q('.bt-mon.foe').classList.add('gone');
        K.q('.bt-throw').classList.add('wobble');
        await K.wait(2000);
        if (!K.live()) return;
        K.q('.bt-throw').classList.add('click');
        await K.say(`Gotcha! ${P.w.name} was caught!`);
      }
    } else {
      await K.say(`${P.pal.name}’s answer missed!`, 300);
      await K.say(`The wild ${P.w.name} struck back!`, 150);
      await K.act('.bt-mon.foe .bt-fx', 'lunge', 320);
      K.pop(`−${fx.hurt}`, 'hurt');
      K.px(P.pal, 'hurt');
      await K.act('.bt-mon.pal .bt-fx', 'hit', 650);
      await K.drain('pal', P.hp, Math.max(0, P.hp - fx.hurt), monMaxHp(P.lv));
      if (fx.fainted) {
        await K.px(P.pal, 'faint', true);
        await K.act('.bt-mon.pal', 'faint', 700);
        if (!K.live()) return;
        K.q('.bt-mon.pal').classList.add('gone');
        await K.say(`${P.pal.name} fainted! ${P.w.name} got away.`);
        await K.say('No XP lost. HP is restored for the next one.');
        return;
      }
    }
    if (fx.xp) {
      await K.say(`${P.pal.name} gained ${fx.xp} XP!${fx.tired ? ' (tired: quarter XP)' : ''}`, 200);
      if (fx.lvUp) {
        await K.fill('.bt-xp > span', 100);
        if (!K.live()) return;
        K.q('.bt-lv').textContent = `Lv${m.level}`;
        const bar = K.q('.bt-xp > span');
        bar.style.transition = 'none'; bar.style.width = '0%'; void bar.offsetWidth; bar.style.transition = '';
        K.act('.bt-mon.pal .bt-fx', 'glow', 900);
        await K.say(`${P.pal.name} grew to Lv ${fx.lvUp}!`);
      }
      await K.fill('.bt-xp > span', m.level >= MON_MAX_LV ? 100 : pctOf(m.xp, xpNeed(m.level)));
    }
    // Catches and level-ups heal: fill the bar up to the new HP.
    if (m.hp !== P.hp || m.level !== P.lv) { if (fx.lvUp) K.q('.bt-hpnum').textContent = `${P.hp}/${monMaxHp(m.level)}`; await K.drain('pal', Math.max(0, ok ? P.hp : P.hp - fx.hurt), m.hp, monMaxHp(m.level)); }
    if (fx.ranked) {
      await K.say(`What? ${P.pal.name} is powering up!`, 200);
      K.px(P.pal, 'power');
      await K.act('.bt-mon.pal .bt-fx', 'evolve', 1800);
      if (!K.live()) return;
      K.q('.bt-mon.pal').style.setProperty('--rank', fx.ranked);
      K.q('.bt-box.pal .bt-name span').innerHTML = esc(P.pal.name) + rankStars({ rank: fx.ranked });
      K.act('.bt-stage', 'flash', 500);
      await K.say(`${P.pal.name} ranked up to ${'★'.repeat(fx.ranked)}! It hits a little harder and looks the part.`);
    }
    for (const j of fx.joined || []) await K.say(`${j.name} wants to join your team! Send it out from Your team on the Ocumon tab.`);
    if (fx.fled) {
      await K.say('That was the last question in the case…', 300);
      if (!K.live()) return;
      K.root.classList.add('fled');
      await K.say(`${P.w.name} got away!`, 0);
      return;
    }
    await K.say(fx.caught ? `${P.w.name} was added to your Ocudex.` : end, 0);
  }

  // Switch partner: the one in battle is called back, then the new one is sent out.
  async function btSwitch(id) {
    const m = mon(), old = companion(), next = partnerById(id);
    if (!next || !m.party[id] || m.active === id) return;
    const K = btKit();
    if (K.root && !calm()) {
      view.querySelector('.bt').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      await K.say(`That’s enough, ${old.name}! Come back!`, 150);
      if (!K.live()) return;
      if (pxAnim(old, 'vanish')) await K.px(old, 'vanish', true); else await K.act('.bt-mon.pal', 'bt-back', 450);
      if (!K.live()) return;
    }
    monSwitch(id);
    swapIn = true;
    render({ keepScroll: true });
  }
  async function btSwapIn(K, pal) {
    K.root.classList.add('swap');
    void K.root.offsetWidth;
    K.root.classList.add('go');
    K.px(pal, 'spawn');
    await K.say(`Go! ${pal.name}!`, 600);
    if (!K.live()) return;
    K.root.classList.remove('swap', 'go');
    await K.say(`What will ${pal.name} do?`, 0);
  }

  async function btRun() {
    const K = btKit();
    if (!K.root || calm()) { monReroll(); return; }
    K.root.classList.add('fled');
    await K.say('Got away safely!', 500);
    if (!K.live()) return;
    introSeen = null;
    monReroll();
  }
  const topicsOf = (p) => p.strong.map((c) => cat(c).title.split(/ [&,]/)[0]).join(' and ');
  function btParty() {
    const K = btKit(), m = mon(), p = companion(), n = Object.keys(m.party).length;
    K.act('.bt-mon.pal .bt-fx', 'hop', 600);
    K.say(`${p.name} · Lv ${m.level} · strong on ${topicsOf(p)}. ${n > 1 ? `${n} Ocumon on your team: pick who to send out below.` : `Catch ${MON_UNLOCK} new creatures and another Ocumon joins your team.`}`, 0);
    const t = document.getElementById('team');
    if (t) t.scrollIntoView({ behavior: calm() ? 'auto' : 'smooth', block: 'center' });
  }
  // Your team: every partner that has joined, with the ones still to come as silhouettes.
  function teamHTML() {
    const m = mon(), got = caughtCount(m);
    const cards = joinOrder().filter((p) => !m.party[p.id]).map((p, i) => ({ p, at: joinsAt(Object.keys(m.party).length + i) }));
    const mine = MON.partners.filter((p) => m.party[p.id]).sort((a, b) => (a.id === m.active ? -1 : b.id === m.active ? 1 : m.party[b.id].level - m.party[a.id].level));
    return `<section class="card stack" id="team" style="margin-top:1.2rem;scroll-margin-top:5rem">
      <div class="row" style="justify-content:space-between"><h2 style="font-size:1.15rem">Your team</h2><span class="mono muted">${mine.length} / ${MON.partners.length}</span></div>
      <div class="mon-team">${mine.map((p) => {
        const v = m.party[p.id], q = Object.assign({}, p, { rank: rankOf(v.level) }), now = p.id === m.active;
        return `<article class="mon-mate ${now ? 'now' : ''}" style="--h:${p.hue}">
          <div class="mon-mate-art">${pxSprite(q, 'front')}</div>
          <div class="mon-mate-info"><b>${esc(p.name)}</b>${rankStars(q)} <span class="mono muted">Lv ${v.level}</span>
            ${btHp(v.hp, monMaxHp(v.level), p.name)}
            <p class="muted">Strong on ${esc(topicsOf(p))}</p>
            ${now ? '<span class="pill good">In battle</span>' : `<button class="btn small" data-act="mon-switch" data-v="${p.id}">Send out</button>`}</div></article>`;
      }).join('')}
      ${cards.slice(0, 4).map(({ p, at }) => `<article class="mon-mate locked" title="Joins at ${at} caught">
          <div class="mon-mate-art">${pxSprite(Object.assign({}, p, { rank: 0 }), 'front', 'mon-sil')}</div>
          <div class="mon-mate-info"><b>???</b><p class="muted">Joins when you’ve caught ${at} (${Math.max(0, at - got)} to go)</p></div></article>`).join('')}</div>
      ${cards.length > 4 ? `<p class="muted" style="margin:0">…and ${cards.length - 4} more to meet.</p>` : ''}
    </section>`;
  }
  const btMenu = () => `<div class="bt-cmd" role="group" aria-label="Battle commands">
    <button class="bt-btn fight" data-act="mon-hunt" title="Battle it with a case from its topic">Fight</button>
    <button class="bt-btn bag" data-act="mon-bag" title="Open your Ocudex">Ocudex</button>
    <button class="bt-btn party" data-act="mon-party" title="Your team: check on or switch your Ocumon">Ocumon</button>
    <button class="bt-btn run" data-act="mon-reroll" title="Find another creature">Run</button></div>`;
  const saveButtons = () => '<button class="btn small" data-act="export">⬇️ Export progress</button><button class="btn small" data-act="import">⬆️ Import progress</button>';

  function renderMon() {
    const m = mon();
    if (!MON.wild.length) { view.innerHTML = '<div class="fade"><section class="card"><p>Ocumon data did not load.</p></section></div>'; return; }
    if (!m.on) {
      view.innerHTML = `<div class="fade"><section class="hero"><div><p class="label">Ocumon</p><h1>Ocumon is switched off</h1>
        <p>Your answers aren’t touching it, and its tab badge is hidden. Your companion and collection are kept for whenever you want them back.</p></div></section>
        <div class="row" style="gap:.5rem"><button class="btn primary" data-act="mon-on">Switch Ocumon on</button>${saveButtons()}</div></div>`;
      return;
    }
    if (!m.active) {
      view.innerHTML = `<div class="fade"><section class="hero"><div><p class="label">Ocumon</p><h1>Pick your first partner</h1>
        <p>Wild eye conditions turn up here, and each one brings a case from its topic. Fight it by working through the case from start to finish: every question you get right hits it, and every miss lets it hit back. Get enough of the case right to catch it and fill your Ocudex with all ${MON.wild.length}. Every ${MON_UNLOCK} new catches, another Ocumon joins your team (${MON.partners.length} in all), and each one levels up on its own. It’s separate from the simulator and the games: only fights here count, and you can switch it off at any time.</p></div></section>
        <div class="arc-games">${MON.partners.filter((x) => x.starter).map((x, i) => `<section class="card arc-game hue-top mon-starter" style="--h:${x.hue};--i:${i}">
          <div class="mon-pick">${pxSprite(Object.assign({}, x, { rank: 0 }), 'front')}</div>
          <h2>${esc(x.name)}</h2><p class="muted">${esc(x.blurb)}</p>
          <button class="btn primary big" data-act="mon-starter" data-v="${x.id}">Choose ${esc(x.name)}</button></section>`).join('')}</div>
        <p class="muted" style="margin-top:1rem;font-size:.85rem">The two you don’t pick join your team later.</p></div>`;
      return;
    }
    if (m.day !== today() || !m.wild) { monDay(); if (!m.wild) monSpawn(); persist(); }
    if (monUnlock().length) persist();
    if (hunt) return monHunt();
    const total = MON.wild.length, got = MON.wild.filter((w) => m.dex[w.id]).length;
    const tired = m.dayXp >= MON_DAILY_XP;
    const log = m.log.length ? `<ul class="mon-log">${m.log.map((l) => `<li class="${l.kind}">${esc(l.msg)}</li>`).join('')}</ul>` : '<p class="muted">Nothing yet. Press Fight to start.</p>';
    const dex = CATS.map((c) => {
      const ws = MON.wild.filter((w) => w.cat === c.id);
      if (!ws.length) return '';
      const n = ws.filter((w) => m.dex[w.id]).length;
      return `<section class="mon-dex-group"><h3>${c.icon} ${esc(c.title)} <span class="muted mono">${n} / ${ws.length}</span></h3><div class="mon-dex">${ws.map((w) => {
        const d = m.dex[w.id], now = m.wild.id === w.id;
        return `<article class="mon-card ${d ? '' : 'unknown'} ${now ? 'now' : ''}" style="--h:${c.hue}">
          <div class="mon-art small" aria-hidden="true"><span class="${d ? '' : 'mon-sil'}">${w.icon}</span></div>
          <div><b>${d ? esc(w.name) : '???'}</b> <span class="mon-lv mono" title="Level: higher means more HP and more XP when caught">${wildLv(w)}</span>
          <p>${d ? `${esc(w.hint)}<span class="muted"> · caught ×${d.n}</span>` : `Turns up in the wild${w.tier === 3 ? ', rarely' : ''}. Catch it to log its notes.`}</p>
          ${now ? '<span class="pill">In front of you</span>' : d ? `<button class="btn ghost small" data-act="mon-chase" data-v="${w.id}" aria-label="Battle ${esc(w.name)} again">Battle again</button>` : ''}</div></article>`;
      }).join('')}</div></section>`;
    }).join('');
    const intro = !calm() && introSeen !== m.wild.id;
    view.innerHTML = `<div class="fade">
      <div class="mon-head"><div><p class="label">Ocumon</p><h1>Catch the conditions you know</h1></div><span class="mono muted">${got} / ${total} caught</span></div>
      ${btScene(btNow(intro ? '' : `What will ${companion().name} do?`), btMenu(), intro ? 'bt-intro' : '')}
      <div class="mon-today card"><span class="label" style="margin:0">Today’s XP</span><span class="mono">${m.dayXp} / ${MON_DAILY_XP}</span><div class="mon-meter xp" aria-hidden="true"><span style="width:${Math.min(100, (100 * m.dayXp) / MON_DAILY_XP)}%"></span></div>
        ${tired ? `<p class="warn-text" style="margin:0">${esc(companion().name)} is tired: XP is at a quarter for the rest of today. Catches and damage still count. Come back tomorrow, when spaced practice sticks better anyway.</p>` : ''}</div>
      ${teamHTML()}
      <div class="grid-2" style="margin-top:1.2rem">
        <section class="card stack"><h2 style="font-size:1.15rem">Recent</h2>${log}</section>
        <section class="card stack"><h2 style="font-size:1.15rem">How it works</h2>
          <ul class="arc-rules">
            <li>⚔️ <b>Fight</b> takes you through one whole case from the creature’s topic (ones with your mistakes first). Only fights count: the simulator and games don’t touch Ocumon, but fight answers still go on My mistakes and Mastered</li>
            <li>🎯 Get ${Math.round(100 * MON_NEED[1])}% of the case right to catch a Lv ${TIER_LV[1]}, ${Math.round(100 * MON_NEED[2])}% for Lv ${TIER_LV[2]} and ${Math.round(100 * MON_NEED[3])}% for Lv ${TIER_LV[3]}. Finish the case with it still standing and it gets away</li>
            <li>🔤 Every question is a pick: select-all questions become “which one is right?” (or “which one isn’t?”), matching asks one pair at a time, and out-loud viva questions are a special move: think, reveal the key points, tick what you said</li>
            <li>✅ Right answer: damage, and 10 XP</li>
            <li>💥 Fix a question from My mistakes: critical hit, ×1.5 damage and double XP. Your companion’s favourite topics are super effective: ×1.25</li>
            <li>❌ Wrong answer: it hits back. If your companion faints the creature escapes, but you lose nothing and can finish the case for practice</li>
            <li>🏃 <b>Run</b> finds another creature. New ones only turn up in the wild; ones you’ve caught can be battled again from the Ocudex</li>
            <li>📈 A creature’s level (Lv ${TIER_LV[1]}, ${TIER_LV[2]} or ${TIER_LV[3]}) sets how much of the case you need and the XP for catching it. Lv ${TIER_LV[3]} ones are rare</li>
            <li>🔁 Got it right already today? Half damage, no XP. New questions beat repeats</li>
            <li>🌙 XP slows after ${MON_DAILY_XP} a day; HP is restored each morning</li>
            <li>🤝 Every ${MON_UNLOCK} new catches, another Ocumon joins your team. Send out whoever you like: each keeps its own level and favourite topics</li>
            <li>⭐ Ranks up at Lv ${MON_RANK[0]} and Lv ${MON_RANK[1]}</li>
          </ul></section>
      </div>
      <section id="ocudex" style="margin-top:1.4rem;scroll-margin-top:5rem"><div class="row" style="justify-content:space-between;margin-bottom:.7rem"><h2 style="font-size:1.3rem">Ocudex</h2><span class="mono muted">${got} / ${total} caught</span></div>
        <div class="mon-meter xp" aria-hidden="true" style="margin-bottom:1rem"><span style="width:${(100 * got) / total}%"></span></div>
        ${dex}</section>
      <section class="card stack" style="margin-top:1.4rem"><h2 style="font-size:1.15rem">Settings and your save</h2>
        <p class="muted" style="margin:0">Progress lives in this browser. Export it to a file to keep a backup or load it on another device. The file holds everything: case results, My mistakes, Mastered, game scores and Ocumon.</p>
        <div class="row" style="gap:.5rem">${saveButtons()}<button class="btn small" data-act="mon-off">Switch Ocumon off</button><button class="btn ghost small" data-act="mon-reset">Start Ocumon again</button></div></section>
    </div>`;
    btIntro();
  }
  // A fight: the battle beside (or, on a phone, pinned above) the case and the question, so every hit plays out
  // in view while you answer.
  function monHunt() {
    const { c, last: L } = hunt, fx = L && L.fx, t = hunt.turns[hunt.i], pal = companion();
    const asks = hunt.turns.filter((x) => x.kind !== 'reveal'), qn = hunt.turns.slice(0, hunt.i + 1).filter((x) => x.kind !== 'reveal').length;
    const side = `<div class="bt-side mono" aria-hidden="true">${hunt.finished ? '✓' : `Q${Math.max(1, qn)}/${asks.length}`}</div>`;
    const endCls = hunt.over ? ` ${hunt.over}` : '';
    // After an answer the scene starts from the state before it (L.before) and btAnswer() animates the change.
    const play = !!(L && fx && !L.played);
    const msg = hunt.finished ? '' : hunt.over ? `The battle is over. Finish the case for practice.` : t.kind === 'reveal' ? 'The examiner hands you more findings.' : `What will ${pal.name} do?`;
    const S = play ? L.before : hunt.over ? Object.assign({}, hunt.endS, { msg: L && !L.played ? '' : msg }) : btNow(msg);
    const scene = btScene(S, side, `hunt${play ? '' : endCls}`);
    const scoreFor = (j) => hunt.scores[j];
    if (hunt.finished) {
      const pct = Math.round((100 * hunt.got) / hunt.units), w = hunt.w, need = Math.round(100 * MON_NEED[w.tier]);
      const head = { caught: `🎉 You caught ${esc(w.name)}!`, fainted: `💫 ${esc(pal.name)} fainted and ${esc(w.name)} got away`, fled: `${esc(w.name)} got away` }[hunt.over];
      view.innerHTML = `<div class="fade fight"><div class="fight-side">${scene}${recordPanel(c, c.steps.length, scoreFor)}</div>
        <section class="card stack bt-ask"><p class="label">Case complete</p><h2>${head}</h2>
          <p>You got <b>${pct}%</b> of this case right. ${hunt.over === 'caught' ? '' : `A ${wildLv(w)} creature needs ${need}% to catch. It still turns up in the wild, so you’ll get another go.`}</p>
          <div class="mon-meter xp" aria-hidden="true"><span style="width:${Math.min(100, pct)}%"></span></div>
          ${pct < 100 ? '<p class="muted" style="margin:0">Questions under 8/10 are on My mistakes, so fixing them in a later fight is a critical hit.</p>' : ''}
          <div class="row"><button class="btn primary" data-act="mon-next" id="mon-next">Back to Ocumon →</button><button class="btn ghost small" data-act="case" data-v="${c.id}">Run this case in the simulator</button></div>
        </section></div>`;
      const nb = document.getElementById('mon-next'); if (nb) nb.focus({ preventScroll: true });
      return;
    }
    const st = t.st;
    let body = '';
    if (t.kind === 'reveal') {
      body = `<div class="reveal-box prose">${st.text}</div>${st.exhibit ? `<div style="margin-top:.8rem">${exhibitHTML(st.exhibit)}</div>` : ''}
        <div class="row"><button class="btn primary" data-act="mon-next" id="mon-next">Continue →</button></div>`;
    } else if (t.kind === 'pick') {
      body = `${t.sub ? `<p class="bt-sub">${t.part ? `<span class="label">Match ${t.part[0]} of ${t.part[1]}: which goes with</span>` : ''}${t.sub}</p>` : ''}<div class="opts bt-moves">${t.perm.map((oi, n) => {
        if (!L) return `<button class="opt arc-opt bt-move" data-act="mon-pick" data-v="${oi}"><span class="arc-key mono" aria-hidden="true">${n + 1}</span><span>${t.options[oi]}</span><span></span></button>`;
        const cls = oi === t.answer ? 'right' : oi === L.pick ? 'wrong' : 'dim';
        return `<div class="opt arc-opt bt-move ${cls}"><span class="arc-key mono" aria-hidden="true">${n + 1}</span><span>${t.options[oi]}</span><span class="tag">${oi === t.answer ? '✓' : oi === L.pick ? '✕' : ''}</span></div>`;
      }).join('')}</div>`;
    } else if (!hunt.think && !L) {
      body = `<p class="bt-sub">Special move: answer out loud as you would to the panel, then reveal the key points and tick the ones you said.</p>
        <div class="row"><button class="btn primary" data-act="mon-think" id="mon-think">Reveal key points</button></div>`;
    } else {
      body = `<p class="bt-sub">Tick each point you actually said. More ticks, more damage.</p><div class="points">${t.points.map((p, i) => `<label class="point"><input type="checkbox" data-mtick="${i}" ${L ? `disabled ${L.ticked[i] ? 'checked' : ''}` : ''}><span>${p}</span></label>`).join('')}</div>
        ${L ? '' : '<div class="row"><button class="btn primary" data-act="mon-tick" id="mon-tick">Use move</button></div>'}`;
    }
    let after = '';
    if (L) {
      if (fx) {
        const tags = [fx.crit && 'critical: mistake fixed', fx.eff && `super effective: ${pal.name}’s topic`, fx.repeat && 'repeat today: half damage, no XP', fx.tired && 'tired: quarter XP'].filter(Boolean);
        after += fx.dmg
          ? `<div class="arc-verdict ${L.ok ? 'good' : 'part'}"><b>${L.ok ? '✓' : '½'} ${fx.w.icon} ${esc(fx.w.name)} −${fx.dmg}</b><span class="arc-gain mono">${fx.xp ? `+${fx.xp} XP` : ''}</span></div>`
          : `<div class="arc-verdict bad"><b>✕ ${esc(fx.w.name)} hit back</b><span class="mono">−${fx.hurt} HP</span></div>`;
        if (tags.length) after += `<p class="mon-tags">${tags.map((x) => `<span class="pill">${esc(x)}</span>`).join('')}</p>`;
        if (fx.caught) after += `<div class="mon-catch"><div class="mon-art" aria-hidden="true">${fx.caught.icon}</div><div><h2>Caught ${esc(fx.caught.name)}!${fx.firstCatch ? ' <span class="pill good">New</span>' : ''}</h2><p>${esc(fx.caught.hint)}</p></div></div>`;
        (fx.joined || []).forEach((j) => { after += `<div class="mon-catch"><div class="mon-mate-art">${pxSprite(Object.assign({}, j, { rank: 0 }), 'front')}</div><div><h2>${esc(j.name)} joined your team!</h2><p>${esc(j.blurb)}</p></div></div>`; });
        if (fx.ranked) after += `<p class="mon-up">✨ ${esc(pal.name)} reached Lv ${fx.lvUp} and ranked up to ${'★'.repeat(fx.ranked)}</p>`;
        else if (fx.lvUp) after += `<p class="mon-up">⬆️ ${esc(pal.name)} reached Lv ${fx.lvUp}</p>`;
        if (fx.fainted) after += `<div class="arc-verdict bad"><b>💫 ${esc(pal.name)} fainted and ${esc(fx.fainted.name)} got away.</b><span>No XP lost</span></div>`;
        if (fx.fled) after += `<div class="arc-verdict bad"><b>${esc(fx.fled.name)} got away.</b><span>Needed ${Math.round(100 * MON_NEED[fx.fled.tier])}% of the case</span></div>`;
      } else after += `<div class="arc-verdict ${L.ok ? 'good' : 'bad'}"><b>${L.ok ? '✓ Right' : '✕ Not quite'}</b><span class="mono">${L.points} / 10</span></div>`;
      // A select-all or matching question was cut down to fit, so its last turn shows the whole answer.
      const full = t.last && (st.type === 'multi' || st.type === 'match') ? `<p class="label">Full answer</p><div class="prose">${answerHTML(st)}</div>` : '';
      const why = t.last && st.explain ? `<p class="label">🧑‍⚕️ Why</p><div class="prose">${st.explain}</div>` : '';
      if (full || why) after += `<div class="model">${full}${why}</div>`;
      after += `<div class="row"><button class="btn primary" data-act="mon-next" id="mon-next">${hunt.i >= hunt.turns.length - 1 ? 'Finish the case' : 'Next question'} →</button>${hunt.over ? '<button class="btn ghost small" data-act="mon-stop">Back to Ocumon</button>' : ''}</div>`;
    }
    const k = stepKey(c, t.s);
    view.innerHTML = `<div class="fade fight"><div class="fight-side">${scene}${recordPanel(c, t.s, scoreFor)}</div>
      <section class="card stack bt-ask">
        ${qHead(c, st)}
        <div class="pills">${t.kind === 'reveal' ? '' : `<span class="pill">Question ${qn} of ${asks.length}</span>`}${hunt.fixed[t.s] && !L && t.kind !== 'reveal' ? '<span class="pill warn">On My mistakes: critical hit if right</span>' : ''}</div>
        <h2 class="arc-q">${t.kind === 'reveal' ? (st.question || 'The examiner gives you more information') : st.question}</h2>
        ${body}${after}
        ${L || t.kind === 'reveal' ? '' : `<div class="row"><button class="btn ghost small" data-act="mon-stop">Run from this battle</button><span class="muted" style="font-size:.85rem">${t.kind === 'pick' ? 'Keys 1–4 answer, Enter moves on' : 'Enter moves on'}</span></div>`}
      </section></div>`;
    const nb = document.getElementById('mon-next'); if (nb && L) nb.focus({ preventScroll: true });
    if (play) { L.played = true; btAnswer(L.before, fx, L.ok); }
  }
  document.addEventListener('keydown', (ev) => {
    if (route() !== 'mon' || !hunt || ev.ctrlKey || ev.metaKey || ev.altKey || /^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName)) return;
    const t = hunt.turns[hunt.i];
    if (t && t.kind === 'pick' && !hunt.last && /^[1-9]$/.test(ev.key)) { const oi = t.perm[Number(ev.key) - 1]; if (oi !== undefined) { ev.preventDefault(); huntPick(oi); } }
    else if ((hunt.last || hunt.finished || (t && t.kind === 'reveal')) && ev.key === 'Enter' && ev.target.tagName !== 'BUTTON') { ev.preventDefault(); huntNext(); }
  });

  // ---- export / import: the whole save as a file, to back it up or move it to another device
  function exportSave() {
    let theme = null;
    try { theme = localStorage.getItem(STORE_KEY + ':theme'); } catch (e) { /* ignore */ }
    const blob = new Blob([JSON.stringify({ app: 'thera-orals', format: 1, exported: new Date().toISOString(), theme, data: saved }, null, 1)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `thera-orals-progress-${today()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function importSave(file) {
    if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      let o = null;
      try { o = JSON.parse(r.result); } catch (e) { /* handled below */ }
      if (!isMap(o) || o.app !== 'thera-orals' || !isMap(o.data)) { alert('That file isn’t a Thera Orals progress file. Nothing was changed.'); return; }
      const next = cleanSaved(o.data);
      next.mon = cleanMon(next.mon);
      const when = typeof o.exported === 'string' ? new Date(o.exported).toLocaleString() : 'an unknown date';
      const n = (x) => Object.keys(x).length;
      if (!confirm(`Replace the progress in this browser with the file exported ${when}?\n\nThe file has ${n(next.cases)} case results, ${n(next.missed)} mistakes, ${n(next.mastered)} mastered questions and ${n(next.mon.dex)} Ocumon caught.`)) return;
      saved = next;
      if (typeof o.theme === 'string' && /^(light|dark)$/.test(o.theme)) {
        document.documentElement.dataset.theme = o.theme;
        try { localStorage.setItem(STORE_KEY + ':theme', o.theme); } catch (e) { /* ignore */ }
      }
      hunt = null; persist(); render();
    };
    r.onerror = () => alert('Could not read that file. Nothing was changed.');
    r.readAsText(file);
  }

  // ------------------------------------------------------------------ routing and chrome
  const ROUTES = { sim: null, play: renderPlay, mon: renderMon, review: renderReview, mastered: renderMastered, bank: renderBank, audit: renderAudit, guide: renderGuide };
  const route = () => { const r = location.hash.slice(1); return r in ROUTES ? r : 'sim'; };
  function render(opts = {}) {
    const r = route();
    document.querySelectorAll('.nav a').forEach((a) => a.setAttribute('aria-current', a.getAttribute('href') === `#${r}` ? 'page' : 'false'));
    const n = missedKeys().length;
    missBadge.hidden = !n; missBadge.textContent = n;
    const nm = masteredKeys().length;
    masterBadge.hidden = !nm; masterBadge.textContent = nm;
    monChip();
    const y = window.scrollY;
    if (r !== 'play') arcQuit(); // leaving the tab ends a game in progress
    if (r !== 'mon') introSeen = null; // coming back to Ocumon plays the battle intro again
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
      case 'source': if (v === 'all') sim.sources.clear(); else sim.sources.has(v) ? sim.sources.delete(v) : sim.sources.add(v); again(); break;
      case 'pool': sim.pool = v; again(); break;
      case 'count': sim.count = Math.max(1, Math.min(poolCases().length, sim.count + Number(v))); updateCount(); break;
      case 'count-max': sim.count = poolCases().length; updateCount(); break;
      case 'start': startPractice(); break;
      case 'mock': startMock(); break;
      case 'case': startCase(v); break;
      case 'drill-all': startDrill(missedKeys()); break;
      case 'drill-shown': startDrill(shownReviewKeys()); break;
      case 'drill-one': startDrill([v]); break;
      case 'learned': saved.mastered[v] = { score: PTS, date: today(), streak: 1, comeback: true }; delete saved.missed[v]; persist(); again(); break;
      case 'review-cat': review.cat = v; again(); break;
      case 'drill-mastered': startDrill(shownMasteredKeys()); break;
      case 'mastered-cat': mastery.cat = v; again(); break;
      case 'reset':
        if (confirm('Clear your saved case results, your missed questions and your mastered list? Your Ocumon is kept.')) { saved = Object.assign(cleanSaved(), { mon: saved.mon }); persist(); try { localStorage.removeItem(LEGACY_KEY); } catch (e) { /* ignore */ } again(); }
        break;
      case 'export': exportSave(); break;
      case 'import': document.getElementById('import-file').click(); break;
      case 'mon-on': mon().on = true; persist(); again(); break;
      case 'mon-off': mon().on = false; hunt = null; persist(); again(); break;
      case 'mon-starter': monChoose(v); break;
      case 'mon-hunt': huntStart(); break;
      case 'mon-chase': monChase(v); break;
      case 'mon-reroll': btRun(); break;
      case 'mon-bag': document.getElementById('ocudex').scrollIntoView({ behavior: calm() ? 'auto' : 'smooth' }); break;
      case 'mon-party': btParty(); break;
      case 'mon-switch': btSwitch(v); break;
      case 'bt-skip': fxFast = true; break;
      case 'mon-pick': huntPick(Number(v)); break;
      case 'mon-think': hunt.think = true; render({ keepScroll: true }); break;
      case 'mon-tick': huntTick(); break;
      case 'mon-next': huntNext(); break;
      case 'mon-stop': hunt = null; again(); break;
      case 'mon-reset':
        if (confirm('Start Ocumon again? Your companion, its level and your collection are cleared. Your questions, mistakes and mastered list are not touched.')) { saved.mon = cleanMon({}); hunt = null; persist(); again(); }
        break;
      case 'resume': s.parked = false; render(); break;
      case 'park': s.parked = true; render(); break;
      case 'discard': stopTimer(); sim.s = null; again(); break;
      case 'finish': finish(); break;
      case 'restart': sim.s = null; render(); break;
      case 'begin': s.i++; prepItem(); render(); break;
      case 'zoom': {
        const img = b.querySelector('img'), cap = b.closest('figure').querySelector('figcaption');
        const box = document.createElement('div');
        box.className = 'lightbox';
        box.innerHTML = `<figure><img src="${esc(v)}" alt="${esc(img.alt)}"><figcaption>${cap.innerHTML}</figcaption></figure><button type="button" class="btn small" aria-label="Close">Close ✕</button>`;
        const close = () => { box.remove(); document.removeEventListener('keydown', onKey); };
        const onKey = (e) => { if (e.key === 'Escape') close(); };
        box.addEventListener('click', close);
        document.addEventListener('keydown', onKey);
        document.body.appendChild(box);
        break;
      }
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
      case 'arc-cat': arc.cats.has(v) ? arc.cats.delete(v) : arc.cats.add(v); again(); break;
      case 'arc-all': CATS.forEach((c) => arc.cats.add(c.id)); again(); break;
      case 'arc-bolt': startBolt(); break;
      case 'arc-rush': startRush(); break;
      case 'arc-pick': boltAnswer(Number(v)); break;
      case 'arc-next': boltNext(); break;
      case 'arc-tile': rushPick(v[0], Number(v.slice(1))); break;
      case 'arc-quit': arcQuit(); render(); break;
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
    if (ev.target.id === 'import-file') { importSave(ev.target.files[0]); ev.target.value = ''; return; }
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
