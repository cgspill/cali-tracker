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
        { id: 'd1-rd', name: 'Ring dips / parallel bar dips',           target: '3 × 8-10',  sets: 3, unit: 'reps' },
        { id: 'd1-te', name: 'Tricep ring ext / close-grip push-ups', target: '3 × 10-12', sets: 3, unit: 'reps' },
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
        { id: 'd2-rrow', name: 'Ring rows / inverted rows (bar)', target: '3 × 10', sets: 3, unit: 'reps' },
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
  },

  // ── Day 5 — replaces Day 4 until you have rings ──
  5: {
    title: 'Bar & Bodyweight', subtitle: 'No rings needed',
    sections: [
      { id: 's5wu', name: 'Warm-up', type: 'warmup', exercises: [
        { id: 'd5wu1', name: 'Dead hang',              target: '30s',  single: true },
        { id: 'd5wu2', name: 'Scapular pull-ups',      target: '× 10', single: true },
        { id: 'd5wu3', name: 'Chest-to-bar attempts',  target: '× 5',  single: true },
      ]},
      { id: 's5mu', name: 'Muscle-up', type: 'skill', exercises: [
        { id: 'd5-ctb',  name: 'Chest-to-bar pull-ups',         target: '5 × 3-5 strict', sets: 5, unit: 'reps' },
        { id: 'd5-neg',  name: 'Bar MU negative',               target: '4 × 3',          sets: 4, unit: 'reps' },
        { id: 'd5-exp',  name: 'Explosive pull-ups (supinated)', target: '3 × 5',          sets: 3, unit: 'reps' },
        { id: 'd5-high', name: 'Max height pull-up',            target: '3 × 3-5',        sets: 3, unit: 'reps' },
      ]},
      { id: 's5st', name: 'Strength', type: 'strength', exercises: [
        { id: 'd5-wpu', name: 'Weighted pull-ups',              target: '4 × 5-6',    sets: 4, unit: 'reps', weight: true },
        { id: 'd5-dip', name: 'Parallel bar dips',              target: '3 × 10-12',  sets: 3, unit: 'reps' },
        { id: 'd5-sph', name: 'Dip bar support hold',           target: '3 × 20-30s', sets: 3, unit: 's' },
        { id: 'd5-inv', name: 'Inverted rows (bar, horizontal)', target: '3 × 10',    sets: 3, unit: 'reps' },
        { id: 'd5-arc', name: 'Archer push-ups',                target: '3 × 8 each', sets: 3, unit: 'each' },
      ]},
      { id: 's5ac', name: 'Accessory', type: 'accessory', exercises: [
        { id: 'd5ac1', name: 'Wrist conditioning',     target: 'rocks + circles, 1 min', single: true },
        { id: 'd5ac2', name: 'Band external rotation', target: '× 20 each side',         single: true },
        { id: 'd5ac3', name: 'Y/T/W on bench',         target: '3 × 12',                 single: true },
      ]},
    ]
  },

  // ─────────────────────────────────────────────
  //  SPLIT PROGRAM — skills-first (Days 6-11)
  //  Added 2026-07-15. Days 1-5 above are unchanged.
  //  Skills always come first while fresh; strength second.
  //  Planche & front lever spaced ≥48h; deload every 4-6 weeks.
  // ─────────────────────────────────────────────

  // ── Day 6 — Monday · Push · Planche ──
  6: {
    title: 'Push · Planche', subtitle: 'Mon · skills first',
    sections: [
      { id: 's6wu', name: 'Warm-up', type: 'warmup', exercises: [
        { id: 'd6wu1', name: 'Loaded wrist rocks + circles', target: '1 min',          single: true },
        { id: 'd6wu2', name: 'Shoulder CARs',                target: '× 5 each side',   single: true },
        { id: 'd6wu3', name: 'Band pull-aparts',             target: '× 20',            single: true },
        { id: 'd6wu4', name: 'Scapular push-ups',            target: '× 10',            single: true },
        { id: 'd6wu5', name: 'Planche lean (easy)',          target: '2 × 15s',         single: true },
      ]},
      { id: 's6sk', name: 'Skill — Handstand & Planche', type: 'skill', exercises: [
        { id: 'd6-hs',   name: 'Handstand practice',   target: '10-12 min',    note: true, notePh: 'best hold (s)' },
        { id: 'd6-lean', name: 'Planche lean',         target: '4 × 15-20s',   sets: 4, unit: 's' },
        { id: 'd6-tuck', name: 'Tuck planche hold',    target: '3 × max (10-15s)', sets: 3, unit: 's' },
      ]},
      { id: 's6st', name: 'Strength — Push A', type: 'strength', exercises: [
        { id: 'd6-wdip', name: 'Weighted dips',                  target: '4 × 5-8',    sets: 4, unit: 'reps', weight: true },
        { id: 'd6-ppp',  name: 'Pseudo-planche push-ups',        target: '3 × 8-12',   sets: 3, unit: 'reps' },
        { id: 'd6-pike', name: 'Pike / wall HS push-ups',        target: '3 × 6-10',   sets: 3, unit: 'reps' },
        { id: 'd6-tri',  name: 'Ring / bench triceps extension', target: '3 × 10-12',  sets: 3, unit: 'reps' },
        { id: 'd6-lsit', name: 'L-sit hold',                     target: '3 × max (10-20s)', sets: 3, unit: 's' },
      ]},
      { id: 's6pr', name: 'Prehab', type: 'accessory', exercises: [
        { id: 'd6pr1', name: 'Band external rotation', target: '× 20 each side', single: true },
        { id: 'd6pr2', name: 'Wrist flexor/extensor stretch', target: '1 min',    single: true },
      ]},
    ]
  },

  // ── Day 7 — Tuesday · Pull · Front Lever (pelican curl) ──
  7: {
    title: 'Pull · Front Lever', subtitle: 'Tue · needs rings',
    sections: [
      { id: 's7wu', name: 'Warm-up', type: 'warmup', exercises: [
        { id: 'd7wu1', name: 'Dead hang',                target: '30s',   single: true },
        { id: 'd7wu2', name: 'Scapular pull-ups',        target: '× 10',  single: true },
        { id: 'd7wu3', name: 'Band dislocates',          target: '× 10',  single: true },
        { id: 'd7wu4', name: 'Straight-arm lat activation', target: '× 15', single: true },
        { id: 'd7wu5', name: 'Thoracic extension',       target: 'foam roller', single: true },
      ]},
      { id: 's7sk', name: 'Skill — Handstand & Front Lever', type: 'skill', exercises: [
        { id: 'd7-hs', name: 'Handstand practice',    target: '10-12 min',      note: true, notePh: 'best hold (s)' },
        { id: 'd7-fl', name: 'Front lever tuck hold', target: '4 × 5-10s → 15s', sets: 4, unit: 's' },
      ]},
      { id: 's7st', name: 'Strength — Pull A', type: 'strength', exercises: [
        { id: 'd7-wpu',  name: 'Weighted pull-ups',        target: '4 × 5-6',   sets: 4, unit: 'reps', weight: true },
        { id: 'd7-row',  name: 'Ring / inverted rows',     target: '3 × 8-12',  sets: 3, unit: 'reps' },
        { id: 'd7-flr',  name: 'Front lever tuck raises',  target: '3 × 6-8',   sets: 3, unit: 'reps' },
        { id: 'd7-pel',  name: 'Ring pelican curl (last, slow 3s)', target: '3 × 6-8', sets: 3, unit: 'reps' },
        { id: 'd7-fp',   name: 'Face pulls',               target: '3 × 15',    sets: 3, unit: 'reps' },
      ]},
      { id: 's7pr', name: 'Prehab', type: 'accessory', exercises: [
        { id: 'd7pr1', name: 'Scapular depression holds', target: '3 × 20s', single: true },
        { id: 'd7pr2', name: 'Wrist stretch',             target: '1 min',   single: true },
      ]},
    ]
  },

  // ── Day 8 — Wednesday · Handstand · Legs · Core (arm recovery) ──
  8: {
    title: 'Handstand · Legs · Core', subtitle: 'Wed · arm recovery',
    sections: [
      { id: 's8mob', name: 'Mobility', type: 'warmup', exercises: [
        { id: 'd8m1', name: 'Hip flexor stretch', target: '60s each side', single: true },
        { id: 'd8m2', name: 'Pancake stretch',    target: '60s',           single: true },
        { id: 'd8m3', name: 'Leg swings',         target: '× 10 each',     single: true },
        { id: 'd8m4', name: 'Ankle prep',         target: '1 min',         single: true },
        { id: 'd8m5', name: 'Wrist prep',         target: '1 min',         single: true },
      ]},
      { id: 's8sk', name: 'Skill — Handstand (longer)', type: 'skill', exercises: [
        { id: 'd8-free', name: 'Freestanding balance work', target: '15-20 min', note: true, notePh: 'best hold (s)' },
        { id: 'd8-walk', name: 'Handstand walking',         target: '5-10 attempts', note: true, notePh: 'best steps' },
      ]},
      { id: 's8lg', name: 'Legs', type: 'legs', exercises: [
        { id: 'd8-bss', name: 'Bulgarian split squat', target: '3 × 8-10 each', sets: 3, unit: 'each', weight: true },
        { id: 'd8-psq', name: 'Pistol squat progression', target: '3 × 5 each', sets: 3, unit: 'each' },
        { id: 'd8-nc',  name: 'Nordic curl (negative)', target: '3 × 5',       sets: 3, unit: 'reps' },
        { id: 'd8-cf',  name: 'Standing calf raise',    target: '3 × 15',      sets: 3, unit: 'reps' },
      ]},
      { id: 's8co', name: 'Core', type: 'core', exercises: [
        { id: 'd8-hb', name: 'Hollow body hold',         target: '3 × 30-45s', sets: 3, unit: 's' },
        { id: 'd8-df', name: 'Dragon flag (negative)',   target: '3 × 5',      sets: 3, unit: 'reps' },
        { id: 'd8-cv', name: 'Compression lifts / V-ups', target: '3 × 10-15', sets: 3, unit: 'reps' },
      ]},
    ]
  },

  // ── Day 9 — Thursday · Push · Planche (rotation B) ──
  9: {
    title: 'Push · Planche (B)', subtitle: 'Thu · rotation B',
    sections: [
      { id: 's9wu', name: 'Warm-up', type: 'warmup', exercises: [
        { id: 'd9wu1', name: 'Loaded wrist rocks + circles', target: '1 min',          single: true },
        { id: 'd9wu2', name: 'Shoulder CARs',                target: '× 5 each side',   single: true },
        { id: 'd9wu3', name: 'Band pull-aparts',             target: '× 20',            single: true },
        { id: 'd9wu4', name: 'Scapular push-ups',            target: '× 10',            single: true },
        { id: 'd9wu5', name: 'Planche lean (easy)',          target: '2 × 15s',         single: true },
      ]},
      { id: 's9sk', name: 'Skill — Handstand & Planche', type: 'skill', exercises: [
        { id: 'd9-hs',   name: 'Handstand practice',        target: '10 min',      note: true, notePh: 'best hold (s)' },
        { id: 'd9-lean', name: 'Planche lean',              target: '4 × 15-20s',  sets: 4, unit: 's' },
        { id: 'd9-tuck', name: 'Tuck / adv-tuck planche',   target: '3 × max',     sets: 3, unit: 's' },
      ]},
      { id: 's9st', name: 'Strength — Push B', type: 'strength', exercises: [
        { id: 'd9-rdip', name: 'Ring dips',                     target: '4 × 8-10',   sets: 4, unit: 'reps' },
        { id: 'd9-arch', name: 'Archer push-ups',              target: '3 × 6-8 each', sets: 3, unit: 'each' },
        { id: 'd9-dhs',  name: 'Deficit / wall HS push-ups',   target: '3 × 5-8',    sets: 3, unit: 'reps' },
        { id: 'd9-dia',  name: 'Diamond push-ups',             target: '3 × 12-15',  sets: 3, unit: 'reps' },
        { id: 'd9-tlr',  name: 'Tuck-L / hanging leg raises',  target: '3 × 8-10',   sets: 3, unit: 'reps' },
      ]},
      { id: 's9pr', name: 'Prehab', type: 'accessory', exercises: [
        { id: 'd9pr1', name: 'Band external rotation', target: '× 20 each side', single: true },
        { id: 'd9pr2', name: 'Wrist flexor/extensor stretch', target: '1 min',    single: true },
      ]},
    ]
  },

  // ── Day 10 — Friday · Pull · Front Lever · Muscle-up (rotation B) ──
  10: {
    title: 'Pull · Front Lever · Muscle-up', subtitle: 'Fri · rotation B',
    sections: [
      { id: 's10wu', name: 'Warm-up', type: 'warmup', exercises: [
        { id: 'd10wu1', name: 'Dead hang',              target: '30s',     single: true },
        { id: 'd10wu2', name: 'Scapular pull-ups',      target: '× 10',    single: true },
        { id: 'd10wu3', name: 'False grip ring hang',   target: '3 × 20s', single: true },
        { id: 'd10wu4', name: 'Band dislocates',        target: '× 10',    single: true },
        { id: 'd10wu5', name: 'Chest-to-bar attempts',  target: '× 5',     single: true },
      ]},
      { id: 's10sk', name: 'Skill — Handstand, FL & Muscle-up', type: 'skill', exercises: [
        { id: 'd10-hs',  name: 'Handstand practice',           target: '8-10 min',   note: true, notePh: 'best hold (s)' },
        { id: 'd10-fl',  name: 'FL adv-tuck / straddle',       target: '3 × 5-8s',   sets: 3, unit: 's' },
        { id: 'd10-exp', name: 'Explosive high pull-ups',      target: '3 × 3-5',    sets: 3, unit: 'reps' },
        { id: 'd10-neg', name: 'Muscle-up negatives (slow)',   target: '3 × 2-3',    sets: 3, unit: 'reps' },
      ]},
      { id: 's10st', name: 'Strength — Pull B', type: 'strength', exercises: [
        { id: 'd10-wch', name: 'Weighted chin-ups',       target: '4 × 5-6',   sets: 4, unit: 'reps', weight: true },
        { id: 'd10-wide', name: 'Wide pull-ups',          target: '3 × 8-10',  sets: 3, unit: 'reps' },
        { id: 'd10-flr', name: 'Front lever straddle raises', target: '3 × 6-8', sets: 3, unit: 'reps' },
        { id: 'd10-ham', name: 'Hammer curl',             target: '3 × 10-12', sets: 3, unit: 'reps', weight: true },
        { id: 'd10-rd',  name: 'Rear-delt raise / scap',  target: '3 × 15',    sets: 3, unit: 'reps' },
      ]},
      { id: 's10pr', name: 'Prehab', type: 'accessory', exercises: [
        { id: 'd10pr1', name: 'Wrist conditioning',    target: '1 min', single: true },
        { id: 'd10pr2', name: 'Elbow-flexor stretch',  target: '1 min', single: true },
      ]},
    ]
  },

  // ── Day 11 — Saturday · Handstand · Arms · Mobility (optional) ──
  11: {
    title: 'Handstand · Arms · Mobility', subtitle: 'Sat · optional bonus',
    sections: [
      { id: 's11sk', name: 'Skill — Handstand', type: 'skill', exercises: [
        { id: 'd11-hs', name: 'Freestanding handstand practice', target: '15-20 min', note: true, notePh: 'best hold (s)' },
      ]},
      { id: 's11ac', name: 'Accessory — Arms (optional)', type: 'accessory', exercises: [
        { id: 'd11-cur', name: 'Ring/bar curl or light pelican', target: '2-3 × 8-10', sets: 3, unit: 'reps' },
        { id: 'd11-tri', name: 'Overhead / ring triceps ext',    target: '3 × 10-12',  sets: 3, unit: 'reps' },
        { id: 'd11-lat', name: 'Lateral raise',                  target: '3 × 12-15',  sets: 3, unit: 'reps', weight: true },
      ]},
      { id: 's11mo', name: 'Mobility', type: 'warmup', exercises: [
        { id: 'd11mo1', name: 'Wrist + elbow prehab routine', target: '5 min', single: true },
        { id: 'd11mo2', name: 'Full-body mobility flow',      target: '5-10 min', single: true },
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
const DAY_COLORS  = { 1:'d1', 2:'d2', 3:'d3', 4:'d4', 5:'d5', 6:'d1', 7:'d2', 8:'d3', 9:'d1', 10:'d4', 11:'d5' };
const DAY_TITLES  = {
  1: 'Push · Planche · Handstand',
  2: 'Pull · Front Lever · Handstand',
  3: 'Handstand · Legs · Core',
  4: 'Rings · Muscle-up',
  5: 'Bar & Bodyweight · No rings needed',
  6: 'Push · Planche',
  7: 'Pull · Front Lever',
  8: 'Handstand · Legs · Core',
  9: 'Push · Planche (B)',
  10: 'Pull · Front Lever · Muscle-up',
  11: 'Handstand · Arms · Mobility',
};
const DAY_ACCENTS = { 1:'#f97316', 2:'#3b82f6', 3:'#a855f7', 4:'#22c55e', 5:'#0ea5e9', 6:'#f97316', 7:'#3b82f6', 8:'#a855f7', 9:'#f97316', 10:'#22c55e', 11:'#0ea5e9' };
