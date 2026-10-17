// --- THERA ORALS SIMULATOR ---
// Case data lives in js/data/*.js (one file per topic). Each file pushes cases onto window.CASES.
// Step types: 'reveal' (examiner gives info), 'mcq' (single best answer), 'multi' (select all that apply),
// 'match' (dropdown matching) and 'viva' (say your answer out loud, then tick the key points you covered).

const allCases = window.CASES;
const categories = window.CATEGORIES;
const corrections = window.CORRECTIONS || [];

const STORAGE_KEY = 'theraOrals.progress.v1';
const MOCK_MINUTES = 20;
const PASS_PCT = 70;

// --- PERSISTENCE (per-viewer convenience only) ---
function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { return {}; }
}
function saveProgress(progress) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (e) { /* storage unavailable */ }
}
let progress = loadProgress();

function recordCaseResult(caseId, pct) {
    const p = progress[caseId] || { attempts: 0, best: 0 };
    p.attempts += 1;
    p.best = Math.max(p.best, pct);
    p.last = pct;
    p.date = new Date().toISOString().slice(0, 10);
    progress[caseId] = p;
    saveProgress(progress);
}

// --- HELPERS ---
function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function getCategory(id) { return categories.find(c => c.id === id); }
function scoredSteps(caseData) { return caseData.steps.filter(s => s.type !== 'reveal'); }
function caseMax(caseData) { return scoredSteps(caseData).length * 10; }
function poolFilter(c) {
    const p = progress[c.id];
    if (state.pool === 'new') return !p;
    if (state.pool === 'missed') return p && p.last < PASS_PCT;
    return true;
}
function availableCases() {
    return allCases.filter(c => state.selectedCategories.includes(c.category) && poolFilter(c));
}

// --- APPLICATION STATE ---
let state = {
    view: 'start', // start | case-intro | question | feedback | end | bank | corrections | guide
    selectedCategories: categories.map(c => c.id),
    pool: 'all',
    selectedCaseCount: 5,
    mode: 'practice',
    score: 0
};

let session = null;
let timerHandle = null;

// DOM Elements
const appContainer = document.getElementById('app-container');
const sessionStatus = document.getElementById('session-status');
const currentScoreEl = document.getElementById('current-score');
const timerEl = document.getElementById('timer-display');
const navEl = document.getElementById('main-nav');

// --- RENDER ROUTER ---
function render() {
    const inSession = ['case-intro', 'question', 'feedback'].includes(state.view);
    sessionStatus.classList.toggle('hidden', !inSession);
    sessionStatus.classList.toggle('flex', inSession);
    navEl.classList.toggle('hidden', inSession);
    currentScoreEl.innerText = session ? session.score : 0;
    navEl.innerHTML = buildNav();

    const views = {
        'start': buildDashboard,
        'case-intro': buildCaseIntro,
        'question': buildQuestionScreen,
        'feedback': buildFeedbackScreen,
        'end': buildEndScreen,
        'bank': buildRecallBank,
        'corrections': buildCorrections,
        'guide': buildExamGuide
    };
    appContainer.innerHTML = views[state.view]();
    window.scrollTo({ top: 0 });
}

function buildNav() {
    const items = [['start', 'Practice'], ['bank', 'Recall Bank'], ['corrections', 'Answer Audit'], ['guide', 'Exam Guide']];
    return items.map(([view, label]) => {
        const active = state.view === view;
        return `<button onclick="navigate('${view}')" class="nav-btn px-3 py-2 rounded-lg transition-colors ${active ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100'}">${label}</button>`;
    }).join('');
}

function navigate(view) {
    state.view = view;
    render();
}
function goHome() {
    if (session && !confirm('Leave the current session? Progress on this session will be lost.')) return;
    endTimer();
    session = null;
    state.view = 'start';
    render();
}
function quitSession() { goHome(); }

