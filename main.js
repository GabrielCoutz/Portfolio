const projects = {
  treeshaking: {
    title: 'Tree Shaking: redução de bundle e ganho de performance',
    subtitle: 'Performance · Webpack · Bundle · Core Web Vitals',
    summary: 'A plataforma acumulava código legado de features descontinuadas e dependências não utilizadas, inflando o bundle principal para 3MB. Com Tree Shaking via Webpack, o bundle caiu para 708kB, o loading em 3G passou de 16s para 6s e a nota de performance no PageSpeed subiu de 38 para 53.',
    metrics: [
      { value: '3MB→708kB', label: 'Bundle principal' },
      { value: '16s→6s',    label: 'Loading em 3G' },
      { value: '38→53',     label: 'PageSpeed Performance' },
      { value: '5.4s→2.6s', label: 'LCP' },
    ],
    context:  'Tree Shaking é uma técnica de otimização que remove código não utilizado do bundle final. Pense na aplicação como uma árvore: os galhos são as dependências. Sacudir a árvore elimina os galhos secos: código legado, métodos nunca chamados e imports de features descontinuadas. O resultado é um bundle menor e uma aplicação mais rápida.',
    pain:     'Além de reclamações de usuários sobre lentidão, a plataforma carregava código de features há muito descontinuadas. O bundle principal (_app.page.tsx) havia chegado a 3MB, tornando o loading inicial lento mesmo em boas conexões. Em 3G, o usuário esperava mais de 16 segundos para ver a aplicação.',
    solution: 'Utilizei a configuração nativa de Tree Shaking do Webpack para identificar e eliminar todo código não referenciado no bundle de produção. O foco principal foi o arquivo _app.page.tsx, responsável por renderizar toda a aplicação.',
    results:  'O bundle principal caiu de <b>3MB para 708kB</b> (redução de <b>76%</b>). O tempo de parse e execução caiu de <b>2.16s para 508ms</b>. O loading em 3G caiu de <b>16s para 6s</b>. A nota de Performance no PageSpeed subiu de <b>38 para 53</b> e o LCP passou de <b>5.4s para 2.6s</b>.',
    solutionImages: [
      { src: 'assets/treeshaking/loading.gif',    caption: 'Loading antes e depois em 3G rápido simulado.' },
      { src: 'assets/treeshaking/bundle.png',     caption: 'Bundle _app: 3.0MB/2.16s antes, 708kB/508ms depois.' },
    ],
    solutionCols: 1,
    resultsImages: [
      { src: 'assets/treeshaking/pagespeed.png',  caption: 'PageSpeed antes e depois: Performance de 38 para 53, LCP de 5.4s para 2.6s.' },
    ],
    tags: ['Webpack', 'Next.js', 'TypeScript', 'Tree Shaking', 'Bundle Optimization', 'Core Web Vitals'],
  },
  lcp: {
    title: 'Otimização de LCP na página principal da plataforma',
    subtitle: 'Core Web Vitals · Performance · Imagens',
    summary: 'As imagens não otimizadas da página principal forçavam o usuário a baixar 22MB de recursos para ver o conteúdo. Em conexões lentas, isso significava minutos de espera. Com a otimização das imagens, o peso caiu para 8MB e o tempo de carregamento reduziu de 10.69s para 5.38s.',
    metrics: [
      { value: '22MB→8MB',     label: 'Dados economizados' },
      { value: '10.69s→5.38s', label: 'Tempo de carregamento' },
      { value: '−64%',         label: 'Redução no peso das imagens' },
      { value: '−50%',         label: 'Tempo de conclusão' },
    ],
    context:  'O LCP (Largest Contentful Paint) mede quanto tempo leva para o maior elemento visível de uma página carregar completamente. É uma das métricas mais importantes do Core Web Vitals, diretamente ligada à percepção de velocidade do usuário e ao ranqueamento no Google. A página principal da plataforma concentrava imagens pesadas sem nenhuma otimização, resultando em LCP elevado.',
    pain:     'Usuários em conexões mais lentas, como 3G, precisavam aguardar mais de 10 segundos para visualizar o conteúdo principal. O download de 22MB de recursos só para renderizar a página tornava a experiência frustrante e aumentava a taxa de abandono.',
    solution: 'Todas as imagens da página principal foram otimizadas: compressão, formatos modernos e ajuste de dimensões para eliminar dados desnecessários. O objetivo era reduzir o payload sem comprometer a qualidade visual percebida pelo usuário.',
    results:  'O peso total de dados transferidos caiu de <b>22MB para 8MB</b>, redução de <b>64%</b>. O tempo de carregamento caiu de <b>10.69s para 5.38s</b>, redução de <b>50%</b>. Em 3G, o conteúdo que antes levaria minutos passou a carregar em poucos segundos.',
    contextImages: [
      { src: 'assets/lcp/explicacao.png', caption: 'LCP: momento em que o conteúdo mais relevante da página se torna visível ao usuário.', fonte: 'https://web.dev/articles/lcp?hl=pt-br' },
    ],
    solutionImages: [
      { src: 'assets/lcp/antes-depois.gif', caption: 'Comparação de carregamento com 3G simulado: antes e depois da otimização.' },
    ],
    resultsImages: [
      { src: 'assets/lcp/resultados.png', caption: 'Redução de 22MB para 8MB em dados transferidos e de 10.69s para 5.38s no tempo de carregamento.' },
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Core Web Vitals', 'LCP', 'Otimização de Imagens'],
  },
  apps: {
    title: 'Publicação de apps nas lojas: do build ao review',
    subtitle: 'Documentação · App Store · Google Play · CI/CD',
    summary: 'Sem processo definido, cada publicação virava uma maratona de consultas a docs externas e tentativas de se lembrar dos passos. Criei uma documentação completa do zero cobrindo todo o ciclo — de build a revisão — para iOS e Android, padronizando o processo para toda a equipe.',
    metrics: [
      { value: '14',            label: 'Artigos criados' },
      { value: 'iOS + Android', label: 'Plataformas cobertas' },
      { value: '14',            label: 'Seções na documentação' },
      { value: '18+',           label: 'Tarefas no checklist por tenant' },
    ],
    context:  'O produto é multi-tenant: gera apps independentes para cada cliente — cada um com bundle ID, ícone e presença própria nas lojas. Com o crescimento do número de tenants, publicar e manter cada app virou parte recorrente do trabalho. Mas sem nenhum processo centralizado.',
    pain:     'Cada publicação era feita de memória ou com consultas avulsas a docs externas em inglês. A equipe não tinha guia centralizado: o processo era lento, confuso e propenso a erros. Devs novos ficavam perdidos, e os experientes perdiam tempo relembrando configurações espalhadas entre App Store, Google Play, Firebase e AWS.',
    solution: 'Criei uma documentação técnica completa do zero, em português, cobrindo todo o ciclo para iOS e Android: assets por tenant, build com EAS, configuração de push via AWS SNS, publicação na App Store e Google Play, e manutenção. A doc inclui inputs interativos que preenchem automaticamente bundle IDs e snippets de código com base no slug do tenant.',
    results:  'O processo que antes exigia consultas a múltiplas fontes e conhecimento de memória passou a ter um guia único e centralizado. Novos devs conseguem publicar apps de forma autônoma. A equipe conta com um checklist de validação completo por tenant, eliminando a confusão e reduzindo significativamente o tempo por publicação.',
    iframeSrc: 'projects/apps/index.html',
    tags: ['React Native', 'Expo EAS', 'App Store', 'Google Play', 'AWS SNS', 'Firebase', 'GitHub Actions', 'Documentação'],
  },
  cls: {
    title: 'Otimização de CLS na página principal da plataforma',
    subtitle: 'Core Web Vitals · Performance · UX',
    summary: 'A principal página da plataforma possuía um CLS classificado como Poor pelo Core Web Vitals (<a href="https://web.dev/articles/cls?hl=pt-br#what-is-a-good-cls-score" target="_blank" rel="noopener">web.dev</a>). Ao carregar todo conteúdo sem nenhum espaço reservado, toda interface se deslocava bruscamente, atingindo negativamente tanto a métrica quanto o UX.',
    metrics: [
      { value: '0.9→0.04', label: 'CLS desktop' },
      { value: '0.8→0.07', label: 'CLS mobile' },
      { value: '−96%',     label: 'Redução no desktop' },
      { value: '−91%',     label: 'Redução no mobile' },
    ],
    context:  'A /browse é a página com maior volume de acessos do produto 2.0 da Ensinio. Analisando as métricas de Core Web Vitals via PageSpeed Insights, ela apresentava o pior CLS da plataforma: 0.95 no desktop, bem acima do threshold de 0.25 considerado "Poor".',
    pain:     'Os slides e conteúdos da página carregavam sem espaço reservado, fazendo a interface se deslocar abruptamente enquanto os elementos apareciam. Além de frustrar o usuário (podendo causar cliques acidentais), esse comportamento prejudicava diretamente o ranqueamento no Google.',
    solution: 'Implementei placeholders com dimensões fixas para os slides e demais conteúdos, garantindo que a interface não se deslocasse durante o carregamento. Adicionei um spinner de loading para dar feedback visual ao usuário enquanto o conteúdo é buscado.',
    results:  'CLS desktop caiu de <b>0.900 para 0.040</b> (redução de <b>96%</b>). CLS mobile caiu de <b>0.800 para 0.070</b> (redução de <b>91%</b>). A página passou da faixa <b>"Poor" para "Good"</b> no Core Web Vitals, melhorando o ranqueamento no Google e eliminando os deslocamentos de interface.',
    contextImages: [
      { src: 'assets/cls/dashboard.png', caption: 'Dashboard de Core Web Vitals: /browse com CLS 0.95, classificado como "Poor".' },
    ],
    painImages: [
      { src: 'assets/cls/exemplo.gif', caption: 'Exemplo real de CLS: usuário tenta cancelar mas clica em "Finalizar pedido" por causa do deslocamento da interface.', fonte: 'https://web.dev/articles/cls?hl=pt-br' },
    ],
    resultsImages: [
      { src: 'assets/cls/desktop.gif', label: 'Desktop', caption: 'Antes vs. depois.' },
      { src: 'assets/cls/mobile.gif',  label: 'Mobile',  caption: 'Antes vs. depois.' },
    ],
    resultsCols: 1,
    tags: ['Next.js', 'React', 'TypeScript', 'Core Web Vitals', 'CLS', 'PageSpeed Insights'],
  },
};

/* ── MOCK IMAGE ── */
const MOCK_SRC = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="800" height="500" fill="#1c1c1e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui,sans-serif" font-size="16" fill="#555">imagem interna mockada</text></svg>')}`;

/* ── HELPERS ── */
function fmtVal(val) {
  if (!val.includes('→')) return val;
  const [before, after] = val.split('→');
  return `<span style="color:var(--before)">${before}</span><span style="color:var(--dim)" aria-hidden="true">→</span><span class="sr-only"> para </span>${after}`;
}

function sectionImgs(imgs, cols) {
  if (!imgs?.length) return '';
  const style = cols === 1 ? ' style="grid-template-columns:1fr"' : '';
  return `<div class="ps-images"${style}>${imgs.map(img => `
    <div class="ps-image-wrap">
      ${img.label   ? `<div class="ps-image-label">${img.label}</div>` : ''}
      ${img.caption ? `<div class="ps-image-caption">${img.caption}</div>` : ''}
      <button class="ps-image${img.mock ? ' ps-image--mock' : ''}" onclick="openLightbox('${img.mock ? MOCK_SRC : img.src}','${(img.label||img.caption||'').replace(/'/g,"\\'")}')" aria-label="Ampliar imagem: ${(img.label||img.caption||'').replace(/"/g,'&quot;')}">
        ${img.mock ? '<span class="ps-mock-label">imagem interna mockada</span>' : `<img src="${img.src}" alt="${(img.caption||img.label||'').replace(/"/g,'&quot;')}" loading="lazy">`}
      </button>
      ${img.fonte ? `<div class="ps-image-fonte">Fonte: <a href="${img.fonte}" target="_blank" rel="noopener">${img.fonte}</a></div>` : ''}
    </div>`).join('')}</div>`;
}

/* ── SIDEBAR & TOC ── */
const TOC_SECTIONS = [
  { id: 'section-contexto',    label: 'Contexto' },
  { id: 'section-dor',         label: 'A dor' },
  { id: 'section-solucao',     label: 'O que foi feito' },
  { id: 'section-resultados',  label: 'Resultados' },
  { id: 'section-tecnologias', label: 'Tecnologias' },
];

let tocScrollHandler = null;

function updateSidebarActive(id) {
  document.querySelectorAll('.sidenav-item[data-project]').forEach(el => {
    const isActive = el.dataset.project === id;
    el.classList.toggle('active', isActive);
    isActive ? el.setAttribute('aria-current', 'page') : el.removeAttribute('aria-current');
  });
  document.querySelectorAll('[data-home]').forEach(el => {
    const isActive = !id;
    el.classList.toggle('active', isActive);
    isActive ? el.setAttribute('aria-current', 'page') : el.removeAttribute('aria-current');
  });
}

/* ── MOBILE MENU ── */
function toggleMobileMenu() {
  const isOpen = document.getElementById('mobile-drawer').classList.contains('open');
  if (isOpen) closeMobileMenu(); else openMobileMenu();
}

function openMobileMenu() {
  const drawer   = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const btn      = document.getElementById('hamburger');
  backdrop.classList.add('open');
  drawer.classList.add('open');
  requestAnimationFrame(() => {
    backdrop.classList.add('visible');
    drawer.querySelector('button, a, [tabindex]:not([tabindex="-1"])')?.focus();
  });
  btn.setAttribute('aria-expanded', 'true');
  document.addEventListener('keydown', onDrawerKey);
  drawer.addEventListener('keydown', trapFocusDrawer);
}

function closeMobileMenu() {
  const drawer   = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const btn      = document.getElementById('hamburger');
  backdrop.classList.remove('visible');
  drawer.classList.remove('open');
  backdrop.addEventListener('transitionend', () => backdrop.classList.remove('open'), { once: true });
  btn.setAttribute('aria-expanded', 'false');
  document.removeEventListener('keydown', onDrawerKey);
  drawer.removeEventListener('keydown', trapFocusDrawer);
}

function onDrawerKey(e) { if (e.key === 'Escape') closeMobileMenu(); }

function trapFocusDrawer(e) {
  if (e.key !== 'Tab') return;
  const drawer = document.getElementById('mobile-drawer');
  const focusable = [...drawer.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled);
  const [first, last] = [focusable.at(0), focusable.at(-1)];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* sync drawer theme button */
function syncDrawerThemeBtn() {
  const btn = document.getElementById('theme-btn-drawer');
  if (!btn) return;
  btn.textContent = ICONS[theme];
  btn.setAttribute('aria-label', LABELS[theme]);
}

function showToc() {
  document.getElementById('sidebar-right').style.display = '';
  document.querySelector('.layout')?.classList.remove('layout--home');
  destroyTocTracking();
  const toc = document.getElementById('toc');
  const nav = document.getElementById('toc-nav');
  toc.removeAttribute('hidden');
  nav.innerHTML = TOC_SECTIONS.map(s =>
    `<button type="button" class="toc-link" data-target="${s.id}">${s.label}</button>`
  ).join('');
  nav.querySelectorAll('.toc-link').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
  initTocTracking();
}

function hideToc() {
  document.getElementById('sidebar-right').style.display = 'none';
  document.querySelector('.layout')?.classList.add('layout--home');
  document.getElementById('toc').setAttribute('hidden', '');
  document.getElementById('toc-nav').innerHTML = '';
  destroyTocTracking();
}

function initTocTracking() {
  tocScrollHandler = () => {
    const offset = 80;
    const sections = TOC_SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    let current = sections[0]?.id;
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= offset) current = s.id;
    }
    document.querySelectorAll('.toc-link').forEach(l => {
      const isActive = l.dataset.target === current;
      l.classList.toggle('active', isActive);
      isActive ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', tocScrollHandler, { passive: true });
  tocScrollHandler();
}

function destroyTocTracking() {
  if (tocScrollHandler) {
    window.removeEventListener('scroll', tocScrollHandler);
    tocScrollHandler = null;
  }
}

/* ── ROUTING ── */
function goHome(skipHistory) {
  closeMobileMenu();
  document.getElementById('view-home').classList.add('active');
  document.getElementById('view-project').classList.remove('active');
  setNavCrumb(null);
  updateSidebarActive(null);
  hideToc();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.title = 'Portfolio · Gabriel Coutinho';
  triggerReveal();
  document.getElementById('view-home').focus();
  if (!skipHistory) history.pushState(null, '', location.pathname);
}

function goProject(id, skipHistory) {
  closeMobileMenu();
  const p = projects[id];
  if (!p) return;

  const metrics = p.metrics.map(m => `
    <div class="pm-card">
      <div class="pm-value">${fmtVal(m.value)}</div>
      <div class="pm-label">${m.label}</div>
    </div>`).join('');

  const tags = p.tags.map(t => `<span class="ptag">${t}</span>`).join('');

  document.getElementById('project-content').innerHTML = `
    <button class="back-btn" onclick="goHome()"><span aria-hidden="true">←</span> Voltar</button>
    <div class="project-page-header">
      <h1>${p.title}</h1>
      <p class="subtitle">${p.subtitle}</p>
      <p class="summary">${p.summary}</p>
    </div>
    <div class="project-metrics-grid">${metrics}</div>
    <div class="project-sections">
      <div class="ps" id="section-contexto"><h2 class="ps-title">Contexto</h2><p>${p.context}</p>${sectionImgs(p.contextImages, p.contextCols)}</div>
      <div class="ps" id="section-dor"><h2 class="ps-title">A dor</h2><p>${p.pain}</p>${sectionImgs(p.painImages, p.painCols)}</div>
      <div class="ps" id="section-solucao"><h2 class="ps-title">O que foi feito</h2><p>${p.solution}</p>${p.iframeSrc ? `<button class="view-project-btn" onclick="openIframeModal('${p.iframeSrc}')">Ver documentação <span aria-hidden="true">→</span></button>` : ''}${sectionImgs(p.solutionImages, p.solutionCols)}</div>
      <div class="ps" id="section-resultados"><h2 class="ps-title">Resultados</h2><p>${p.results}</p>${sectionImgs(p.resultsImages, p.resultsCols)}</div>
      <div class="ps" id="section-tecnologias"><h2 class="ps-title">Tecnologias</h2><div class="project-tags">${tags}</div></div>
    </div>
    <div class="cta">
      <p class="cta-text">Seu negócio também precisa de resultados?</p>
      <a href="https://www.linkedin.com/in/gabrielcoutz/" target="_blank" rel="noopener" class="cta-btn" aria-label="Vamos conversar (abre em nova aba)">
        Vamos conversar
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>`;

  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.add('active');
  setNavCrumb(p.title);
  updateSidebarActive(id);
  showToc();
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.title = `${p.title} · Gabriel Coutinho`;
  document.getElementById('view-project').focus();
  if (!skipHistory) history.pushState({ project: id }, '', '#' + id);
}

function setNavCrumb(title) {
  const sep   = document.getElementById('nav-sep');
  const crumb = document.getElementById('nav-crumb');
  const logo  = document.getElementById('nav-logo');
  sep.style.display = title ? '' : 'none';
  crumb.textContent = title ?? '';
  logo.setAttribute('aria-label', title ? 'Voltar para início' : 'Início');
}

/* ── THEME ── */
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
let theme = localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');

const ICONS   = { dark: '🌙', light: '☀️' };
const LABELS  = { dark: 'Mudar para tema claro', light: 'Mudar para tema escuro' };

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('theme-btn');
  btn.textContent = ICONS[t];
  btn.setAttribute('aria-label', LABELS[t]);
  theme = t;
  localStorage.setItem('theme', t);
  syncDrawerThemeBtn();
}

function toggleTheme() { applyTheme(theme === 'dark' ? 'light' : 'dark'); }

applyTheme(theme);
prefersDark.addEventListener('change', e => {
  if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
});

/* ── LIGHTBOX ── */
let lightboxTrigger = null;

function openLightbox(src, altText) {
  lightboxTrigger = document.activeElement;
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = altText || '';
  lb.classList.add('open');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    lb.classList.add('visible');
    lb.querySelector('.lightbox-close').focus();
  }));
  document.addEventListener('keydown', onLightboxKey);
  lb.addEventListener('keydown', trapFocus);
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('visible');
  lb.addEventListener('transitionend', () => {
    lb.classList.remove('open');
    document.getElementById('lightbox-img').alt = '';
  }, { once: true });
  document.removeEventListener('keydown', onLightboxKey);
  lb.removeEventListener('keydown', trapFocus);
  lightboxTrigger?.focus();
  lightboxTrigger = null;
}

