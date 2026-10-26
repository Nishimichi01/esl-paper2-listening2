#!/usr/bin/env node
/**
 * build.mjs — ESL Paper 2 workshop, v2
 * Single self-contained index.html: fonts + exam crops embedded, audio in ./audio.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { slides } from './content/slides.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const p = (...a) => resolve(ROOT, ...a);
const attr = (s = '') => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/* ── the one place to change the exam variant ─────────────────────
   0511/21  →  component 2, variant 1
   Used on slide 1 and slide 10 (and anywhere else VARIANT appears). */
const VARIANT = '1';

/* ── images ─────────────────────────────────────────────────────── */
const imgCache = new Map();
function dataUri(name) {
  if (!imgCache.has(name)) {
    imgCache.set(name, 'data:image/jpeg;base64,' + readFileSync(p('assets/img/qp', name + '.jpg')).toString('base64'));
  }
  return imgCache.get(name);
}
const logo = 'data:image/png;base64,' + readFileSync(p('assets/img/logo-embed.png')).toString('base64');

/* ── audio ──────────────────────────────────────────────────────── */
const INLINE_AUDIO = process.env.INLINE_AUDIO === '1';
const audCache = new Map();
function audSrc(name) {
  if (!INLINE_AUDIO) return 'audio/' + name + '.mp3';
  if (!audCache.has(name)) {
    audCache.set(name, 'data:audio/mpeg;base64,' + readFileSync(p('assets/audio', name + '.mp3')).toString('base64'));
  }
  return audCache.get(name);
}
const ICON_PLAY = '<svg class="ic-play" viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg>';
const ICON_PAUSE = '<svg class="ic-pause" viewBox="0 0 24 24"><rect x="7" y="5.5" width="3.6" height="13" rx="1"/><rect x="13.4" y="5.5" width="3.6" height="13" rx="1"/></svg>';

function player(clip, line1, line2, small) {
  return `<div class="player${small ? ' sm' : ''}">
          <button class="pp" aria-label="Play: ${attr(line1)}">${ICON_PLAY}${ICON_PAUSE}</button>
          <div class="pt"><div class="l1">${line1}</div>${line2 ? `<div class="l2">${line2}</div>` : ''}</div>
          <span class="dur">--:--</span>
          <div class="track" tabindex="0" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="line"><i></i><b class="knob"></b></div></div>
          <audio src="${audSrc(clip)}" preload="metadata"></audio>
        </div>`;
}

/* ── flat topic icons ───────────────────────────────────────────── */
const ICONS = {
  headphones: '<svg viewBox="0 0 48 48"><path d="M8 30v-6a16 16 0 0 1 32 0v6"/><rect x="4" y="28" width="9" height="14" rx="4"/><rect x="35" y="28" width="9" height="14" rx="4"/></svg>',
  speaker:    '<svg viewBox="0 0 48 48"><path d="M6 19h7l10-8v26l-10-8H6z"/><path d="M30 18a8 8 0 0 1 0 12"/><path d="M35 13a15 15 0 0 1 0 22"/></svg>',
  picture:    '<svg viewBox="0 0 48 48"><rect x="5" y="8" width="38" height="32" rx="3"/><circle cx="16" cy="19" r="4"/><path d="M8 35l10-11 7 8 6-6 9 9"/></svg>',
  tick:       '<svg viewBox="0 0 48 48"><path d="M8 25l11 11L40 12"/></svg>',
  abc:        '<svg viewBox="0 0 48 48"><path d="M6 34l7-20 7 20M9 28h8"/><path d="M27 34V14h6a6 6 0 0 1 0 12h-6"/><path d="M27 26h6a6 6 0 0 1 0 12h-6"/></svg>',
  notepad:    '<svg viewBox="0 0 48 48"><rect x="9" y="8" width="30" height="34" rx="3"/><path d="M16 18h16M16 26h16M16 34h10"/></svg>',
  ear:        '<svg viewBox="0 0 48 48"><path d="M28 40c0-6-6-7-6-13a9 9 0 1 1 18 0c0 5-3 7-3 11"/><path d="M22 27c-3-2-5-5-5-8a5 5 0 0 1 9-2"/></svg>',
  pencil:     '<svg viewBox="0 0 48 48"><path d="M10 38l3-9 20-20 6 6-20 20z"/><path d="M29 13l6 6"/></svg>',
};
const ico = (n) => ICONS[n] || ICONS.headphones;

