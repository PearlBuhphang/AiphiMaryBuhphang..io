/* =========================================================
   🌸 ADVANCED SECRET DIARY — with Bow Cursor, Calendar & Mood
   ========================================================= */

// ============ THEME DEFINITIONS ============
const THEMES = {
  pastel: {
    name: '🌸 Pastel',
    light: {
      '--bg': 'linear-gradient(135deg, #ffe5ec 0%, #e0f4ff 50%, #fff1f6 100%)',
      '--bg-solid': '#fff1f6',
      '--surface': 'rgba(255,255,255,0.6)',
      '--surface-2': 'rgba(255,255,255,0.45)',
      '--surface-solid': '#ffffff',
      '--border': 'rgba(255,182,193,0.4)',
      '--text': '#4a3a4a',
      '--text-soft': '#8a7a8a',
      '--accent': '#ff9eb5',
      '--accent-2': '#b5e3ff',
      '--page-bg': '#fffafc',
      '--line': '#ffd6e0',
      '--shadow': '0 20px 60px rgba(255,158,181,0.25)',
      '--success': '#7ed687',
      '--error': '#ff6b81'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #2a1f2e 0%, #1e2a3a 50%, #2a1f2e 100%)',
      '--bg-solid': '#2a1f2e',
      '--surface': 'rgba(60,45,65,0.6)',
      '--surface-2': 'rgba(80,60,85,0.4)',
      '--surface-solid': '#3a2a3e',
      '--border': 'rgba(255,158,181,0.25)',
      '--text': '#f5e6ef',
      '--text-soft': '#c9b5c0',
      '--accent': '#ff9eb5',
      '--accent-2': '#7fb8e0',
      '--page-bg': '#3a2a3e',
      '--line': '#5a4a5e',
      '--shadow': '0 20px 60px rgba(0,0,0,0.4)',
      '--success': '#7ed687',
      '--error': '#ff6b81'
    }
  },
  pink: {
    name: '🩷 Light Pink',
    light: {
      '--bg': 'linear-gradient(135deg, #ffd6e7 0%, #ffeef5 100%)',
      '--bg-solid': '#ffeef5',
      '--surface': 'rgba(255,255,255,0.6)',
      '--surface-2': 'rgba(255,230,240,0.5)',
      '--surface-solid': '#ffffff',
      '--border': 'rgba(255,105,180,0.35)',
      '--text': '#6b3a52', '--text-soft': '#9a6a82',
      '--accent': '#ff69b4', '--accent-2': '#ffb6d5',
      '--page-bg': '#fff5fa', '--line': '#ffc0d9',
      '--shadow': '0 20px 60px rgba(255,105,180,0.3)',
      '--success': '#7ed687', '--error': '#ff4a4a'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #3a1a2a 0%, #2a1020 100%)',
      '--bg-solid': '#3a1a2a',
      '--surface': 'rgba(80,30,55,0.6)',
      '--surface-2': 'rgba(100,40,70,0.4)',
      '--surface-solid': '#4a2038',
      '--border': 'rgba(255,105,180,0.3)',
      '--text': '#ffd6e7', '--text-soft': '#d6a0b8',
      '--accent': '#ff69b4', '--accent-2': '#c9608a',
      '--page-bg': '#4a2038', '--line': '#6a3050',
      '--shadow': '0 20px 60px rgba(0,0,0,0.4)',
      '--success': '#7ed687', '--error': '#ff4a4a'
    }
  },
  green: {
    name: '💚 Light Green',
    light: {
      '--bg': 'linear-gradient(135deg, #d4f1d4 0%, #f0faf0 100%)',
      '--bg-solid': '#f0faf0',
      '--surface': 'rgba(255,255,255,0.6)',
      '--surface-2': 'rgba(220,245,220,0.5)',
      '--surface-solid': '#ffffff',
      '--border': 'rgba(144,238,144,0.4)',
      '--text': '#3a5a3a', '--text-soft': '#6a8a6a',
      '--accent': '#7ed687', '--accent-2': '#b8e8b8',
      '--page-bg': '#f5fcf5', '--line': '#c8e8c8',
      '--shadow': '0 20px 60px rgba(126,214,135,0.25)',
      '--success': '#5ab860', '--error': '#ff6b6b'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #1a2e1a 0%, #0f1f0f 100%)',
      '--bg-solid': '#1a2e1a',
      '--surface': 'rgba(40,60,40,0.6)',
      '--surface-2': 'rgba(50,75,50,0.4)',
      '--surface-solid': '#2a3e2a',
      '--border': 'rgba(126,214,135,0.3)',
      '--text': '#d4f1d4', '--text-soft': '#9abf9a',
      '--accent': '#7ed687', '--accent-2': '#5aa060',
      '--page-bg': '#2a3e2a', '--line': '#3a5038',
      '--shadow': '0 20px 60px rgba(0,0,0,0.4)',
      '--success': '#7ed687', '--error': '#ff6b6b'
    }
  },
  lavender: {
    name: '💜 Lavender',
    light: {
      '--bg': 'linear-gradient(135deg, #e6dfff 0%, #f5efff 100%)',
      '--bg-solid': '#f5efff',
      '--surface': 'rgba(255,255,255,0.6)',
      '--surface-2': 'rgba(230,223,255,0.5)',
      '--surface-solid': '#ffffff',
      '--border': 'rgba(186,158,238,0.4)',
      '--text': '#4a3a6a', '--text-soft': '#7a6a9a',
      '--accent': '#b89ef0', '--accent-2': '#d6c6f5',
      '--page-bg': '#faf5ff', '--line': '#d6c6f5',
      '--shadow': '0 20px 60px rgba(184,158,240,0.3)',
      '--success': '#7ed687', '--error': '#ff6b81'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #2a1f3e 0%, #1a1028 100%)',
      '--bg-solid': '#2a1f3e',
      '--surface': 'rgba(60,45,80,0.6)',
      '--surface-2': 'rgba(80,60,100,0.4)',
      '--surface-solid': '#3a2a50',
      '--border': 'rgba(184,158,240,0.3)',
      '--text': '#e6dfff', '--text-soft': '#b5a5d0',
      '--accent': '#b89ef0', '--accent-2': '#8a70c0',
      '--page-bg': '#3a2a50', '--line': '#5a4a70',
      '--shadow': '0 20px 60px rgba(0,0,0,0.4)',
      '--success': '#7ed687', '--error': '#ff6b81'
    }
  },
  sky: {
    name: '💙 Sky Blue',
    light: {
      '--bg': 'linear-gradient(135deg, #d6ecff 0%, #f0f8ff 100%)',
      '--bg-solid': '#f0f8ff',
      '--surface': 'rgba(255,255,255,0.6)',
      '--surface-2': 'rgba(214,236,255,0.5)',
      '--surface-solid': '#ffffff',
      '--border': 'rgba(135,206,250,0.4)',
      '--text': '#2a4a6a', '--text-soft': '#5a7a9a',
      '--accent': '#87ceeb', '--accent-2': '#b5e0f5',
      '--page-bg': '#f5fbff', '--line': '#b5e0f5',
      '--shadow': '0 20px 60px rgba(135,206,235,0.3)',
      '--success': '#7ed687', '--error': '#ff6b81'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #1a2a3e 0%, #0f1a28 100%)',
      '--bg-solid': '#1a2a3e',
      '--surface': 'rgba(40,60,80,0.6)',
      '--surface-2': 'rgba(50,75,100,0.4)',
      '--surface-solid': '#2a3a50',
      '--border': 'rgba(135,206,235,0.3)',
      '--text': '#d6ecff', '--text-soft': '#9ab5d0',
      '--accent': '#87ceeb', '--accent-2': '#5a9ac0',
      '--page-bg': '#2a3a50', '--line': '#3a5070',
      '--shadow': '0 20px 60px rgba(0,0,0,0.4)',
      '--success': '#7ed687', '--error': '#ff6b81'
    }
  },
  sunset: {
    name: '🌅 Sunset',
    light: {
      '--bg': 'linear-gradient(135deg, #ffd6a5 0%, #ff9aa2 50%, #c9a0ff 100%)',
      '--bg-solid': '#ffd6a5',
      '--surface': 'rgba(255,255,255,0.55)',
      '--surface-2': 'rgba(255,230,200,0.5)',
      '--surface-solid': '#ffffff',
      '--border': 'rgba(255,154,162,0.4)',
      '--text': '#5a3a4a', '--text-soft': '#8a5a6a',
      '--accent': '#ff9aa2', '--accent-2': '#ffd6a5',
      '--page-bg': '#fff5ee', '--line': '#ffc0a5',
      '--shadow': '0 20px 60px rgba(255,154,162,0.3)',
      '--success': '#7ed687', '--error': '#ff4a4a'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #3a1a2a 0%, #2a1a3a 50%, #1a1a2a 100%)',
      '--bg-solid': '#3a1a2a',
      '--surface': 'rgba(70,40,55,0.6)',
      '--surface-2': 'rgba(90,50,75,0.4)',
      '--surface-solid': '#4a2a3a',
      '--border': 'rgba(255,154,162,0.3)',
      '--text': '#ffd6c0', '--text-soft': '#d0a090',
      '--accent': '#ff9aa2', '--accent-2': '#c98060',
      '--page-bg': '#4a2a3a', '--line': '#6a3a4a',
      '--shadow': '0 20px 60px rgba(0,0,0,0.4)',
      '--success': '#7ed687', '--error': '#ff4a4a'
    }
  },
  ocean: {
    name: '🌊 Ocean',
    light: {
      '--bg': 'linear-gradient(135deg, #a8d8ea 0%, #d6f0f5 100%)',
      '--bg-solid': '#d6f0f5',
      '--surface': 'rgba(255,255,255,0.6)',
      '--surface-2': 'rgba(168,216,234,0.3)',
      '--surface-solid': '#ffffff',
      '--border': 'rgba(100,180,210,0.4)',
      '--text': '#1a3a5a', '--text-soft': '#4a6a8a',
      '--accent': '#5ab8d6', '--accent-2': '#a8d8ea',
      '--page-bg': '#f0f9fc', '--line': '#a8d8ea',
      '--shadow': '0 20px 60px rgba(90,184,214,0.3)',
      '--success': '#7ed687', '--error': '#ff6b81'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #0a1a2a 0%, #1a2a3e 100%)',
      '--bg-solid': '#0a1a2a',
      '--surface': 'rgba(30,50,70,0.6)',
      '--surface-2': 'rgba(40,65,90,0.4)',
      '--surface-solid': '#1a2a3e',
      '--border': 'rgba(90,184,214,0.3)',
      '--text': '#d6f0f5', '--text-soft': '#8ab0c8',
      '--accent': '#5ab8d6', '--accent-2': '#3a88a8',
      '--page-bg': '#1a2a3e', '--line': '#2a4058',
      '--shadow': '0 20px 60px rgba(0,0,0,0.5)',
      '--success': '#7ed687', '--error': '#ff6b81'
    }
  },
  dark: {
    name: '🖤 Dark',
    light: {
      '--bg': 'linear-gradient(135deg, #2a2a2e 0%, #1a1a1e 100%)',
      '--bg-solid': '#2a2a2e',
      '--surface': 'rgba(50,50,55,0.6)',
      '--surface-2': 'rgba(70,70,75,0.4)',
      '--surface-solid': '#3a3a40',
      '--border': 'rgba(120,120,130,0.3)',
      '--text': '#e8e8ec', '--text-soft': '#a8a8b0',
      '--accent': '#b8b8c8', '--accent-2': '#787888',
      '--page-bg': '#3a3a40', '--line': '#5a5a62',
      '--shadow': '0 20px 60px rgba(0,0,0,0.5)',
      '--success': '#7ed687', '--error': '#ff6b81'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #0a0a0e 0%, #15151a 100%)',
      '--bg-solid': '#0a0a0e',
      '--surface': 'rgba(30,30,35,0.7)',
      '--surface-2': 'rgba(45,45,50,0.5)',
      '--surface-solid': '#1a1a20',
      '--border': 'rgba(100,100,110,0.3)',
      '--text': '#d8d8dc', '--text-soft': '#888890',
      '--accent': '#a8a8b8', '--accent-2': '#585868',
      '--page-bg': '#1a1a20', '--line': '#3a3a42',
      '--shadow': '0 20px 60px rgba(0,0,0,0.7)',
      '--success': '#7ed687', '--error': '#ff6b81'
    }
  },
  red: {
    name: '❤️ Dark Red',
    light: {
      '--bg': 'linear-gradient(135deg, #4a1a1a 0%, #2a0a0a 100%)',
      '--bg-solid': '#4a1a1a',
      '--surface': 'rgba(80,30,30,0.6)',
      '--surface-2': 'rgba(100,40,40,0.4)',
      '--surface-solid': '#3a1a1a',
      '--border': 'rgba(200,60,60,0.35)',
      '--text': '#f5d5d5', '--text-soft': '#d0a0a0',
      '--accent': '#d64545', '--accent-2': '#8a2a2a',
      '--page-bg': '#3a1a1a', '--line': '#5a2a2a',
      '--shadow': '0 20px 60px rgba(214,69,69,0.3)',
      '--success': '#7ed687', '--error': '#ff4a4a'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #1a0505 0%, #2a0a0a 100%)',
      '--bg-solid': '#1a0505',
      '--surface': 'rgba(50,15,15,0.7)',
      '--surface-2': 'rgba(70,25,25,0.5)',
      '--surface-solid': '#2a0a0a',
      '--border': 'rgba(200,60,60,0.3)',
      '--text': '#e5c5c5', '--text-soft': '#a07070',
      '--accent': '#c83535', '--accent-2': '#6a1a1a',
      '--page-bg': '#2a0a0a', '--line': '#4a1a1a',
      '--shadow': '0 20px 60px rgba(0,0,0,0.6)',
      '--success': '#7ed687', '--error': '#ff4a4a'
    }
  },
  mono: {
    name: '🤍 Black & White',
    light: {
      '--bg': 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
      '--bg-solid': '#f5f5f5',
      '--surface': 'rgba(255,255,255,0.7)',
      '--surface-2': 'rgba(240,240,240,0.6)',
      '--surface-solid': '#ffffff',
      '--border': 'rgba(0,0,0,0.15)',
      '--text': '#1a1a1a', '--text-soft': '#5a5a5a',
      '--accent': '#1a1a1a', '--accent-2': '#8a8a8a',
      '--page-bg': '#ffffff', '--line': '#d0d0d0',
      '--shadow': '0 20px 60px rgba(0,0,0,0.15)',
      '--success': '#3a8a3a', '--error': '#8a3a3a'
    },
    dark: {
      '--bg': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      '--bg-solid': '#0a0a0a',
      '--surface': 'rgba(30,30,30,0.7)',
      '--surface-2': 'rgba(45,45,45,0.5)',
      '--surface-solid': '#1a1a1a',
      '--border': 'rgba(255,255,255,0.15)',
      '--text': '#e8e8e8', '--text-soft': '#9a9a9a',
      '--accent': '#e8e8e8', '--accent-2': '#6a6a6a',
      '--page-bg': '#1a1a1a', '--line': '#3a3a3a',
      '--shadow': '0 20px 60px rgba(0,0,0,0.6)',
      '--success': '#7ed687', '--error': '#ff6b81'
    }
  }
};

