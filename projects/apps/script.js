const toc = document.getElementById('toc');

const PAGES = [
  { id: 'overview',        title: 'Visão Geral' },
  { id: 'prereqs',         title: 'Pré-requisitos' },
  { id: 'assets',          title: 'Assets do Tenant' },
  { id: 'ios',             title: 'Configuração iOS' },
  { id: 'android',         title: 'Configuração Android' },
  { id: 'workflow',        title: 'Executar o Workflow' },
  { id: 'sns-ios',         title: 'Configuração SNS iOS' },
  { id: 'sns-android',     title: 'Configuração SNS Android' },
  { id: 'publish-ios',       title: 'Publicar na App Store' },
  { id: 'post-publish-ios', title: 'Pós-publicação iOS' },
  { id: 'publish-android',  title: 'Publicar no Google Play' },
  { id: 'update-ios',      title: 'Atualizar iOS' },
  { id: 'update-android',  title: 'Atualizar Android' },
  { id: 'reference',       title: 'Referência' },
];

function navigate(pageId, fromPopState) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (!page) return;
  page.classList.add('active');

  document.querySelectorAll('.nav-link[data-page]').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });

  const sections = JSON.parse(page.dataset.sections || '[]');
  toc.innerHTML = sections.map(s =>
    `<a class="toc-link" href="#${pageId}/${s.id}" onclick="scrollToSection('${s.id}','${pageId}');return false;">${s.label}</a>`
  ).join('');

  let mobileToc = page.querySelector('.mobile-toc');
  if (!mobileToc && sections.length) {
    mobileToc = document.createElement('div');
    mobileToc.className = 'mobile-toc';
    mobileToc.innerHTML = `
      <button class="mobile-toc-toggle" onclick="toggleMobileToc(this)">
        Nesta página
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="mobile-toc-list">
        ${sections.map(s => `<a href="#${pageId}/${s.id}" onclick="scrollToSection('${s.id}','${pageId}');closeMobileToc(this.closest('.mobile-toc').querySelector('.mobile-toc-toggle'));return false;">${s.label}</a>`).join('')}
      </div>`;
    const desc = page.querySelector('.page-desc');
    if (desc) desc.after(mobileToc);
  }

  window.scrollTo({ top: 0 });
  if (!fromPopState) history.pushState({ pageId }, '', '#' + pageId);

  const firstLink = toc.querySelector('.toc-link');
  if (firstLink) firstLink.classList.add('active');

  const idx = PAGES.findIndex(p => p.id === pageId);
  const prev = PAGES[idx - 1];
  const next = PAGES[idx + 1];
  let pageNav = page.querySelector('.page-nav');
  if (!pageNav) {
    pageNav = document.createElement('div');
    pageNav.className = 'page-nav';
    page.appendChild(pageNav);
  }
  pageNav.innerHTML =
    (prev
      ? `<button class="page-nav-btn prev" onclick="navigate('${prev.id}')">
           <span class="page-nav-label">← Anterior</span>
           <span class="page-nav-title">${prev.title}</span>
         </button>`
      : `<div class="page-nav-spacer"></div>`) +
    (next
      ? `<button class="page-nav-btn next" onclick="navigate('${next.id}')">
           <span class="page-nav-label">Próximo →</span>
           <span class="page-nav-title">${next.title}</span>
         </button>`
      : `<div class="page-nav-spacer"></div>`);

  closeNav();
  setupScrollSpy();
  onScroll();
}

function toggleNav() {
  document.querySelector('.sidebar-left').classList.toggle('open');
  document.getElementById('navOverlay').classList.toggle('open');
}

function closeNav() {
  document.querySelector('.sidebar-left').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('open');
}

function toggleMobileToc(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

function closeMobileToc(btn) {
  btn.classList.remove('open');
  btn.nextElementSibling.classList.remove('open');
}

function scrollToSection(sectionId, pageId) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) + 20;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  history.replaceState(null, '', '#' + pageId + '/' + sectionId);
}

