// ─────────────────────────────────────────────
//  STATE & STORAGE
// ─────────────────────────────────────────────
let screen          = 'home';
let data            = loadData();
let timerInterval   = null;
let expandedSession = null;

function loadData() {
  try { return JSON.parse(localStorage.getItem('cali_v3')) || defaultData(); }
  catch(e) { return defaultData(); }
}

function defaultData() {
  return {
    inProgress: null,
    sessions: [],
    skills: {
      handstand:    'Freestanding ~3s',
      'hs-wall':    'Solid 20-30s',
      planche:      'Planche lean 15-20s',
      'front-lever':'Not started',
      'muscle-up':  'Not started',
      pullups:      '11-15 reps max',
      dips:         '15-20 reps max',
      lsit:         'Working on it',
      hollow:       'Working on it',
      pistol:       'With box assist',
    }
  };
}

function save() { localStorage.setItem('cali_v3', JSON.stringify(data)); }
function today() { return new Date().toISOString().slice(0, 10); }

// ─────────────────────────────────────────────
//  TIMER
// ─────────────────────────────────────────────
function getElapsedMs() {
  if (!data.inProgress) return 0;
  let e = data.inProgress.timerElapsed || 0;
  if (data.inProgress.timerRunning && data.inProgress.timerStart) {
    e += Date.now() - data.inProgress.timerStart;
  }
  return e;
}

function fmtTime(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return h + ':' + pad(m % 60) + ':' + pad(s % 60);
  return pad(m) + ':' + pad(s % 60);
}

function pad(n) { return String(n).padStart(2, '0'); }

function startTimerInterval() {
  if (timerInterval) return;
  timerInterval = setInterval(tickTimer, 1000);
}

function stopTimerInterval() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function tickTimer() {
  const el = document.getElementById('timer-display');
  if (!el) { stopTimerInterval(); return; }
  el.textContent = fmtTime(getElapsedMs());
}

function toggleTimer() {
  if (!data.inProgress) return;
  if (data.inProgress.timerRunning) {
    data.inProgress.timerElapsed += Date.now() - data.inProgress.timerStart;
    data.inProgress.timerStart    = null;
    data.inProgress.timerRunning  = false;
    stopTimerInterval();
    const el  = document.getElementById('timer-display');
    const btn = document.getElementById('timer-btn');
    if (el)  { el.textContent = fmtTime(getElapsedMs()); el.classList.add('paused'); }
    if (btn) { btn.textContent = '▶'; btn.className = 'timer-btn paused'; }
  } else {
    data.inProgress.timerStart   = Date.now();
    data.inProgress.timerRunning = true;
    startTimerInterval();
    const el  = document.getElementById('timer-display');
    const btn = document.getElementById('timer-btn');
    if (el)  el.classList.remove('paused');
    if (btn) { btn.textContent = '⏸'; btn.className = 'timer-btn running'; }
  }
  save();
}

// ─────────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────────
function go(s) {
  if (screen === 'workout' && s !== 'workout') stopTimerInterval();
  screen = s;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const el = document.getElementById('nav-' + s);
  if (el) el.classList.add('active');
  render();
  window.scrollTo(0, 0);
}

function startDay(day) {
  if (data.inProgress && data.inProgress.day !== day) {
    if (!confirm(`You have an unfinished Day ${data.inProgress.day}. Start Day ${day} instead?`)) return;
    stopTimerInterval();
    data.inProgress = null;
  }
  if (!data.inProgress) {
    data.inProgress = {
      day, date: today(),
      timerElapsed: 0, timerRunning: true, timerStart: Date.now(),
      energy: 0, checks: {}, values: {}, notes: ''
    };
  }
  save();
  screen = 'workout';
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  render();
  window.scrollTo(0, 0);
  if (data.inProgress.timerRunning) startTimerInterval();
}

// ─────────────────────────────────────────────
//  WORKOUT ACTIONS
// ─────────────────────────────────────────────
function toggleCheck(key) {
  if (!data.inProgress) return;
  data.inProgress.checks[key] = !data.inProgress.checks[key];
  save();
  const btn = document.querySelector(`[data-key="${key}"]`);
  if (btn) {
    const on = data.inProgress.checks[key];
    btn.classList.toggle('done', on);
    btn.textContent = on ? '✓' : '';
    const lbl = btn.closest('.check-item')?.querySelector('.check-item-label');
    if (lbl) lbl.classList.toggle('struck', on);
  }
  refreshProgress();
}

function setVal(key, val) {
  if (!data.inProgress) return;
  data.inProgress.values[key] = val;
  save();
}