function handleLightboxClick(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
}

function onLightboxKey(e) { if (e.key === 'Escape') closeLightbox(); }

function trapFocus(e) {
  if (e.key !== 'Tab') return;
  const focusable = [...document.getElementById('lightbox').querySelectorAll('button')];
  const [first, last] = [focusable.at(0), focusable.at(-1)];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ── IFRAME MODAL ── */
let iframeModalTrigger = null;

function openIframeModal(src) {
  iframeModalTrigger = document.activeElement;
  const modal = document.getElementById('iframe-modal');
  const frame = document.getElementById('iframe-modal-frame');
  frame.src = src;
  modal.classList.add('open');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    modal.classList.add('visible');
    modal.querySelector('.iframe-modal-close').focus();
  }));
  document.addEventListener('keydown', onIframeModalKey);
}

function closeIframeModal() {
  const modal = document.getElementById('iframe-modal');
  const frame = document.getElementById('iframe-modal-frame');
  modal.classList.remove('visible');
  modal.addEventListener('transitionend', () => {
    modal.classList.remove('open');
    frame.src = '';
  }, { once: true });
  document.removeEventListener('keydown', onIframeModalKey);
  iframeModalTrigger?.focus();
  iframeModalTrigger = null;
}

function onIframeModalKey(e) { if (e.key === 'Escape') closeIframeModal(); }

/* ── REVEAL ── */
function triggerReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.04 });
  document.querySelectorAll('.reveal:not(.in)').forEach(el => obs.observe(el));
}

/* ── HASH ROUTING ── */
window.addEventListener('popstate', () => {
  const id = location.hash.slice(1);
  if (id && projects[id]) goProject(id, true);
  else goHome(true);
});

const initHash = location.hash.slice(1);
if (initHash && projects[initHash]) goProject(initHash, true);
else { hideToc(); triggerReveal(); updateSidebarActive(null); }

/* ── COUNTERS ── */
function animateCount(el) {
  const to     = +el.dataset.count;
  const from   = +(el.dataset.from ?? 0);
  const prefix = el.dataset.prefix ?? '';
  const suffix = el.dataset.suffix ?? '';
  const dur    = 1200;
  const t0     = performance.now();

  (function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    const v = Math.round(from + (to - from) * (1 - (1 - p) ** 3));
    el.textContent = `${prefix}${v}${suffix}`;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('[data-count]').forEach(animateCount);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.4 }).observe(document.querySelector('.stats'));
}
