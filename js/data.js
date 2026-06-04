// ─────────────────────────────────────────────
//  PROGRAM — edit this file to change exercises
// ─────────────────────────────────────────────

const PROGRAM = {
  1: {
    title: 'Push', subtitle: 'Planche · Handstand',
    sections: [
      { id: 's1wu', name: 'Warm-up', type: 'warmup', exercises: [
        { id: 'd1wu1', name: 'Wrist circles + stretches', target: '1 min',          single: true },
        { id: 'd1wu2', name: 'Cat-cow',                   target: '× 10',           single: true },
        { id: 'd1wu3', name: 'Shoulder CARs',             target: '× 5 each side',  single: true },
        { id: 'd1wu4', name: 'Band pull-aparts',          target: '× 20',           single: true },
      ]},
      { id: 's1pl', name: 'Planche', type: 'skill', exercises: [
        { id: 'd1-pl-lean', name: 'Planche lean',        target: '4 × 15-20s',   sets: 4, unit: 's' },
        { id: 'd1-tuck',    name: 'Tuck planche hold',   target: '3 × max hold', sets: 3, unit: 's' },
        { id: 'd1-pike',    name: 'Pike compression',    target: '3 × 8 slow',   sets: 3, unit: 'reps' },
      ]},
      { id: 's1hs', name: 'Handstand', type: 'skill', exercises: [
        { id: 'd1-hs-wall', name: 'Chest-to-wall hold',      target: '3 × 20-30s',    sets: 3, unit: 's' },
        { id: 'd1-hs-shrug',name: 'Shoulder shrugs in HS',   target: '3 × 10',         sets: 3, unit: 'reps' },
        { id: 'd1-hs-kick', name: 'Freestanding kick-ups',   target: '10-15 attempts', note: true, notePh: 'best hold (s)' },
      ]},
      { id: 's1st', name: 'Strength', type: 'strength', exercises: [
        { id: 'd1-rp', name: 'Ring / archer push-ups',   target: '4 × 8-10',   sets: 4, unit: 'reps' },
        { id: 'd1-pp', name: 'Pike / wall HS push-ups',  target: '3 × 5-8',    sets: 3, unit: 'reps' },
        { id: 'd1-rd', name: 'Ring dips',                target: '3 × 8-10',   sets: 3, unit: 'reps' },
        { id: 'd1-te', name: 'Tricep ring extensions',   target: '3 × 10-12',  sets: 3, unit: 'reps' },
        { id: 'd1-ls', name: 'L-sit hold',               target: '3 × 15-20s', sets: 3, unit: 's' },
      ]},
    ]
  },

  2: {
    title: 'Pull', subtitle: 'Front Lever · Handstand',
    sections: [
      { id: 's2wu', name: 'Warm-up', type: 'warmup', exercises: [
        { id: 'd2wu1', name: 'Dead hang',           target: '30s',           single: true },
        { id: 'd2wu2', name: 'Scapular pull-ups',   target: '× 10',          single: true },
        { id: 'd2wu3', name: 'Band dislocates',     target: '× 10',          single: true },
        { id: 'd2wu4', name: 'Thoracic extension',  target: 'foam roller',   single: true },
      ]},
      { id: 's2fl', name: 'Front Lever', type: 'skill', exercises: [
        { id: 'd2-fl-hold',  name: 'Tuck front lever hold',     target: '4 × 5-10s', sets: 4, unit: 's' },
        { id: 'd2-fl-raise', name: 'Front lever raises (tuck)', target: '3 × 5-8',   sets: 3, unit: 'reps' },
        { id: 'd2-fl-adv',   name: 'Advanced tuck attempt',     target: '3 × 3-5s',  sets: 3, unit: 's' },
      ]},
      { id: 's2hs', name: 'Handstand', type: 'skill', exercises: [
        { id: 'd2-hs-kick', name: 'Freestanding kick-ups',   target: '10-15 attempts', note: true, notePh: 'best hold (s)' },
        { id: 'd2-hs-bail', name: 'Pirouette bail practice', target: '',               note: true, notePh: 'attempts' },
      ]},
      { id: 's2st', name: 'Strength', type: 'strength', exercises: [
        { id: 'd2-wpu',  name: 'Weighted / L-sit pull-ups', target: '4 × 5-6',      sets: 4, unit: 'reps', weight: true },
        { id: 'd2-arch', name: 'Archer pull-ups',           target: '3 × 5 each',   sets: 3, unit: 'each' },
        { id: 'd2-rrow', name: 'Ring rows (feet elevated)', target: '3 × 10',        sets: 3, unit: 'reps' },
        { id: 'd2-fp',   name: 'Face pulls',                target: '3 × 15',        sets: 3, unit: 'reps' },
        { id: 'd2-sd',   name: 'Scapular depression holds', target: '3 × 20s',       sets: 3, unit: 's' },
        { id: 'd2-dh',   name: 'Dead hang',                 target: '3 × 30s',       sets: 3, unit: 's' },
      ]},
    ]
  },

  3: {
    title: 'Handstand', subtitle: 'Legs · Core',
    sections: [
      { id: 's3mob', name: 'Mobility', type: 'warmup', exercises: [
        { id: 'd3m1', name: 'Hip flexor stretch',       target: '60s each side',       single: true },
        { id: 'd3m2', name: 'Pancake stretch',          target: '60s',                 single: true },
        { id: 'd3m3', name: 'Hamstring compression',    target: 'seated pike, active', single: true },
        { id: 'd3m4', name: 'Thoracic bridge / wheel',  target: '',                    single: true },
      ]},
      { id: 's3hs', name: 'Handstand', type: 'skill', exercises: [
        { id: 'd3-hs-wall', name: 'Chest-to-wall hold',          target: '3 × 30s → build to 60s', sets: 3, unit: 's' },
        { id: 'd3-hs-free', name: 'Freestanding balance work',   target: '15-20 min',               note: true, notePh: 'best hold (s)' },
        { id: 'd3-hs-walk', name: 'Handstand walking',           target: '5-10 attempts',            note: true, notePh: 'best steps' },
        { id: 'd3-hs-tuck', name: 'Tuck-up to handstand (wall)', target: '3 × 5',                   sets: 3, unit: 'reps' },
      ]},
      { id: 's3lg', name: 'Legs', type: 'legs', exercises: [
        { id: 'd3-psq', name: 'Pistol squat',            target: '3 × 5 each leg',   sets: 3, unit: 'each' },
        { id: 'd3-bss', name: 'Bulgarian split squat',   target: '3 × 8-10 each',    sets: 3, unit: 'each', weight: true },
        { id: 'd3-bj',  name: 'Box jumps / broad jumps', target: '3 × 6-8',          sets: 3, unit: 'reps' },
        { id: 'd3-nc',  name: 'Nordic curl (negative)',  target: '3 × 5',            sets: 3, unit: 'reps' },
      ]},
      { id: 's3co', name: 'Core', type: 'core', exercises: [
        { id: 'd3-hb', name: 'Hollow body hold',                 target: '3 × 30-45s', sets: 3, unit: 's' },
        { id: 'd3-df', name: 'Dragon flag (negative)',           target: '3 × 5',       sets: 3, unit: 'reps' },
        { id: 'd3-cl', name: 'Compression lifts (L → straddle)', target: '3 × 8',      sets: 3, unit: 'reps' },
        { id: 'd3-vu', name: 'V-ups',                            target: '3 × 15',      sets: 3, unit: 'reps' },
      ]},
    ]
  },

  4: {
    title: 'Rings', subtitle: 'Muscle-up',
    sections: [
      { id: 's4wu', name: 'Warm-up', type: 'warmup', exercises: [
        { id: 'd4wu1', name: 'False grip ring hang',   target: '3 × 20s', single: true },
        { id: 'd4wu2', name: 'Scapular pull-ups',      target: '× 10',    single: true },
        { id: 'd4wu3', name: 'Chest-to-bar attempts',  target: '× 5',     single: true },
      ]},
      { id: 's4mu', name: 'Muscle-up', type: 'skill', exercises: [
        { id: 'd4-ctb', name: 'Chest-to-bar pull-ups',          target: '5 × 3-5 strict', sets: 5, unit: 'reps' },
        { id: 'd4-neg', name: 'Ring MU negative',                target: '4 × 3',          sets: 4, unit: 'reps' },
        { id: 'd4-fg',  name: 'False grip ring pull',            target: '3 × 5-8',        sets: 3, unit: 'reps' },
        { id: 'd4-exp', name: 'Explosive pull-ups (supinated)',  target: '3 × 5',          sets: 3, unit: 'reps' },
      ]},
      { id: 's4rg', name: 'Rings Strength', type: 'strength', exercises: [
        { id: 'd4-rpu', name: 'Ring pull-ups',          target: '3 × 6-8',    sets: 3, unit: 'reps' },
        { id: 'd4-rdp', name: 'Ring dips (deep)',       target: '3 × 8-10',   sets: 3, unit: 'reps' },
        { id: 'd4-rsh', name: 'Ring support hold',      target: '3 × 20-30s', sets: 3, unit: 's' },
        { id: 'd4-rrw', name: 'Ring rows (horizontal)', target: '3 × 10',     sets: 3, unit: 'reps' },
        { id: 'd4-rps', name: 'Ring push-ups (wide)',   target: '3 × 10',     sets: 3, unit: 'reps' },
      ]},
      { id: 's4ac', name: 'Accessory', type: 'accessory', exercises: [
        { id: 'd4ac1', name: 'Wrist conditioning',       target: 'rocks + circles, 1 min', single: true },
        { id: 'd4ac2', name: 'Band external rotation',   target: '× 20 each side',         single: true },
        { id: 'd4ac3', name: 'Y/T/W on bench',           target: '3 × 12',                 single: true },
      ]},
    ]
  }
};

