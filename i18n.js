/* i18n.js — przełącznik PL/EN
   - default: pl
   - zapis: localStorage.lang
   - aktualizuje: teksty, placeholdery, aria, <html lang>, <title>, <meta>
   - reanimuje efekt "reveal-text" po zmianie
*/
(function(){
  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'pl';

  const I18N = {
    pl: {
      meta: {
        title: 'ChromaPixel Studio — Arcydzieło Web Design',
        description: 'ChromaPixel Studio: projektujemy szybkie, piękne i skuteczne strony WWW. Landing pages, sklepy, optymalizacja i SEO. Darmowa konsultacja.'
      },
      nav: { services:'Usługi', lab:'Performance Lab', playground:'Playground', showcase:'Showcase', about:'O nas', contact:'Kontakt', cta:'Bezpłatna wycena' },
      hero: { subtitle:'Projektujemy strony WWW, które łączą <strong>design klasy premium</strong> z <strong>wynikami</strong>. Performance, SEO i konwersja — od startu.', cta1:'Porozmawiajmy', cta2:'Zobacz ofertę' },
      services: {
        title:'Usługi', lead:'Od idei po wdrożenie — szybkie i dopracowane projekty.',
        s1t:'Strony WWW', s1d:'Nowoczesne, responsywne, zoptymalizowane pod Core Web Vitals. HTML/CSS/JS lub Next/React.',
        s2t:'Sklepy i płatności', s2d:'Sklepy e-commerce, integracje płatności i automatyzacje procesów.',
        s3t:'Landing pages', s3d:'Strony kampanijne z naciskiem na szybkość, UX i konwersję leadów.',
        s4t:'SEO + optymalizacja', s4d:'Audyt techniczny, CWV, schemy danych i wdrożenia SEO.'
      },
      lab: {
        title:'Live Performance Lab',
        lead:'Pomiary wprost z Twojej przeglądarki. Tak projektujemy pod Core Web Vitals.',
        lcp:'Largest Contentful Paint', cls:'Cumulative Layout Shift', fps:'Średnia kl./s', net:'Sieć/Urządzenie',
        btn:'Przetestuj w PageSpeed', note:'Wyniki zależą od treści i warunków sieci. Realny audyt — w pakiecie wdrożeniowym.',
        psiPlaceholder:'Wklej swój adres (https://…)'
      },
      playground: {
        title:'Design System Playground',
        lead:'Dopasuj styl w locie. System komponentów = szybkie iteracje + spójność brandu.',
        radius:'Promień rogów', shadow:'Intensywność cienia', sat:'Nasycenie koloru', space:'Spacing (rem)',
        cardTitle:'Komponent Card', cardText:'Konfigurowalny moduł z design systemu. Skalowalny, dostępny, lekki.',
        primary:'Primary', ghost:'Ghost',
        formEmail:'E-mail', formMsg:'Wiadomość', formPhEmail:'chromap@twoj-brand.pl', formPhMsg:'Napisz, czego potrzebujesz…', formSend:'Wyślij'
      },
      showcase: {
        title:'Before / After', lead:'Redesign, który robi robotę. Przeciągnij suwak, by zobaczyć różnicę.',
        before:'Przed', after:'Po', handle:'Uchwyt porównywarki',
        b1:'+71% konwersji leadów (landing)', b2:'Core Web Vitals: zielone wskaźniki', b3:'SEO: widoczność fraz x2'
      },
      about: {
        title:'O nas',
        lead:'Łączymy estetykę z inżynierią. Pracujemy zwinnie, dowozimy na czas i transparentnie komunikujemy postępy.',
        bullet1:'Projekt → makieta → development → wdrożenie',
        bullet2:'Performance-first: Lighthouse, CWV, dostępność',
        bullet3:'Stała opieka powdrożeniowa i rozwój',
        stats1:'komponentów UI', stats2:'LCP*', stats3:'dostępność (WCAG)', stats4:'gotowe pod indeksację',
        foot:'*Wynik zależny od hostingu, treści i analityki.'
      },
      contact: {
        title:'Kontakt & wycena', lead:'Opisz krótko projekt — wrócimy z wyceną i terminem.',
        name:'Imię i nazwisko', email:'E-mail', message:'Wiadomość',
        messagePh:'Na jaką stronę celujemy? przykład/branża/funkcje…',
        send:'Wyślij', alt:'Wolę zadzwonić:', alt2:'Napisz:'
      },
      footer: { tagline:'Tworzymy przyszłość web designu — jeden projekt na raz.' }
    },

    en: {
      meta: {
        title:'ChromaPixel Studio — Web Design Masterpiece',
        description:'ChromaPixel Studio: we craft fast, beautiful and high-converting websites. Landing pages, shops, optimization & SEO. Free consultation.'
      },
      nav: { services:'Services', lab:'Performance Lab', playground:'Playground', showcase:'Showcase', about:'About', contact:'Contact', cta:'Free quote' },
      hero: { subtitle:'We build websites that combine <strong>premium design</strong> with <strong>results</strong>. Performance, SEO and conversion — from day one.', cta1:'Let’s talk', cta2:'See offer' },
      services: {
        title:'Services', lead:'From idea to launch — fast, polished delivery.',
        s1t:'Websites', s1d:'Modern, responsive, Core Web Vitals-ready. HTML/CSS/JS or Next/React.',
        s2t:'Shops & payments', s2d:'E-commerce builds, payment integrations and process automation.',
        s3t:'Landing pages', s3d:'Campaign pages focused on speed, UX and lead conversion.',
        s4t:'SEO & optimization', s4d:'Technical audit, CWV, structured data and SEO implementations.'
      },
      lab: {
        title:'Live Performance Lab',
        lead:'Measurements straight from your browser. This is how we design for Core Web Vitals.',
        lcp:'Largest Contentful Paint', cls:'Cumulative Layout Shift', fps:'Avg FPS', net:'Network/Device',
        btn:'Test in PageSpeed', note:'Results vary by content and network conditions. Full audit — included with delivery.',
        psiPlaceholder:'Paste your URL (https://…)'
      },
      playground: {
        title:'Design System Playground',
        lead:'Tune the style live. Components system = fast iteration + brand consistency.',
        radius:'Border radius', shadow:'Shadow intensity', sat:'Color saturation', space:'Spacing (rem)',
        cardTitle:'Card Component', cardText:'Configurable DS module. Scalable, accessible, lightweight.',
        primary:'Primary', ghost:'Ghost',
        formEmail:'Email', formMsg:'Message', formPhEmail:'you@your-brand.com', formPhMsg:'Tell us what you need…', formSend:'Send'
      },
      showcase: {
        title:'Before / After', lead:'A redesign that performs. Drag the slider to see the difference.',
        before:'Before', after:'After', handle:'Comparison handle',
        b1:'+71% lead conversion (landing)', b2:'Core Web Vitals: green metrics', b3:'SEO: keyword visibility x2'
      },
      about: {
        title:'About',
        lead:'We blend aesthetics with engineering. Agile, on-time, with transparent progress.',
        bullet1:'Design → wireframe → development → launch',
        bullet2:'Performance-first: Lighthouse, CWV, accessibility',
        bullet3:'Post-launch care and growth',
        stats1:'UI components', stats2:'LCP*', stats3:'accessibility (WCAG)', stats4:'indexing-ready',
        foot:'*Result depends on hosting, content and analytics.'
      },
      contact: {
        title:'Contact & quote', lead:'Describe your project — we’ll reply with a quote and timeline.',
        name:'Full name', email:'Email', message:'Message',
        messagePh:'What are we building? example/industry/features…',
        send:'Send', alt:'Prefer to call:', alt2:'Write:'
      },
      footer: { tagline:'We craft the future of web design — one project at a time.' }
    }
  };

  // Mapa elementów do podmiany
  const MAP = [
    // NAV
    {sel: '.links a[href="#uslugi"]', k:'nav.services'},
    {sel: '.links a[href="#lab"]', k:'nav.lab'},
    {sel: '.links a[href="#playground"]', k:'nav.playground'},
    {sel: '.links a[href="#showcase"]', k:'nav.showcase'},
    {sel: '.links a[href="#onas"]', k:'nav.about'},
    {sel: '.links a[href="#kontakt"]', k:'nav.contact'},
    {sel: '.cta-mini', k:'nav.cta'},

    // HERO
    {sel: '.subtitle', k:'hero.subtitle', html:true},
    {sel: '.cta-row .btn.btn-primary', k:'hero.cta1'},
    {sel: '.cta-row .btn.btn-ghost', k:'hero.cta2'},

    // SERVICES
    {sel: '#uslugi .section-h', k:'services.title'},
    {sel: '#uslugi .section-p', k:'services.lead'},
    {sel: '#uslugi .grid article:nth-child(1) h3', k:'services.s1t'},
    {sel: '#uslugi .grid article:nth-child(1) p', k:'services.s1d'},
    {sel: '#uslugi .grid article:nth-child(2) h3', k:'services.s2t'},
    {sel: '#uslugi .grid article:nth-child(2) p', k:'services.s2d'},
    {sel: '#uslugi .grid article:nth-child(3) h3', k:'services.s3t'},
    {sel: '#uslugi .grid article:nth-child(3) p', k:'services.s3d'},
    {sel: '#uslugi .grid article:nth-child(4) h3', k:'services.s4t'},
    {sel: '#uslugi .grid article:nth-child(4) p', k:'services.s4d'},

    // LAB
    {sel: '#lab .section-h', k:'lab.title'},
    {sel: '#lab .section-p', k:'lab.lead'},
    {sel: '#lab .lab-card:nth-child(1) .lab-sub', k:'lab.lcp'},
    {sel: '#lab .lab-card:nth-child(2) .lab-sub', k:'lab.cls'},
    {sel: '#lab .lab-card:nth-child(3) .lab-sub', k:'lab.fps'},
    {sel: '#lab .lab-card:nth-child(4) .lab-label', k:'lab.net'},
    {sel: '#psiForm button[type="submit"]', k:'lab.btn'},
    {sel: '#psiUrl', k:'lab.psiPlaceholder', attr:'placeholder'},
    {sel: '#lab .lab-note', k:'lab.note'},

    // PLAYGROUND
    {sel: '#playground .section-h', k:'playground.title'},
    {sel: '#playground .section-p', k:'playground.lead'},
    {labelFor: 'pgRadius', k:'playground.radius'},
    {labelFor: 'pgShadow', k:'playground.shadow'},
    {labelFor: 'pgSat', k:'playground.sat'},
    {labelFor: 'pgSpace', k:'playground.space'},
    {sel: '.demo-card h3', k:'playground.cardTitle'},
    {sel: '.demo-card p', k:'playground.cardText'},
    {sel: '.demo-card .btn-primary', k:'playground.primary'},
    {sel: '.demo-card .btn-ghost', k:'playground.ghost'},
    {sel: '.demo-form .field:nth-child(1) span', k:'playground.formEmail'},
    {sel: '.demo-form .field:nth-child(2) span', k:'playground.formMsg'},
    {sel: '.demo-form input[type="email"]', k:'playground.formPhEmail', attr:'placeholder'},
    {sel: '.demo-form textarea', k:'playground.formPhMsg', attr:'placeholder'},
    {sel: '.demo-form .btn-submit', k:'playground.formSend'},

    // SHOWCASE
    {sel: '#showcase .section-h', k:'showcase.title'},
    {sel: '#showcase .section-p', k:'showcase.lead'},
    {sel: '.ba-before', k:'showcase.before', attr:'alt'},
    {sel: '.ba-after', k:'showcase.after', attr:'alt'},
    {sel: '#baHandle', k:'showcase.handle', attr:'aria-label'},
    {sel: '.ba-bullets li:nth-child(1)', k:'showcase.b1'},
    {sel: '.ba-bullets li:nth-child(2)', k:'showcase.b2'},
    {sel: '.ba-bullets li:nth-child(3)', k:'showcase.b3'},

    // ABOUT
    {sel: '#onas .section-h', k:'about.title'},
    {sel: '#onas p.reveal-text', k:'about.lead'},
    {sel: '.about-bullets li:nth-child(1)', k:'about.bullet1'},
    {sel: '.about-bullets li:nth-child(2)', k:'about.bullet2'},
    {sel: '.about-bullets li:nth-child(3)', k:'about.bullet3'},
    {sel: '.stats .stat:nth-child(1) div:last-child', k:'about.stats1'},
    {sel: '.stats .stat:nth-child(2) div:last-child', k:'about.stats2'},
    {sel: '.stats .stat:nth-child(3) div:last-child', k:'about.stats3'},
    {sel: '.stats .stat:nth-child(4) div:last-child', k:'about.stats4'},
    {sel: '#onas .section-p', k:'about.foot'},

    // CONTACT
    {sel: '#kontakt .section-h', k:'contact.title'},
    {sel: '#kontakt .section-p', k:'contact.lead'},
    {sel: '#contactForm .row .field:nth-child(1) span', k:'contact.name'},
    {sel: '#contactForm .row .field:nth-child(2) span', k:'contact.email'},
    {sel: '#contactForm textarea', k:'contact.messagePh', attr:'placeholder'},
    {sel: '#contactForm .field[style] span', k:'contact.message'},
    {sel: '#contactForm .btn-submit', k:'contact.send'},
    {sel: '#kontakt .contact-alt', k:'contact.alt', replaceLine: true},

    // FOOTER
    {sel: 'footer .foot-text', k:'footer.tagline'}
  ];

  function $(s){ return document.querySelector(s); }

  // Ustaw meta / lang
  function applyMeta(lang){
    const m = I18N[lang]?.meta || I18N[DEFAULT_LANG].meta;
    document.title = m.title;
    const set = (name, value) => { const el = document.querySelector(`meta[name="${name}"]`); if(el) el.setAttribute('content', value); };
    set('description', m.description);
    const ogt = document.querySelector('meta[property="og:title"]');
    const ogd = document.querySelector('meta[property="og:description"]');
    if(ogt) ogt.setAttribute('content', m.title);
    if(ogd) ogd.setAttribute('content', m.description);
    document.documentElement.setAttribute('lang', lang);
  }

  // Efekt literowania dla .reveal-text
  function resplitReveal(el){
    if(!el) return;
    const txt = el.textContent;
    el.textContent = '';
    [...txt].forEach((ch,i)=>{
      const s = document.createElement('span');
      s.className = 'char';
      s.style.animationDelay = `${i*0.03}s`;
      s.textContent = ch;
      el.appendChild(s);
    });
  }

  function setNode(el, value, opts={}){
    if(!el) return;
    if(opts.attr){ el.setAttribute(opts.attr, value); return; }
    if(opts.html){ el.innerHTML = value; return; }
    if(el.classList.contains('reveal-text')){ el.textContent = value; resplitReveal(el); }
    else{ el.textContent = value; }
  }

  // Podmiana tekstów labeli przy sliderach w Playground (label może owrapować input)
  function applyLabelFor(inputId, value){
    const input = document.getElementById(inputId);
    if(!input) return;
    // 1) Label z atrybutem for
    let label = document.querySelector(`label[for="${inputId}"]`);
    // 2) albo najbliższy rodzic LABEL (wrap)
    if(!label){
      let p = input.parentElement;
      while(p && p !== document.body){ if(p.tagName === 'LABEL'){ label = p; break; } p = p.parentElement; }
    }
    if(!label) return;
    // podmień tylko tekstowy node w labelu (zachowaj input)
    label.childNodes.forEach(n=>{ if(n.nodeType===3){ n.textContent = value + ' '; } });
  }

  function applyContactAlt(lang){
    const el = $('#kontakt .contact-alt');
    if(!el) return;
    const t = I18N[lang].contact || I18N[DEFAULT_LANG].contact;
    const links = el.querySelectorAll('a');
    if(links.length >= 2){
      el.innerHTML = `${t.alt} <a href="${links[0].getAttribute('href')}">${links[0].textContent}</a> • ${t.alt2} <a href="${links[1].getAttribute('href')}">${links[1].textContent}</a>`;
    }
  }

  function translate(lang){
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    applyMeta(lang);

    MAP.forEach(m=>{
      if(m.replaceLine && m.sel==='#kontakt .contact-alt'){ applyContactAlt(lang); return; }
      if(m.labelFor){ applyLabelFor(m.labelFor, m.k.split('.').reduce((a,c)=>a && a[c], dict)); return; }

      const val = m.k.split('.').reduce((a,c)=>a && a[c], dict) ||
                  m.k.split('.').reduce((a,c)=>a && a[c], I18N[DEFAULT_LANG]);
      if(!val) return;
      const el = $(m.sel);
      setNode(el, val, {attr:m.attr, html:m.html});
    });

    // aria-label uchwytu porównywarki (gdyby nie podmienił się wyżej)
    const h = document.getElementById('baHandle');
    if(h){ h.setAttribute('aria-label', (I18N[lang].showcase||I18N[DEFAULT_LANG].showcase).handle); }
  }

  function setButtonsState(lang){
    document.querySelectorAll('.lang-btn').forEach(b=>{
      b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
    });
  }

  function init(){
    const saved = localStorage.getItem(STORAGE_KEY);
    const lang = (saved==='en'||saved==='pl') ? saved : DEFAULT_LANG;
    translate(lang);
    setButtonsState(lang);
  }

  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.lang-btn');
    if(!btn) return;
    const lang = btn.dataset.lang;
    localStorage.setItem(STORAGE_KEY, lang);
    translate(lang);
    setButtonsState(lang);
  });

  document.addEventListener('DOMContentLoaded', init);
})();