// --- DASHBOARD ---
function buildDashboard() {
    const categoryHTML = categories.map(cat => {
        const isSelected = state.selectedCategories.includes(cat.id);
        const count = allCases.filter(c => c.category === cat.id).length;
        const activeClasses = isSelected ? `${cat.classBase} ${cat.classBase}-active` : `border-slate-200 bg-white hover:border-slate-300`;
        const checkIcon = isSelected
            ? `<div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>`
            : `<div class="w-6 h-6 rounded-full border-2 border-slate-300 flex-shrink-0"></div>`;
        return `
            <div role="button" tabindex="0" onclick="toggleCategory('${cat.id}')" onkeydown="if(event.key==='Enter')toggleCategory('${cat.id}')" class="cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center justify-between shadow-sm mb-3 ${activeClasses}">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-lg bg-white bg-opacity-60 flex items-center justify-center font-bold text-lg shadow-sm border border-white">${cat.icon}</div>
                    <div>
                        <h3 class="font-bold text-slate-800 text-sm sm:text-base">${cat.title}</h3>
                        <p class="text-xs text-slate-500 font-medium">${cat.subtitle} (${count} cases)</p>
                    </div>
                </div>
                ${checkIcon}
            </div>`;
    }).join('');

    const avail = availableCases();
    const max = avail.length;
    if (state.selectedCaseCount > max) state.selectedCaseCount = max;
    if (state.selectedCaseCount === 0 && max > 0) state.selectedCaseCount = 1;

    const counts = {
        all: allCases.filter(c => state.selectedCategories.includes(c.category)).length,
        new: allCases.filter(c => state.selectedCategories.includes(c.category) && !progress[c.id]).length,
        missed: allCases.filter(c => state.selectedCategories.includes(c.category) && progress[c.id] && progress[c.id].last < PASS_PCT).length
    };
    const poolBtn = (id, label) => {
        const active = state.pool === id;
        return `<button onclick="setPool('${id}')" class="flex-1 rounded-lg p-3 text-center shadow-sm transition-all ${active ? 'border-2 border-blue-900 bg-white' : 'border border-slate-200 bg-slate-50 hover:bg-white'}">
            <div class="font-bold text-slate-800 text-sm">${label}</div>
            <div class="text-xs text-slate-500 font-medium">${counts[id]}</div>
        </button>`;
    };
    const anteriorAvail = avail.filter(c => getCategory(c.category).half === 'anterior').length;
    const posteriorAvail = avail.filter(c => getCategory(c.category).half === 'posterior').length;
    const mockReady = anteriorAvail > 0 && posteriorAvail > 0;

    return `
        <div class="w-full max-w-6xl mx-auto mt-2 fade-in">
            <div class="bg-white border border-slate-200 p-4 rounded-xl mb-6 flex flex-wrap gap-2 justify-between items-center shadow-sm">
                <div class="flex items-center gap-3">
                    <span class="text-xl">🩺</span>
                    <span class="font-bold text-slate-700">Case selector</span>
                </div>
                <span class="text-sm text-slate-500">${allCases.length} cases built from 2018, 2019 & 2025 recalls + 2025 mock orals</span>
            </div>

            <div class="flex flex-col lg:flex-row gap-8 items-start">
                <div class="w-full lg:w-7/12 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-lg font-extrabold text-slate-800">Topics</h2>
                        <div class="flex gap-2">
                            <button onclick="selectAllCategories(true)" class="text-xs font-bold text-blue-700 hover:underline">All</button>
                            <span class="text-slate-300">|</span>
                            <button onclick="selectAllCategories(false)" class="text-xs font-bold text-slate-500 hover:underline">None</button>
                        </div>
                    </div>
                    <div class="space-y-1">${categoryHTML}</div>
                </div>

                <div class="w-full lg:w-5/12 space-y-6">
                    <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                        <h2 class="text-lg font-extrabold text-slate-800 mb-1">Mock Oral</h2>
                        <p class="text-sm text-slate-500 mb-4">Runs like the real thing: ${MOCK_MINUTES}-minute clock, two examiners, a case-report warm-up, then one anterior-eye case and one glaucoma/posterior case. If you finish early the panel may throw in a bonus case.</p>
                        <button onclick="startMock()" class="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${mockReady ? '' : 'opacity-50 cursor-not-allowed'}" ${mockReady ? '' : 'disabled'}>
                            ⏱ Start ${MOCK_MINUTES}-minute mock oral
                        </button>
                        ${mockReady ? '' : '<p class="text-xs text-red-600 mt-2">Select at least one anterior-eye topic and one glaucoma/neuro topic.</p>'}
                    </div>

                    <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                        <h2 class="text-lg font-extrabold text-slate-800 mb-4">Practice Pool</h2>
                        <div class="flex gap-2 mb-6">
                            ${poolBtn('all', 'All')}
                            ${poolBtn('new', 'New')}
                            ${poolBtn('missed', 'Missed')}
                        </div>
                        <div class="mb-8">
                            <div class="flex justify-between text-xs font-bold text-slate-500 mb-2 tracking-wide uppercase">
                                <span>Cases</span><span>${max} avail.</span>
                            </div>
                            <div class="flex items-center gap-3 mb-6 bg-slate-50 p-2 rounded-xl border border-slate-200">
                                <button onclick="setCaseCount(state.selectedCaseCount - 1)" class="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 shadow-sm">-</button>
                                <div class="flex-1 text-center font-extrabold text-3xl text-blue-900">${state.selectedCaseCount}</div>
                                <button onclick="setCaseCount(state.selectedCaseCount + 1)" class="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 shadow-sm">+</button>
                                <button onclick="setCaseCount(${max})" class="px-3 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-600 hover:bg-slate-100 uppercase shadow-sm">Max</button>
                            </div>
                            <input type="range" min="1" max="${Math.max(1, max)}" value="${Math.max(1, state.selectedCaseCount)}" class="w-full accent-blue-900" onchange="setCaseCount(parseInt(this.value))" aria-label="Number of cases">
                        </div>
                        <button onclick="startQuiz()" class="w-full bg-[#0a192f] hover:bg-[#112240] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 ${max === 0 ? 'opacity-50 cursor-not-allowed' : ''}" ${max === 0 ? 'disabled' : ''}>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
                            Start practice — ${state.selectedCaseCount} case${state.selectedCaseCount === 1 ? '' : 's'}
                        </button>
                        ${Object.keys(progress).length ? `<button onclick="resetProgress()" class="w-full mt-3 text-xs font-bold text-slate-400 hover:text-red-600">Reset my progress</button>` : ''}
                    </div>
                </div>
            </div>
        </div>`;
}

function toggleCategory(catId) {
    if (state.selectedCategories.includes(catId)) {
        state.selectedCategories = state.selectedCategories.filter(id => id !== catId);
    } else {
        state.selectedCategories.push(catId);
    }
    render();
}
function selectAllCategories(on) {
    state.selectedCategories = on ? categories.map(c => c.id) : [];
    render();
}
function setPool(pool) {
    state.pool = pool;
    render();
}
function setCaseCount(val) {
    const max = availableCases().length;
    if (val >= 1 && val <= max) {
        state.selectedCaseCount = val;
        render();
    }
}
function resetProgress() {
    if (!confirm('Clear your saved attempts and missed-case list?')) return;
    progress = {};
    saveProgress(progress);
    render();
}