// ============ STORAGE KEYS ============
const STORAGE = {
  PIN: 'diary_pin',
  PAGES: 'diary_pages',
  THEME: 'diary_theme',
  MODE: 'diary_mode',
  SOUND: 'diary_sound',
  CURRENT: 'diary_current_page',
  MOODS: 'diary_moods'  // { 'YYYY-MM-DD': 'happy' }
};

const QUOTES = [
  '"Some secrets are worth keeping." ✨',
  '"You are allowed to be a masterpiece AND a work in progress." 🌸',
  '"Dear diary, you know all my secrets." 💖',
  '"Soft hearts write the loudest stories." 🌷',
  '"This is my safe little corner of the world." ☁️',
  '"Every page holds a piece of my soul." 🦋',
  '"Today, I choose to be gentle with myself." 🌙',
  '"Little by little, I am becoming." 💫'
];

const EMOJIS = ['😊','😍','🥰','😂','😭','😤','😴','🤔','😎','🥺','😇','🤗','💖','💕','💗','💘','✨','⭐','🌟','💫','🌸','🌷','🌹','🌺','🦋','🐝','🌙','☀️','🌈','☁️','🔥','💎','🎀','🎁','📖','✍️','🎵','🎶','🌻','🍀','🫶','👑','💌','📝','🗝️','🕊️','🌊','🍃'];