/* ── closing-slide art ──────────────────────────────────────────── */
const ART_PATH = `<svg viewBox="0 0 100 100"><path class="acc" d="M8 86c6 0 10-7 10-15s9-10 15-15 7-11 7-18"/>
<circle cx="8" cy="86" r="4"/><circle cx="23" cy="70" r="4"/><circle cx="40" cy="53" r="4"/><circle cx="48" cy="36" r="4"/>
<path d="M48 36V12"/><path d="M48 12h21l-5 6 5 6H48"/></svg>`;
const ART_TOP = `<svg viewBox="0 0 100 100"><path class="acc" d="M12 86h76L54 50z"/><path d="M6 86h88"/>
<circle cx="40" cy="30" r="8"/><path d="M40 38v10M40 46l-9 6M40 46l10 4M40 56l-8 14M40 56l9 12"/>
<path d="M66 20v40"/><path class="acc" d="M66 22l16 5-16 6z"/><path class="acc" d="M78 44a7 7 0 0 1 0 12"/></svg>`;

/* ── expanders ──────────────────────────────────────────────────── */
function expand(html = '') {
  return String(html)
    .replace(/__IMG:([a-z0-9_]+)__/g, (m, n) => dataUri(n))
    .replace(/__PLAYSM:([a-z0-9_]+)\|([^|]*)\|?([^_|]*)__/g, (m, c, l1, l2) => player(c, l1, l2, true))
    .replace(/__PLAY:([a-z0-9_]+)\|([^|]*)\|?([^_|]*)__/g, (m, c, l1, l2) => player(c, l1, l2, false))
    .replace(/__VAR__/g, VARIANT);
}

const notes = (s) => (s.notes ? `<div class="slide__notes">${s.notes}</div>` : '');

/* ── steps box ──────────────────────────────────────────────────── */
function stepsBox(st) {
  if (!st) return '';
  if (st.kind === 'important') {
    return `<div class="imp"><h3>IMPORTANT!</h3><div class="steps"><ul>${st.items.map(i => `<li class="rv">${i}</li>`).join('')}</ul></div></div>`;
  }
  const cls = st.kind === 'todo' ? 'steps todo' : 'steps';
  return `<div class="${cls}"><h4>${st.heading || 'Steps!'}</h4><ol>${st.items.map(i => `<li class="rv">${i}</li>`).join('')}</ol></div>`;
}

function foot(s, i) {
  return `<footer class="s-foot"><span>Falih Junior International Academy &nbsp;·&nbsp; IGCSE ESL 0511 &nbsp;·&nbsp; Paper 2 Listening</span><span class="pg">${i + 1}</span></footer>`;
}

/* ── renderers ──────────────────────────────────────────────────── */
function renderTitle(s, i) {
  return `
      <section class="slide title" id="${s.id}" aria-label="Slide ${i + 1}: ${attr(s.title)}">
        <div class="band-top">
          <div class="brand"><div class="logo" role="img" aria-label="Falih Junior International Academy"></div></div>
          <div class="hero"><h1>${s.title}</h1>${s.tagline ? `<div class="sub">${s.tagline}</div>` : ''}</div>
        </div>
        <div class="band-bot">
          <div>
            <div class="subj">English as a Second Language</div>
            <div class="code">0511</div>
            <div class="meta">${expand(s.meta || '')}</div>
          </div>
        </div>
        ${notes(s)}
      </section>`;
}

function renderDivider(s, i) {
  return `
      <section class="slide divider" id="${s.id}" aria-label="Slide ${i + 1}: ${attr(s.title)}">
        <div class="split">
          <div class="left">
            ${s.eyebrow ? `<div class="eyebrow">${s.eyebrow}</div>` : ''}
            <h2>${s.title}</h2>
            ${s.sub ? `<p>${s.sub}</p>` : ''}
          </div>
          <div class="right">
            <div class="tile a">${ico(s.iconA || 'headphones')}</div>
            <div class="tile b">${ico(s.iconB || 'speaker')}</div>
          </div>
        </div>
        ${notes(s)}
      </section>`;
}