// --- SESSION SETUP ---
function newSession(mode, cases) {
    session = {
        mode,
        cases: cases.map(c => ({ data: c, stepScores: [] })),
        caseIdx: 0,
        stepIdx: 0,
        score: 0,
        optionOrder: null,
        last: null,
        timeUp: false,
        endsAt: null
    };
    state.view = 'case-intro';
    render();
}

function startQuiz() {
    const pool = shuffle(availableCases());
    if (!pool.length) return;
    endTimer();
    newSession('practice', pool.slice(0, state.selectedCaseCount));
}

function startCase(caseId) {
    endTimer();
    newSession('practice', [allCases.find(c => c.id === caseId)]);
}

function startMock() {
    const avail = availableCases();
    const pick = half => shuffle(avail.filter(c => getCategory(c.category).half === half));
    const anterior = pick('anterior');
    const posterior = pick('posterior');
    if (!anterior.length || !posterior.length) return;
    const warmups = shuffle(allCases.filter(c => c.category === 'professional' && c.warmup));
    const order = [];
    if (warmups.length) order.push(warmups[0]);
    order.push(anterior[0], posterior[0]);
    // Bonus case if time allows (the panel often adds one when you move quickly)
    const bonus = shuffle([...anterior.slice(1), ...posterior.slice(1)])[0];
    if (bonus) order.push(bonus);
    newSession('mock', order);
    session.bonusFrom = order.length - (bonus ? 1 : 0);
    startTimer();
}

// --- TIMER (mock oral) ---
function startTimer() {
    endTimer();
    session.endsAt = Date.now() + MOCK_MINUTES * 60 * 1000;
    timerEl.classList.remove('hidden');
    tickTimer();
    timerHandle = setInterval(tickTimer, 1000);
}
function tickTimer() {
    if (!session || !session.endsAt) return;
    const remaining = Math.max(0, session.endsAt - Date.now());
    const m = Math.floor(remaining / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    timerEl.innerText = `⏱ ${m}:${String(s).padStart(2, '0')}`;
    timerEl.classList.toggle('bg-red-50', remaining < 3 * 60000);
    timerEl.classList.toggle('text-red-700', remaining < 3 * 60000);
    if (remaining === 0) {
        session.timeUp = true;
        endTimer();
        finishSession();
    }
}
function endTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = null;
    timerEl.classList.add('hidden');
}

// --- CASE INTRO ---
function examinerFor(caseData) {
    const cat = getCategory(caseData.category);
    if (session && session.mode === 'mock') {
        if (cat.half === 'casereport') return 'Both examiners';
        return cat.half === 'anterior' ? 'Examiner 1 — anterior eye' : 'Examiner 2 — glaucoma & posterior eye';
    }
    return 'Examiner';
}

function buildCaseIntro() {
    const entry = session.cases[session.caseIdx];
    const caseData = entry.data;
    const cat = getCategory(caseData.category);
    const isBonus = session.mode === 'mock' && session.caseIdx >= session.bonusFrom;
    const years = (caseData.years || []).map(y => `<span class="px-2 py-0.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500">${y}</span>`).join(' ');
    return `
        <div class="glass-panel p-6 sm:p-10 rounded-2xl w-full max-w-3xl fade-in mt-4">
            <div class="flex flex-wrap items-center gap-2 mb-4">
                <span class="inline-block px-3 py-1 font-bold text-xs rounded-full uppercase tracking-wider badge-${cat.id}">${caseData.theme}</span>
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Case ${session.caseIdx + 1} of ${session.cases.length}${isBonus ? ' · Bonus — time permitting' : ''}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-2 leading-tight">${caseData.title}</h2>
            <div class="flex flex-wrap items-center gap-2 mb-6"><span class="text-xs text-slate-400 font-semibold">Seen in recalls:</span> ${years}</div>

            <div class="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600 mb-6">
                <h3 class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">${examinerFor(caseData)} says</h3>
                <p class="text-lg font-medium text-slate-800 mb-4">${caseData.patient}</p>
                <p class="text-base text-slate-700 leading-relaxed">${caseData.stem}</p>
            </div>
            ${caseData.exhibit ? buildExhibit(caseData.exhibit) : ''}

            <button onclick="startStep()" class="w-full bg-[#0a192f] hover:bg-[#112240] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                ${session.caseIdx === 0 ? 'Enter examination room' : 'Begin case'}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
        </div>`;
}

function buildExhibit(text) {
    return `<div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <div class="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">📷 Exhibit handed to you</div>
        <p class="text-sm text-amber-900 leading-relaxed">${text}</p>
    </div>`;
}

function startStep() {
    session.optionOrder = null;
    state.view = 'question';
    render();
}

// --- QUESTION SCREEN ---
function currentStep() {
    const caseData = session.cases[session.caseIdx].data;
    return caseData.steps[session.stepIdx];
}