// Mood options for the weekly tracker
const MOODS = [
  { key: 'amazing', emoji: '🤩', label: 'Amazing' },
  { key: 'happy',   emoji: '😊', label: 'Happy' },
  { key: 'loved',   emoji: '🥰', label: 'Loved' },
  { key: 'calm',    emoji: '😌', label: 'Calm' },
  { key: 'meh',     emoji: '😐', label: 'Meh' },
  { key: 'tired',   emoji: '😴', label: 'Tired' },
  { key: 'sad',     emoji: '😔', label: 'Sad' },
  { key: 'anxious', emoji: '😰', label: 'Anxious' },
  { key: 'angry',   emoji: '😤', label: 'Angry' }
];

// ============ STATE ============
const state = {
  pin: '',
  setupStep: 1,
  tempPin: '',
  pages: [],
  currentPageId: null,
  theme: 'pastel',
  mode: 'light',
  soundOn: true,
  saveTimer: null,
  searchQuery: '',
  // Calendar
  calYear: new Date().getFullYear(),
  calMonth: new Date().getMonth(),
  // Week mood
  weekOffset: 0,
  moods: {},  // { 'YYYY-MM-DD': 'happy' }
  selectedWeekDay: null
};

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyTheme();
  buildKeypads();
  buildThemePanel();
  buildEmojiPicker();
  buildMoodOptions();
  setLockQuote();
  initBowCursor();
  bindAll();

  if (hasPin()) showScreen('lock-screen');
  else showScreen('setup-screen');
});

// ============ STATE PERSISTENCE ============
function hasPin() { return !!localStorage.getItem(STORAGE.PIN); }

function loadState() {
  state.theme = localStorage.getItem(STORAGE.THEME) || 'pastel';
  state.mode = localStorage.getItem(STORAGE.MODE) || 'light';
  state.soundOn = localStorage.getItem(STORAGE.SOUND) !== 'false';
  try { state.pages = JSON.parse(localStorage.getItem(STORAGE.PAGES)) || []; }
  catch { state.pages = []; }
  try { state.moods = JSON.parse(localStorage.getItem(STORAGE.MOODS)) || {}; }
  catch { state.moods = {}; }
  state.currentPageId = localStorage.getItem(STORAGE.CURRENT) || null;
}

function savePages() {
  localStorage.setItem(STORAGE.PAGES, JSON.stringify(state.pages));
  if (state.currentPageId) localStorage.setItem(STORAGE.CURRENT, state.currentPageId);
}

function saveMoods() {
  localStorage.setItem(STORAGE.MOODS, JSON.stringify(state.moods));
}

function savePrefs() {
  localStorage.setItem(STORAGE.THEME, state.theme);
  localStorage.setItem(STORAGE.MODE, state.mode);
  localStorage.setItem(STORAGE.SOUND, state.soundOn);
}