function setEnergy(e) {
  if (!data.inProgress) return;
  data.inProgress.energy = e;
  save();
  document.querySelectorAll('.energy-btn').forEach((b, i) => b.classList.toggle('sel', i + 1 === e));
}

function setNotes(v) {
  if (data.inProgress) { data.inProgress.notes = v; save(); }
}

function getProgress() {
  if (!data.inProgress) return { done: 0, total: 0 };
  let total = 0, done = 0;
  PROGRAM[data.inProgress.day].sections.forEach(sec => {
    sec.exercises.forEach(ex => {
      if (ex.single || ex.note) {
        total++; if (data.inProgress.checks[ex.id]) done++;
      } else {
        for (let i = 0; i < ex.sets; i++) {
          total++; if (data.inProgress.checks[ex.id + '-' + i]) done++;
        }
      }
    });
  });
  return { done, total };
}

function refreshProgress() {
  const { done, total } = getProgress();
  const pct  = total ? Math.round(done / total * 100) : 0;
  const fill = document.getElementById('pf');
  const lbl  = document.getElementById('pl');
  const pctEl= document.getElementById('pp');
  if (fill)  fill.style.width  = pct + '%';
  if (lbl)   lbl.textContent   = done + '/' + total + ' sets';
  if (pctEl) pctEl.textContent = pct + '%';
}

function completeSession() {
  if (!data.inProgress) return;
  const { done, total } = getProgress();
  let elapsed = data.inProgress.timerElapsed || 0;
  if (data.inProgress.timerRunning && data.inProgress.timerStart) {
    elapsed += Date.now() - data.inProgress.timerStart;
  }
  stopTimerInterval();
  data.sessions.unshift({
    day:    data.inProgress.day,
    date:   data.inProgress.date,
    energy: data.inProgress.energy,
    done, total,
    dur:    fmtTime(elapsed),
    notes:  data.inProgress.notes,
    checks: { ...data.inProgress.checks },
    values: { ...data.inProgress.values },
  });
  if (data.sessions.length > 60) data.sessions.length = 60;
  data.inProgress = null;
  save();
  go('home');
}

function discardSession() {
  if (!confirm('Discard this session? All progress will be lost.')) return;
  stopTimerInterval();
  data.inProgress = null;
  save();
  go('home');
}

function deleteSession(index) {
  if (!confirm('Remove this session from history?')) return;
  data.sessions.splice(index, 1);
  save();
  render();
}

// ─────────────────────────────────────────────
//  SESSION DETAIL (history expand/collapse)
// ─────────────────────────────────────────────
function toggleSession(index) {
  expandedSession = expandedSession === index ? null : index;
  const detailEl  = document.getElementById('sess-detail-' + index);
  const chevronEl = document.getElementById('sess-chevron-' + index);
  if (!detailEl) return;
  const isOpen = expandedSession === index;
  detailEl.innerHTML = isOpen ? renderSessionDetail(data.sessions[index]) : '';
  if (chevronEl) chevronEl.textContent = isOpen ? '▾' : '▸';
}