function buildQuestionScreen() {
    const caseData = session.cases[session.caseIdx].data;
    const stepData = currentStep();
    const totalSteps = caseData.steps.length;
    const progressPct = (session.stepIdx / totalSteps) * 100;

    let interactionHTML = '';
    if (stepData.type === 'reveal') {
        interactionHTML = `
            <div class="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5 text-slate-800 leading-relaxed prose-answer">${stepData.text}</div>
            ${stepData.exhibit ? `<div class="mt-4">${buildExhibit(stepData.exhibit)}</div>` : ''}
            <button onclick="continueReveal()" class="w-full mt-6 bg-[#0a192f] hover:bg-[#112240] text-white font-bold py-4 px-6 rounded-xl shadow-md">Continue</button>`;
    } else if (stepData.type === 'mcq' || stepData.type === 'multi') {
        if (!session.optionOrder) session.optionOrder = stepData.fixedOrder ? stepData.options.map((_, i) => i) : shuffle(stepData.options.map((_, i) => i));
        const multi = stepData.type === 'multi';
        interactionHTML = `
            ${multi ? '<p class="mt-4 text-sm font-bold text-blue-700">Select all that apply</p>' : ''}
            <div class="space-y-3 mt-6">
                ${session.optionOrder.map(i => multi ? `
                    <label class="option-btn w-full text-left p-4 sm:p-5 rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all text-slate-700 font-medium bg-white shadow-sm flex items-start gap-4 cursor-pointer">
                        <input type="checkbox" name="multi" value="${i}" class="mt-1 w-5 h-5 accent-blue-700 flex-shrink-0">
                        <span class="leading-snug">${stepData.options[i]}</span>
                    </label>` : `
                    <button onclick="submitAnswer(${i})" class="option-btn w-full text-left p-4 sm:p-5 rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all text-slate-700 font-medium group bg-white shadow-sm">
                        <div class="flex items-start gap-4">
                            <div class="w-6 h-6 rounded-full border-2 border-slate-300 flex-shrink-0 mt-0.5 group-hover:border-blue-600 flex items-center justify-center">
                                <div class="w-2.5 h-2.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <span class="leading-snug">${stepData.options[i]}</span>
                        </div>
                    </button>`).join('')}
            </div>
            ${multi ? `<button onclick="submitAnswer()" class="w-full mt-6 bg-[#0a192f] hover:bg-[#112240] text-white font-bold py-4 px-6 rounded-xl shadow-md">Submit</button>` : ''}`;
    } else if (stepData.type === 'match') {
        if (!session.optionOrder) {
            const opts = [...new Set([...stepData.pairs.map(p => p.answer), ...(stepData.distractors || [])])];
            session.optionOrder = shuffle(opts);
        }
        interactionHTML = `
            <div class="mt-8 space-y-4">
                ${stepData.pairs.map((pair, i) => `
                    <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 sm:p-5 border-2 border-slate-200 rounded-xl bg-white shadow-sm">
                        <span class="font-bold text-slate-800 sm:w-56 flex-shrink-0">${pair.label}</span>
                        <select id="match_${i}" class="flex-1 min-w-0 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none bg-slate-50 font-medium text-slate-700">
                            <option value="" disabled selected>Select…</option>
                            ${session.optionOrder.map(opt => `<option value="${escapeHtml(opt)}">${opt}</option>`).join('')}
                        </select>
                    </div>`).join('')}
                <button onclick="submitAnswer()" class="w-full mt-6 bg-[#0a192f] hover:bg-[#112240] text-white font-bold py-4 px-6 rounded-xl shadow-md">Submit choices</button>
            </div>`;
    } else if (stepData.type === 'viva') {
        interactionHTML = `
            <p class="mt-4 text-sm text-slate-500">Answer out loud as you would to the panel (jot notes below if you like), then reveal the model answer and tick what you actually covered.</p>
            <textarea id="viva-notes" rows="5" class="mt-4 w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none text-slate-700" placeholder="Your answer…"></textarea>
            <button onclick="submitAnswer()" class="w-full mt-4 bg-[#0a192f] hover:bg-[#112240] text-white font-bold py-4 px-6 rounded-xl shadow-md">Reveal model answer</button>`;
    }

    return `
        <div class="w-full max-w-4xl fade-in mt-2">
            <div class="mb-6">
                <div class="flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider gap-4">
                    <span class="truncate">${caseData.title}</span>
                    <span class="flex-shrink-0">Step ${session.stepIdx + 1} of ${totalSteps}</span>
                </div>
                <div class="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-blue-600 h-full transition-all duration-500" style="width: ${progressPct}%"></div>
                </div>
            </div>
            <div class="glass-panel p-6 sm:p-10 rounded-2xl">
                <div class="flex flex-wrap items-center gap-2 mb-4">
                    <span class="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-bold text-xs rounded-md uppercase tracking-wider border border-slate-200">${stepData.phase}</span>
                    <span class="text-xs font-semibold text-slate-400">${examinerFor(caseData)}</span>
                    ${stepData.critical ? '<span class="inline-block px-2 py-1 bg-red-50 text-red-700 font-bold text-xs rounded-md border border-red-200">Safety-critical</span>' : ''}
                </div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-slate-800 leading-snug">${stepData.type === 'reveal' ? (stepData.question || 'The examiner gives you more information') : stepData.question}</h2>
                ${interactionHTML}
            </div>
        </div>`;
}

function continueReveal() {
    advance();
}

