/* ============================================================
   Deepjob UI Kit — 站点交互
   依赖 data.js 暴露的 SECTIONS / SCREENS
   ============================================================ */

(function () {
  'use strict';

  const root = document.body.dataset.root || './';
  const page = document.body.dataset.page || 'home';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const byId = id => SCREENS.find(s => s.id === id);
  const sectionOf = id => SECTIONS.find(s => s.id === id);
  const pad = n => String(n).padStart(2, '0');

  const icon = {
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    chevron: dir =>
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'}"/></svg>`,
    back: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    logo: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5h6.2A6.3 6.3 0 0 1 18.5 9.8v4.4a6.3 6.3 0 0 1-6.3 6.3H6z"/><path d="M10.6 8.4v7.2l4.2-3.6z"/></svg>'
  };

  /* ---------------- 导航 ---------------- */
  const NAV = [
    { key: 'home', label: '首页', href: root + 'index.html' },
    { key: 'all', label: '全部界面', href: root + 'pages/all.html' },
    ...SECTIONS.map(s => ({ key: s.id, label: s.title, href: `${root}pages/${s.id}.html` }))
  ];

  function renderHeader() {
    const header = $('[data-header]');
    if (!header) return;
    header.innerHTML = `
      <div class="wrap header-inner">
        <a class="brand" href="${root}index.html" aria-label="Deepjob 界面集 首页">
          <span class="brand-mark">${icon.logo}</span>
          <span>Deepjob<small>UI Kit · 29 screens</small></span>
        </a>
        <nav class="nav" aria-label="主导航">
          ${NAV.map(item => `<a href="${item.href}"${item.key === page ? ' class="is-active" aria-current="page"' : ''}>${item.label}</a>`).join('')}
        </nav>
        <a class="header-cta" href="${root}screen.html">看一页 ${icon.arrow}</a>
      </div>`;
  }

  function renderFooter() {
    const footer = $('[data-footer]');
    if (!footer) return;
    footer.innerHTML = `
      <div class="wrap footer-inner">
        <div>© ${new Date().getFullYear()} Deepjob 界面设计稿 · 共 ${SCREENS.length} 个画面，仅作展示与演示之用。</div>
        <div class="links">
          <a href="${root}index.html">首页</a>
          <a href="${root}pages/all.html">全部界面</a>
          <a href="${root}screen.html?id=${SCREENS[0].id}">从第一页看起</a>
        </div>
      </div>`;
  }

  /* ---------------- 首页章节卡片 ---------------- */
  const COVER = { intro: 's01', onboarding: 's03', jobs: 's07', apply: 's11', growth: 's12', profile: 's22' };

  function renderSectionCards() {
    const host = $('[data-sections]');
    if (!host) return;
    host.innerHTML = SECTIONS.map(s => {
      const items = SCREENS.filter(x => x.section === s.id);
      const cover = byId(s.cover || COVER[s.id]) || items[0];
      return `
        <a class="section-card reveal" href="${root}pages/${s.id}.html">
          <div class="cover">
            <span class="num-tag">${s.num} · ${s.en}</span>
            ${cover ? `<img src="${root}${cover.file}" alt="${s.title} 代表画面：${cover.title}" loading="lazy">` : ''}
          </div>
          <div class="body">
            <h3>${s.title} <span class="count">${items.length}</span></h3>
            <p>${s.desc}</p>
            <span class="more">浏览章节 ${icon.arrow}</span>
          </div>
        </a>`;
    }).join('');
  }

  /* ---------------- 章节页头 ---------------- */
  function renderPageHead() {
    const host = $('[data-page-head]');
    if (!host) return;
    const section = sectionOf(document.body.dataset.section);
    if (!section) return;

    const idx = SECTIONS.findIndex(s => s.id === section.id);
    const prev = SECTIONS[(idx - 1 + SECTIONS.length) % SECTIONS.length];
    const next = SECTIONS[(idx + 1) % SECTIONS.length];
    const count = SCREENS.filter(s => s.section === section.id).length;
    document.title = `${section.title} · Deepjob 界面集`;

    host.innerHTML = `
      <div class="wrap page-head">
        <div class="crumb"><a href="${root}index.html">首页</a> <span>/</span> <span>章节 ${section.num}</span></div>
        <div class="num" style="margin-top:16px">${section.num} — ${section.en}</div>
        <h1>${section.title}</h1>
        <p class="desc">${section.desc}</p>
        <div class="page-meta">
          <span class="chip">${count} 个画面</span>
          <span class="chip">章节 ${idx + 1} / ${SECTIONS.length}</span>
          <span class="chip">390 × 870</span>
          <a class="chip" href="${root}screen.html?id=${SCREENS.find(s => s.section === section.id).id}">从第一张开始看 →</a>
        </div>
      </div>`;

    const pager = $('[data-section-pager]');
    if (pager) {
      pager.innerHTML = `
        <a class="prev" href="${root}pages/${prev.id}.html">
          <span>${icon.chevron('left')}</span>
          <span><span class="dir">上一章节</span><br><span class="name">${prev.title}</span></span>
        </a>
        <a class="next" href="${root}pages/${next.id}.html">
          <span><span class="dir">下一章节</span><br><span class="name">${next.title}</span></span>
          <span>${icon.chevron('right')}</span>
        </a>`;
    }
  }

  /* ---------------- 画廊 ---------------- */
  function shotMarkup(screen, index) {
    const section = sectionOf(screen.section);
    return `
      <button class="shot" type="button" data-id="${screen.id}" style="animation-delay:${Math.min(index, 12) * 40}ms"
        aria-label="查看 ${screen.title}">
        <span class="shot-frame">
          <span class="badge">${screen.no}</span>
          <img src="${root}${screen.file}" alt="${screen.title}｜${section ? section.title : ''}" loading="lazy">
          <span class="peek">点击放大查看</span>
        </span>
        <span class="shot-meta">
          <span class="idx">${screen.no}</span>
          <span class="t">${screen.title}</span>
          <span class="d">${screen.desc}</span>
        </span>
      </button>`;
  }

  function renderGallery() {
    const host = $('[data-gallery]');
    if (!host) return;

    const scope = document.body.dataset.section;
    let list = scope ? SCREENS.filter(s => s.section === scope) : SCREENS.slice();
    const total = list.length;

    const input = $('[data-filter]');
    const count = $('[data-count]');

    const paint = keyword => {
      const kw = (keyword || '').trim().toLowerCase();
      const filtered = kw
        ? list.filter(s => (s.title + s.desc + s.no).toLowerCase().includes(kw))
        : list;
      host.innerHTML = filtered.length
        ? filtered.map(shotMarkup).join('')
        : '<p class="empty-state">没有匹配的画面，换个关键词试试。</p>';
      if (count) count.textContent = kw ? `${filtered.length} / ${total}` : `共 ${total} 个画面`;
      host.style.minHeight = '';
    };

    paint('');

    if (input) {
      input.addEventListener('input', e => paint(e.target.value));
      input.addEventListener('keydown', e => {
        if (e.key === 'Escape') { input.value = ''; paint(''); }
      });
    }

    host.addEventListener('click', e => {
      const btn = e.target.closest('[data-id]');
      if (!btn) return;
      location.href = `${root}screen.html?id=${btn.dataset.id}`;
    });
  }

  /* ---------------- 单页查看 ---------------- */
  function initViewer() {
    const host = $('[data-viewer]');
    if (!host) return;

    const params = new URLSearchParams(location.search);
    let currentId = params.get('id');
    if (!byId(currentId)) currentId = SCREENS[0].id;

    const render = () => {
      const idx = SCREENS.findIndex(s => s.id === currentId);
      const screen = SCREENS[idx];
      const section = sectionOf(screen.section);
      const prev = SCREENS[(idx - 1 + SCREENS.length) % SCREENS.length];
      const next = SCREENS[(idx + 1) % SCREENS.length];
      document.title = `${screen.title} · Deepjob 界面集`;

      host.innerHTML = `
        <div class="viewer-grid">
          <div class="viewer-stage">
            <button class="nav-btn" type="button" data-step="-1" aria-label="上一张">${icon.chevron('left')}</button>
            <div class="stage-frame" data-zoom role="button" tabindex="0" aria-label="放大查看 ${screen.title}">
              <img src="${root}${screen.file}" alt="${screen.title}">
            </div>
            <button class="nav-btn" type="button" data-step="1" aria-label="下一张">${icon.chevron('right')}</button>
          </div>

          <div class="viewer-info">
            <div class="no">${screen.no} / ${pad(SCREENS.length)}</div>
            <h1>${screen.title}</h1>
            <p class="desc">${screen.desc}</p>
            <div class="meta-row">
              <span class="chip">${section.num} · ${section.title}</span>
              <span class="chip">390 × 870</span>
              <span class="chip">${idx + 1} / ${SCREENS.length}</span>
            </div>
            <div class="viewer-actions">
              <a class="btn btn-primary" href="${root}screen.html?id=${next.id}" data-step-link="1">下一张 ${icon.arrow}</a>
              <a class="btn btn-ghost" href="${root}${screen.file}" download="${screen.id}.png">下载原图</a>
              <button class="btn btn-ghost" type="button" data-copy>复制链接</button>
            </div>

            <div class="thumbs-wrap">
              <div class="label">同章节画面 · ${section.title}</div>
              <div class="thumbs" data-thumbs>
                ${SCREENS.filter(s => s.section === screen.section)
                  .map(s => `<a href="${root}screen.html?id=${s.id}" class="${s.id === screen.id ? 'is-active' : ''}" aria-label="${s.title}">
                      <img src="${root}${s.file}" alt="${s.title}" loading="lazy">
                    </a>`).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="pager">
          <a class="prev" href="${root}screen.html?id=${prev.id}">
            <span>${icon.chevron('left')}</span>
            <span><span class="dir">上一张</span><br><span class="name">${prev.title}</span></span>
          </a>
          <a class="next" href="${root}screen.html?id=${next.id}">
            <span><span class="dir">下一张</span><br><span class="name">${next.title}</span></span>
            <span>${icon.chevron('right')}</span>
          </a>
        </div>`;

      try {
        history.replaceState({ id: screen.id }, '', `${location.pathname}?id=${screen.id}`);
      } catch (err) {
        /* file:// 直接打开时忽略地址栏同步 */
      }

      const back = $('[data-back]');
      if (back) {
        back.href = `${root}pages/${screen.section}.html`;
        back.innerHTML = `${icon.back} 返回 ${section.title}`;
      }
      const pos = $('[data-position]');
      if (pos) pos.textContent = `${pad(idx + 1)} / ${SCREENS.length}`;

      const active = $('.thumbs .is-active');
      if (active) active.scrollIntoView({ block: 'nearest', inline: 'center' });
    };

    render();

    const go = step => {
      const idx = SCREENS.findIndex(s => s.id === currentId);
      currentId = SCREENS[(idx + step + SCREENS.length) % SCREENS.length].id;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    host.addEventListener('click', e => {
      const stepBtn = e.target.closest('[data-step]');
      if (stepBtn) { go(Number(stepBtn.dataset.step)); return; }

      if (e.target.closest('[data-copy]')) {
        navigator.clipboard?.writeText(location.href).then(() => {
          const btn = e.target.closest('[data-copy]');
          const old = btn.textContent;
          btn.textContent = '已复制 ✓';
          setTimeout(() => { btn.textContent = old; }, 1600);
        });
        return;
      }

      if (e.target.closest('[data-zoom]')) openLightbox();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    });

    /* 灯箱 */
    const box = $('[data-lightbox]');
    const boxImg = box ? $('img', box) : null;

    function openLightbox() {
      if (!box) return;
      const screen = byId(currentId);
      boxImg.src = root + screen.file;
      boxImg.alt = screen.title;
      box.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!box) return;
      box.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (box) {
      box.addEventListener('click', e => {
        if (e.target === box || e.target.closest('.close')) closeLightbox();
      });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
    }

    /* 触摸滑动 */
    let touchX = null;
    host.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    host.addEventListener('touchend', e => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 60) go(dx > 0 ? -1 : 1);
      touchX = null;
    }, { passive: true });
  }

  /* ---------------- 入场动画 ---------------- */
  function initReveal() {
    const items = $$('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(el => io.observe(el));
  }

  /* ---------------- 首页小交互 ---------------- */
  function initRandom() {
    $$('[data-random]').forEach(btn => {
      btn.addEventListener('click', () => {
        const screen = SCREENS[Math.floor(Math.random() * SCREENS.length)];
        location.href = `${root}screen.html?id=${screen.id}`;
      });
    });
  }

  renderHeader();
  renderFooter();
  renderPageHead();
  renderSectionCards();
  renderGallery();
  initViewer();
  initReveal();
  initRandom();
})();