// ============ 🎀 BOW CURSOR ============
function initBowCursor() {
  const bow = document.getElementById('bow-follower');
  if (!bow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let bowX = mouseX, bowY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth follow animation
  function animate() {
    bowX += (mouseX - bowX) * 0.25;
    bowY += (mouseY - bowY) * 0.25;
    bow.style.transform = `translate(${bowX - 18}px, ${bowY - 18}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Click effect
  document.addEventListener('mousedown', () => bow.classList.add('clicking'));
  document.addEventListener('mouseup', () => bow.classList.remove('clicking'));

  // Hover effect on interactive elements
  document.addEventListener('mouseover', (e) => {
    const t = e.target;
    if (t.closest('button, a, .page-item, .cal-day, .week-day, .mood-option, .theme-chip, .key, input, textarea, [contenteditable]')) {
      bow.classList.add('hovering-link');
    }
  });
  document.addEventListener('mouseout', (e) => {
    const t = e.target;
    if (t.closest('button, a, .page-item, .cal-day, .week-day, .mood-option, .theme-chip, .key, input, textarea, [contenteditable]')) {
      bow.classList.remove('hovering-link');
    }
  });
}

// ============ THEME ============
function applyTheme() {
  const theme = THEMES[state.theme] || THEMES.pastel;
  const vars = theme[state.mode] || theme.light;
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  document.body.dataset.theme = state.theme;
  document.body.dataset.mode = state.mode;

  const modeBtn = document.getElementById('mode-btn');
  if (modeBtn) modeBtn.textContent = state.mode === 'light' ? '🌙' : '☀️';
  const modeSwitch = document.getElementById('mode-switch');
  if (modeSwitch) modeSwitch.checked = state.mode === 'dark';
  const soundBtn = document.getElementById('sound-btn');
  if (soundBtn) {
    soundBtn.textContent = state.soundOn ? '🔊' : '🔇';
    soundBtn.classList.toggle('off', !state.soundOn);
  }

  document.querySelectorAll('.theme-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.theme === state.theme);
  });
}

// ============ SOUND ENGINE ============
let audioCtx = null;
function getAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { return null; }
  }
  return audioCtx;
}

function playSound(type) {
  if (!state.soundOn) return;
  const ctx = getAudio();
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume();

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain); gain.connect(ctx.destination);

  switch (type) {
    case 'click':
      osc.type = 'sine'; osc.frequency.value = 800;
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now); osc.stop(now + 0.1);
      break;
    case 'key':
      osc.type = 'triangle'; osc.frequency.value = 600 + Math.random() * 200;
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now); osc.stop(now + 0.06);
      break;
    case 'unlock':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.linearRampToValueAtTime(900, now + 0.25);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now); osc.stop(now + 0.35);
      break;
    case 'error':
      osc.type = 'sawtooth'; osc.frequency.value = 150;
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now); osc.stop(now + 0.3);
      break;
    case 'save':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.setValueAtTime(800, now + 0.08);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now); osc.stop(now + 0.25);
      break;
    case 'page':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.linearRampToValueAtTime(500, now + 0.15);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now); osc.stop(now + 0.25);
      break;
    case 'delete':
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.2);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now); osc.stop(now + 0.3);
      break;
    case 'success':
      [523, 659].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sine'; o.frequency.value = freq;
        g.gain.setValueAtTime(0.08, now + i * 0.08);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
        o.start(now + i * 0.08); o.stop(now + i * 0.08 + 0.35);
      });
      return;
    case 'mood':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(500, now);
      osc.frequency.linearRampToValueAtTime(700, now + 0.12);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.start(now); osc.stop(now + 0.2);
      break;
  }
}

// ============ SCREEN SWITCH ============
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'diary-screen') initDiary();
}

// ============ KEYPADS ============
function buildKeypads() {
  ['setup-keypad', 'lock-keypad'].forEach(id => {
    const el = document.getElementById(id);
    el.innerHTML = '';
    for (let i = 1; i <= 9; i++) el.appendChild(makeKey(String(i)));
    el.appendChild(makeKey(null, 'empty'));
    el.appendChild(makeKey('0'));
    el.appendChild(makeKey('del', 'del'));
  });
}

function makeKey(val, extraClass = '') {
  const btn = document.createElement('button');
  btn.className = 'key' + (extraClass ? ' ' + extraClass : '');
  if (val === 'del') { btn.textContent = '⌫'; btn.dataset.key = 'del'; }
  else if (val === null) { btn.disabled = true; }
  else { btn.textContent = val; btn.dataset.key = val; }
  return btn;
}

function renderDots(container, value, len) {
  container.innerHTML = '';
  for (let i = 0; i < len; i++) {
    const d = document.createElement('span');
    d.className = 'pin-dot' + (i < value.length ? ' filled' : '');
    container.appendChild(d);
  }
}

// ============ SETUP FLOW ============
function bindSetup() {
  const display = document.getElementById('setup-display');
  const msg = document.getElementById('setup-msg');
  const nextBtn = document.getElementById('setup-next');
  const keypad = document.getElementById('setup-keypad');
  const pinLen = 4;
  renderDots(display, '', pinLen);

  keypad.addEventListener('click', (e) => {
    const k = e.target.closest('.key');
    if (!k || k.disabled) return;
    playSound('key');
    const v = k.dataset.key;
    if (v === 'del') state.pin = state.pin.slice(0, -1);
    else if (state.pin.length < pinLen) state.pin += v;
    renderDots(display, state.pin, pinLen);

    if (state.pin.length === pinLen) {
      if (state.setupStep === 1) {
        msg.textContent = 'Great! Tap Continue to confirm';
        msg.classList.remove('error');
        nextBtn.disabled = false;
      } else if (state.setupStep === 2) {
        if (state.pin === state.tempPin) {
          playSound('success');
          localStorage.setItem(STORAGE.PIN, state.tempPin);
          msg.textContent = 'PIN saved! Opening diary...';
          nextBtn.disabled = true;
          setTimeout(() => {
            showScreen('diary-screen');
            if (state.pages.length === 0) createNewPage(true);
          }, 800);
        } else {
          playSound('error');
          msg.textContent = "PINs don't match. Try again! 🔒";
          msg.classList.add('error');
          display.classList.add('shake', 'error');
          setTimeout(() => {
            display.classList.remove('shake', 'error');
            state.pin = '';
            renderDots(display, '', pinLen);
            msg.textContent = 'Confirm your PIN';
            msg.classList.remove('error');
          }, 1200);
        }
      }
    }
  });

  nextBtn.addEventListener('click', () => {
    playSound('click');
    if (state.setupStep === 1) {
      state.tempPin = state.pin;
      state.pin = '';
      state.setupStep = 2;
      renderDots(display, '', pinLen);
      msg.textContent = 'Confirm your PIN';
      msg.classList.remove('error');
      nextBtn.disabled = true;
    }
  });
}

// ============ LOCK FLOW ============
function bindLock() {
  const display = document.getElementById('lock-display');
  const msg = document.getElementById('lock-msg');
  const keypad = document.getElementById('lock-keypad');
  const card = document.getElementById('lock-card');
  const emoji = document.getElementById('lock-emoji');
  const pinLen = 4;
  renderDots(display, '', pinLen);

  keypad.addEventListener('click', (e) => {
    const k = e.target.closest('.key');
    if (!k || k.disabled) return;
    playSound('key');
    const v = k.dataset.key;
    if (v === 'del') state.pin = state.pin.slice(0, -1);
    else if (state.pin.length < pinLen) state.pin += v;
    renderDots(display, state.pin, pinLen);
    msg.textContent = 'Enter your PIN';
    msg.classList.remove('error');
    if (state.pin.length === pinLen) setTimeout(tryUnlock, 250);
  });

  function tryUnlock() {
    const saved = localStorage.getItem(STORAGE.PIN);
    if (state.pin === saved) {
      playSound('unlock');
      card.classList.add('shake');
      emoji.textContent = '🔓';
      msg.textContent = 'Welcome back! 💖';
      setTimeout(() => {
        card.classList.remove('shake');
        showScreen('diary-screen');
      }, 600);
    } else {
      playSound('error');
      msg.textContent = "That's not the right PIN. Try again! 🔒";
      msg.classList.add('error');
      card.classList.add('shake');
      display.classList.add('error');
      setTimeout(() => {
        card.classList.remove('shake');
        display.classList.remove('error');
        state.pin = '';
        renderDots(display, '', pinLen);
        emoji.textContent = '🔒';
        msg.textContent = 'Enter your PIN';
        msg.classList.remove('error');
      }, 1200);
    }
  }

  document.getElementById('forgot-btn').addEventListener('click', () => {
    playSound('click');
    openModal({
      title: 'Forgot PIN? 💔',
      body: `<p>For security, there's no recovery. You can reset the diary to start fresh — all entries will be lost.</p>`,
      actions: [
        { label: 'Cancel', class: 'cancel', action: closeModal },
        { label: 'Reset Everything', class: 'confirm', action: () => { closeModal(); resetDiary(true); } }
      ]
    });
  });
}