// --- ANSWERING ---
function submitAnswer(payload) {
    const stepData = currentStep();
    let last = { type: stepData.type };

    if (stepData.type === 'mcq') {
        last.chosen = payload;
        last.score = payload === stepData.answer ? 10 : 0;
    } else if (stepData.type === 'multi') {
        const chosen = [...document.querySelectorAll('input[name="multi"]:checked')].map(el => parseInt(el.value));
        const correct = new Set(stepData.answers);
        const hits = chosen.filter(i => correct.has(i)).length;
        const wrong = chosen.length - hits;
        last.chosen = chosen;
        last.score = Math.max(0, Math.round(10 * (hits - wrong) / correct.size));
    } else if (stepData.type === 'match') {
        const vals = stepData.pairs.map((_, i) => document.getElementById(`match_${i}`).value);
        const right = vals.filter((v, i) => v === stepData.pairs[i].answer).length;
        last.chosen = vals;
        last.score = Math.round(10 * right / stepData.pairs.length);
    } else if (stepData.type === 'viva') {
        const notes = document.getElementById('viva-notes');
        last.notes = notes ? notes.value : '';
        last.ticked = stepData.points.map(() => false);
        last.score = 0; // set when the self-assessment is confirmed
    }

    session.last = last;
    state.view = 'feedback';
    render();
}

function toggleVivaPoint(i) {
    session.last.ticked[i] = !session.last.ticked[i];
    const stepData = currentStep();
    const n = session.last.ticked.filter(Boolean).length;
    session.last.score = Math.round(10 * n / stepData.points.length);
    const el = document.getElementById('viva-score');
    if (el) el.innerText = `${session.last.score} / 10`;
}

// --- FEEDBACK ---
function verdict(score) {
    if (score >= 8) return { title: 'Clinically sound', color: 'green', icon: 'check' };
    if (score >= 4) return { title: 'Partially there', color: 'amber', icon: 'half' };
    return { title: 'Examiner unconvinced', color: 'red', icon: 'cross' };
}

function buildFeedbackScreen() {
    const stepData = currentStep();
    const last = session.last;
    const caseData = session.cases[session.caseIdx].data;
    let body = '';

    if (stepData.type === 'mcq' || stepData.type === 'multi') {
        const correctSet = new Set(stepData.type === 'mcq' ? [stepData.answer] : stepData.answers);
        const chosenSet = new Set(stepData.type === 'mcq' ? [last.chosen] : last.chosen);
        body = `<div class="space-y-2 text-left mb-6">${session.optionOrder.map(i => {
            const isCorrect = correctSet.has(i);
            const isChosen = chosenSet.has(i);
            let cls = 'border-slate-200 bg-white text-slate-500';
            let tag = '';
            if (isCorrect && isChosen) { cls = 'border-green-400 bg-green-50 text-green-900'; tag = '✓ Your pick'; }
            else if (isCorrect) { cls = 'border-green-300 bg-white text-green-900'; tag = '✓ Correct'; }
            else if (isChosen) { cls = 'border-red-300 bg-red-50 text-red-900'; tag = '✗ Your pick'; }
            return `<div class="p-3 rounded-lg border-2 ${cls} text-sm flex justify-between gap-3"><span>${stepData.options[i]}</span><span class="font-bold text-xs flex-shrink-0">${tag}</span></div>`;
        }).join('')}</div>`;
    } else if (stepData.type === 'match') {
        body = `<div class="space-y-2 text-left mb-6">${stepData.pairs.map((p, i) => {
            const ok = last.chosen[i] === p.answer;
            return `<div class="p-3 rounded-lg border-2 ${ok ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'} text-sm">
                <span class="font-bold">${p.label}</span> → ${p.answer}
                ${ok ? '' : `<div class="text-xs text-red-700 mt-1">You chose: ${last.chosen[i] ? escapeHtml(last.chosen[i]) : '(nothing)'}</div>`}
            </div>`;
        }).join('')}</div>`;
    } else if (stepData.type === 'viva') {
        body = `
            ${last.notes ? `<div class="text-left mb-4 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600 whitespace-pre-wrap"><div class="text-xs font-bold uppercase text-slate-400 mb-1">Your notes</div>${escapeHtml(last.notes)}</div>` : ''}
            <div class="text-left mb-6">
                <div class="flex justify-between items-center mb-2">
                    <div class="text-xs font-bold uppercase tracking-wider text-slate-500">Key points the panel is listening for — tick what you said</div>
                    <div id="viva-score" class="text-sm font-extrabold text-blue-800">${last.score} / 10</div>
                </div>
                <div class="space-y-2">${stepData.points.map((pt, i) => `
                    <label class="flex items-start gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:bg-blue-50 cursor-pointer text-sm text-slate-700">
                        <input type="checkbox" ${last.ticked[i] ? 'checked' : ''} onchange="toggleVivaPoint(${i})" class="mt-0.5 w-5 h-5 accent-blue-700 flex-shrink-0">
                        <span>${pt}</span>
                    </label>`).join('')}
                </div>
            </div>`;
    }

    const isViva = stepData.type === 'viva';
    const v = verdict(last.score);
    const header = isViva
        ? `<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-6">Model answer</h2>`
        : `<div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-${v.color}-100 rounded-full flex items-center justify-center mb-4 text-3xl">${v.icon === 'check' ? '✅' : v.icon === 'half' ? '🟡' : '❌'}</div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-${v.color}-800 mb-1">${v.title}</h2>
                <p class="text-sm font-bold text-slate-500 mb-6">${last.score} / 10${stepData.critical && last.score < 10 ? ' · <span class="text-red-600">safety-critical — this is the kind of error that fails an oral</span>' : ''}</p>
           </div>`;

    const isLastStep = session.stepIdx >= caseData.steps.length - 1;
    const btnText = isLastStep ? (session.caseIdx >= session.cases.length - 1 ? 'Finish' : 'Next case') : 'Next question';

    return `
        <div class="glass-panel p-6 sm:p-10 rounded-2xl w-full max-w-3xl fade-in mt-2">
            <div class="text-center">${header}</div>
            <p class="text-sm font-semibold text-slate-500 mb-4">${stepData.question}</p>
            ${body}
            <div class="w-full bg-slate-50 border-2 border-slate-200 rounded-xl p-5 sm:p-6 mb-6 relative text-left">
                <div class="absolute -top-4 left-6 bg-white rounded-full border border-slate-200 px-4 py-1 shadow-sm text-xs font-bold text-slate-600">🧑‍⚕️ Examiner notes</div>
                <div class="text-base text-slate-800 leading-relaxed prose-answer mt-2">${stepData.explain}</div>
            </div>
            ${stepData.recall ? `
            <div class="w-full bg-amber-50 border-2 border-amber-200 rounded-xl p-5 mb-6 text-left">
                <div class="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">⚠️ Recall check — what past candidates said vs what's correct</div>
                <div class="text-sm text-amber-900 leading-relaxed prose-answer">${stepData.recall}</div>
            </div>` : ''}
            <button onclick="nextPhase()" class="w-full bg-[#0a192f] hover:bg-[#112240] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                ${btnText}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
        </div>`;
}

