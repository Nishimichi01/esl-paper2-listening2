/* ═══════════════════════════════════════════════════════════════
   ESL Paper 2 workshop — deck controls
   Fixed 1280x720 canvas scaled to fit. Nav, overview, notes,
   answer reveal, image zoom, idle-fading chrome.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var W = 1280, H = 720;
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var total = slides.length;
  if (!total) return;

  var canvas = document.getElementById('canvas');
  var elCount = document.getElementById('count');
  var elProg = document.getElementById('prog');
  var notesEl = document.getElementById('notes');
  var notesBd = document.getElementById('notes-bd');
  var ov = document.getElementById('ov');
  var ovGrid = document.getElementById('ov-g');
  var lb = document.getElementById('lb');
  var lbImg = document.getElementById('lb-img');

  var cur = 0, notesOn = false, ovOn = false, lbOn = false, mode = 'deck';

  /* ── view mode: presentation canvas vs mobile native ──────
     Desktop behaviour is unchanged: below the threshold we switch the whole
     layout by setting data-mode on <body>, which every mobile CSS rule is
     scoped to. ?mode=deck / ?mode=mobile forces one, then localStorage. */
  var MODE_KEY = 'esl0511-mode';
  var MOBILE_MAX_W = 860;

  function autoMode() {
    return (window.innerWidth < MOBILE_MAX_W || window.innerHeight / H < 0.55) ? 'mobile' : 'deck';
  }
  function preferredMode() {
    var q = (location.search.match(/[?&]mode=(mobile|deck)/) || [])[1];
    if (q) return q;
    try { var s = localStorage.getItem(MODE_KEY); if (s === 'mobile' || s === 'deck') return s; } catch (_) {}
    return autoMode();
  }
  function applyMode(m, persist) {
    mode = m;
    document.body.setAttribute('data-mode', m);
    if (persist) { try { localStorage.setItem(MODE_KEY, m); } catch (_) {} }
    if (m === 'deck') { fit(); } else { canvas.style.transform = 'none'; }
    update();
  }

  function slug(s, i) { return s.id || ('slide-' + (i + 1)); }

  /* ── scale the fixed canvas to the window ─────────────── */
  function fit() {
    if (mode === 'mobile') { canvas.style.transform = 'none'; return; }
    var k = Math.min(window.innerWidth / W, window.innerHeight / H);
    canvas.style.transform = 'scale(' + k + ')';
  }

  function update() {
    elCount.innerHTML = '<b>' + (cur + 1) + '</b> / ' + total;
    var mc = document.getElementById('mcount');
    if (mc) mc.textContent = (cur + 1) + ' / ' + total;
    elProg.style.width = ((cur + 1) / total * 100).toFixed(2) + '%';
    var n = slides[cur].querySelector('.slide__notes');
    notesBd.innerHTML = n ? n.innerHTML : '<em>No notes for this slide.</em>';
    // the title/closing slides show the school logo at full size, so hide the small chrome mark there
    document.body.classList.toggle('on-hero', slides[cur].classList.contains('hero') || slides[cur].classList.contains('close'));
    if (history.replaceState) history.replaceState(null, '', '#' + slug(slides[cur], cur));
  }

  function show(i) {
    i = Math.max(0, Math.min(total - 1, i));
    if (i === cur) { update(); return; }
    stopCurrent();
    slides[cur].classList.remove('is-active');
    cur = i;
    for (var k = 0; k < total; k++) {
      slides[k].classList.toggle('is-active', k === cur);
      slides[k].classList.toggle('is-prev', k < cur);
    }
    slides[cur].scrollTop = 0;   // mobile: each slide is its own scroll page
    if (slides[cur].hasAttribute('data-reveal')) { resetReveal(slides[cur]); primeSteps(slides[cur]); }
    else revealAll(slides[cur]);
    update();
    if (ovOn) markCur();
  }
  function next() { show(cur + 1); }
  function prev() { show(cur - 1); }

  /* ── progressive reveal ───────────────────────────────────
     One click / keypress reveals the next marked element (.rv, .pop, .draw)
     on the current slide. When nothing is left, the caller advances. */
  function rvList(s) { return Array.prototype.slice.call(s.querySelectorAll('.rv, .pop, .draw')); }
  function resetReveal(s) {
    rvList(s).forEach(function (e) { e.classList.remove('on'); });
    s.classList.remove('revealed');
  }
  function revealAll(s) {
    rvList(s).forEach(function (e) { e.classList.add('on'); });
    s.classList.add('revealed');
  }
  /* the Steps box should never look empty on arrival: show its first item */
  function primeSteps(s) {
    var first = s.querySelector('.steps .rv');
    if (first) first.classList.add('on');
  }
  function revealNext() {
    var s = slides[cur];
    if (!s.hasAttribute('data-reveal')) return false;
    var list = rvList(s);
    var next = null;
    for (var i = 0; i < list.length; i++) { if (!list[i].classList.contains('on')) { next = list[i]; break; } }
    if (!next) { s.classList.add('revealed'); return false; }
    next.classList.add('on');
    if (rvList(s).every(function (e) { return e.classList.contains('on'); })) s.classList.add('revealed');
    return true;
  }
  /* public: R reveals everything remaining */
  function reveal(force) {
    var s = slides[cur];
    if (force === true) { revealAll(s); return; }
    revealNext();
  }

  /* ── notes ────────────────────────────────────────────── */
  function toggleNotes(force) {
    notesOn = (typeof force === 'boolean') ? force : !notesOn;
    notesEl.classList.toggle('open', notesOn);
    document.getElementById('b-notes').setAttribute('aria-pressed', String(notesOn));
    syncToggles();
  }

  /* ── overview ─────────────────────────────────────────── */
  function markCur() {
    Array.prototype.forEach.call(ovGrid.children, function (el, i) {
      el.classList.toggle('cur', i === cur);
    });
  }
  function buildOverview() {
    ovGrid.innerHTML = '';
    var scale = 224 / W;
    slides.forEach(function (s, i) {
      var it = document.createElement('div');
      it.className = 'it' + (i === cur ? ' cur' : '');
      it.setAttribute('role', 'button');
      it.setAttribute('tabindex', '0');
      it.setAttribute('aria-label', 'Go to slide ' + (i + 1));

      var th = document.createElement('div');
      th.className = 'th';
      th.style.height = Math.round(H * scale) + 'px';

      var clone = s.cloneNode(true);
      clone.className = 'slide is-active revealed';
      clone.removeAttribute('id');
      clone.style.cssText = 'position:absolute;top:0;left:0;width:' + W + 'px;height:' + H + 'px;' +
        'transform:scale(' + scale + ');transform-origin:top left;pointer-events:none;opacity:1;visibility:visible;';

      var nn = document.createElement('span');
      nn.className = 'nn';
      nn.textContent = i + 1;

      th.appendChild(clone);
      it.appendChild(th);
      it.appendChild(nn);

      function go() { closeOv(); show(i); }
      it.addEventListener('click', go);
      it.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
      });
      ovGrid.appendChild(it);
    });
  }
  function openOv()  { buildOverview(); ov.hidden = false; ovOn = true; document.getElementById('b-ov').setAttribute('aria-pressed', 'true'); syncToggles(); }
  function closeOv() { ov.hidden = true; ovOn = false; document.getElementById('b-ov').setAttribute('aria-pressed', 'false'); syncToggles(); }

  /* ── lightbox for the exam-paper crops ────────────────── */
  function openLb(src) { lbImg.src = src; lb.hidden = false; lbOn = true; }
  function closeLb() { lb.hidden = true; lbOn = false; }

  /* ── audio players ───────────────────────────────────── */
  var current = null;
  function fmt(t) {
    if (!isFinite(t)) return '0:00';
    var m = Math.floor(t / 60), s = Math.floor(t % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }
  function stopCurrent() {
    if (!current) return;
    current.audio.pause();
    current.el.classList.remove('playing');
    current = null;
  }
  function wirePlayers() {
    document.querySelectorAll('.player').forEach(function (el) {
      var audio = el.querySelector('audio');
      var btn = el.querySelector('.pp');
      var track = el.querySelector('.track');
      var line = el.querySelector('.track .line');
      var dur = el.querySelector('.dur');
      if (!audio || !btn || !track) return;
      audio.preload = 'metadata';

      var seeking = false;
      function setP(p) {
        p = Math.max(0, Math.min(1, p));
        el.style.setProperty('--p', p);
        track.setAttribute('aria-valuenow', Math.round(p * 100));
      }
      function paint() {
        setP(audio.currentTime / (audio.duration || 1));
        if (dur) dur.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
      }
      function setDur() {
        if (dur) dur.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
        paint();
      }

      audio.addEventListener('loadedmetadata', setDur);
      audio.addEventListener('durationchange', setDur);
      audio.addEventListener('timeupdate', function () { if (!seeking) paint(); });
      audio.addEventListener('ended', function () {
        el.classList.remove('playing'); el.classList.add('done');
        setP(0);
        if (dur) dur.textContent = fmt(audio.duration);
        if (current && current.audio === audio) current = null;
      });

      /* ── click-to-seek and drag-to-scrub ── */
      function seekFrom(clientX) {
        if (!isFinite(audio.duration) || !audio.duration) return;
        var r = line.getBoundingClientRect();
        var p = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
        audio.currentTime = p * audio.duration;
        setP(p);
        if (dur) dur.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
      }
      track.addEventListener('pointerdown', function (e) {
        if (!isFinite(audio.duration) || !audio.duration) return;
        e.preventDefault(); e.stopPropagation();
        seeking = true;
        el.classList.add('scrubbing');
        try { track.setPointerCapture(e.pointerId); } catch (_) {}
        seekFrom(e.clientX);
      });
      track.addEventListener('pointermove', function (e) {
        if (!seeking) return;
        e.preventDefault(); e.stopPropagation();
        seekFrom(e.clientX);
      });
      function endSeek(e) {
        if (!seeking) return;
        seeking = false;
        el.classList.remove('scrubbing');
        try { track.releasePointerCapture(e.pointerId); } catch (_) {}
      }
      track.addEventListener('pointerup', endSeek);
      track.addEventListener('pointercancel', endSeek);

      /* keyboard scrubbing: ±5s, home/end */
      track.addEventListener('keydown', function (e) {
        if (!audio.duration) return;
        var step = e.key === 'ArrowLeft' ? -5 : e.key === 'ArrowRight' ? 5 : 0;
        if (step) {
          e.preventDefault(); e.stopPropagation();
          audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + step));
          paint();
        } else if (e.key === 'Home') {
          e.preventDefault(); audio.currentTime = 0; paint();
        } else if (e.key === 'End') {
          e.preventDefault(); audio.currentTime = audio.duration; paint();
        }
      });

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (current && current.audio !== audio) stopCurrent();
        if (audio.paused) {
          if (audio.ended || audio.currentTime >= (audio.duration || 0) - 0.05) audio.currentTime = 0;
          audio.play().catch(function () {});
          el.classList.add('playing'); el.classList.remove('done');
          current = { audio: audio, el: el };
        } else {
          audio.pause();
          el.classList.remove('playing');
          current = null;
        }
      });
    });
  }

  /* ── chrome: fade when idle ───────────────────────────── */
  var idle;
  function awake() {
    document.body.classList.add('awake');
    clearTimeout(idle);
    idle = setTimeout(function () { document.body.classList.remove('awake'); }, 2600);
  }

  /* ── wiring ───────────────────────────────────────────── */
  document.getElementById('b-prev').addEventListener('click', prev);
  document.getElementById('b-next').addEventListener('click', next);
  document.getElementById('b-notes').addEventListener('click', function () { toggleNotes(); });
  document.getElementById('b-ov').addEventListener('click', function () { ovOn ? closeOv() : openOv(); });
  document.getElementById('b-fs').addEventListener('click', function () {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(function () {});
  });
  document.getElementById('b-print').addEventListener('click', function () { window.print(); });
  document.getElementById('ov-x').addEventListener('click', closeOv);
  lb.addEventListener('click', closeLb);

  /* ── mobile action bar ────────────────────────────────── */
  document.querySelectorAll('.mbar [data-m], .fbtn[data-m]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      switch (b.getAttribute('data-m')) {
        case 'prev':  prev(); break;
        case 'next':  next(); break;
        case 'notes': toggleNotes(); break;
        case 'ov':    ovOn ? closeOv() : openOv(); break;
        case 'mode':
          if (mode === 'mobile') { applyMode('deck', true); }
          else { applyMode('mobile', true); }
          break;
      }
    });
  });
  document.querySelectorAll('.mbar [data-m]').forEach(function (b) {
    var k = b.getAttribute('data-m');
    if (k === 'notes' || k === 'ov') {
      b.dataset.toggle = k;
    }
  });

  /* ── responsive tables: label each cell with its column name ──
     Only used by the mobile stacked layout; harmless in deck mode. */
  function labelTables() {
    document.querySelectorAll('table.t').forEach(function (tbl) {
      var heads = Array.prototype.map.call(tbl.querySelectorAll('thead th'), function (th) {
        return th.textContent.trim();
      });
      if (!heads.length) return;
      tbl.querySelectorAll('tbody tr').forEach(function (tr) {
        Array.prototype.forEach.call(tr.children, function (td, i) {
          if (!td.hasAttribute('data-th')) td.setAttribute('data-th', heads[i] || '');
        });
      });
    });
  }

  canvas.addEventListener('click', function (e) {
    if (e.target.closest('a, button, .player')) return;
    var img = e.target.closest('.shot img');
    if (img) { openLb(img.getAttribute('src')); return; }
    if (e.clientX < window.innerWidth * 0.4) { stopCurrent(); prev(); return; }
    if (revealNext()) return;
    stopCurrent(); next();
  });

  document.addEventListener('mousemove', awake);
  document.addEventListener('touchstart', awake, { passive: true });

  document.addEventListener('keydown', function (e) {
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    awake();

    if (lbOn) { if (e.key === 'Escape' || e.key === ' ') { e.preventDefault(); closeLb(); } return; }
    if (ovOn) {
      if (e.key === 'Escape' || e.key === 'g' || e.key === 'G') { e.preventDefault(); closeOv(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); closeOv(); next(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); closeOv(); prev(); }
      return;
    }
    switch (e.key) {
      case 'ArrowRight': case 'PageDown':
        e.preventDefault(); if (!revealNext()) next(); break;
      case 'ArrowLeft':  case 'PageUp':   e.preventDefault(); prev(); break;
      case ' ': case 'Enter':
        e.preventDefault(); if (!revealNext()) next();
        break;
      case 'Home': e.preventDefault(); show(0); break;
      case 'End':  e.preventDefault(); show(total - 1); break;
      case 'r': case 'R': e.preventDefault(); reveal(); break;
      case 'n': case 'N': toggleNotes(); break;
      case 'g': case 'G': ovOn ? closeOv() : openOv(); break;
      case 'f': case 'F':
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(function () {});
        break;
      case 'p': case 'P': e.preventDefault(); window.print(); break;
      case 'Escape':
        if (notesOn) toggleNotes(false);
        else if (document.fullscreenElement) document.exitFullscreen();
        break;
    }
  });

  var tX = 0, tY = 0, tSkip = false;
  document.addEventListener('touchstart', function (e) {
    tX = e.changedTouches[0].clientX; tY = e.changedTouches[0].clientY;
    tSkip = !!(e.target.closest && e.target.closest('.player, .track, button, a'));
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (tSkip) return;
    var dx = e.changedTouches[0].clientX - tX, dy = e.changedTouches[0].clientY - tY;
    var threshold = (mode === 'mobile') ? 62 : 55;
    var ratio = (mode === 'mobile') ? 1.7 : 1.0;   // mobile: don't fight vertical scrolling
    if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * ratio) {
      if (dx < 0) { if (!revealNext()) next(); } else { prev(); }
    }
  }, { passive: true });

  window.addEventListener('resize', function () { fit(); syncToggles(); });
  window.addEventListener('orientationchange', function () { setTimeout(function () { fit(); syncToggles(); }, 250); });

  function syncToggles() {
    document.querySelectorAll('[data-m="notes"]').forEach(function (b) {
      b.classList.toggle('on', notesOn);
    });
    document.querySelectorAll('[data-m="ov"]').forEach(function (b) {
      b.classList.toggle('on', ovOn);
    });
  }
  window.addEventListener('hashchange', function () {
    var h = (location.hash || '').replace('#', '');
    if (!h) return;
    for (var i = 0; i < total; i++) if (slug(slides[i], i) === h && i !== cur) { show(i); break; }
  });

  (function init() {
    var h = (location.hash || '').replace('#', ''), idx = 0;
    if (h) for (var i = 0; i < total; i++) if (slug(slides[i], i) === h) { idx = i; break; }
    for (var k = 0; k < total; k++) {
      slides[k].classList.toggle('is-active', k === idx);
      slides[k].classList.toggle('is-prev', k < idx);
    }
    cur = idx;
    if (slides[cur].hasAttribute('data-reveal')) { resetReveal(slides[cur]); primeSteps(slides[cur]); }
    else revealAll(slides[cur]);
    labelTables();
    applyMode(preferredMode(), false);
    fit();
    wirePlayers();
    update();
    awake();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

    /* installable / offline, when served over http(s) */
    if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () {});
      });
    }
  })();

  window.__deck = { show: show, next: next, prev: prev, total: total, reveal: reveal, fit: fit,
                    stopAudio: stopCurrent, mode: function () { return mode; },
                    setMode: function (m) { applyMode(m, true); } };
})();