function setLockQuote() {
  const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  document.getElementById('lock-quote').textContent = q;
}

// ============ DIARY INIT ============
function initDiary() {
  renderPageList();
  if (state.pages.length === 0) createNewPage(true);
  else if (state.currentPageId) {
    const p = state.pages.find(x => x.id === state.currentPageId);
    if (p) loadPage(p.id); else loadPage(state.pages[0].id);
  } else loadPage(state.pages[0].id);
  updateStats();
}

// ============ PAGES ============
function createNewPage(silent = false, dateOverride = null) {
  const now = dateOverride ? dateOverride.getTime() : Date.now();
  const page = {
    id: 'p_' + now + '_' + Math.random().toString(36).slice(2, 6),
    title: '',
    content: '',
    date: now,
    favorite: false
  };
  state.pages.unshift(page);
  savePages();
  renderPageList();
  loadPage(page.id);
  if (!silent) {
    playSound('page');
    showToast('✨ New page created');
  }
  updateStats();
  renderCalendar();
}

function loadPage(id) {
  const page = state.pages.find(p => p.id === id);
  if (!page) return;
  state.currentPageId = id;
  localStorage.setItem(STORAGE.CURRENT, id);

  document.getElementById('page-title').value = page.title;
  document.getElementById('page-content').innerHTML = page.content;
  document.getElementById('page-date').textContent = formatDate(page.date);
  const favBtn = document.getElementById('favorite-btn');
  favBtn.textContent = page.favorite ? '★' : '☆';
  favBtn.classList.toggle('fav-active', page.favorite);

  updateCounts();
  renderPageList();
}

function saveCurrentPage() {
  if (!state.currentPageId) return;
  const page = state.pages.find(p => p.id === state.currentPageId);
  if (!page) return;
  page.title = document.getElementById('page-title').value.trim();
  page.content = document.getElementById('page-content').innerHTML;
  savePages();
  renderPageList();
  updateCounts();
  updateStats();
  renderCalendar();
}

function scheduleSave() {
  clearTimeout(state.saveTimer);
  const status = document.getElementById('save-status');
  status.textContent = '● Saving...';
  status.classList.add('saving');
  state.saveTimer = setTimeout(() => {
    saveCurrentPage();
    status.textContent = '● Saved';
    status.classList.remove('saving');
    playSound('save');
  }, 600);
}

function deleteCurrentPage() {
  if (!state.currentPageId) return;
  const idx = state.pages.findIndex(p => p.id === state.currentPageId);
  if (idx < 0) return;
  openModal({
    title: 'Delete Page? 🗑',
    body: `<p>This page will be permanently deleted.</p>`,
    actions: [
      { label: 'Cancel', class: 'cancel', action: closeModal },
      { label: 'Delete', class: 'confirm', action: () => {
        playSound('delete');
        state.pages.splice(idx, 1);
        savePages();
        closeModal();
        if (state.pages.length === 0) createNewPage(true);
        else loadPage(state.pages[Math.max(0, idx - 1)].id);
        updateStats();
        renderCalendar();
        showToast('🗑 Page deleted');
      }}
    ]
  });
}

function toggleFavorite() {
  const page = state.pages.find(p => p.id === state.currentPageId);
  if (!page) return;
  page.favorite = !page.favorite;
  savePages();
  loadPage(page.id);
  playSound('click');
  showToast(page.favorite ? '⭐ Favorited' : '☆ Unfavorited');
}