function nextPhase() {
    const entry = session.cases[session.caseIdx];
    entry.stepScores[session.stepIdx] = session.last.score;
    session.score += session.last.score;
    advance();
}

function advance() {
    const entry = session.cases[session.caseIdx];
    const caseData = entry.data;
    session.optionOrder = null;
    session.last = null;
    if (session.stepIdx < caseData.steps.length - 1) {
        session.stepIdx++;
        state.view = 'question';
    } else {
        completeCase(entry);
        if (session.caseIdx < session.cases.length - 1) {
            session.caseIdx++;
            session.stepIdx = 0;
            state.view = 'case-intro';
        } else {
            finishSession();
            return;
        }
    }
    render();
}

function completeCase(entry) {
    const max = caseMax(entry.data);
    const got = entry.stepScores.reduce((a, b) => a + (b || 0), 0);
    entry.done = true;
    if (max > 0) recordCaseResult(entry.data.id, Math.round(100 * got / max));
}

function finishSession() {
    endTimer();
    state.view = 'end';
    render();
}

// --- END SCREEN ---
function buildEndScreen() {
    const attempted = session.cases.filter(e => e.done || e.stepScores.length);
    const maxScore = attempted.reduce((acc, e) => acc + caseMax(e.data), 0);
    const pct = maxScore ? Math.round(100 * session.score / maxScore) : 0;
    let finalMessage, emoji;
    if (pct >= 90) { finalMessage = 'Excellent. Safe, structured and you could justify your choices — exactly what the panel wants.'; emoji = '🏆'; }
    else if (pct >= PASS_PCT) { finalMessage = 'A solid pass. Tighten up the weaker steps below — especially contraindications, doses and referral timing.'; emoji = '✅'; }
    else { finalMessage = 'Not there yet. Revisit the missed steps, the Answer Audit and the safety-critical red flags before the real thing.'; emoji = '📚'; }

    const rows = session.cases.map(e => {
        const cat = getCategory(e.data.category);
        const max = caseMax(e.data);
        const got = e.stepScores.reduce((a, b) => a + (b || 0), 0);
        const status = e.done ? `${Math.round(100 * got / max)}%` : (e.stepScores.length ? 'Unfinished' : 'Not reached');
        const weak = e.data.steps.map((s, i) => ({ s, i })).filter(({ s, i }) => s.type !== 'reveal' && e.stepScores[i] !== undefined && e.stepScores[i] < 8);
        return `<div class="border border-slate-200 rounded-xl p-4 text-left bg-white">
            <div class="flex justify-between gap-3 items-start">
                <div>
                    <span class="inline-block px-2 py-0.5 font-bold text-[10px] rounded-full uppercase tracking-wider badge-${cat.id}">${cat.title}</span>
                    <div class="font-bold text-slate-800 mt-1">${e.data.title}</div>
                </div>
                <div class="font-extrabold text-blue-800 flex-shrink-0">${status}</div>
            </div>
            ${weak.length ? `<ul class="mt-2 text-xs text-slate-500 list-disc pl-5">${weak.map(({ s }) => `<li>${s.phase}</li>`).join('')}</ul>` : ''}
            <button onclick="startCase('${e.data.id}')" class="mt-3 text-xs font-bold text-blue-700 hover:underline">Retry this case →</button>
        </div>`;
    }).join('');

    return `
        <div class="glass-panel p-6 sm:p-10 rounded-2xl w-full max-w-3xl text-center fade-in mt-4">
            <div class="text-6xl mb-4">${session.timeUp ? '🔔' : emoji}</div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">${session.timeUp ? "Time's up" : 'Examination complete'}</h2>
            <p class="text-slate-500 mb-8 uppercase tracking-widest font-bold text-sm">${session.mode === 'mock' ? 'Mock oral · panel verdict' : 'Practice summary'}</p>
            <div class="flex justify-center items-end gap-3 mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <span class="text-6xl font-black text-blue-600">${session.score}</span>
                <span class="text-2xl text-slate-400 font-bold mb-2">/ ${maxScore}</span>
                <span class="text-xl text-slate-500 font-bold mb-2 ml-2">(${pct}%)</span>
            </div>
            <div class="bg-white border border-slate-200 rounded-xl p-6 mb-8 relative shadow-sm">
                <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-900 text-white rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">Final feedback</div>
                <p class="text-lg font-medium text-slate-700 leading-relaxed italic">"${finalMessage}"</p>
            </div>
            <div class="space-y-3 mb-8">${rows}</div>
            <button onclick="resetGame()" class="bg-[#0a192f] hover:bg-[#112240] text-white font-bold py-4 px-10 rounded-xl shadow-md">Return to dashboard</button>
        </div>`;
}