function setupScrollSpy() {
  window.removeEventListener('scroll', onScroll);
  window.addEventListener('scroll', onScroll, { passive: true });
}

function onScroll() {
  const headings = document.querySelectorAll('.page.active h2[id]');
  if (!headings.length) return;
  const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) + 32;
  let active = headings[0].id;
  headings.forEach(h => { if (h.getBoundingClientRect().top <= offset) active = h.id; });
  toc.querySelectorAll('.toc-link').forEach(l => {
    const href = l.getAttribute('href') || '';
    const sid = href.includes('/') ? href.split('/')[1] : href.slice(1);
    l.classList.toggle('active', sid === active);
  });
  const pid = document.querySelector('.page.active')?.id.replace('page-', '');
  if (pid) {
    const h = '#' + pid + '/' + active;
    if (location.hash !== h) history.replaceState(null, '', h);
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleLabel(next);
}

function updateToggleLabel(theme) {
  document.getElementById('themeIcon').textContent  = theme === 'dark' ? '☀️' : '🌙';
  document.getElementById('themeLabel').textContent = theme === 'dark' ? 'Modo claro' : 'Modo escuro';
}

// Copy buttons
document.querySelectorAll('pre').forEach(pre => {
  const wrap = document.createElement('div');
  wrap.className = 'pre-wrap';
  pre.parentNode.insertBefore(wrap, pre);
  wrap.appendChild(pre);
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  const iconCopy  = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
  const iconCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  btn.innerHTML = iconCopy;
  btn.onclick = () => {
    navigator.clipboard.writeText(pre.dataset.copy || pre.querySelector('code').innerText).then(() => {
      btn.innerHTML = iconCheck;
      btn.classList.add('copied');
      setTimeout(() => { btn.innerHTML = iconCopy; btn.classList.remove('copied'); }, 2000);
    });
  };
  wrap.appendChild(btn);
});

// Search
let searchIndex = [];
let searchActive = -1;

function buildSearchIndex() {
  searchIndex = [];
  document.querySelectorAll('.page').forEach(page => {
    const pageId    = page.id.replace('page-', '');
    const pageTitle = page.querySelector('h1')?.innerText?.trim() || pageId;
    searchIndex.push({ pageId, sectionId: null, path: pageTitle, title: pageTitle, snippet: page.querySelector('.page-desc')?.innerText?.trim() || '', type: 'page' });
    page.querySelectorAll('h2[id]').forEach(h2 => {
      let snippet = '', el = h2.nextElementSibling;
      while (el && el.tagName !== 'H2') {
        if ((el.tagName === 'P' || el.tagName === 'LI') && snippet.length < 120) snippet += el.innerText.trim() + ' ';
        el = el.nextElementSibling;
      }
      searchIndex.push({ pageId, sectionId: h2.id, path: pageTitle, title: h2.innerText.trim(), snippet: snippet.trim().slice(0, 120), type: 'section' });
    });
  });
}