// ============ RENDER PAGE LIST ============
function renderPageList() {
  const list = document.getElementById('page-list');
  const q = state.searchQuery.toLowerCase();
  const filtered = state.pages.filter(p => {
    if (!q) return true;
    const text = (p.title + ' ' + stripHTML(p.content)).toLowerCase();
    return text.includes(q);
  });

  if (filtered.length === 0) {
    list.innerHTML = '<div class="page-list-empty">No pages yet.<br>Create your first page! ✨</div>';
    return;
  }

  list.innerHTML = '';
  filtered.forEach(p => {
    const item = document.createElement('button');
    item.className = 'page-item' + (p.id === state.currentPageId ? ' active' : '');
    const preview = stripHTML(p.content).slice(0, 60) || 'Empty page';
    item.innerHTML = `
      <div class="page-item-title">
        ${p.favorite ? '<span class="fav">★</span>' : ''}
        <span>${escapeHTML(p.title || 'Untitled')}</span>
      </div>
      <div class="page-item-preview">${escapeHTML(preview)}</div>
      <div class="page-item-date">${formatDateShort(p.date)}</div>
    `;
    item.addEventListener('click', () => {
      playSound('page');
      loadPage(p.id);
      if (window.innerWidth < 820) document.getElementById('sidebar').classList.remove('open');
    });
    list.appendChild(item);
  });
}

// ============ EDITOR ============
function bindEditor() {
  const content = document.getElementById('page-content');
  const title = document.getElementById('page-title');

  content.addEventListener('input', scheduleSave);
  title.addEventListener('input', scheduleSave);

  document.querySelectorAll('.tool[data-cmd]').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click');
      const cmd = btn.dataset.cmd;
      const val = btn.dataset.val || null;
      content.focus();
      if (cmd === 'formatBlock' && val) document.execCommand(cmd, false, `<${val}>`);
      else document.execCommand(cmd, false, val);
      scheduleSave();
    });
  });

  document.getElementById('insert-emoji-btn').addEventListener('click', (e) => {
    playSound('click');
    const picker = document.getElementById('emoji-picker');
    const rect = e.target.getBoundingClientRect();
    picker.style.top = (rect.bottom + 8) + 'px';
    picker.style.left = Math.min(rect.left, window.innerWidth - 290) + 'px';
    picker.classList.toggle('open');
  });

  document.getElementById('favorite-btn').addEventListener('click', toggleFavorite);
  document.getElementById('delete-page-btn').addEventListener('click', deleteCurrentPage);
  document.getElementById('new-page-btn').addEventListener('click', () => createNewPage());

  document.getElementById('search-input').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderPageList();
  });
}

function updateCounts() {
  const content = document.getElementById('page-content');
  const text = content.innerText || '';
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById('word-count').textContent = words + ' words';
  document.getElementById('char-count').textContent = text.length + ' chars';
}

function updateStats() {
  document.getElementById('stat-pages').textContent = state.pages.length + ' pages';
  const totalWords = state.pages.reduce((sum, p) => {
    const text = stripHTML(p.content);
    return sum + (text.trim() ? text.trim().split(/\s+/).length : 0);
  }, 0);
  document.getElementById('stat-words').textContent = totalWords + ' words';
}

// ============ EMOJI PICKER ============
function buildEmojiPicker() {
  const grid = document.getElementById('emoji-grid');
  EMOJIS.forEach(e => {
    const btn = document.createElement('button');
    btn.textContent = e;
    btn.addEventListener('click', () => {
      playSound('click');
      const content = document.getElementById('page-content');
      content.focus();
      document.execCommand('insertText', false, e);
      scheduleSave();
      document.getElementById('emoji-picker').classList.remove('open');
    });
    grid.appendChild(btn);
  });

  document.addEventListener('click', (e) => {
    const picker = document.getElementById('emoji-picker');
    const trigger = document.getElementById('insert-emoji-btn');
    if (!picker.contains(e.target) && e.target !== trigger) {
      picker.classList.remove('open');
    }
  });
}

// ============ 📅 CALENDAR ============
function renderCalendar() {
  const grid = document.getElementById('cal-grid');
  const label = document.getElementById('cal-month-label');
  if (!grid) return;

  const year = state.calYear;
  const month = state.calMonth;
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  label.textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const todayY = today.getFullYear(), todayM = today.getMonth(), todayD = today.getDate();

  // Build a set of dates that have pages
  const pageDates = new Set();
  state.pages.forEach(p => {
    const d = new Date(p.date);
    if (d.getFullYear() === year && d.getMonth() === month) {
      pageDates.add(d.getDate());
    }
  });

  grid.innerHTML = '';
  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-day empty';
    grid.appendChild(empty);
  }
  // Day cells
  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('button');
    cell.className = 'cal-day';
    const isToday = (d === todayD && month === todayM && year === todayY);
    if (isToday) cell.classList.add('today');
    if (pageDates.has(d)) cell.classList.add('has-page');

    const dateKey = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const moodKey = state.moods[dateKey];
    const mood = MOODS.find(m => m.key === moodKey);

    cell.innerHTML = `<span>${d}</span>`;
    if (mood) {
      const moodEl = document.createElement('span');
      moodEl.className = 'day-mood';
      moodEl.textContent = mood.emoji;
      cell.appendChild(moodEl);
    }

    cell.addEventListener('click', () => {
      playSound('click');
      openOrCreatePageForDate(new Date(year, month, d, 12, 0, 0));
    });
    grid.appendChild(cell);
  }
}

function openOrCreatePageForDate(date) {
  // Find a page on this date
  const y = date.getFullYear(), m = date.getMonth(), d = date.getDate();
  const existing = state.pages.find(p => {
    const pd = new Date(p.date);
    return pd.getFullYear() === y && pd.getMonth() === m && pd.getDate() === d;
  });
  if (existing) {
    loadPage(existing.id);
    showToast('📖 Opened page');
  } else {
    createNewPage(false, date);
    showToast('✨ Created page for ' + formatDateShort(date.getTime()));
  }
  // Close calendar panel on mobile
  if (window.innerWidth < 820) {
    document.getElementById('calendar-panel').classList.remove('open');
  }
}

function bindCalendar() {
  document.getElementById('cal-prev').addEventListener('click', () => {
    playSound('click');
    state.calMonth--;
    if (state.calMonth < 0) { state.calMonth = 11; state.calYear--; }
    renderCalendar();
  });
  document.getElementById('cal-next').addEventListener('click', () => {
    playSound('click');
    state.calMonth++;
    if (state.calMonth > 11) { state.calMonth = 0; state.calYear++; }
    renderCalendar();
  });
  document.getElementById('cal-today-btn').addEventListener('click', () => {
    playSound('click');
    const today = new Date();
    state.calYear = today.getFullYear();
    state.calMonth = today.getMonth();
    renderCalendar();
    openOrCreatePageForDate(today);
  });
}

// ============ 💖 WEEK MOOD TRACKER ============
function getWeekDates(offset = 0) {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0=Sun, 6=Sat
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek + (offset * 7));
  startOfWeek.setHours(0, 0, 0, 0);

  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    dates.push(d);
  }
  return dates;
}