function renderClose(s, i) {
  return `
      <section class="slide close" id="${s.id}" aria-label="Slide ${i + 1}: ${attr(s.title)}">
        <div class="inner">
          <h1>${s.title}</h1>
          <div class="icons">${ART_PATH}${ART_TOP}</div>
          ${s.meta ? `<div class="meta">${expand(s.meta)}</div>` : ''}
        </div>
        ${notes(s)}
      </section>`;
}

function render(s, i) {
  if (s.kind === 'title') return renderTitle(s, i);
  if (s.kind === 'divider') return renderDivider(s, i);
  if (s.kind === 'close') return renderClose(s, i);

  const hasSide = !!s.steps;
  const progressive = !!s.reveal || !!s.steps;
  return `
      <section class="slide" id="${s.id}"${progressive ? ' data-reveal=""' : ''} aria-label="Slide ${i + 1}: ${attr(s.title)}">
        ${s.label ? `<div class="big-label">${s.label}</div>` : ''}
        <div class="s-head">
          ${s.kicker ? `<div class="s-kick">${s.kicker}</div>` : ''}
          ${s.title ? `<h2 class="s-title">${s.title}</h2>` : ''}
          ${s.sub ? `<p class="s-sub">${expand(s.sub)}</p>` : ''}
        </div>
        <div class="body${hasSide ? ' has-side' : ''}">
          <div class="body-main">${expand(s.body) || ''}</div>
          ${hasSide ? `<aside class="side">${stepsBox(s.steps)}</aside>` : ''}
        </div>
        ${foot(s, i)}
        ${notes(s)}
      </section>`;
}

/* ── assemble ───────────────────────────────────────────────────── */
const body = slides.map(render).join('\n');

let css = readFileSync(p('src/deck.css'), 'utf8');
css = css.replace('__FONT_DISPLAY__', readFileSync(p('assets/fonts/Fredoka-latin.woff2')).toString('base64'));
css = css.replace('__LOGO__', readFileSync(p('assets/img/logo-embed.png')).toString('base64'));

const js = readFileSync(p('src/deck.js'), 'utf8');