function renderSessionDetail(session) {
  if (!session.checks) {
    return '<p style="padding:10px 0;color:var(--text2);font-size:12px;font-style:italic">No set data — recorded before detailed tracking was added.</p>';
  }
  const prog      = PROGRAM[session.day];
  const typeLabel = { warmup:'Warm-up', skill:'Skill', strength:'Strength', legs:'Legs', core:'Core', accessory:'Accessory' };

  return prog.sections.map(sec => {
    const exRows = sec.exercises.map(ex => {
      if (ex.single) {
        const done = session.checks[ex.id] || false;
        return `<div class="detail-item">
          <span class="detail-chk ${done ? 'done' : ''}">${done ? '✓' : '✗'}</span>
          <span class="detail-ex-name">${ex.name}</span>
        </div>`;
      }
      if (ex.note) {
        const done = session.checks[ex.id] || false;
        const val  = session.values?.[ex.id] || '';
        return `<div class="detail-item">
          <span class="detail-chk ${done ? 'done' : ''}">${done ? '✓' : '✗'}</span>
          <span class="detail-ex-name">${ex.name}</span>
          ${val ? `<span class="detail-val">${val}</span>` : ''}
        </div>`;
      }
      // multi-set
      const setRows = Array.from({ length: ex.sets }, (_, i) => {
        const key  = ex.id + '-' + i;
        const done = session.checks?.[key] || false;
        const val  = session.values?.[key] || '';
        const wgt  = session.values?.[key + '_w'] || '';
        const display = [wgt ? wgt + 'kg' : '', val ? val + ' ' + ex.unit : ''].filter(Boolean).join(' · ');
        return `<div class="detail-set-row">
          <span class="detail-chk ${done ? 'done' : ''}">${done ? '✓' : '✗'}</span>
          <span class="detail-set-lbl">Set ${i + 1}</span>
          <span class="detail-set-val">${display || '—'}</span>
        </div>`;
      }).join('');
      return `<div class="detail-ex">
        <div class="detail-ex-header">
          <span class="detail-ex-name">${ex.name}</span>
          <span class="detail-ex-target">${ex.target}</span>
        </div>
        ${setRows}
      </div>`;
    }).join('');

    return `<div class="detail-section">
      <div class="detail-sec-label">
        <span class="badge ${sec.type}">${typeLabel[sec.type] || sec.type}</span>
        <span style="font-size:12px;font-weight:700">${sec.name}</span>
      </div>
      ${exRows}
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────────
function updateSkill(id, v) { data.skills[id] = v; save(); }

// ─────────────────────────────────────────────
//  IMPORT / EXPORT
// ─────────────────────────────────────────────
function exportData() {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'cali-backup-' + today() + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importData() {
  const input    = document.createElement('input');
  input.type     = 'file';
  input.accept   = '.json,application/json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      try {
        const imported = JSON.parse(evt.target.result);
        if (!Array.isArray(imported.sessions) || !imported.skills) {
          alert('Invalid backup file.');
          return;
        }
        if (confirm(`Import ${imported.sessions.length} sessions? Your current data will be replaced.`)) {
          stopTimerInterval();
          data = imported;
          save();
          screen = 'home';
          render();
        }
      } catch(err) {
        alert('Could not read file. Make sure it\'s a valid .json backup.');
      }
    };
    reader.readAsText(file);
  };
  document.body.appendChild(input);
  input.click();
  document.body.removeChild(input);
}

// ─────────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────────
function render() {
  document.getElementById('app').innerHTML = ({
    home:    renderHome,
    workout: renderWorkout,
    skills:  renderSkills,
    history: renderHistory,
  }[screen] || renderHome)();
  if (screen === 'workout' && data.inProgress?.timerRunning) startTimerInterval();
}

// ── HOME ──────────────────────────────────────
function renderHome() {
  const now     = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  const sesDates= new Set(data.sessions.map(s => s.date));
  const weekHtml= Array.from({ length: 7 }, (_, i) => {
    const d   = new Date(now); d.setDate(d.getDate() - 6 + i);
    const iso = d.toISOString().slice(0, 10);
    const lbl = d.toLocaleDateString('en', { weekday: 'short' })[0];
    return `<div class="week-day ${sesDates.has(iso) ? 'done' : ''}">${lbl}</div>`;
  }).join('');

  const lastSes   = data.sessions[0];
  const suggested = lastSes ? (lastSes.day % 4) + 1 : 1;

  const resumeHtml = data.inProgress ? `
    <div class="resume-card">
      <div class="resume-header">
        <span class="tag ${DAY_COLORS[data.inProgress.day]}">Day ${data.inProgress.day} in progress</span>
        <span style="font-size:13px;font-weight:700;color:var(--accent)">${fmtTime(getElapsedMs())}</span>
      </div>
      <button class="btn-primary" style="margin-top:0" onclick="startDay(${data.inProgress.day})">Resume Session →</button>
    </div>` : '';

  const dayCards = [1, 2, 3, 4].map(d => `
    <button class="day-card ${d === suggested && !data.inProgress ? 'suggested' : ''}" onclick="startDay(${d})">
      <div class="day-num">${d}</div>
      <div class="day-name">${PROGRAM[d].title}</div>
      <div class="day-focus">${PROGRAM[d].subtitle}</div>
    </button>`).join('');

  const altCard = `
    <div class="section-label" style="margin-top:16px">No rings yet? Use this instead of Day 4</div>
    <button class="day-card" style="width:100%;border-color:rgba(14,165,233,0.35)" onclick="startDay(5)">
      <div class="day-num" style="color:#38bdf8">5</div>
      <div class="day-name">${PROGRAM[5].title}</div>
      <div class="day-focus">${PROGRAM[5].subtitle}</div>
    </button>`;

  return `
    <div class="home-top">
      <div class="home-date">${dateStr}</div>
      <div class="home-title">Let's train 💪</div>
    </div>
    <div class="padded">
      <div class="week-bar">${weekHtml}</div>
      ${resumeHtml}
      <div class="section-label">${data.inProgress ? 'Start different day' : lastSes ? `Suggested: Day ${suggested}` : 'Choose your day'}</div>
      <div class="day-grid">${dayCards}</div>
      ${altCard}
    </div>`;
}

// ── WORKOUT ───────────────────────────────────
function renderWorkout() {
  if (!data.inProgress) return renderHome();
  const day  = data.inProgress.day;
  const prog = PROGRAM[day];
  const { done, total } = getProgress();
  const pct  = total ? Math.round(done / total * 100) : 0;
  const isRunning = data.inProgress.timerRunning;

  const sections   = prog.sections.map(renderSection).join('');
  const energyBtns = [1,2,3,4,5].map(e =>
    `<button class="energy-btn ${data.inProgress.energy === e ? 'sel' : ''}" onclick="setEnergy(${e})">${e}</button>`
  ).join('');

  return `
    <div class="header">
      <button class="back-btn" onclick="go('home')">←</button>
      <div class="header-info">
        <div class="header-sub">Day ${day}</div>
        <div class="header-title">${prog.title} · ${prog.subtitle}</div>
      </div>
      <div class="timer-block">
        <div class="timer-display ${isRunning ? '' : 'paused'}" id="timer-display">${fmtTime(getElapsedMs())}</div>
        <button class="timer-btn ${isRunning ? 'running' : 'paused'}" id="timer-btn" onclick="toggleTimer()">
          ${isRunning ? '⏸' : '▶'}
        </button>
        <button class="cancel-btn" onclick="discardSession()" title="Cancel session">✕</button>
      </div>
    </div>
    <div class="progress-row">
      <span class="progress-label" id="pl">${done}/${total} sets</span>
      <span class="progress-pct"   id="pp">${pct}%</span>
    </div>
    <div class="progress-bar"><div class="progress-fill" id="pf" style="width:${pct}%"></div></div>
    <div class="padded">
      ${sections}
      <div class="card" style="margin-top:18px">
        <div class="card-title">Energy level</div>
        <div class="energy-row">${energyBtns}</div>
      </div>
      <div class="card">
        <div class="card-title">Session notes</div>
        <textarea class="notes-ta" placeholder="Anything that clicked, felt off, or was a breakthrough…"
          oninput="setNotes(this.value)">${data.inProgress.notes || ''}</textarea>
      </div>
      <button class="btn-primary" onclick="completeSession()">Complete Session ✓</button>
      <button class="btn-ghost"   onclick="go('home')">Save &amp; continue later</button>
      <button class="discard-link" onclick="discardSession()">Discard session</button>
    </div>`;
}

function renderSection(sec) {
  const lbl = { warmup:'Warm-up', skill:'Skill', strength:'Strength', legs:'Legs', core:'Core', accessory:'Accessory' };
  return `
    <div class="section-header">
      <span class="badge ${sec.type}">${lbl[sec.type] || sec.type}</span>
      <span class="section-name-text">${sec.name}</span>
    </div>
    ${sec.exercises.map(renderExercise).join('')}`;
}

function renderExercise(ex) {
  if (ex.single) {
    const on = data.inProgress?.checks[ex.id] || false;
    return `
      <div class="exercise" onclick="toggleCheck('${ex.id}')">
        <div class="check-item" style="padding:0;border:none">
          <div class="set-check ${on ? 'done' : ''}" data-key="${ex.id}">${on ? '✓' : ''}</div>
          <span class="check-item-label ${on ? 'struck' : ''}">${ex.name}</span>
          ${ex.target ? `<span class="check-item-sub">${ex.target}</span>` : ''}
        </div>
      </div>`;
  }

  if (ex.note) {
    const on  = data.inProgress?.checks[ex.id] || false;
    const val = data.inProgress?.values[ex.id] || '';
    return `
      <div class="exercise">
        <div class="ex-header">
          <span class="ex-name">${ex.name}</span>
          <span class="ex-target">${ex.target}</span>
        </div>
        <div class="note-row">
          <button class="set-check ${on ? 'done' : ''}" data-key="${ex.id}" onclick="toggleCheck('${ex.id}')">${on ? '✓' : ''}</button>
          <span class="note-label">Done</span>
          <input class="set-input" type="text" inputmode="decimal" placeholder="${ex.notePh || '—'}" value="${val}"
            onchange="setVal('${ex.id}', this.value)" onclick="event.stopPropagation()">
        </div>
      </div>`;
  }

  const setRows = Array.from({ length: ex.sets }, (_, i) => {
    const key  = ex.id + '-' + i;
    const on   = data.inProgress?.checks[key] || false;
    const val  = data.inProgress?.values[key] || '';
    const wKey = key + '_w';
    const wgt  = ex.weight
      ? `<input class="set-input" style="max-width:52px" type="text" inputmode="decimal"
           placeholder="kg" value="${data.inProgress?.values[wKey] || ''}"
           onchange="setVal('${wKey}', this.value)" onclick="event.stopPropagation()">`
      : '';
    return `
      <div class="set-row">
        <button class="set-check ${on ? 'done' : ''}" data-key="${key}" onclick="toggleCheck('${key}')">${on ? '✓' : ''}</button>
        <span class="set-label">Set ${i + 1}</span>
        ${wgt}
        <input class="set-input" type="text" inputmode="decimal" placeholder="—" value="${val}"
          onchange="setVal('${key}', this.value)" onclick="event.stopPropagation()">
        <span class="set-unit">${ex.unit}</span>
      </div>`;
  }).join('');

  return `
    <div class="exercise">
      <div class="ex-header">
        <span class="ex-name">${ex.name}</span>
        <span class="ex-target">${ex.target}</span>
      </div>
      ${setRows}
    </div>`;
}

// ── SKILLS ────────────────────────────────────
function renderSkills() {
  const rows = SKILL_DEFS.map(s => `
    <div class="skill-row">
      <div class="skill-top">
        <span class="skill-name2">${s.name}</span>
        <span class="skill-next">→ ${s.next}</span>
      </div>
      <input class="skill-input" type="text" placeholder="Current level…"
        value="${(data.skills[s.id] || '').replace(/"/g, '&quot;')}"
        onchange="updateSkill('${s.id}', this.value)">
    </div>`).join('');

  return `
    <div class="header"><div class="header-title">Skill Snapshot</div></div>
    <div class="padded">
      <div class="card">
        <div class="card-title">Tap any field to update · saves automatically</div>
        ${rows}
      </div>
    </div>`;
}

// ── HISTORY ───────────────────────────────────
function renderHistory() {
  const total     = data.sessions.length;
  const totalSets = data.sessions.reduce((a, s) => a + (s.done || 0), 0);

  const emptyState = !total ? `
    <div class="empty">
      <div class="empty-icon">📋</div>
      <p>No sessions yet.<br>Complete your first workout<br>to see history here.</p>
    </div>` : '';

  const statsBlock = total ? `
    <div class="card" style="margin-bottom:14px">
      <div class="stats-row">
        <div class="stat-block"><div class="stat-num">${total}</div><div class="stat-lbl">Sessions</div></div>
        <div class="stat-block"><div class="stat-num">${totalSets}</div><div class="stat-lbl">Sets done</div></div>
      </div>
    </div>` : '';

  const cards = data.sessions.map((s, i) => {
    const pct    = s.total ? Math.round(s.done / s.total * 100) : 0;
    const isOpen = expandedSession === i;
    return `
      <div class="sess-card" onclick="toggleSession(${i})">
        <div class="sess-top">
          <div>
            <span class="tag ${DAY_COLORS[s.day]}">Day ${s.day}</span>
            <span style="font-size:12px;color:var(--text2);margin-left:7px">${DAY_TITLES[s.day]}</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <span class="sess-date">${s.date}</span>
            <button class="sess-del" onclick="deleteSession(${i});event.stopPropagation()" title="Remove">✕</button>
            <span class="sess-chevron" id="sess-chevron-${i}">${isOpen ? '▾' : '▸'}</span>
          </div>
        </div>
        <div class="sess-metas">
          <span class="sess-meta">Sets <b>${s.done}/${s.total}</b></span>
          ${s.energy ? `<span class="sess-meta">Energy <b>${s.energy}/5</b></span>` : ''}
          ${s.dur    ? `<span class="sess-meta">Time <b>${s.dur}</b></span>` : ''}
        </div>
        <div class="pct-bar"><div class="pct-fill" style="width:${pct}%;background:${DAY_ACCENTS[s.day]}"></div></div>
        ${s.notes ? `<div class="sess-notes-text">"${s.notes}"</div>` : ''}
        <div class="sess-detail" id="sess-detail-${i}">${isOpen ? renderSessionDetail(s) : ''}</div>
      </div>`;
  }).join('');

  return `
    <div class="header"><div class="header-title">History</div></div>
    <div class="padded">
      ${statsBlock}
      ${emptyState}
      ${cards}
      <div class="btn-row">
        <button class="btn-half export-btn" onclick="exportData()">⬇ Export Backup</button>
        <button class="btn-half import-btn" onclick="importData()">⬆ Import Backup</button>
      </div>
      <p class="backup-note">Data lives in Safari's localStorage.<br>Export regularly as a backup.</p>
    </div>`;
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
render();
if (data.inProgress?.timerRunning && screen === 'workout') startTimerInterval();
