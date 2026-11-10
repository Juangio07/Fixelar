"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#techCanvas");
  const context = canvas?.getContext("2d");
  if (canvas && context && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const particles = [];
    const resizeCanvas = () => { const ratio = Math.min(window.devicePixelRatio || 1, 2); canvas.width = window.innerWidth * ratio; canvas.height = window.innerHeight * ratio; canvas.style.width = `${window.innerWidth}px`; canvas.style.height = `${window.innerHeight}px`; context.setTransform(ratio, 0, 0, ratio, 0, 0); };
    const createParticles = () => { particles.length = 0; const total = Math.min(70, Math.max(28, Math.floor(window.innerWidth / 20))); for (let index = 0; index < total; index += 1) particles.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16, size: Math.random() * 1.5 + .5 }); };
    const drawParticles = () => { context.clearRect(0, 0, window.innerWidth, window.innerHeight); particles.forEach((particle, index) => { particle.x += particle.vx; particle.y += particle.vy; if (particle.x < -10 || particle.x > window.innerWidth + 10) particle.vx *= -1; if (particle.y < -10 || particle.y > window.innerHeight + 10) particle.vy *= -1; context.fillStyle = "rgba(98,236,30,.48)"; context.beginPath(); context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2); context.fill(); particles.slice(index + 1).forEach((other) => { const dx = particle.x - other.x; const dy = particle.y - other.y; const distance = Math.hypot(dx, dy); if (distance < 125) { context.strokeStyle = `rgba(98,236,30,${.12 * (1 - distance / 125)})`; context.lineWidth = .6; context.beginPath(); context.moveTo(particle.x, particle.y); context.lineTo(other.x, other.y); context.stroke(); } }); }); requestAnimationFrame(drawParticles); };
    resizeCanvas(); createParticles(); drawParticles(); window.addEventListener("resize", () => { resizeCanvas(); createParticles(); }, { passive: true });
  }
  const root = document.documentElement;
  const themeToggle = document.querySelector("#themeToggle");
  const themeLogos = document.querySelectorAll(".theme-logo");
  const applyTheme = (theme) => {
    const light = theme === "light";
    root.dataset.theme = light ? "light" : "dark";
    themeLogos.forEach((logo) => { logo.src = light ? "../../../Assets/Logos/ImagotipoOscuro.png" : "../../../Assets/Logos/ImagotipoClaro.png"; });
    if (themeToggle) { themeToggle.innerHTML = `<i class="fa-solid ${light ? "fa-moon" : "fa-sun"}" aria-hidden="true"></i>`; themeToggle.setAttribute("aria-label", light ? "Activar modo oscuro" : "Activar modo claro"); themeToggle.title = light ? "Activar modo oscuro" : "Activar modo claro"; }
  };
  applyTheme(localStorage.getItem("fixelar-theme") || "dark");
  themeToggle?.addEventListener("click", () => { const next = root.dataset.theme === "light" ? "dark" : "light"; localStorage.setItem("fixelar-theme", next); applyTheme(next); });

  const app = window.FIXELAR_APP;
  const serviceGrid = document.querySelector("#service-grid");
  if (app?.services && serviceGrid) {
    serviceGrid.innerHTML = app.services.map((service) => `<article class="service-card interactive-card"><div class="service-icon"><i class="fa-solid ${service.icon}" aria-hidden="true"></i></div><h3>${service.name}</h3><p>${service.description}</p><a href="#contacto" aria-label="Solicitar ${service.name}">Conocer solución <i class="fa-solid fa-arrow-right"></i></a></article>`).join("");
  }
  const grid = document.querySelector("#application-grid");
  if (app?.applications && grid) {
    grid.innerHTML =
      app.applications
        .map(
          (item, index) =>
            `<article class="app-card interactive-card" style="--product-accent:${item.accent};--card-index:${index}"><div class="app-icon">${item.logo ? `<img src="${item.logo}" alt="Logo de ${item.name}" loading="lazy">` : `<i class="fa-solid ${item.icon}" aria-hidden="true"></i>`}</div><p class="eyebrow">${item.category}</p><h3>${item.name}</h3><p>${item.description}</p><a href="#contacto" aria-label="Conocer más sobre ${item.name}">Conocer más <i class="fa-solid fa-arrow-right"></i></a></article>`,
        )
        .join("") +
      ``;
    const cards = [...grid.querySelectorAll(".app-card")];
    let activeCard = 0;
    const updateCarousel = () => {
      cards.forEach((card, index) => {
        let relative = index - activeCard;
        if (relative > Math.floor(cards.length / 2)) relative -= cards.length;
        if (relative < -Math.floor(cards.length / 2)) relative += cards.length;
        const visible = Math.abs(relative) <= 2;
        const distance = Math.abs(relative);
        card.classList.toggle("is-active", visible && relative === 0);
        card.classList.toggle("is-left", visible && relative < 0);
        card.classList.toggle("is-right", visible && relative > 0);
        card.classList.toggle("is-hidden", !visible);
        card.setAttribute("aria-hidden", String(!visible));
        card.style.setProperty("--fan-offset", `${relative * 145}px`);
        card.style.setProperty("--fan-angle", `${relative * 9}deg`);
        card.style.setProperty("--fan-scale", relative === 0 ? "1.08" : `${Math.max(.72, .94 - distance * .055)}`);
        card.style.setProperty("--fan-lift", `${Math.min(distance, 2) * 10}px`);
        card.style.setProperty("--fan-z", `${20 - distance}`);
        card.style.setProperty("--orbit-angle", `${relative * 34}deg`);
        card.style.setProperty("--orbit-radius", `${relative === 0 ? 0 : 270 + distance * 24}px`);
        card.style.setProperty("--orbit-depth", `${-260 - distance * 70}px`);
      });
    };
    const moveCarousel = (direction) => { activeCard = (activeCard + direction + cards.length) % cards.length; updateCarousel(); };
    const activateCard = (card) => {
      const index = cards.indexOf(card);
      if (index < 0) return;
      activeCard = index;
      updateCarousel();
      clearInterval(autoRotate);
      autoRotate = setInterval(() => moveCarousel(1), 4200);
    };
    document.querySelector("#carouselPrev")?.addEventListener("click", () => moveCarousel(-1));
    document.querySelector("#carouselNext")?.addEventListener("click", () => moveCarousel(1));
    let autoRotate = setInterval(() => moveCarousel(1), 4200);
    const carousel = document.querySelector(".application-carousel");
    carousel?.addEventListener("mouseenter", () => clearInterval(autoRotate));
    carousel?.addEventListener("mouseleave", () => { autoRotate = setInterval(() => moveCarousel(1), 4200); });
    let dragStart = null;
    let dragCard = null;
    let dragDistance = 0;
    let ignoreClickUntil = 0;
    grid.addEventListener("pointerdown", (event) => {
      dragStart = event.clientX;
      dragDistance = 0;
      dragCard = event.target.closest(".app-card");
    });
    grid.addEventListener("pointermove", (event) => {
      if (dragStart !== null) dragDistance = Math.abs(event.clientX - dragStart);
    });
    grid.addEventListener("pointerup", (event) => {
      if (dragStart === null) return;
      const distance = event.clientX - dragStart;
      if (Math.abs(distance) > 45) {
        ignoreClickUntil = Date.now() + 250;
        moveCarousel(distance < 0 ? 1 : -1);
      }
      else if (dragCard) activateCard(dragCard);
      dragStart = null;
      dragCard = null;
      dragDistance = 0;
    });
    grid.addEventListener("pointercancel", () => { dragStart = null; });
    grid.addEventListener("click", (event) => {
      if (Date.now() < ignoreClickUntil || dragDistance > 10) return;
      const card = event.target.closest(".app-card");
      if (card) activateCard(card);
    });
    updateCarousel();
  }
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  const scrollToSection = (selector) => {
    if (selector === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(selector);
    if (target) window.scrollTo({ top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - 40), behavior: "smooth" });
  };
  [...(nav?.querySelectorAll("a") || []), ...(document.querySelectorAll('.brand[href="#inicio"]') || [])].forEach((link) =>
    link.addEventListener("click", (event) => {
      const selector = link.getAttribute("href");
      if (selector) { event.preventDefault(); scrollToSection(selector); }
      toggle?.setAttribute("aria-expanded", "false");
      nav?.classList.remove("open");
    }),
  );
  const navSections = [...document.querySelectorAll("main > section[id]")];
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const activeSectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-96px 0px -48% 0px", threshold: [0.08, 0.25, 0.5] });
  navSections.forEach((section) => activeSectionObserver.observe(section));
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (canHover) {
    document.querySelectorAll(".interactive-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;
        card.style.setProperty("--rotate-x", `${(0.5 - y) * 5}deg`);
        card.style.setProperty("--rotate-y", `${(x - 0.5) * 5}deg`);
        card.style.setProperty("--pointer-x", `${x * 100}%`);
        card.style.setProperty("--pointer-y", `${y * 100}%`);
      });
      card.addEventListener("pointerleave", () => { card.style.setProperty("--rotate-x", "0deg"); card.style.setProperty("--rotate-y", "0deg"); });
    });
    const heroVisual = document.querySelector(".hero-visual");
    heroVisual?.addEventListener("pointermove", (event) => { const bounds = heroVisual.getBoundingClientRect(); heroVisual.style.setProperty("--hero-x", `${(event.clientX - bounds.left) / bounds.width - 0.5}`); heroVisual.style.setProperty("--hero-y", `${(event.clientY - bounds.top) / bounds.height - 0.5}`); });
    heroVisual?.addEventListener("pointerleave", () => { heroVisual.style.setProperty("--hero-x", "0"); heroVisual.style.setProperty("--hero-y", "0"); });
  }
  const modal = document.querySelector("#accessModal");
  const openAccess = document.querySelector("#openAccess");
  const closeAccess = document.querySelector("#closeAccess");
  const feedback = document.querySelector("#accessFeedback");
  const closeModal = () => { modal.hidden = true; document.body.classList.remove("modal-open"); feedback.textContent = ""; };
  openAccess?.addEventListener("click", () => { modal.hidden = false; document.querySelector("#accessEmail")?.focus(); });
  closeAccess?.addEventListener("click", closeModal);
  modal?.querySelector("[data-close-access]")?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && modal && !modal.hidden) closeModal(); });
  document.querySelector("#googleAccess")?.addEventListener("click", () => { feedback.textContent = "La conexión con Google estará disponible próximamente."; });
  document.querySelector("#emailAccess")?.addEventListener("submit", (event) => { event.preventDefault(); feedback.textContent = "El acceso por correo estará disponible próximamente."; });
});
