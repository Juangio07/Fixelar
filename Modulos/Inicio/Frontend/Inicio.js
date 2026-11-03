"use strict";
document.addEventListener("DOMContentLoaded", () => {
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
  const grid = document.querySelector("#application-grid");
  if (app?.applications && grid) {
    grid.innerHTML =
      app.applications
        .map(
          (item) =>
            `<article class="app-card" style="--product-accent:${item.accent}"><div class="app-icon"><i class="fa-solid ${item.icon}" aria-hidden="true"></i></div><p class="eyebrow">${item.category}</p><h3>${item.name}</h3><p>${item.description}</p><a href="#contacto" aria-label="Conocer más sobre ${item.name}">Conocer más <i class="fa-solid fa-arrow-right"></i></a></article>`,
        )
        .join("") +
      `<article class="app-card future"><div class="app-icon"><i class="fa-solid fa-plus" aria-hidden="true"></i></div><p class="eyebrow">En exploración</p><h3>Futuras aplicaciones</h3><p>Nuevas soluciones para más formas de trabajar y avanzar.</p><a href="#contacto">Cuéntanos tu idea <i class="fa-solid fa-arrow-right"></i></a></article>`;
  }
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  nav?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      toggle?.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    }),
  );
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