function resetGame() {
    session = null;
    state.view = 'start';
    render();
}

// --- RECALL BANK ---
function buildRecallBank() {
    const years = [...new Set(allCases.flatMap(c => c.years || []))].sort();
    const sections = categories.map(cat => {
        const cases = allCases.filter(c => c.category === cat.id);
        const rows = cases.map(c => {
            const p = progress[c.id];
            const cells = years.map(y => `<td class="px-2 py-2 text-center">${(c.years || []).includes(y) ? '●' : '<span class="text-slate-200">·</span>'}</td>`).join('');
            return `<tr class="border-t border-slate-100 hover:bg-slate-50">
                <td class="px-3 py-2"><div class="font-semibold text-slate-800">${c.title}</div><div class="text-xs text-slate-400">${c.theme}</div></td>
                ${cells}
                <td class="px-2 py-2 text-center text-xs font-bold ${p ? (p.last >= PASS_PCT ? 'text-green-700' : 'text-red-600') : 'text-slate-300'}">${p ? p.last + '%' : '—'}</td>
                <td class="px-3 py-2 text-right"><button onclick="startCase('${c.id}')" class="text-xs font-bold text-blue-700 hover:underline whitespace-nowrap">Practise →</button></td>
            </tr>`;
        }).join('');
        return `<div class="bg-white border border-slate-200 rounded-2xl shadow-sm mb-6 overflow-hidden">
            <div class="px-4 sm:px-6 py-4 flex items-center gap-3 border-b border-slate-100"><span class="text-xl">${cat.icon}</span><h3 class="font-extrabold text-slate-800">${cat.title}</h3><span class="text-xs text-slate-400 font-semibold">${cases.length} cases</span></div>
            <div class="overflow-x-auto"><table class="w-full text-sm">
                <thead><tr class="text-xs uppercase text-slate-400"><th class="px-3 py-2 text-left">Case</th>${years.map(y => `<th class="px-2 py-2">${y}</th>`).join('')}<th class="px-2 py-2">Last</th><th></th></tr></thead>
                <tbody>${rows}</tbody>
            </table></div>
        </div>`;
    }).join('');
    return `<div class="w-full max-w-5xl fade-in">
        <h2 class="text-2xl font-extrabold text-slate-800 mb-2">Recall Bank</h2>
        <p class="text-slate-500 mb-6 text-sm">Every topic that appeared in the 2018, 2019 and 2025 recalls (plus the 2025 mock orals), sorted by topic. ● = that topic was examined that year. Jump straight into any case.</p>
        ${sections}
    </div>`;
}

// --- ANSWER AUDIT ---
function buildCorrections() {
    const tagCls = { 'Incorrect': 'bg-red-100 text-red-800 border-red-200', 'Partly correct': 'bg-amber-100 text-amber-800 border-amber-200', 'Correct': 'bg-green-100 text-green-800 border-green-200' };
    const groups = categories.map(cat => {
        const items = corrections.filter(c => c.category === cat.id);
        if (!items.length) return '';
        return `<div class="mb-8">
            <h3 class="font-extrabold text-slate-800 mb-3 flex items-center gap-2"><span>${cat.icon}</span>${cat.title}</h3>
            <div class="space-y-3">${items.map(it => `
                <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm">
                    <div class="flex flex-wrap items-center gap-2 mb-2">
                        <span class="px-2 py-0.5 text-xs font-bold rounded-full border ${tagCls[it.verdict]}">${it.verdict}</span>
                        <span class="text-xs font-bold text-slate-400">${it.source}</span>
                    </div>
                    <p class="text-sm text-slate-500 italic mb-2">Candidate answer: “${it.claim}”</p>
                    <p class="text-sm text-slate-800 leading-relaxed">${it.correction}</p>
                </div>`).join('')}
            </div>
        </div>`;
    }).join('');
    const n = corrections.length;
    const wrong = corrections.filter(c => c.verdict === 'Incorrect').length;
    return `<div class="w-full max-w-4xl fade-in">
        <h2 class="text-2xl font-extrabold text-slate-800 mb-2">Answer Audit</h2>
        <p class="text-slate-500 mb-6 text-sm">The recall documents are student-written, so ${n} specific answers were checked against Australian practice (AMH/eTG, TGA pregnancy categories, product information, OBA scheduled medicines guideline, RANZCO glaucoma referral pathway, landmark trials). ${wrong} were wrong outright; the rest were partly right or worth confirming. These corrections are also built into the matching case steps.</p>
        ${groups}
    </div>`;
}

