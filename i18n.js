/* i18n.js — PL/EN, wersja z Case Study i Szablonami */
(function(){
  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'pl';

  const I18N = {
    pl: {
      meta: {
        title: 'ChromaPixel Studio — Arcydzieło Web Design',
        description: 'ChromaPixel Studio: projektujemy szybkie, piękne i skuteczne strony WWW. Landing pages, sklepy, optymalizacja i SEO. Darmowa konsultacja.'
      },
      nav: {
        services:'Usługi', lab:'Performance Lab', playground:'Playground',
        showcase:'Showcase', templates:'Szablony', about:'O nas',
        contact:'Kontakt', cta:'Bezpłatna wycena'
      },
      hero: {
        subtitle:'Projektujemy strony WWW, które łączą <strong>design klasy premium</strong> z <strong>wynikami</strong>. Performance, SEO i konwersja — od startu.',
        cta1:'Porozmawiajmy', cta2:'Zobacz ofertę'
      },
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

      /* NOWE: Case study zamiast suwaka */
      showcase: {
        title:'Redesign, który dowozi',
        lead:'Prawdziwe metryki po wdrożeniu (3 mies.).',
        before:'Przed', after:'Po',
        capBefore:'Przed: wolniejsza, mało spójna wizualnie.',
        capAfter:'Po: lekka, dostępna, nastawiona na konwersję.',
        altBefore:'Zrzut ekranu starej strony — przed redesignem',
        altAfter:'Zrzut ekranu nowej strony — po redesignie',
        kpi1:'konwersji leadów', kpi1sub:'A/B test na 18k sesji',
        kpi2:'LCP na mobile',   kpi2sub:'p95 z CrUX',
        kpi3:'zielone CWV',     kpi3sub:'PageSpeed & Lighthouse',
        kpi4:'widoczność fraz', kpi4sub:'Google Search Console'
      },

      /* Sekcja Szablony */
      templates: {
        title:'Szablony — Dema live',
        lead:'Kliknij, aby otworzyć demo w nowej karcie.',
        btn:'Zobacz demo →'
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
      nav: {
        services:'Services', lab:'Performance Lab', playground:'Playground',
        showcase:'Showcase', templates:'Templates', about:'About',
        contact:'Contact', cta:'Free quote'
      },
      hero: {
        subtitle:'We build websites that combine <strong>premium design</strong> with <strong>results</strong>. Performance, SEO and conversion — from day one.',
        cta1:'Let’s talk', cta2:'See offer'
      },
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

      /* Case study */
      showcase: {
        title:'A redesign that delivers',
        lead:'Real post-launch metrics (3 months).',
        before:'Before', after:'After',
        capBefore:'Before: slower and visually inconsistent.',
        capAfter:'After: lightweight, accessible, conversion-driven.',
        altBefore:'Screenshot of the old site — before redesign',
        altAfter:'Screenshot of the new site — after redesign',
        kpi1:'lead conversion', kpi1sub:'A/B test on 18k sessions',
        kpi2:'Mobile LCP',     kpi2sub:'p95 from CrUX',
        kpi3:'green CWV',      kpi3sub:'PageSpeed & Lighthouse',
        kpi4:'keyword visibility', kpi4sub:'Google Search Console'
      },

      templates: {
        title:'Templates — Live demos',
        lead:'Click to open a demo in a new tab.',
        btn:'See demo →'
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

  /* Mapa elementów do podmiany */
  const MAP = [
    // NAV
    {sel: '.links a[href="#uslugi"]', k:'nav.services'},
    {sel: '.links a[href="#lab"]', k:'nav.lab'},
    {sel: '.links a[href="#playground"]', k:'nav.playground'},
    {sel: '.links a[href="#showcase"]', k:'nav.showcase'},
    {sel: '.links a[href="#templates"]', k:'nav.templates'},
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

    // CASE STUDY (Showcase)
    {sel: '#showcase .section-h', k:'showcase.title'},
    {sel: '#showcase .section-p', k:'showcase.lead'},
    {sel: '.compare-toolbar [data-show="before"]', k:'showcase.before'},
    {sel: '.compare-toolbar [data-show="after"]',  k:'showcase.after'},
    {sel: '.compare-stage .show-before img', k:'showcase.altBefore', attr:'alt'},
    {sel: '.compare-stage .show-after  img', k:'showcase.altAfter',  attr:'alt'},
    {sel: '.compare-stage .show-before figcaption', k:'showcase.capBefore'},
    {sel: '.compare-stage .show-after  figcaption', k:'showcase.capAfter'},
    // KPI etykiety i dopiski
    {sel: '.kpi-grid .kpi-card:nth-child(1) .kpi-label', k:'showcase.kpi1'},
    {sel: '.kpi-grid .kpi-card:nth-child(1) .kpi-sub',   k:'showcase.kpi1sub'},
    {sel: '.kpi-grid .kpi-card:nth-child(2) .kpi-label', k:'showcase.kpi2'},
    {sel: '.kpi-grid .kpi-card:nth-child(2) .kpi-sub',   k:'showcase.kpi2sub'},
    {sel: '.kpi-grid .kpi-card:nth-child(3) .kpi-label', k:'showcase.kpi3'},
    {sel: '.kpi-grid .kpi-card:nth-child(3) .kpi-sub',   k:'showcase.kpi3sub'},
    {sel: '.kpi-grid .kpi-card:nth-child(4) .kpi-label', k:'showcase.kpi4'},
    {sel: '.kpi-grid .kpi-card:nth-child(4) .kpi-sub',   k:'showcase.kpi4sub'},

    // SZABLONY
    {sel: '#templates .section-h', k:'templates.title'},
    {sel: '#templates .section-p', k:'templates.lead'},
    {sel: '.templates .btn-demo', k:'templates.btn', all:true},

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

  function applyMeta(lang){
    const m = I18N[lang]?.meta || I18N[DEFAULT_LANG].meta;
    document.title = m.title;
    const set = (name, value) => {
      const el = document.querySelector(`meta[name="${name}"]`);
      if(el) el.setAttribute('content', value);
    };
    set('description', m.description);
    const ogt = document.querySelector('meta[property="og:title"]');
    const ogd = document.querySelector('meta[property="og:description"]');
    if(ogt) ogt.setAttribute('content', m.title);
    if(ogd) ogd.setAttribute('content', m.description);
    document.documentElement.setAttribute('lang', lang);
  }

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

  function applyLabelFor(inputId, value){
    const input = document.getElementById(inputId);
    if(!input) return;
    let label = document.querySelector(`label[for="${inputId}"]`);
    if(!label){
      let p = input.parentElement;
      while(p && p !== document.body){ if(p.tagName === 'LABEL'){ label = p; break; } p = p.parentElement; }
    }
    if(!label) return;
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

      if(m.all){
        document.querySelectorAll(m.sel)?.forEach(el=>setNode(el, val, {attr:m.attr, html:m.html}));
      }else{
        const el = $(m.sel);
        setNode(el, val, {attr:m.attr, html:m.html});
      }
    });
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


// --- DODAJ DO i18n.js ---
I18N.pl.ios = {
  meta: {
    title: 'IndustryOS Pro — Kompletny System Zarządzania Produkcją | DEMO',
    description: 'Interaktywny panel DEMO IndustryOS Pro: produkcja, maszyny, zamówienia, analityka AI, konserwacja i raporty — w jednym miejscu.'
  },

  loading: {
    title: 'Ładowanie systemu IndustryOS Pro',
    msg: 'Inicjalizacja modułów…'
  },

  header: {
    brand: 'IndustryOS Pro',
    badgeDemo: '🔥 WERSJA DEMO — PEŁNA FUNKCJONALNOŚĆ',
    kpiGlobalEff: 'Wydajność Globalna',
    kpiActiveOrders: 'Aktywne Zamówienia',
    kpiUptime: 'Dostępność Systemu'
  },

  nav: {
    dashboard: '📊 Dashboard',
    production: '⚙️ Produkcja',
    machines: '🖥️ Maszyny i Serwery',
    orders: '📦 Zamówienia',
    analytics: '📈 Analityka AI',
    maintenance: '🔧 Konserwacja',
    reports: '📑 Raporty'
  },

  kpis: {
    effLabel: 'Wydajność Produkcji',
    effDelta: '↑ 2.4% od wczoraj',
    machinesLabel: 'Aktywne Maszyny',
    machinesDelta: '↑ 6 więcej niż rano',
    tempLabel: 'Średnia Temperatura',
    tempDelta: '↓ 2°C optymalna',
    throughputLabel: 'Jednostek/Godzinę',
    throughputDelta: '↑ 124 ponad cel',
    qualityLabel: 'Wskaźnik Jakości',
    qualityDelta: '↑ 0.2% poprawa',
    oeeLabel: 'OEE (A×P×Q)',
    oeeDelta: '↑ 0.8 p.p.'
  },

  charts: {
    section: '📈 Trendy produkcyjne',
    legendProduction: 'Produkcja',
    legendTarget: 'Cel',
    legendDowntime: 'Przestoje',
    titleOutputVsTarget: 'Wykonanie vs. Cel (ostatnie 24h)',
    ariaProductivity: 'Wykres produktywności',
    oeeStructure: 'Struktura OEE',
    ordersStatus: 'Status zamówień',
    downtimeReasons: 'Powody przestojów (7 dni)',
    shop3d: 'Wizualizacja 3D parku maszyn',
    legendOnline: 'ONLINE',
    legendWarning: 'OSTRZEŻENIE',
    legendFailure: 'AWARIA',
    legendOffline: 'OFFLINE'
  },

  controls: {
    panel: '🎛️ Panel sterowania',
    start: 'Start linii',
    pause: 'Pauza',
    estop: 'Awaryjne STOP',
    optimize: 'Auto-optymalizacja',
    simulateFail: 'Symuluj awarię'
  },

  alerts: {
    title: '🚨 Alerty w czasie rzeczywistym',
    addInfo: 'Dodaj alert INFO'
  },

  production: {
    title: '⚙️ Plany produkcyjne (Horyzont 7 dni)',
    pillTotal0: 'Łącznie: 0 zleceń',
    searchPh: 'Szukaj po numerze/przedmiocie…',
    filterAll: 'Status: wszystkie',
    filterPending: 'Oczekujące',
    filterProcessing: 'W toku',
    filterCompleted: 'Zakończone',
    btnNew: '+ Nowe zlecenie',
    btnStartSel: 'Uruchom wybrane',
    btnCancelSel: 'Anuluj wybrane',
    thSel: '',
    thId: '# Zlecenia',
    thProduct: 'Produkt',
    thQty: 'Ilość',
    thLine: 'Linia',
    thDue: 'Termin',
    thStatus: 'Status',
    thActions: 'Akcje'
  },

  machines: {
    title: '🖥️ Park maszynowy',
    searchPh: 'Szukaj maszyny…',
    filterAll: 'Status: wszystkie',
    optOnline: 'Online',
    optWarning: 'Ostrzeżenie',
    optDanger: 'Awaria',
    optOffline: 'Offline',
    lastService: 'Ostatni serwis:',
    loadShort: 'Obciąż.'
  },

  orders: {
    title: '📦 Zamówienia i sprzedaż (CRM)',
    pill0: 'Klienci: 0 • Zamówienia: 0',
    searchPh: 'Szukaj po kliencie/numerze…',
    statusAll: 'Status: wszystkie',
    sPending: 'Oczekujące',
    sProcessing: 'W realizacji',
    sCompleted: 'Zakończone',
    sourceAll: 'Źródło: wszystkie',
    srcWWW: 'WWW',
    srcPhone: 'Telefon',
    srcEmail: 'E-mail',
    srcPartner: 'Partner',
    btnAdd: '+ Dodaj zamówienie',
    thId: '#',
    thClient: 'Klient',
    thProduct: 'Produkt',
    thQty: 'Ilość',
    thSource: 'Źródło',
    thValue: 'Wartość',
    thStatus: 'Status',
    thActions: 'Akcje',
    rowProcess: 'Wykonuj',
    rowComplete: 'Zakończ',
    rowDelete: 'Usuń',
    currency: 'zł'
  },

  analytics: {
    title: '🧠 Analityka i predykcja',
    btnSim: 'Symuluj prognozę',
    btnApply: 'Zastosuj rekomendacje AI',
    chartForecast: 'Prognoza wydajności (48h)',
    chartRisk: 'Ryzyko awarii (najbliższe 72h)',
    recTitle: '📋 Rekomendacje AI',
    btnRefresh: 'Odśwież'
  },

  maintenance: {
    title: '🔧 Zgłoszenia i przeglądy',
    btnNew: '+ Nowe zgłoszenie',
    typeAll: 'Typ: wszystkie',
    tFailure: 'Awaria',
    tInspection: 'Przegląd',
    tCalibration: 'Kalibracja',
    tUpgrade: 'Modernizacja',
    statusAll: 'Status: wszystkie',
    stNew: 'Nowe',
    stInProgress: 'W toku',
    stClosed: 'Zamknięte',
    thId: '#',
    thMachine: 'Maszyna',
    thType: 'Typ',
    thDesc: 'Opis',
    thPriority: 'Priorytet',
    thStatus: 'Status',
    thActions: 'Akcje',
    partsTitle: '🧰 Magazyn części',
    btnReplenish: 'Uzupełnij stany',
    ptCode: 'Kod',
    ptName: 'Nazwa',
    ptStock: 'Stan',
    ptMin: 'Min.',
    ptActions: 'Akcje',
    partUse: 'Zużyj',
    partPlus: '+1'
  },

  reports: {
    title: '📑 Raporty i eksport danych',
    btnPreview: 'Podgląd',
    btnCSV: 'Eksport CSV',
    btnJSON: 'Eksport JSON',
    previewMsg: 'Wybierz zakres dat i kliknij <b>Podgląd</b>.',
    resetBtn: 'Ustawienia → Reset demo',
    resetNote: 'Zresetuje wszystkie dane zapisane lokalnie.'
  },

  modal: {
    title: 'Szczegóły',
    close: 'Zamknij'
  },

  toast: {
    title: 'Komunikat',
    body: 'Treść komunikatu'
  }
};

I18N.en.ios = {
  meta: {
    title: 'IndustryOS Pro — Complete Manufacturing Management System | DEMO',
    description: 'Interactive DEMO of IndustryOS Pro: production, machines, orders, AI analytics, maintenance and reports — all in one place.'
  },

  loading: {
    title: 'Loading IndustryOS Pro',
    msg: 'Initializing modules…'
  },

  header: {
    brand: 'IndustryOS Pro',
    badgeDemo: '🔥 DEMO VERSION — FULL FUNCTIONALITY',
    kpiGlobalEff: 'Global Efficiency',
    kpiActiveOrders: 'Active Orders',
    kpiUptime: 'System Uptime'
  },

  nav: {
    dashboard: '📊 Dashboard',
    production: '⚙️ Production',
    machines: '🖥️ Machines & Servers',
    orders: '📦 Orders',
    analytics: '📈 AI Analytics',
    maintenance: '🔧 Maintenance',
    reports: '📑 Reports'
  },

  kpis: {
    effLabel: 'Production Efficiency',
    effDelta: '↑ 2.4% vs yesterday',
    machinesLabel: 'Active Machines',
    machinesDelta: '↑ 6 more than morning',
    tempLabel: 'Average Temperature',
    tempDelta: '↓ 2°C optimal',
    throughputLabel: 'Units/Hour',
    throughputDelta: '↑ 124 above target',
    qualityLabel: 'Quality Rate',
    qualityDelta: '↑ 0.2% improvement',
    oeeLabel: 'OEE (A×P×Q)',
    oeeDelta: '↑ 0.8 pp'
  },

  charts: {
    section: '📈 Production trends',
    legendProduction: 'Production',
    legendTarget: 'Target',
    legendDowntime: 'Downtime',
    titleOutputVsTarget: 'Output vs Target (last 24h)',
    ariaProductivity: 'Productivity chart',
    oeeStructure: 'OEE structure',
    ordersStatus: 'Orders status',
    downtimeReasons: 'Downtime reasons (7 days)',
    shop3d: '3D shop floor visualization',
    legendOnline: 'ONLINE',
    legendWarning: 'WARNING',
    legendFailure: 'FAILURE',
    legendOffline: 'OFFLINE'
  },

  controls: {
    panel: '🎛️ Control panel',
    start: 'Start line',
    pause: 'Pause',
    estop: 'Emergency STOP',
    optimize: 'Auto-optimization',
    simulateFail: 'Simulate failure'
  },

  alerts: {
    title: '🚨 Real-time alerts',
    addInfo: 'Add INFO alert'
  },

  production: {
    title: '⚙️ Production plans (7-day horizon)',
    pillTotal0: 'Total: 0 jobs',
    searchPh: 'Search by id/item…',
    filterAll: 'Status: all',
    filterPending: 'Pending',
    filterProcessing: 'In progress',
    filterCompleted: 'Completed',
    btnNew: '+ New job',
    btnStartSel: 'Start selected',
    btnCancelSel: 'Cancel selected',
    thSel: '',
    thId: 'Job #',
    thProduct: 'Product',
    thQty: 'Qty',
    thLine: 'Line',
    thDue: 'Due',
    thStatus: 'Status',
    thActions: 'Actions'
  },

  machines: {
    title: '🖥️ Machine fleet',
    searchPh: 'Search machine…',
    filterAll: 'Status: all',
    optOnline: 'Online',
    optWarning: 'Warning',
    optDanger: 'Failure',
    optOffline: 'Offline',
    lastService: 'Last service:',
    loadShort: 'Load'
  },

  orders: {
    title: '📦 Orders & sales (CRM)',
    pill0: 'Customers: 0 • Orders: 0',
    searchPh: 'Search by customer/id…',
    statusAll: 'Status: all',
    sPending: 'Pending',
    sProcessing: 'Processing',
    sCompleted: 'Completed',
    sourceAll: 'Source: all',
    srcWWW: 'WWW',
    srcPhone: 'Phone',
    srcEmail: 'Email',
    srcPartner: 'Partner',
    btnAdd: '+ Add order',
    thId: '#',
    thClient: 'Customer',
    thProduct: 'Product',
    thQty: 'Qty',
    thSource: 'Source',
    thValue: 'Value',
    thStatus: 'Status',
    thActions: 'Actions',
    rowProcess: 'Process',
    rowComplete: 'Complete',
    rowDelete: 'Delete',
    currency: 'PLN'
  },

  analytics: {
    title: '🧠 Analytics & prediction',
    btnSim: 'Simulate forecast',
    btnApply: 'Apply AI recommendations',
    chartForecast: 'Performance forecast (48h)',
    chartRisk: 'Failure risk (next 72h)',
    recTitle: '📋 AI recommendations',
    btnRefresh: 'Refresh'
  },

  maintenance: {
    title: '🔧 Tickets & inspections',
    btnNew: '+ New ticket',
    typeAll: 'Type: all',
    tFailure: 'Failure',
    tInspection: 'Inspection',
    tCalibration: 'Calibration',
    tUpgrade: 'Upgrade',
    statusAll: 'Status: all',
    stNew: 'New',
    stInProgress: 'In progress',
    stClosed: 'Closed',
    thId: '#',
    thMachine: 'Machine',
    thType: 'Type',
    thDesc: 'Description',
    thPriority: 'Priority',
    thStatus: 'Status',
    thActions: 'Actions',
    partsTitle: '🧰 Spare parts inventory',
    btnReplenish: 'Replenish stock',
    ptCode: 'Code',
    ptName: 'Name',
    ptStock: 'Stock',
    ptMin: 'Min.',
    ptActions: 'Actions',
    partUse: 'Use',
    partPlus: '+1'
  },

  reports: {
    title: '📑 Reports & data export',
    btnPreview: 'Preview',
    btnCSV: 'Export CSV',
    btnJSON: 'Export JSON',
    previewMsg: 'Select a date range and click <b>Preview</b>.',
    resetBtn: 'Settings → Reset demo',
    resetNote: 'This will reset all locally saved data.'
  },

  modal: {
    title: 'Details',
    close: 'Close'
  },

  toast: {
    title: 'Message',
    body: 'Message body'
  }
};
