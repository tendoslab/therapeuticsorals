/* Listen: cases read aloud, as topic playlists (audio made by tools/narrate.js, listed in js/data/audio.js).
 * The player bar lives outside #view, so it keeps playing while you use the rest of the site, and it hooks into
 * the Media Session API for lock-screen and headphone controls. Speed, where you stopped in each case and which
 * cases you've finished are kept in localStorage (a per-browser convenience; nothing breaks without it). */
(() => {
  'use strict';

  const AUDIO = window.CASE_AUDIO || {};
  const CASES = (window.CASES || []).filter((c) => AUDIO[c.id]);
  const CATS = window.CATEGORIES || [];
  const KEY = 'theraOrals.v2:listen';
  const RATES = [0.75, 1, 1.25, 1.5, 1.75, 2];
  const SKIP = 15;

  const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const clock = (t) => { t = Math.max(0, Math.floor(t || 0)); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; };
  const mins = (t) => `${Math.max(1, Math.round(t / 60))} min`;
  const caseOf = (id) => CASES.find((c) => c.id === id);
  const catOf = (id) => CATS.find((x) => x.id === id) || { id, title: id, icon: '', hue: 225 };
  const inCat = (id) => CASES.filter((c) => c.category === id);

  let st = { rate: 1, pos: {}, done: {} };
  try {
    const o = JSON.parse(localStorage.getItem(KEY));
    if (o && typeof o === 'object') st = { rate: RATES.includes(o.rate) ? o.rate : 1, pos: Object(o.pos), done: Object(o.done) };
  } catch (e) { /* storage unavailable */ }
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* ignore */ } };

  const audio = document.createElement('audio');
  audio.preload = 'metadata';
  document.body.appendChild(audio);
  const bar = document.getElementById('player');
  let queue = [], at = -1, view = null;
  const cur = () => (at >= 0 ? caseOf(queue[at]) : null);
  const chapterAt = (id, t) => {
    const ch = AUDIO[id].chapters;
    let i = 0;
    while (i + 1 < ch.length && ch[i + 1][0] <= t + 0.05) i++;
    return i;
  };

  // ------------------------------------------------------------------ playback
  function load(i, from) {
    const c = caseOf(queue[i]);
    if (!c) return;
    at = i;
    audio.src = AUDIO[c.id].src;
    audio.defaultPlaybackRate = audio.playbackRate = st.rate;
    const resume = from !== undefined ? from : st.pos[c.id] || 0;
    const start = () => { audio.currentTime = resume < AUDIO[c.id].dur - 10 ? resume : 0; audio.play().catch(() => {}); };
    audio.readyState >= 1 ? start() : audio.addEventListener('loadedmetadata', start, { once: true });
    meta();
    paint();
  }
  // Plays a case, queued with the rest of its topic so the playlist carries on from it.
  function play(id, from) {
    const c = caseOf(id);
    if (!c) return;
    if (queue[at] === id && from === undefined) { audio.paused ? audio.play().catch(() => {}) : audio.pause(); return; }
    queue = inCat(c.category).map((x) => x.id);
    load(queue.indexOf(id), from);
  }
  function playAll(cat) {
    const ids = inCat(cat).map((x) => x.id);
    const first = ids.find((id) => !st.done[id]) || ids[0];
    queue = ids;
    load(ids.indexOf(first));
  }
  const step = (d) => { if (queue[at + d]) load(at + d, 0); };
  const seek = (t) => { audio.currentTime = Math.max(0, Math.min(t, (audio.duration || Infinity) - 0.25)); };
  function chapterJump(d) {
    const c = cur();
    if (!c) return;
    const ch = AUDIO[c.id].chapters, i = chapterAt(c.id, audio.currentTime);
    // Back goes to the start of this chapter first, like a CD player, unless you're already near its start.
    const target = d < 0 && audio.currentTime - ch[i][0] > 3 ? i : i + d;
    if (target < 0) seek(0);
    else if (target >= ch.length) step(1);
    else seek(ch[target][0]);
  }
  function stop() {
    save();
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    queue = []; at = -1;
    if ('mediaSession' in navigator) navigator.mediaSession.metadata = null;
    paint();
  }
  function save() {
    const c = cur();
    if (!c || !audio.currentTime) return;
    st.pos[c.id] = Math.floor(audio.currentTime);
    persist();
  }
  function setRate(r) {
    st.rate = r;
    audio.defaultPlaybackRate = audio.playbackRate = r;
    persist();
  }

  let lastSave = 0, lastChapter = -1;
  audio.addEventListener('timeupdate', () => {
    const c = cur();
    if (!c) return;
    if (Date.now() - lastSave > 5000) { lastSave = Date.now(); save(); }
    const i = chapterAt(c.id, audio.currentTime);
    if (i !== lastChapter) { lastChapter = i; meta(); paintChapters(); }
    tick();
  });
  audio.addEventListener('play', paintButtons);
  audio.addEventListener('pause', () => { save(); paintButtons(); });
  audio.addEventListener('ratechange', position);
  audio.addEventListener('ended', () => {
    const c = cur();
    if (c) { st.done[c.id] = true; delete st.pos[c.id]; persist(); }
    if (queue[at + 1]) load(at + 1, 0);
    else { paintButtons(); if (view) render(view); }
  });

  // ------------------------------------------------------------------ lock screen and headphones
  function meta() {
    const c = cur();
    if (!c || !('mediaSession' in navigator)) return;
    const ch = AUDIO[c.id].chapters[chapterAt(c.id, audio.currentTime)];
    navigator.mediaSession.metadata = new MediaMetadata({
      title: c.title,
      artist: ch ? ch[1] : 'Thera Orals',
      album: `Thera Orals · ${catOf(c.category).title}`,
      artwork: [{ src: 'img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    });
    position();
  }
  function position() {
    if (!('mediaSession' in navigator) || !navigator.mediaSession.setPositionState || !isFinite(audio.duration)) return;
    try { navigator.mediaSession.setPositionState({ duration: audio.duration, playbackRate: audio.playbackRate, position: Math.min(audio.currentTime, audio.duration) }); } catch (e) { /* ignore */ }
  }
  if ('mediaSession' in navigator) {
    const on = (a, fn) => { try { navigator.mediaSession.setActionHandler(a, fn); } catch (e) { /* not supported here */ } };
    on('play', () => audio.play().catch(() => {}));
    on('pause', () => audio.pause());
    on('previoustrack', () => chapterJump(-1));
    on('nexttrack', () => chapterJump(1));
    on('seekbackward', (d) => seek(audio.currentTime - ((d && d.seekOffset) || SKIP)));
    on('seekforward', (d) => seek(audio.currentTime + ((d && d.seekOffset) || SKIP)));
    on('seekto', (d) => { if (d && typeof d.seekTime === 'number') seek(d.seekTime); position(); });
  }

  // ------------------------------------------------------------------ player bar
  function paint() {
    const c = cur();
    bar.hidden = !c;
    document.body.classList.toggle('has-player', !!c);
    if (c) {
      bar.style.setProperty('--h', catOf(c.category).hue);
      bar.querySelector('.pl-title').textContent = c.title;
      bar.querySelector('.pl-pos').textContent = queue.length > 1 ? `${at + 1} of ${queue.length}` : '';
      bar.querySelector('[data-listen="prev-case"]').disabled = !queue[at - 1];
      bar.querySelector('[data-listen="next-case"]').disabled = !queue[at + 1];
      lastChapter = -1;
    }
    paintButtons();
    tick();
    if (view) render(view);
  }
  function paintButtons() {
    const b = bar.querySelector('[data-listen="toggle"]');
    b.textContent = audio.paused ? '▶' : '❚❚';
    b.setAttribute('aria-label', audio.paused ? 'Play' : 'Pause');
    bar.querySelector('[data-listen="rate"]').textContent = `${st.rate}×`;
    document.querySelectorAll('[data-listen="track"]').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.v === queue[at] && !audio.paused)));
  }
  function tick() {
    const c = cur();
    if (!c) return;
    const dur = isFinite(audio.duration) ? audio.duration : AUDIO[c.id].dur;
    const r = bar.querySelector('.pl-seek');
    if (document.activeElement !== r) { r.max = String(Math.round(dur)); r.value = String(Math.round(audio.currentTime)); }
    r.style.setProperty('--p', `${(100 * audio.currentTime) / dur}%`);
    bar.querySelector('.pl-time').textContent = `${clock(audio.currentTime)} / ${clock(dur)}`;
    const ch = AUDIO[c.id].chapters[chapterAt(c.id, audio.currentTime)];
    bar.querySelector('.pl-chapter').textContent = ch ? ch[1] : '';
    if (Math.round(audio.currentTime) % 5 === 0) position();
  }
  function paintChapters() {
    const c = cur();
    const i = c ? chapterAt(c.id, audio.currentTime) : -1;
    document.querySelectorAll('.ls-chapters [data-listen="seek"]').forEach((el, j) => el.setAttribute('aria-current', String(j === i)));
  }

  document.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-listen]');
    if (!b) return;
    const v = b.dataset.v;
    switch (b.dataset.listen) {
      case 'track': play(v); break;
      case 'all': playAll(v); break;
      case 'toggle': if (cur()) audio.paused ? audio.play().catch(() => {}) : audio.pause(); break;
      case 'back': seek(audio.currentTime - SKIP); break;
      case 'fwd': seek(audio.currentTime + SKIP); break;
      case 'prev-case': step(-1); break;
      case 'next-case': step(1); break;
      case 'rate': setRate(RATES[(RATES.indexOf(st.rate) + 1) % RATES.length]); paintButtons(); break;
      case 'seek': if (queue[at] !== b.dataset.c) play(b.dataset.c, Number(v)); else { seek(Number(v)); audio.play().catch(() => {}); } break;
      case 'close': stop(); break;
      case 'reset-heard':
        if (confirm('Clear which cases you’ve heard and where you stopped in each?')) { st.pos = {}; st.done = {}; persist(); if (view) render(view); }
        break;
      default: break;
    }
  });
  bar.querySelector('.pl-seek').addEventListener('input', (ev) => seek(Number(ev.target.value)));
  // Space plays or pauses on the Listen tab (not while typing or on a focused button, which Space already presses).
  document.addEventListener('keydown', (ev) => {
    if (ev.key !== ' ' || !view || !cur() || /^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(ev.target.tagName)) return;
    ev.preventDefault();
    audio.paused ? audio.play().catch(() => {}) : audio.pause();
  });
  window.addEventListener('pagehide', save);

  // ------------------------------------------------------------------ Listen tab
  function render(el) {
    view = el;
    const c = cur();
    const voices = `<ul class="ls-voices">
      <li><b>Examiner 1</b> sets the scene and reads any results.</li>
      <li><b>Examiner 2</b> asks each question, then there’s a pause: answer in your head (or out loud).</li>
      <li><b>A third voice</b> gives the model answer and why.</li></ul>`;
    const lists = CATS.filter((ct) => inCat(ct.id).length).map((ct) => {
      const cs = inCat(ct.id), total = cs.reduce((n, x) => n + AUDIO[x.id].dur, 0), heard = cs.filter((x) => st.done[x.id]).length;
      return `<section class="card hue-top ls-list" style="--h:${ct.hue}">
        <div class="row ls-head"><span style="font-size:1.2rem">${ct.icon}</span><h2>${esc(ct.title)}</h2>
          <span class="muted">${cs.length} cases · ${mins(total)}${heard ? ` · ${heard} heard` : ''}</span>
          <button class="btn primary small" data-listen="all" data-v="${ct.id}">▶ Play ${heard && heard < cs.length ? 'from next unheard' : 'all'}</button></div>
        <ol class="ls-tracks">${cs.map((x) => {
          const now = queue[at] === x.id, p = st.pos[x.id];
          const note = now ? 'Playing' : st.done[x.id] ? '✓ Heard' : p ? `Resume at ${clock(p)}` : '';
          return `<li class="${now ? 'now' : ''}"><button class="ls-track" data-listen="track" data-v="${x.id}" aria-pressed="${now && !audio.paused}">
            <span class="ls-ico" aria-hidden="true"></span><span class="ls-name"><b>${esc(x.title)}</b><small class="muted">${esc(x.theme || '')}</small></span>
            <span class="ls-meta"><span class="mono">${clock(AUDIO[x.id].dur)}</span>${note ? `<small>${note}</small>` : ''}</span></button></li>`;
        }).join('')}</ol>
      </section>`;
    }).join('');
    const chapters = c ? `<section class="card ls-now"><p class="label">Now playing</p><h2>${esc(c.title)}</h2>
      <ol class="ls-chapters">${AUDIO[c.id].chapters.map(([t, label]) => `<li><button data-listen="seek" data-c="${c.id}" data-v="${t}" aria-current="false"><span class="mono">${clock(t)}</span> ${esc(label)}</button></li>`).join('')}</ol></section>` : '';
    const missing = CATS.filter((ct) => !inCat(ct.id).length).map((ct) => esc(ct.title));
    el.innerHTML = `<div class="fade">
      <section class="hero"><div><p class="label">Listen</p><h1>Cases read aloud</h1>
      <p>Revise on the go: each case plays like an oral, with two examiners and a pause to answer before the model answer. It keeps playing on the other tabs and with your phone locked; skip between questions with the lock-screen or headphone track buttons.</p>${voices}</div></section>
      ${CASES.length ? `<div class="ls-grid"><div class="stack">${lists}</div>${chapters}</div>
        ${missing.length ? `<p class="muted ls-soon">No audio yet for ${missing.join(', ')}. The voices are made with VoiceStudio by <code>tools/narrate.js</code>.</p>` : ''}
        ${Object.keys(st.done).length || Object.keys(st.pos).length ? '<p><button class="btn ghost small" data-listen="reset-heard">Clear heard and resume points</button></p>' : ''}`
        : '<section class="card"><p>No audio has been made yet. Run <code>node tools/narrate.js glaucoma</code> with VoiceStudio open to make the first playlist.</p></section>'}
    </div>`;
    paintChapters();
  }

  window.Listen = {
    render,
    leave: () => { view = null; },
    has: (id) => !!(AUDIO[id] && caseOf(id)),
    play,
  };
})();