function loadHistory() {
  try { return JSON.parse(localStorage.getItem('searchHistory') || '[]'); } catch { return []; }
}
function saveSearch(query) {
  if (!query.trim()) return;
  let h = loadHistory().filter(q => q !== query);
  h.unshift(query);
  localStorage.setItem('searchHistory', JSON.stringify(h.slice(0, 6)));
}
function removeFromHistory(query) {
  localStorage.setItem('searchHistory', JSON.stringify(loadHistory().filter(q => q !== query)));
  renderResults('');
}
function clearHistory() { localStorage.removeItem('searchHistory'); renderResults(''); }
function clearSearchInput() {
  const input = document.getElementById('searchInput');
  if (!input.value) return;
  input.value = '';
  input.focus();
  renderResults('');
}
function updateSearchIcon(value) {
  const has = value.trim().length > 0;
  document.getElementById('searchIconSearch').style.display = has ? 'none' : '';
  document.getElementById('searchIconClear').style.display  = has ? '' : 'none';
  document.getElementById('searchIconBtn').style.cursor = has ? 'pointer' : 'default';
}
function applyHistory(query) {
  const input = document.getElementById('searchInput');
  input.value = query;
  input.focus();
  renderResults(query);
}
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  const input = document.getElementById('searchInput');
  input.value = '';
  input.focus();
  renderResults('');
  updateSearchIcon('');
  searchActive = -1;
}
function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.add('closing');
  setTimeout(() => overlay.classList.remove('open', 'closing'), 150);
}
function onOverlayClick(e) { if (e.target === document.getElementById('searchOverlay')) closeSearch(); }
function esc(str) { return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function highlight(text, q) { return q ? text.replace(new RegExp(`(${esc(q)})`, 'gi'), '<mark>$1</mark>') : text; }
function getMatches(q) {
  const lq = q.toLowerCase();
  return searchIndex.filter(e => e.title.toLowerCase().includes(lq) || e.snippet.toLowerCase().includes(lq) || e.path.toLowerCase().includes(lq)).slice(0, 8);
}

const clockIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

function renderResults(query) {
  const container = document.getElementById('searchResults');
  searchActive = -1;
  updateSearchIcon(query);
  if (!query.trim()) {
    const history = loadHistory();
    if (!history.length) { container.innerHTML = '<div class="search-empty">Digite para pesquisar...</div>'; return; }
    container.innerHTML =
      `<div class="search-history-header">
        <span class="search-history-label">Recentes</span>
        <button class="search-history-clear" onclick="clearHistory()">Limpar</button>
      </div>` +
      history.map(q =>
        `<div class="search-history-item" onclick="applyHistory('${q.replace(/'/g,"\\'")}')">
          <span class="search-history-item-left">${clockIcon}<span>${q}</span></span>
          <button class="search-history-remove" onclick="event.stopPropagation();event.preventDefault();removeFromHistory('${q.replace(/'/g,"\\'")}');">${closeIcon}</button>
        </div>`
      ).join('');
    return;
  }
  const matches = getMatches(query);
  if (!matches.length) { container.innerHTML = `<div class="search-empty">Nenhum resultado para "<strong>${query}</strong>"</div>`; return; }
  const q = query.toLowerCase();
  container.innerHTML = matches.map((r, i) => `
    <button class="search-result" data-idx="${i}" onclick="selectResult(${i}, '${q.replace(/'/g,"\\'")}')">
      <span class="search-result-path">${highlight(r.path, q)}${r.type === 'section' ? ' › ' + highlight(r.title, q) : ''}</span>
      <span class="search-result-title">${highlight(r.title, q)}</span>
      ${r.snippet ? `<span class="search-result-snippet">${highlight(r.snippet, q)}</span>` : ''}
    </button>`).join('');
}

function selectResult(idx, q) {
  const r = getMatches(q)[idx];
  if (!r) return;
  saveSearch(q);
  closeSearch();
  navigate(r.pageId);
  if (r.sectionId) {
    setTimeout(() => {
      const el = document.getElementById(r.sectionId);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); history.replaceState(null, '', '#' + r.pageId + '/' + r.sectionId); }
    }, 60);
  }
}

function updateActiveResult() {
  const results = document.querySelectorAll('.search-result');
  results.forEach((r, i) => r.classList.toggle('active', i === searchActive));
  if (results[searchActive]) results[searchActive].scrollIntoView({ block: 'nearest' });
}

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); return; }
  if (!document.getElementById('searchOverlay').classList.contains('open')) return;
  const results = document.querySelectorAll('.search-result');
  if (e.key === 'Escape')    { closeSearch(); return; }
  if (e.key === 'ArrowDown') { e.preventDefault(); searchActive = Math.min(searchActive + 1, results.length - 1); updateActiveResult(); }
  if (e.key === 'ArrowUp')   { e.preventDefault(); searchActive = Math.max(searchActive - 1, 0); updateActiveResult(); }
  if (e.key === 'Enter' && searchActive >= 0) selectResult(searchActive, document.getElementById('searchInput').value.toLowerCase());
});