function renderWeekMood() {
  const grid = document.getElementById('week-mood-grid');
  const label = document.getElementById('week-label');
  if (!grid) return;

  const dates = getWeekDates(state.weekOffset);
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  // Label
  if (state.weekOffset === 0) label.textContent = 'This Week';
  else if (state.weekOffset === -1) label.textContent = 'Last Week';
  else if (state.weekOffset === 1) label.textContent = 'Next Week';
  else label.textContent = `${formatDateShort(dates[0].getTime())} – ${formatDateShort(dates[6].getTime())}`;

  grid.innerHTML = '';
  dates.forEach(d => {
    const dateKey = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const isToday = dateKey === todayStr;
    const mood = state.moods[dateKey];
    const moodData = MOODS.find(m => m.key === mood);

    const cell = document.createElement('button');
    cell.className = 'week-day' + (isToday ? ' today-col' : '') + (!moodData ? ' empty-mood' : '');
    cell.innerHTML = `
      <div class="week-day-name">${dayNames[d.getDay()]}</div>
      <div class="week-day-num">${d.getDate()}</div>
      <div class="week-day-mood">${moodData ? moodData.emoji : '·'}</div>
    `;
    cell.addEventListener('click', (e) => {
      playSound('click');
      openMoodPopup(dateKey, d, e);
    });
    grid.appendChild(cell);
  });
}

function openMoodPopup(dateKey, date, event) {
  const popup = document.getElementById('mood-popup');
  const title = document.getElementById('mood-popup-title');
  title.textContent = `How did you feel on ${formatDateShort(date.getTime())}?`;

  // Highlight selected mood
  const currentMood = state.moods[dateKey];
  document.querySelectorAll('.mood-option').forEach(opt => {
    opt.classList.toggle('selected', opt.dataset.mood === currentMood);
  });

  // Position popup
  const rect = event.currentTarget.getBoundingClientRect();
  popup.style.top = Math.min(rect.bottom + 8, window.innerHeight - 260) + 'px';
  popup.style.left = Math.max(10, Math.min(rect.left, window.innerWidth - 220)) + 'px';
  popup.classList.add('open');
  popup.dataset.dateKey = dateKey;
}

function buildMoodOptions() {
  const container = document.getElementById('mood-options');
  MOODS.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'mood-option';
    btn.dataset.mood = m.key;
    btn.innerHTML = `${m.emoji}<span>${m.label}</span>`;
    btn.addEventListener('click', () => {
      const popup = document.getElementById('mood-popup');
      const dateKey = popup.dataset.dateKey;
      state.moods[dateKey] = m.key;
      saveMoods();
      playSound('mood');
      popup.classList.remove('open');
      renderWeekMood();
      renderCalendar();
      showToast(`${m.emoji} ${m.label}`);
    });
    container.appendChild(btn);
  });

  document.getElementById('mood-clear-btn').addEventListener('click', () => {
    const popup = document.getElementById('mood-popup');
    const dateKey = popup.dataset.dateKey;
    delete state.moods[dateKey];
    saveMoods();
    playSound('click');
    popup.classList.remove('open');
    renderWeekMood();
    renderCalendar();
    showToast('Mood cleared');
  });

  // Close mood popup on outside click
  document.addEventListener('click', (e) => {
    const popup = document.getElementById('mood-popup');
    if (!popup.contains(e.target) && !e.target.closest('.week-day')) {
      popup.classList.remove('open');
    }
  });
}

function bindWeekNav() {
  document.getElementById('week-prev').addEventListener('click', () => {
    playSound('click');
    state.weekOffset--;
    renderWeekMood();
  });
  document.getElementById('week-next').addEventListener('click', () => {
    playSound('click');
    state.weekOffset++;
    renderWeekMood();
  });
}

// ============ THEME PANEL ============
function buildThemePanel() {
  const grid = document.getElementById('theme-grid');
  grid.innerHTML = '';
  Object.entries(THEMES).forEach(([key, t]) => {
    const btn = document.createElement('button');
    btn.className = 'theme-chip' + (key === state.theme ? ' active' : '');
    btn.dataset.theme = key;
    btn.innerHTML = `<span class="swatch" style="background:${t.light['--accent']}"></span>${t.name}`;
    btn.addEventListener('click', () => {
      playSound('click');
      state.theme = key;
      applyTheme();
      savePrefs();
      showToast(`🎨 ${t.name}`);
    });
    grid.appendChild(btn);
  });

  document.getElementById('mode-switch').addEventListener('change', (e) => {
    playSound('click');
    state.mode = e.target.checked ? 'dark' : 'light';
    applyTheme();
    savePrefs();
    showToast(state.mode === 'dark' ? '🌙 Dark mode' : '☀️ Light mode');
  });
}

// ============ PANELS & MODALS ============
function bindPanels() {
  document.getElementById('calendar-btn').addEventListener('click', () => {
    playSound('click');
    document.getElementById('calendar-panel').classList.add('open');
    document.getElementById('theme-panel').classList.remove('open');
    document.getElementById('settings-panel').classList.remove('open');
    renderCalendar();
    renderWeekMood();
  });
  document.getElementById('theme-btn').addEventListener('click', () => {
    playSound('click');
    document.getElementById('theme-panel').classList.add('open');
    document.getElementById('calendar-panel').classList.remove('open');
    document.getElementById('settings-panel').classList.remove('open');
  });
  document.getElementById('settings-btn').addEventListener('click', () => {
    playSound('click');
    document.getElementById('settings-panel').classList.add('open');
    document.getElementById('calendar-panel').classList.remove('open');
    document.getElementById('theme-panel').classList.remove('open');
  });
  document.getElementById('mode-btn').addEventListener('click', () => {
    playSound('click');
    state.mode = state.mode === 'light' ? 'dark' : 'light';
    applyTheme();
    savePrefs();
    showToast(state.mode === 'dark' ? '🌙 Dark mode' : '☀️ Light mode');
  });
  document.getElementById('sound-btn').addEventListener('click', () => {
    state.soundOn = !state.soundOn;
    applyTheme();
    savePrefs();
    showToast(state.soundOn ? '🔊 Sound on' : '🔇 Sound off');
    if (state.soundOn) playSound('click');
  });

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click');
      const target = btn.dataset.close;
      if (target === 'modal') closeModal();
      else document.getElementById(target).classList.remove('open');
    });
  });

  document.getElementById('export-btn').addEventListener('click', () => {
    playSound('click');
    exportDiary();
  });

  document.getElementById('change-pin-setting').addEventListener('click', () => {
    document.getElementById('settings-panel').classList.remove('open');
    openChangePin();
  });
  document.getElementById('reset-setting').addEventListener('click', () => {
    document.getElementById('settings-panel').classList.remove('open');
    openResetConfirm();
  });
  document.getElementById('lock-setting').addEventListener('click', () => {
    playSound('click');
    document.getElementById('settings-panel').classList.remove('open');
    state.pin = '';
    document.getElementById('lock-emoji').textContent = '🔒';
    renderDots(document.getElementById('lock-display'), '', 4);
    document.getElementById('lock-msg').textContent = 'Enter your PIN';
    showScreen('lock-screen');
    showToast('🔒 Locked');
  });

  document.getElementById('mobile-menu').addEventListener('click', () => {
    playSound('click');
    document.getElementById('sidebar').classList.toggle('open');
  });
  document.getElementById('toggle-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
  });
}