// ─────────────────────────────────────────────
//  SKILL DEFINITIONS
// ─────────────────────────────────────────────
const SKILL_DEFS = [
  { id: 'handstand',   name: 'Freestanding Handstand', next: '10s hold' },
  { id: 'hs-wall',     name: 'Wall Handstand',          next: '60s → go freestanding full-time' },
  { id: 'planche',     name: 'Planche',                 next: 'Tuck planche 3×10s' },
  { id: 'front-lever', name: 'Front Lever',             next: 'Tuck FL 3×5s' },
  { id: 'muscle-up',   name: 'Muscle-up',               next: 'Chest-to-bar 5×5' },
  { id: 'pullups',     name: 'Pull-ups (max)',           next: '15+ (then add weight)' },
  { id: 'dips',        name: 'Dips (max)',               next: '20+ (then ring dips 3×10)' },
  { id: 'lsit',        name: 'L-sit',                   next: '3×20s hold' },
  { id: 'hollow',      name: 'Hollow body',             next: '3×45s hold' },
  { id: 'pistol',      name: 'Pistol squat',            next: '3×5 each leg clean' },
];

// ─────────────────────────────────────────────
//  CONSTANTS
// ─────────────────────────────────────────────
const DAY_COLORS  = { 1:'d1', 2:'d2', 3:'d3', 4:'d4' };
const DAY_TITLES  = {
  1: 'Push · Planche · Handstand',
  2: 'Pull · Front Lever · Handstand',
  3: 'Handstand · Legs · Core',
  4: 'Rings · Muscle-up',
};
const DAY_ACCENTS = { 1:'#f97316', 2:'#3b82f6', 3:'#a855f7', 4:'#22c55e' };