// OS shortcut badge
const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
document.getElementById('searchKbd').innerHTML = isMac
  ? '<span class="search-key">⌘</span><span class="search-key">K</span>'
  : '<span class="search-key">Ctrl</span><span class="search-key">K</span>';

// Wrap tables for mobile scroll
document.querySelectorAll('table').forEach(t => {
  if (t.parentElement.classList.contains('table-wrap')) return;
  const wrap = document.createElement('div');
  wrap.className = 'table-wrap';
  t.parentNode.insertBefore(wrap, t);
  wrap.appendChild(t);
});

// Init theme
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const saved = localStorage.getItem('theme') || systemTheme;
document.documentElement.setAttribute('data-theme', saved);
updateToggleLabel(saved);

buildSearchIndex();

// Init page from URL hash
(function() {
  const hash = location.hash.slice(1);
  const [pageId, sectionId] = hash.split('/');
  const valid = PAGES.find(p => p.id === pageId);
  navigate(valid ? pageId : 'overview', true);
  if (valid && sectionId) {
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) + 20;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'instant' });
      }
    }, 50);
  }
})();

window.addEventListener('popstate', () => {
  const [pageId] = location.hash.slice(1).split('/');
  const valid = PAGES.find(p => p.id === pageId);
  navigate(valid ? pageId : 'overview', true);
});

// Tenant system
let _tenantSlug = '', _tenantName = '', _bundlePrefix = '';

function updateTenant(value) {
  _tenantSlug = value.trim();
  const display = _tenantSlug || 'slug-do-tenant';
  document.querySelectorAll('.tenant-slug').forEach(el => el.textContent = display);
  document.querySelectorAll('.tenant-page-input').forEach(input => { if (input.value !== value) input.value = value; });
}
function updateTenantName(value) {
  _tenantName = value.trim();
  const display = _tenantName || 'Nome do Tenant';
  document.querySelectorAll('.tenant-name').forEach(el => el.textContent = display);
  document.querySelectorAll('.tenant-name-input').forEach(input => { if (input.value !== value) input.value = value; });
}
function updateBundlePrefix(value) {
  _bundlePrefix = value.trim();
  const display = _bundlePrefix || 'com.prefixo-existente';
  document.querySelectorAll('.bundle-prefix').forEach(el => el.textContent = display);
  document.querySelectorAll('.bundle-prefix-input').forEach(input => { if (input.value !== value) input.value = value; });
}
function setUpdateMode(mode) {
  document.querySelectorAll('.ua-mode-new').forEach(el => el.style.display = mode === 'new' ? '' : 'none');
  document.querySelectorAll('.ua-mode-existing').forEach(el => el.style.display = mode === 'existing' ? '' : 'none');
  document.querySelectorAll('.bundle-prefix-row').forEach(el => el.style.display = mode === 'existing' ? '' : 'none');
  document.querySelectorAll('.ua-mode-select').forEach(el => { if (el.value !== mode) el.value = mode; });
}

const _iconCopyBundle  = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
const _iconCheckBundle = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

function copyBundleId(btn) {
  navigator.clipboard.writeText('com.plataformaexemplo.' + (_tenantSlug || 'slug-do-tenant')).then(() => {
    btn.innerHTML = _iconCheckBundle;
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = _iconCopyBundle; btn.classList.remove('copied'); }, 2000);
  });
}

// Lightbox
function openLightbox(src, alt) {
  const img = document.getElementById('lightboxImg');
  img.src = src;
  img.alt = alt || '';
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('lightbox').classList.contains('open')) closeLightbox();
});

document.addEventListener('click', e => {
  const img = e.target.closest('.doc-img');
  if (img) openLightbox(img.src, img.alt);
});