const I = {
  prev: '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
  next: '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>',
  notes: '<svg viewBox="0 0 24 24"><path d="M4 5h16M4 10h16M4 15h10"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  fs: '<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  print: '<svg viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 18H4v-6h16v6h-2M8 14h8v7H8z"/></svg>',
  desktop: '<svg viewBox="0 0 24 24"><rect x="2.5" y="4" width="19" height="12.5" rx="2"/><path d="M8 20.5h8M12 16.5v4"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg>',
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow, noarchive">
<meta name="theme-color" content="#1155CC">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Paper 2 Listening">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="img/icon-192.png">
<link rel="icon" href="img/icon-192.png">
<title>ESL Answering Techniques Workshop — Paper 2 Listening (0511) | Falih Junior International Academy</title>
<meta name="description" content="A step-by-step workshop on Cambridge IGCSE English as a Second Language 0511 Paper 2 (Listening), using the October/November 2025 paper. Falih Junior International Academy.">
<style>
${css}
</style>
</head>
<body>
<div class="stage"><div class="canvas" id="canvas">
${body}
</div></div>

<div class="chrome">
  <div class="mark"><span class="markimg" role="img" aria-label="Falih Junior International Academy"></span><span>Paper 2 · Listening</span></div>
  <div class="ctr">
    <button class="btn" id="b-prev" aria-label="Previous" title="Previous (←)">${I.prev}</button>
    <span class="count" id="count" aria-live="polite"><b>1</b> / ${slides.length}</span>
    <button class="btn" id="b-next" aria-label="Next" title="Next (→ or space)">${I.next}</button>
    <button class="btn" id="b-notes" aria-pressed="false" aria-label="Speaker notes" title="Speaker notes (N)">${I.notes}</button>
    <button class="btn" id="b-ov" aria-pressed="false" aria-label="Overview" title="Overview (G)">${I.grid}</button>
    <button class="btn" id="b-print" aria-label="Print / PDF" title="Print / export PDF (P)">${I.print}</button>
    <button class="btn" id="b-fs" aria-label="Fullscreen" title="Fullscreen (F)">${I.fs}</button>
  </div>
  <div class="prog"><i id="prog"></i></div>
</div>

<aside class="notes" id="notes" aria-label="Speaker notes">
  <div class="hd"><span>Speaker notes</span><span style="text-transform:none;letter-spacing:0">N to close</span></div>
  <div class="bd" id="notes-bd"></div>
</aside>

<div class="ov" id="ov" hidden>
  <div class="hd">
    <span>Overview — ${slides.length} slides</span>
    <button class="btn" id="ov-x" aria-label="Close" style="background:rgba(255,255,255,.14)">${I.prev.replace('M15 18l-6-6 6-6', 'M6 6l12 12M18 6L6 18')}</button>
  </div>
  <div class="g" id="ov-g"></div>
</div>

<div class="lb" id="lb" hidden><img id="lb-img" alt="Exam paper detail"></div>

<div class="mtop" aria-hidden="true"><span class="mark"></span><span>IGCSE ESL 0511 &nbsp;·&nbsp; Paper 2 Listening</span></div>

<nav class="mbar" aria-label="Slide controls">
  <button class="mbtn" data-m="prev" aria-label="Previous slide">${I.prev}</button>
  <span class="mcount" id="mcount">1 / ${slides.length}</span>
  <button class="mbtn" data-m="next" aria-label="Next slide">${I.next}</button>
  <button class="mbtn" data-m="notes" aria-label="Speaker notes">${I.notes}</button>
  <button class="mbtn" data-m="ov" aria-label="Overview">${I.grid}</button>
  <button class="mbtn" data-m="mode" aria-label="Switch to presentation view" title="Presentation view">${I.desktop}</button>
</nav>

<button class="fbtn" data-m="mode" aria-label="Switch to phone view" title="Phone view">${I.phone}<span>Phone view</span></button>

<script>
${js}
</script>
</body>
</html>
`;

mkdirSync(p('dist'), { recursive: true });
mkdirSync(p('dist/audio'), { recursive: true });
mkdirSync(p('dist/img'), { recursive: true });
mkdirSync(p('img'), { recursive: true });
writeFileSync(p('dist/index.html'), html, 'utf8');
writeFileSync(p('index.html'), html, 'utf8');

const audioFiles = readdirSync(p('assets/audio'));
if (!INLINE_AUDIO) {
  for (const f of audioFiles) {
    copyFileSync(p('assets/audio', f), p('dist/audio', f));
    copyFileSync(p('assets/audio', f), p('audio', f));
  }
}
for (const f of ['icon-192.png', 'icon-512.png']) {
  copyFileSync(p('assets/img', f), p('dist/img', f));
  copyFileSync(p('assets/img', f), p('img', f));
}

const manifest = {
  name: 'ESL Answering Techniques Workshop — Paper 2 Listening',
  short_name: 'Paper 2 Listening',
  description: 'Cambridge IGCSE English as a Second Language 0511, Paper 2 Listening. Falih Junior International Academy.',
  start_url: './', scope: './', display: 'standalone', orientation: 'any',
  background_color: '#EEEEEE', theme_color: '#1155CC',
  icons: [
    { src: 'img/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: 'img/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: 'img/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
};
writeFileSync(p('dist/manifest.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');
writeFileSync(p('manifest.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');

const SW_VERSION = 'v1';
const sw = `/* generated by build.mjs — do not edit */
const V = '${SW_VERSION}';
const CACHE = 'esl0511p2-' + V;
const CORE = ['./', './index.html', './manifest.webmanifest', './img/icon-192.png', './img/icon-512.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.includes('/audio/')) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res;
    })));
    return;
  }
  e.respondWith(fetch(req).then((res) => {
    const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res;
  }).catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html'))));
});
`;
writeFileSync(p('dist/sw.js'), sw, 'utf8');
writeFileSync(p('sw.js'), sw, 'utf8');

const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`✓ ${slides.length} slides · ${kb} KB html — variant ${VARIANT}, ${imgCache.size} paper crops, ${audioFiles.length} audio clips${INLINE_AUDIO ? ' (inlined)' : ' (./audio/)'}`);

const warn = [];
slides.forEach((s, i) => {
  if (!s.notes) warn.push(`  · slide ${i + 1} "${s.title}" has no notes`);
  if (!s.id) warn.push(`  · slide ${i + 1} has no id`);
});
if (warn.length) console.log('warnings:\n' + warn.join('\n'));