// ============ CHANGE PIN ============
function openChangePin() {
  openModal({
    title: '🔑 Change PIN',
    body: `<p>Enter your current PIN:</p>
           <div class="pin-display" id="cp-display"></div>
           <div class="keypad" id="cp-keypad"></div>`,
    actions: [
      { label: 'Cancel', class: 'cancel', action: closeModal },
      { label: 'Verify', class: 'confirm', action: verifyForChange }
    ]
  });
  window._cpBuffer = '';
  renderDots(document.getElementById('cp-display'), '', 4);
  const kp = document.getElementById('cp-keypad');
  for (let i = 1; i <= 9; i++) kp.appendChild(makeKey(String(i)));
  kp.appendChild(makeKey(null, 'empty'));
  kp.appendChild(makeKey('0'));
  kp.appendChild(makeKey('del', 'del'));
  kp.addEventListener('click', (e) => {
    const k = e.target.closest('.key');
    if (!k || k.disabled) return;
    playSound('key');
    const v = k.dataset.key;
    if (v === 'del') window._cpBuffer = window._cpBuffer.slice(0, -1);
    else if (window._cpBuffer.length < 4) window._cpBuffer += v;
    renderDots(document.getElementById('cp-display'), window._cpBuffer, 4);
  });
}

function verifyForChange() {
  const saved = localStorage.getItem(STORAGE.PIN);
  if (window._cpBuffer === saved) {
    playSound('success');
    closeModal();
    state.setupStep = 1;
    state.pin = '';
    state.tempPin = '';
    renderDots(document.getElementById('setup-display'), '', 4);
    document.getElementById('setup-msg').textContent = 'Enter your new PIN';
    document.getElementById('setup-msg').classList.remove('error');
    document.getElementById('setup-next').disabled = true;
    showScreen('setup-screen');
  } else {
    playSound('error');
    const d = document.getElementById('cp-display');
    d.classList.add('shake', 'error');
    setTimeout(() => {
      d.classList.remove('shake', 'error');
      window._cpBuffer = '';
      renderDots(d, '', 4);
    }, 1000);
  }
}

// ============ RESET ============
function openResetConfirm() {
  openModal({
    title: '🗑 Reset Diary?',
    body: `<p>This will erase <b>everything</b>: all pages, PIN, moods, and settings.</p>
           <p style="margin-top:10px">Enter your PIN to confirm:</p>
           <div class="pin-display" id="rs-display"></div>
           <div class="keypad" id="rs-keypad"></div>`,
    actions: [
      { label: 'Cancel', class: 'cancel', action: closeModal },
      { label: 'Erase Everything', class: 'confirm', action: doReset }
    ]
  });
  window._rsBuffer = '';
  renderDots(document.getElementById('rs-display'), '', 4);
  const kp = document.getElementById('rs-keypad');
  for (let i = 1; i <= 9; i++) kp.appendChild(makeKey(String(i)));
  kp.appendChild(makeKey(null, 'empty'));
  kp.appendChild(makeKey('0'));
  kp.appendChild(makeKey('del', 'del'));
  kp.addEventListener('click', (e) => {
    const k = e.target.closest('.key');
    if (!k || k.disabled) return;
    playSound('key');
    const v = k.dataset.key;
    if (v === 'del') window._rsBuffer = window._rsBuffer.slice(0, -1);
    else if (window._rsBuffer.length < 4) window._rsBuffer += v;
    renderDots(document.getElementById('rs-display'), window._rsBuffer, 4);
  });
}

function doReset() {
  const saved = localStorage.getItem(STORAGE.PIN);
  if (window._rsBuffer !== saved) {
    playSound('error');
    const d = document.getElementById('rs-display');
    d.classList.add('shake', 'error');
    setTimeout(() => {
      d.classList.remove('shake', 'error');
      window._rsBuffer = '';
      renderDots(d, '', 4);
    }, 1000);
    return;
  }
  resetDiary(true);
}

function resetDiary(force) {
  if (!force) return;
  Object.values(STORAGE).forEach(k => localStorage.removeItem(k));
  playSound('delete');
  closeModal();
  showToast('🗑 Everything erased');
  setTimeout(() => location.reload(), 800);
}

// ============ EXPORT ============
function exportDiary() {
  const data = {
    exportedAt: new Date().toISOString(),
    pageCount: state.pages.length,
    moods: state.moods,
    pages: state.pages.map(p => ({
      title: p.title || 'Untitled',
      date: new Date(p.date).toISOString(),
      favorite: p.favorite,
      content: stripHTML(p.content)
    }))
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `diary-export-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  playSound('success');
  showToast('📥 Exported');
}

// ============ MODAL ============
function openModal({ title, body, actions }) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = body;
  const actEl = document.getElementById('modal-actions');
  actEl.innerHTML = '';
  actions.forEach(a => {
    const b = document.createElement('button');
    b.className = a.class;
    b.textContent = a.label;
    b.addEventListener('click', a.action);
    actEl.appendChild(b);
  });
  document.getElementById('modal-backdrop').classList.add('open');
}
function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('open');
}

// ============ TOAST ============
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

// ============ BIND ALL ============
function bindAll() {
  bindSetup();
  bindLock();
  bindEditor();
  bindPanels();
  bindCalendar();
  bindWeekNav();

  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('diary-screen').classList.contains('active')) return;
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
      e.preventDefault();
      createNewPage();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
      e.preventDefault();
      document.getElementById('search-input').focus();
    }
  });
}

// ============ HELPERS ============
function stripHTML(html) {
  const div = document.createElement('div');
  div.innerHTML = html || '';
  return div.textContent || div.innerText || '';
}
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function formatDate(ts) {
  return new Date(ts).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
function formatDateShort(ts) {
  return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}