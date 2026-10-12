/* =====================================================================
   Mahalakshmi Sculptures — site script
   Content lives in js/data.js. This file renders it and wires up
   navigation, gallery, lightbox, enquiry forms and WhatsApp links.
   ===================================================================== */
(function () {
  "use strict";

  const S = window.SITE;
  const B = S.business;
  const page = document.body.dataset.page || "home";
  const onHome = page === "home";
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  document.documentElement.classList.remove("no-js");

  /* ---------- Helpers ---------- */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const catById = (id) => S.categories.find((c) => c.id === id);
  const productById = (id) => S.products.find((p) => p.id === id);
  const productsIn = (catId) => S.products.filter((p) => p.category === catId);
  const productUrl = (p) => `product.html?id=${encodeURIComponent(p.id)}`;
  const collectionUrl = (c) => `collection.html?cat=${encodeURIComponent(c.id)}`;
  const homeLink = (hash) => (onHome ? hash : `index.html${hash}`);
  const waUrl = (text) => `https://wa.me/${B.whatsapp}?text=${encodeURIComponent(text)}`;
  const { t, L } = window.I18N;
  const lang = window.I18N.lang;
  const biz = L(B, "name");
  const location_ = [L(B, "city"), L(B, "state")].filter(Boolean).join(", ");
  const genericWa = () => waUrl(t("wa.generic", { biz }));

  /* ---------- Icons (inline SVG, stroke-based) ---------- */
  const I = {
    lotus: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M24 9c4.2 4.6 6.3 9.6 6.3 14.4 0 4.6-2.1 8.5-6.3 11.6-4.2-3.1-6.3-7-6.3-11.6C17.7 18.6 19.8 13.6 24 9z"/><path d="M17.9 20.6c-3.3-1.4-7-2-10.9-1.6.2 4.6 2 8.8 5.4 11.6 3 2.4 7 3.8 11.6 4.4"/><path d="M30.1 20.6c3.3-1.4 7-2 10.9-1.6-.2 4.6-2 8.8-5.4 11.6-3 2.4-7 3.8-11.6 4.4"/><path d="M9 39h30M14 43h20"/></svg>',
    years: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M8.5 13.9 7 22l5-3 5 3-1.5-8.1"/><path d="m12 6 .9 1.9 2.1.3-1.5 1.4.4 2.1L12 10.7l-1.9 1 .4-2.1L9 8.2l2.1-.3z"/></svg>',
    artistry: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V10l7-6 7 6v11"/><path d="M9 21v-6a3 3 0 0 1 6 0v6"/><path d="M12 4V2"/></svg>',
    service: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg>',
    guide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    store: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M8 11h6M11 8v6"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 12 .2C5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.6c1.7.9 3.7 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.6 2.8 2.8 0 0 0 2 2C5.1 20 12 20 12 20s6.9 0 8.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.6z"/><path d="m9.8 15.5 5.7-3.5-5.7-3.5z"/></svg>'
  };
  window.SITE_ICONS = I;

  /* ---------- Header ---------- */
  const NAV = [
    ["nav.home", "#home"], ["nav.about", "#about"], ["nav.collections", "#collections"],
    ["nav.gallery", "#gallery"], ["nav.why", "#why"], ["nav.contact", "#contact"]
  ];

  const brandHTML = () => `
    <span class="brand-mark">${I.lotus}</span>
    <span class="brand-text"><span class="brand-name">${esc(t("brand.name"))}</span><span class="brand-sub">${esc(t("brand.sub", { city: L(B, "city") }))}</span></span>`;

  const langSwitch = () => `
    <div class="lang-switch" role="group" aria-label="${esc(t("lang.label"))}">
      <button type="button" data-lang="en" lang="en" aria-pressed="${lang === "en"}">EN</button>
      <button type="button" data-lang="ta" lang="ta" aria-pressed="${lang === "ta"}">தமிழ்</button>
    </div>`;

  function renderHeader() {
    const el = $("#site-header");
    if (!el) return;
    el.className = "site-header";
    el.innerHTML = `
      <div class="container header-inner">
        <a class="brand" href="${onHome ? "#home" : "index.html"}" aria-label="${esc(biz)} — ${esc(t("nav.home"))}">${brandHTML()}</a>
        <nav class="main-nav" id="main-nav" aria-label="Main">
          <ul>
            ${NAV.map(([key, hash]) => `<li><a href="${homeLink(hash)}">${esc(t(key))}</a></li>`).join("")}
            <li class="mobile-cta"><button type="button" class="btn" data-quote>${esc(t("cta.quote"))}</button></li>
            <li class="mobile-cta"><a class="btn btn-wa" href="${genericWa()}" target="_blank" rel="noopener">${I.whatsapp} ${esc(t("cta.waUs"))}</a></li>
          </ul>
        </nav>
        <div class="header-cta">
          ${langSwitch()}
          <button type="button" class="btn" data-quote>${esc(t("cta.quoteShort"))}</button>
          <button type="button" class="nav-toggle" aria-controls="main-nav" aria-expanded="false" aria-label="${esc(t("nav.openMenu"))}"><span></span></button>
        </div>
      </div>`;

    const toggle = $(".nav-toggle", el);
    const nav = $("#main-nav", el);
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", t(open ? "nav.closeMenu" : "nav.openMenu"));
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("no-scroll", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (e) => { if (e.target.closest("a, button")) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 1241px)").addEventListener("change", (m) => { if (m.matches) setOpen(false); });

    const onScroll = () => el.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight current section in nav (home page)
    if (onHome && "IntersectionObserver" in window) {
      const links = $$(".main-nav a[href^='#']", el);
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === `#${en.target.id}`)));
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      NAV.forEach(([, hash]) => { const s = $(hash); if (s) io.observe(s); });
    }
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (b) window.I18N.setLang(b.dataset.lang);
  });

  /* ---------- Footer ---------- */
  function renderFooter() {
    const el = $("#site-footer");
    if (!el) return;
    el.className = "site-footer";
    const socials = Object.entries(B.social || {}).filter(([, url]) => url);
    el.innerHTML = `
      <div class="motif-band" aria-hidden="true"></div>
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="${onHome ? "#home" : "index.html"}">${brandHTML()}</a>
            <p class="footer-tagline">${esc(L(B, "tagline"))}</p>
            <p>${esc(t("footer.about", { loc: location_, years: B.experienceYears }))}</p>
            ${socials.length ? `<div class="social">${socials.map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${k}">${I[k] || ""}</a>`).join("")}</div>` : ""}
          </div>
          <div>
            <h4>${esc(t("footer.explore"))}</h4>
            <ul>${NAV.map(([key, hash]) => `<li><a href="${homeLink(hash)}">${esc(t(key))}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>${esc(t("footer.collections"))}</h4>
            <ul>${S.categories.map((c) => `<li><a href="${collectionUrl(c)}">${esc(L(c, "name"))}</a></li>`).join("")}
              <li><a href="collection.html">${esc(t("footer.viewAll"))}</a></li></ul>
          </div>
          <div>
            <h4>${esc(t("footer.contact"))}</h4>
            <ul>
              <li>${esc(biz)}<br>${esc(L(B, "address") || location_)}</li>
              <li><a href="tel:${B.phone}">${esc(B.phoneDisplay)}</a></li>
              <li><a href="${genericWa()}" target="_blank" rel="noopener">${esc(t("footer.waEnquiry"))}</a></li>
              ${B.email ? `<li><a href="mailto:${esc(B.email)}">${esc(B.email)}</a></li>` : ""}
              ${B.hours ? `<li>${esc(L(B, "hours"))}</li>` : ""}
              <li><a href="${esc(B.indiamart)}" target="_blank" rel="noopener">${esc(t("footer.indiamart"))}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${esc(biz)}, ${esc(location_)}. ${esc(t("footer.rights"))}</span>
          <span>${esc(L(B, "tagline"))}</span>
        </div>
      </div>`;
  }

  /* ---------- Floating WhatsApp ---------- */
  function renderWaFloat() {
    const a = document.createElement("a");
    a.className = "wa-float";
    a.href = genericWa();
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", t("cta.waFloat"));
    a.innerHTML = I.whatsapp;
    document.body.appendChild(a);
  }

  /* ---------- Cards ---------- */
  const img = (src, alt, extra = "") =>
    `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" width="750" height="1000" ${extra}>`;

  function productCard(p) {
    const c = catById(p.category);
    const name = L(p, "name");
    return `
      <article class="product-card fade-up">
        <div class="media-zoom"><a href="${productUrl(p)}" tabindex="-1" aria-hidden="true">${img(p.images[0], name)}</a></div>
        <div class="product-meta">
          ${c ? `<span class="product-cat">${esc(L(c, "name"))}</span>` : ""}
          <h3><a href="${productUrl(p)}">${esc(name)}</a></h3>
          <div class="card-actions">
            <a class="btn btn-outline btn-sm" href="${productUrl(p)}">${esc(t("card.details"))}</a>
            <button type="button" class="btn btn-sm" data-quote="${esc(p.id)}">${esc(t("card.enquire"))}</button>
          </div>
        </div>
      </article>`;
  }

  function collectionCard(c) {
    const n = productsIn(c.id).length;
    const name = L(c, "name");
    return `
      <article class="collection-card fade-up">
        <div class="media-zoom">
          <a href="${collectionUrl(c)}" tabindex="-1" aria-hidden="true">${img(c.image, name)}</a>
          <span class="count-tag">${esc(n === 1 ? t("col.design1") : t("col.designN", { n }))}</span>
        </div>
        <div class="collection-body">
          <h3><a href="${collectionUrl(c)}">${esc(name)}</a></h3>
          <p>${esc(L(c, "description"))}</p>
          <div class="card-actions">
            <a class="btn btn-outline btn-sm" href="${collectionUrl(c)}">${esc(t("col.view"))}</a>
            <button type="button" class="btn btn-sm" data-quote="cat:${esc(c.id)}">${esc(t("col.enquire"))}</button>
          </div>
        </div>
      </article>`;
  }

  const requirementCard = () => `
    <article class="collection-card cta-card fade-up">
      <span class="icon">${I.search}</span>
      <div class="cta-text">
        <h3>${esc(t("col.ctaTitle"))}</h3>
        <p>${esc(t("col.ctaText"))}</p>
      </div>
      <div><button type="button" class="btn btn-gold" data-quote="other">${esc(t("col.ctaBtn"))}</button></div>
    </article>`;

  /* ---------- Enquiry form ---------- */
  function productOptions(selected) {
    const groups = S.categories.map((c) => {
      const cat = L(c, "name");
      return `<optgroup label="${esc(cat)}">
        <option value="${esc(t("form.anyValue", { cat }))}"${selected === `cat:${c.id}` ? " selected" : ""}>${esc(t("form.any", { cat }))}</option>
        ${productsIn(c.id).map((p) => `<option value="${esc(L(p, "name"))}"${selected === p.id ? " selected" : ""}>${esc(L(p, "name"))}</option>`).join("")}
      </optgroup>`;
    }).join("");
    return `<option value="">${esc(t("form.select"))}</option>${groups}
      <option value="${esc(t("form.other"))}"${selected === "other" ? " selected" : ""}>${esc(t("form.other"))}</option>`;
  }

  function formHTML(prefix, { selected = "", qty = 1 } = {}) {
    const id = (n) => `${prefix}-${n}`;
    const viaWa = !S.enquiry.endpoint;
    const req = '<span class="req" aria-hidden="true">*</span>';
    const opt = `<span class="opt">${esc(t("form.optional"))}</span>`;
    return `
      <form class="enquiry-form" novalidate data-prefix="${prefix}">
        <div class="form-grid">
          <div class="field">
            <label for="${id("name")}">${esc(t("form.name"))} ${req}</label>
            <input id="${id("name")}" name="name" type="text" autocomplete="name" required aria-describedby="${id("name-err")}">
            <span class="error" id="${id("name-err")}" aria-live="polite"></span>
          </div>
          <div class="field">
            <label for="${id("phone")}">${esc(t("form.phone"))} ${req}</label>
            <input id="${id("phone")}" name="phone" type="tel" autocomplete="tel" inputmode="tel" required placeholder="${esc(t("form.phonePh"))}" aria-describedby="${id("phone-err")}">
            <span class="error" id="${id("phone-err")}" aria-live="polite"></span>
          </div>
          <div class="field">
            <label for="${id("email")}">${esc(t("form.email"))} ${opt}</label>
            <input id="${id("email")}" name="email" type="email" autocomplete="email" aria-describedby="${id("email-err")}">
            <span class="error" id="${id("email-err")}" aria-live="polite"></span>
          </div>
          <div class="field">
            <label for="${id("qty")}">${esc(t("form.qty"))} ${req}</label>
            <input id="${id("qty")}" name="quantity" type="number" min="1" max="10000" step="1" value="${qty}" required aria-describedby="${id("qty-err")}">
            <span class="error" id="${id("qty-err")}" aria-live="polite"></span>
          </div>
          <div class="field full">
            <label for="${id("product")}">${esc(t("form.product"))} ${req}</label>
            <select id="${id("product")}" name="product" required aria-describedby="${id("product-err")}">${productOptions(selected)}</select>
            <span class="error" id="${id("product-err")}" aria-live="polite"></span>
          </div>
          <div class="field full">
            <label for="${id("size")}">${esc(t("form.size"))} ${opt}</label>
            <input id="${id("size")}" name="size" type="text" placeholder="${esc(t("form.sizePh"))}">
          </div>
          <div class="field full">
            <label for="${id("msg")}">${esc(t("form.msg"))}</label>
            <textarea id="${id("msg")}" name="message" rows="4" placeholder="${esc(t("form.msgPh"))}"></textarea>
          </div>
          <div class="hp" aria-hidden="true"><label>Leave empty<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn">${viaWa ? I.whatsapp : ""} <span class="btn-label">${esc(t("form.submit"))}</span></button>
          ${viaWa ? `<p class="form-note">${I.whatsapp}<span>${t("form.waNote", { phone: esc(B.phoneDisplay) })}</span></p>` : ""}
        </div>
        <div class="form-status" role="status" aria-live="polite"></div>
      </form>`;
  }

  function validate(form) {
    const f = form.elements;
    const errors = {};
    const name = f.name.value.trim();
    const phone = f.phone.value.replace(/[\s\-()]/g, "");
    const email = f.email.value.trim();
    const qty = Number(f.quantity.value);
    if (name.length < 2) errors.name = t("err.name");
    if (!/^\+?\d{10,15}$/.test(phone)) errors.phone = t("err.phone");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = t("err.email");
    if (!Number.isInteger(qty) || qty < 1) errors.quantity = t("err.qty");
    if (!f.product.value) errors.product = t("err.product");

    const map = { name: "name", phone: "phone", email: "email", quantity: "qty", product: "product" };
    Object.entries(map).forEach(([field, key]) => {
      const input = f[field];
      const errEl = $(`#${form.dataset.prefix}-${key}-err`);
      input.setAttribute("aria-invalid", errors[field] ? "true" : "false");
      if (errEl) errEl.textContent = errors[field] || "";
    });
    const first = Object.keys(errors)[0];
    if (first) f[first].focus();
    return !first;
  }

  function enquiryMessage(d) {
    const line = (key, v) => `*${t(key)}:* ${v}`;
    const lines = [t("wa.intro", { biz }), "", line("wa.product", d.product), line("wa.qty", d.quantity)];
    if (d.size) lines.push(line("wa.size", d.size));
    lines.push(line("wa.name", d.name), line("wa.phone", d.phone));
    if (d.email) lines.push(line("wa.email", d.email));
    if (d.message) lines.push("", line("wa.msg", d.message));
    if (d.page) lines.push("", t("wa.from", { url: d.page }));
    return lines.join("\n");
  }

  function bindForm(form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = $(".form-status", form);
      status.className = "form-status";
      status.textContent = "";
      if (form.elements.website.value) return; // spam honeypot
      if (!validate(form)) return;

      const f = form.elements;
      const data = {
        name: f.name.value.trim(),
        phone: f.phone.value.trim(),
        email: f.email.value.trim(),
        quantity: f.quantity.value,
        product: f.product.value,
        size: f.size.value.trim(),
        message: f.message.value.trim(),
        language: lang,
        page: location.protocol.startsWith("http") ? location.href : ""
      };
      const wa = waUrl(enquiryMessage(data));

      // No backend configured → hand the enquiry to WhatsApp (must run synchronously to avoid pop-up blockers).
      if (!S.enquiry.endpoint) {
        window.open(wa, "_blank", "noopener");
        status.classList.add("info");
        status.innerHTML = t("status.wa", { url: wa });
        return;
      }

      // Backend configured → POST and only confirm on a successful response.
      const btn = form.querySelector("button[type=submit]");
      const label = $(".btn-label", btn);
      btn.disabled = true;
      label.textContent = t("form.sending");
      try {
        const res = await fetch(S.enquiry.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, _subject: `Website enquiry: ${data.product}` })
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        form.reset();
        status.classList.add("success");
        status.innerHTML = t("status.ok", { name: esc(data.name), url: wa });
      } catch (err) {
        status.classList.add("error");
        status.innerHTML = t("status.fail", { url: wa, tel: B.phone, phone: esc(B.phoneDisplay) });
      } finally {
        btn.disabled = false;
        label.textContent = t("form.submit");
      }
    });
  }

  /* ---------- Quote modal ---------- */
  let lastFocus = null;
  function renderModal() {
    const m = document.createElement("div");
    m.className = "modal";
    m.id = "quote-modal";
    m.setAttribute("role", "dialog");
    m.setAttribute("aria-modal", "true");
    m.setAttribute("aria-labelledby", "quote-title");
    m.innerHTML = `
      <div class="modal-dialog">
        <button type="button" class="modal-close" aria-label="${esc(t("modal.close"))}">${I.close}</button>
        <div class="form-card">
          <h2 id="quote-title">${esc(t("modal.title"))}</h2>
          <p class="modal-sub">${esc(t("modal.sub"))}</p>
          <div class="modal-form"></div>
        </div>
      </div>`;
    document.body.appendChild(m);
    m.addEventListener("click", (e) => { if (e.target === m || e.target.closest(".modal-close")) closeModal(); });
    m.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "Tab") trapFocus(e, m);
    });
  }

  function openModal(selected = "", qty = 1) {
    const m = $("#quote-modal");
    const holder = $(".modal-form", m);
    holder.innerHTML = formHTML("q", { selected, qty });
    bindForm($("form", holder));
    lastFocus = document.activeElement;
    m.classList.add("is-open");
    document.body.classList.add("no-scroll");
    $("#q-name").focus();
  }
  function closeModal() {
    $("#quote-modal").classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }
  function trapFocus(e, root) {
    const f = $$('a[href], button:not([disabled]), input:not([tabindex="-1"]), select, textarea', root).filter((x) => x.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  document.addEventListener("click", (e) => {
    const tgt = e.target.closest("[data-quote]");
    if (!tgt) return;
    e.preventDefault();
    const qtyInput = $("#pd-qty");
    openModal(tgt.dataset.quote, tgt.hasAttribute("data-use-qty") && qtyInput ? Math.max(1, parseInt(qtyInput.value, 10) || 1) : 1);
  });

  /* ---------- Lightbox ---------- */
  const LB = { items: [], index: 0 };
  function renderLightbox() {
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.id = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", t("lb.label"));
    lb.innerHTML = `
      <button type="button" class="lb-btn lb-close" aria-label="${esc(t("lb.close"))}">${I.close}</button>
      <button type="button" class="lb-btn lb-prev" aria-label="${esc(t("lb.prev"))}">${I.prev}</button>
      <figure><img alt=""><figcaption></figcaption></figure>
      <button type="button" class="lb-btn lb-next" aria-label="${esc(t("lb.next"))}">${I.next}</button>`;
    document.body.appendChild(lb);
    lb.addEventListener("click", (e) => {
      if (e.target.closest(".lb-close") || e.target === lb) closeLightbox();
      else if (e.target.closest(".lb-prev")) stepLightbox(-1);
      else if (e.target.closest(".lb-next")) stepLightbox(1);
    });
    lb.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "Tab") trapFocus(e, lb);
    });
    let x0 = null;
    lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
      x0 = null;
    });
  }
  function showLightbox() {
    const lb = $("#lightbox");
    const it = LB.items[LB.index];
    const im = $("img", lb);
    im.src = it.src;
    im.alt = it.alt;
    im.style.animation = "none"; void im.offsetWidth; im.style.animation = "";
    $("figcaption", lb).innerHTML = `${esc(it.alt)}${it.href ? `<br><a href="${it.href}">${esc(t("lb.details"))}</a>` : ""}`;
    const multi = LB.items.length > 1;
    $(".lb-prev", lb).hidden = !multi;
    $(".lb-next", lb).hidden = !multi;
  }
  function openLightbox(items, index) {
    LB.items = items; LB.index = index;
    lastFocus = document.activeElement;
    showLightbox();
    $("#lightbox").classList.add("is-open");
    document.body.classList.add("no-scroll");
    $("#lightbox .lb-close").focus();
  }
  function stepLightbox(d) { LB.index = (LB.index + d + LB.items.length) % LB.items.length; showLightbox(); }
  function closeLightbox() {
    $("#lightbox").classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  /* ---------- Home page ---------- */
  function renderHome() {
    if (lang !== "en") document.title = t("meta.home.title");

    const col = $("#collection-grid");
    if (col) col.innerHTML = S.categories.map(collectionCard).join("") + requirementCard();

    const feat = $("#featured-grid");
    if (feat) feat.innerHTML = S.products.filter((p) => p.featured).slice(0, 4).map(productCard).join("");

    // Gallery: every image of every product
    const gallery = [];
    S.products.forEach((p) => p.images.forEach((src) => gallery.push({ src, alt: L(p, "name"), cat: p.category, href: productUrl(p) })));
    const grid = $("#gallery-grid");
    const bar = $("#gallery-filters");
    if (grid && bar) {
      bar.setAttribute("aria-label", t("gal.filterLabel"));
      const used = S.categories.filter((c) => gallery.some((g) => g.cat === c.id));
      bar.innerHTML = [`<button type="button" class="filter-btn" data-filter="all" aria-pressed="true">${esc(t("gal.all"))}</button>`]
        .concat(used.map((c) => `<button type="button" class="filter-btn" data-filter="${c.id}" aria-pressed="false">${esc(L(c, "short") || L(c, "name"))}</button>`))
        .join("");
      grid.innerHTML = gallery.map((g, i) => `
        <button type="button" class="gallery-item" data-cat="${g.cat}" data-index="${i}" aria-label="${esc(t("gal.enlarge", { name: g.alt }))}">
          ${img(g.src, g.alt)}<span class="cap" aria-hidden="true">${esc(g.alt)}</span>
        </button>`).join("");

      let current = "all";
      bar.addEventListener("click", (e) => {
        const b = e.target.closest(".filter-btn");
        if (!b) return;
        current = b.dataset.filter;
        $$(".filter-btn", bar).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        $$(".gallery-item", grid).forEach((it) => {
          const show = current === "all" || it.dataset.cat === current;
          it.classList.toggle("is-hidden", !show);
          if (show) { it.classList.add("is-entering"); requestAnimationFrame(() => requestAnimationFrame(() => it.classList.remove("is-entering"))); }
        });
      });
      grid.addEventListener("click", (e) => {
        const it = e.target.closest(".gallery-item");
        if (!it) return;
        const visible = $$(".gallery-item:not(.is-hidden)", grid);
        openLightbox(visible.map((v) => gallery[+v.dataset.index]), visible.indexOf(it));
      });
    }

    const vids = $("#video-grid");
    if (vids && S.videos && S.videos.length) {
      vids.hidden = false;
      vids.innerHTML = S.videos.map((v) => `
        <figure><iframe src="https://www.youtube-nocookie.com/embed/${esc(v.youtubeId)}" title="${esc(L(v, "title"))}" loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><figcaption>${esc(L(v, "title"))}</figcaption></figure>`).join("");
    }

    const form = $("#enquiry-form-holder");
    if (form) { form.innerHTML = formHTML("e"); bindForm($("form", form)); }

    renderContact();
  }

  function renderContact() {
    const list = $("#contact-list");
    if (!list) return;
    const row = (icon, label, value) => `<li><span class="icon">${I[icon]}</span><div><span class="label">${esc(t(label))}</span><span class="value">${value}</span></div></li>`;
    list.innerHTML = [
      row("store", "contact.business", `${esc(biz)}${B.owner ? `<br><small>${esc(t("contact.owner", { owner: L(B, "owner") }))}</small>` : ""}`),
      row("pin", "contact.location", esc(L(B, "address") || location_)),
      row("phone", "contact.phone", `<a href="tel:${B.phone}">${esc(B.phoneDisplay)}</a>`),
      row("whatsapp", "contact.whatsapp", `<a href="${genericWa()}" target="_blank" rel="noopener">${esc(B.phoneDisplay)}</a>`),
      B.email ? row("mail", "contact.email", `<a href="mailto:${esc(B.email)}">${esc(B.email)}</a>`) : "",
      B.hours ? row("clock", "contact.hours", esc(L(B, "hours"))) : "",
      row("quote", "contact.also", `<a href="${esc(B.indiamart)}" target="_blank" rel="noopener">${esc(t("contact.indiamart"))}</a>`)
    ].join("");
    const map = $("#map-frame");
    if (map) {
      map.title = t("contact.mapTitle", { loc: location_ });
      map.src = `https://www.google.com/maps?q=${encodeURIComponent(B.address || B.mapQuery)}&hl=${lang}&output=embed`;
    }
  }

  /* ---------- Collection page ---------- */
  function renderCollection() {
    const params = new URLSearchParams(location.search);
    const cat = catById(params.get("cat"));
    const list = cat ? productsIn(cat.id) : S.products;
    const title = cat ? L(cat, "name") : t("coll.all");
    document.title = `${title} | ${biz}, ${L(B, "city")}`;
    setMeta("description", cat
      ? t("coll.metaCat", { desc: L(cat, "description"), biz, loc: location_ })
      : t("coll.metaAll", { biz, loc: location_ }));

    $("#crumb-current").textContent = title;
    $("#collection-title").textContent = title;
    $("#collection-desc").textContent = cat ? L(cat, "description") : t("coll.allDesc");
    const chips = $("#collection-chips");
    chips.setAttribute("aria-label", t("coll.chipsLabel"));
    chips.innerHTML =
      `<a class="chip" href="collection.html"${!cat ? ' aria-current="page"' : ""}>${esc(t("coll.allChip"))}</a>` +
      S.categories.map((c) => `<a class="chip" href="${collectionUrl(c)}"${cat && cat.id === c.id ? ' aria-current="page"' : ""}>${esc(L(c, "name"))}</a>`).join("");
    $("#product-grid").innerHTML = list.length
      ? list.map(productCard).join("")
      : `<p class="empty-state">${esc(t("coll.empty"))} <button type="button" class="btn btn-sm" data-quote="other">${esc(t("coll.emptyBtn"))}</button></p>`;
    const q = $("#collection-enquire");
    if (q) q.dataset.quote = cat ? `cat:${cat.id}` : "";
  }

  /* ---------- Product page ---------- */
  function renderProduct() {
    const p = productById(new URLSearchParams(location.search).get("id"));
    const root = $("#product-root");
    if (!p) {
      root.innerHTML = `<div class="container empty-state"><h1>${esc(t("pd.notFound"))}</h1><p>${esc(t("pd.notFoundText"))}</p><a class="btn" href="collection.html">${esc(t("pd.browse"))}</a></div>`;
      return;
    }
    const c = catById(p.category);
    const name = L(p, "name");
    const desc = L(p, "description");
    document.title = `${name} | ${biz}, ${L(B, "city")}`;
    setMeta("description", t("pd.meta", { desc, biz, loc: location_ }).slice(0, 300));
    setMeta("og:title", `${name} | ${biz}`, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:image", absUrl(p.images[0]), "property");

    const specs = [
      ["pd.category", c ? `<a href="${collectionUrl(c)}">${esc(L(c, "name"))}</a>` : null, true],
      ["pd.material", L(p, "material")], ["pd.finish", L(p, "finish")], ["pd.height", L(p, "height")],
      ["pd.dimensions", L(p, "dimensions")], ["pd.weight", L(p, "weight")], ["pd.availability", L(p, "availability")]
    ].filter(([, v]) => v);

    const waMsg = () => {
      const q = Math.max(1, parseInt($("#pd-qty").value, 10) || 1);
      return t("wa.pd", { biz, name, q }) + (location.protocol.startsWith("http") ? `\n${location.href}` : "");
    };

    root.innerHTML = `
      <div class="page-hero" style="padding-bottom:28px">
        <div class="container">
          <nav class="breadcrumb" aria-label="${esc(t("crumb.label"))}"><ol>
            <li><a href="index.html">${esc(t("crumb.home"))}</a></li>
            <li><a href="collection.html">${esc(t("crumb.collections"))}</a></li>
            ${c ? `<li><a href="${collectionUrl(c)}">${esc(L(c, "name"))}</a></li>` : ""}
            <li><span aria-current="page">${esc(name)}</span></li>
          </ol></nav>
        </div>
      </div>
      <section style="padding-top:48px">
        <div class="container pd-grid">
          <div class="pd-gallery">
            <button type="button" class="pd-main" aria-label="${esc(t("pd.enlarge"))}"><img src="${esc(p.images[0])}" alt="${esc(name)}" width="750" height="1000"></button>
            ${p.images.length > 1 ? `<div class="pd-thumbs">${p.images.map((src, i) => `
              <button type="button" class="pd-thumb" data-i="${i}" aria-label="${esc(t("pd.thumb", { i: i + 1, n: p.images.length }))}" aria-current="${i === 0}">${img(src, "")}</button>`).join("")}</div>` : ""}
          </div>
          <div class="pd-info">
            ${c ? `<span class="eyebrow">${esc(L(c, "name"))}</span>` : ""}
            <h1>${esc(name)}</h1>
            <p class="pd-price">${p.price ? esc(L(p, "price")) : esc(t("pd.priceReq"))}</p>
            <p class="pd-desc">${esc(desc)}</p>
            <table class="spec-table"><tbody>${specs.map(([k, v, html]) => `<tr><th scope="row">${esc(t(k))}</th><td>${html ? v : esc(v)}</td></tr>`).join("")}</tbody></table>
            <div class="qty-row">
              <div class="field">
                <label for="pd-qty">${esc(t("pd.qty"))}</label>
                <div class="qty">
                  <button type="button" data-step="-1" aria-label="${esc(t("pd.dec"))}">−</button>
                  <input id="pd-qty" type="number" min="1" value="1" inputmode="numeric">
                  <button type="button" data-step="1" aria-label="${esc(t("pd.inc"))}">+</button>
                </div>
              </div>
            </div>
            <div class="pd-actions">
              <button type="button" class="btn" data-quote="${esc(p.id)}" data-use-qty>${I.quote} ${esc(t("cta.quote"))}</button>
              <a class="btn btn-wa" id="pd-wa" href="#" target="_blank" rel="noopener">${I.whatsapp} ${esc(t("pd.wa"))}</a>
            </div>
            <p class="pd-note">${esc(t("pd.note"))}</p>
          </div>
        </div>
      </section>
      ${(() => {
        const related = S.products.filter((x) => x.category === p.category && x.id !== p.id).concat(S.products.filter((x) => x.category !== p.category)).slice(0, 4);
        return related.length ? `<section class="section-alt"><div class="container">
          <div class="section-head"><span class="eyebrow">${esc(t("pd.related"))}</span><h2>${esc(t("pd.relatedTitle"))}</h2></div>
          <div class="featured-grid">${related.map(productCard).join("")}</div></div></section>` : "";
      })()}`;

    // Gallery
    const main = $(".pd-main img", root);
    let cur = 0;
    $$(".pd-thumb", root).forEach((th) => th.addEventListener("click", () => {
      cur = +th.dataset.i;
      main.src = p.images[cur];
      $$(".pd-thumb", root).forEach((x) => x.setAttribute("aria-current", String(x === th)));
    }));
    $(".pd-main", root).addEventListener("click", () => openLightbox(p.images.map((src) => ({ src, alt: name })), cur));

    // Quantity + WhatsApp link
    const qty = $("#pd-qty");
    const wa = $("#pd-wa");
    const syncWa = () => { wa.href = waUrl(waMsg()); };
    $$(".qty button", root).forEach((b) => b.addEventListener("click", () => {
      qty.value = Math.max(1, (parseInt(qty.value, 10) || 1) + Number(b.dataset.step));
      syncWa();
    }));
    qty.addEventListener("input", syncWa);
    syncWa();

    // Structured data (kept in English for search engines)
    const ld = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      description: p.description,
      image: p.images.map(absUrl),
      category: c ? c.name : undefined,
      material: p.material || undefined,
      brand: { "@type": "Brand", name: B.name },
      manufacturer: { "@type": "LocalBusiness", name: B.name, address: { "@type": "PostalAddress", addressLocality: B.city, addressRegion: B.state, addressCountry: "IN" }, telephone: B.phone }
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }

  /* ---------- Meta helpers ---------- */
  function absUrl(path) { try { return new URL(path, location.href).href; } catch { return path; } }
  function setMeta(name, content, attr = "name") {
    let m = document.head.querySelector(`meta[${attr}="${name}"]`);
    if (!m) { m = document.createElement("meta"); m.setAttribute(attr, name); document.head.appendChild(m); }
    m.setAttribute("content", content);
  }

  /* ---------- Scroll fade-ins ---------- */
  function initFadeIns() {
    const els = $$(".fade-up");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((e, i) => { e.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(e); });
  }

  /* ---------- Fill shared business placeholders ---------- */
  function fillBindings() {
    $$("[data-bind]").forEach((el) => {
      const k = el.dataset.bind;
      if (k === "years") el.textContent = `${B.experienceYears}+`;
      if (k === "location") el.textContent = location_;
      if (k === "phone") { el.textContent = B.phoneDisplay; if (el.tagName === "A") el.href = `tel:${B.phone}`; }
    });
    $$("[data-wa]").forEach((a) => { a.href = a.dataset.wa ? waUrl(a.dataset.wa) : genericWa(); });
    $$("[data-indiamart]").forEach((a) => { a.href = B.indiamart; });
    $$("[data-icon]").forEach((el) => { el.innerHTML = I[el.dataset.icon] || ""; });
  }

  // After a language switch, return to the same scroll position
  function restoreScroll() {
    let y = null;
    try { y = sessionStorage.getItem("ms-scroll"); sessionStorage.removeItem("ms-scroll"); } catch (e) { /* ignore */ }
    if (y !== null) window.scrollTo({ top: +y, behavior: "instant" });
  }

  /* ---------- Boot ---------- */
  window.I18N.apply();
  renderHeader();
  renderFooter();
  renderModal();
  renderLightbox();
  renderWaFloat();
  fillBindings();
  if (page === "home") renderHome();
  if (page === "collection") renderCollection();
  if (page === "product") renderProduct();
  initFadeIns();
  restoreScroll();
})();