// --- EXAM GUIDE ---
function buildExamGuide() {
    const card = (title, html) => `<div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"><h3 class="font-extrabold text-slate-800 mb-3">${title}</h3><div class="text-sm text-slate-700 leading-relaxed prose-answer">${html}</div></div>`;
    return `<div class="w-full max-w-5xl fade-in">
        <h2 class="text-2xl font-extrabold text-slate-800 mb-2">How the real oral runs</h2>
        <p class="text-slate-500 mb-6 text-sm">Pieced together from candidate recalls across 2018, 2019 and 2025.</p>
        <div class="grid md:grid-cols-2 gap-6">
            ${card('Format', `<ul>
                <li><strong>~20 minutes</strong>, two examiners — usually one runs an <strong>anterior-eye</strong> case, the other a <strong>glaucoma / posterior / neuro</strong> case.</li>
                <li>Many sessions open with <strong>case report questions</strong> (“What did you learn?”, then questions built from the marker's feedback). Some panels skip them.</li>
                <li>If you're quick, expect a <strong>third or fourth case</strong>. Finishing early is not a bad sign.</li>
                <li>Photos are often <strong>blurry printouts</strong> — describe what you can see, say what you'd want to confirm.</li>
                <li>Pen and paper availability varied by panel.</li></ul>`)}
            ${card('The usual flow of a case', `<ul>
                <li><strong>Describe</strong> the photo (location, size, depth, colour, laterality).</li>
                <li><strong>History</strong> questions — in lay language (“have you started any new creams?”).</li>
                <li><strong>Differentials</strong> and how you'd tell them apart.</li>
                <li><strong>Work-up</strong> — the panel then reveals results (IOP, CCT, gonio, VF, OCT).</li>
                <li><strong>Management</strong>: drug, brand, concentration, dose, duration — and <strong>contraindications</strong> before you instil anything.</li>
                <li><strong>Review</strong> timing and what you expect to see; <strong>referral</strong> triggers and urgency; <strong>prognosis</strong>.</li>
                <li>Pharmacology on demand: mechanism of action, drug class, Gram coverage, pregnancy category, PBS status.</li></ul>`)}
            ${card('Australian scope reminders', `<ul>
                <li>Endorsed optometrists prescribe <strong>topical</strong> ocular medicines. Oral drugs (acetazolamide, antivirals, antibiotics, doxycycline) go through the GP, ophthalmologist or ED — say who you'd call and why.</li>
                <li>Glaucoma: under the OBA scheduled-medicines guideline, refer to an ophthalmologist <strong>within 4 months</strong> of starting treatment, with a collaborative care plan. Use the <strong>RANZCO referral pathway</strong> to decide what's suitable for collaborative care (secondary and complex glaucomas usually aren't).</li>
                <li>Fortified antibiotics and antifungals are hospital-compounded — refer.</li>
                <li>Quote <strong>TGA (Australian) pregnancy categories</strong>, not US FDA ones.</li>
                <li>Check the current OBA guideline, PBS schedule and product information — they change.</li></ul>`)}
            ${card('What examiners rewarded', `<ul>
                <li>Saying “<em>provided there are no contraindications</em>” — then naming them.</li>
                <li>“Patients have two eyes” — check the fellow eye (angle, disc, field).</li>
                <li>Always dilating uveitis to rule out posterior involvement.</li>
                <li>Checking BP before and after phenylephrine 10%.</li>
                <li>Knowing <em>why</em>: e.g. prednisolone acetate is a lipophilic suspension → better corneal penetration than sodium phosphate.</li>
                <li>Standing your ground when you're right (“Are you sure?” is often a test).</li>
                <li>Quoting trials accurately: OHTS, EMGT, CNTGS, LoGTS, LiGHT, ZAP, EAGLE, SCUT, MUTT, HEDS.</li></ul>`)}
            ${card('Landmark trials — one-liners', `<ul>
                <li><strong>OHTS</strong>: treating OHT (≥20% IOP reduction) cut 5-year conversion from 9.5% to 4.4%. Risk factors: age, IOP, thin CCT, larger VCDR, PSD.</li>
                <li><strong>EMGT</strong>: treatment halved progression; each 1 mmHg lower ≈ 10% less risk. Untreated MD loss: PXF ≈ −3.1, high-tension ≈ −1.3, NTG ≈ −0.4 dB/yr.</li>
                <li><strong>CNTGS</strong>: 30% IOP reduction in NTG → progression 12% vs 35% untreated.</li>
                <li><strong>LoGTS</strong>: fewer NTG patients progressed on brimonidine than timolol (more brimonidine dropouts from allergy).</li>
                <li><strong>LiGHT</strong>: primary SLT — ~74% drop-free at 3 years; cost-effective; safe.</li>
                <li><strong>ZAP</strong>: prophylactic LPI in PACS (Chinese) — real but small benefit, not routinely needed.</li>
                <li><strong>EAGLE</strong>: clear lens extraction beat LPI for PAC (IOP ≥30) / PACG.</li>
                <li><strong>SCUT</strong>: adjunct steroid (pred phosphate 1%, after 48 h moxifloxacin) — no overall benefit; possible help in severe central ulcers; avoid in Nocardia.</li>
                <li><strong>MUTT I</strong>: natamycin beat voriconazole for filamentous (esp. Fusarium) keratitis.</li>
                <li><strong>HEDS</strong>: oral aciclovir 400 mg BD halved HSV recurrences; topical steroid + antiviral helps stromal keratitis.</li></ul>`)}
            ${card('Answer framework to practise', `<ol class="list-decimal pl-5 space-y-1">
                <li>What I see → most likely diagnosis.</li>
                <li>Top 3 differentials + the one sign/test that separates each.</li>
                <li>Work-up I'd do (and why).</li>
                <li>Management: drug (brand), strength, frequency, duration — after checking contraindications.</li>
                <li>Review: when, and what I expect to see.</li>
                <li>Refer: who, how urgently, what they'll do.</li>
                <li>Educate: compliance, warning signs, prognosis.</li></ol>`)}
        </div>
    </div>`;
}

// Initialise application
render();
