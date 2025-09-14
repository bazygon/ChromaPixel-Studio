// --- Loader ---
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 900);
});

// --- Particles ---
(function initParticles(){
  const wrap = document.getElementById('particles');
  if(!wrap) return;
  const count = 70;
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random()*100 + '%';
    p.style.animationDuration = (10 + Math.random()*18) + 's';
    p.style.animationDelay = (-Math.random()*18) + 's';
    wrap.appendChild(p);
  }
})();

// --- Nav scroll + mobile menu ---
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const links = document.getElementById('links');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
});
menuBtn?.addEventListener('click', () => links.classList.toggle('open'));
links?.addEventListener('click', e => {
  if(e.target.tagName === 'A') links.classList.remove('open');
});

// --- Reveal on scroll ---
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('active'); io.unobserve(e.target); }
  });
},{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// --- Contact form (mailto) ---
document.getElementById('contactForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const f = new FormData(e.target);
  const name = encodeURIComponent(f.get('name'));
  const email = encodeURIComponent(f.get('email'));
  const msg = encodeURIComponent(f.get('message'));
  const subject = `Zapytanie — ${decodeURIComponent(name)}`;
  const body = `Imię i nazwisko: ${decodeURIComponent(name)}%0D%0AE-mail: ${decodeURIComponent(email)}%0D%0A%0D%0AWiadomość:%0D%0A${decodeURIComponent(msg)}`;
  window.location.href = `mailto:hello@chromapixel.studio?subject=${subject}&body=${body}`;
});

/* === Performance Lab === */
// LCP
(() => {
  try{
    let latestLCP = 0;
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) latestLCP = e.renderTime || e.loadTime || e.startTime;
      const el = document.getElementById('lcp');
      if (el) el.textContent = (latestLCP/1000).toFixed(2) + 's';
    }).observe({ type:'largest-contentful-paint', buffered:true });
  }catch{}
})();

// CLS
(() => {
  try{
    let cls = 0;
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) if (!e.hadRecentInput) cls += e.value;
      const el = document.getElementById('cls');
      if (el) el.textContent = cls.toFixed(3);
    }).observe({ type:'layout-shift', buffered:true });
  }catch{}
})();

// FPS (krótkie okno pomiaru)
(() => {
  const fpsEl = document.getElementById('fps');
  if(!fpsEl) return;
  let frames = 0, start = performance.now();
  function loop(t){
    frames++;
    if (t - start >= 1000){
      fpsEl.textContent = frames.toString();
      frames = 0; start = t;
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

// Info o sieci/urządzeniu
(() => {
  const n = navigator;
  const c = n.connection || n.mozConnection || n.webkitConnection;
  const txt = [
    c ? `Sieć: ${c.effectiveType || '–'} • RTT ~${c.rtt || '–'}ms` : 'Sieć: —',
    n.hardwareConcurrency ? `Rdzenie: ${n.hardwareConcurrency}` : '',
    n.deviceMemory ? `Pamięć: ${n.deviceMemory}GB` : ''
  ].filter(Boolean).join('  •  ');
  const el = document.getElementById('net'); if (el) el.textContent = txt || '—';
})();

// Link do PageSpeed
document.getElementById('psiForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const url = new FormData(e.target).get('url');
  if(!url) return;
  const target = 'https://pagespeed.web.dev/analysis?url=' + encodeURIComponent(url);
  window.open(target, '_blank','noopener');
});

/* === Playground (ustawianie CSS variables) === */
(() => {
  const root = document.documentElement.style;
  const bind = (id, varName, map = (v)=>v) => {
    const el = document.getElementById(id);
    if(!el) return;
    const apply = () => root.setProperty(varName, map(el.value));
    el.addEventListener('input', apply); apply();
  };
  bind('pgRadius','--pg-radius', v=>v+'px');
  bind('pgShadow','--pg-shadow-alpha', v=>v);
  bind('pgSat','--pg-sat', v=>v);
  bind('pgSpace','--pg-space', v=>v);
})();

/* === Before/After slider === */
(() => {
  const wrap = document.getElementById('ba');
  const after = wrap?.querySelector('.ba-after');
  const handle = document.getElementById('baHandle');
  if(!wrap || !after || !handle) return;

  const setX = (clientX) => {
    const r = wrap.getBoundingClientRect();
    let x = Math.max(r.left, Math.min(clientX, r.right));
    const pct = ((x - r.left) / r.width) * 100;
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    handle.style.left = pct + '%';
  };

  const onMove = (e) => setX('touches' in e ? e.touches[0].clientX : e.clientX);
  const start = (e) => {
    onMove(e);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, {passive:false});
  };
  const end = () => {
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('touchmove', onMove);
  };
  handle.addEventListener('mousedown', start);
  handle.addEventListener('touchstart', start, {passive:false});
  window.addEventListener('mouseup', end);
  window.addEventListener('touchend', end);

  // Klawiatura
  handle.addEventListener('keydown', (e)=>{
    const step = (e.shiftKey?10:2);
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
      const x = handle.getBoundingClientRect().left + (e.key==='ArrowLeft'?-step:step);
      setX(x);
    }
  });
})();
