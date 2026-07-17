/* =============================================================
   main.js — hành vi dùng chung cho cả 3 trang
   (Không cần chỉnh sửa file này — chỉ sửa js/config.js)
   ============================================================= */
(function () {
  "use strict";
  const cfg = window.CONFIG || {};

  /* ---------- 1. Đổ thông tin từ config vào trang ---------- */
  document.querySelectorAll("[data-cfg]").forEach((el) => {
    const key = el.getAttribute("data-cfg");
    if (cfg[key] != null && cfg[key] !== "") el.textContent = cfg[key];
  });
  document.querySelectorAll("[data-cfg-href]").forEach((el) => {
    const key = el.getAttribute("data-cfg-href");
    if (cfg[key]) el.setAttribute("href", cfg[key]);
  });
  // mailto: dùng data-cfg-mail="email" hoặc "schoolEmail"
  document.querySelectorAll("[data-cfg-mail]").forEach((el) => {
    const key = el.getAttribute("data-cfg-mail") || "email";
    if (cfg[key]) { el.setAttribute("href", "mailto:" + cfg[key]); el.textContent = cfg[key]; }
  });
  // Ảnh:  <img data-cfg-src="profileImage" data-fallback="assets/placeholder-avatar.svg">
  document.querySelectorAll("[data-cfg-src]").forEach((el) => {
    const key = el.getAttribute("data-cfg-src");
    if (!cfg[key]) return;
    const fallback = el.getAttribute("data-fallback");
    if (fallback) el.onerror = function () { this.onerror = null; this.src = fallback; };
    el.src = cfg[key];
  });

  /* ---------- 2. Năm hiện tại ở chân trang ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- 3. Chuyển đổi Sáng / Tối ---------- */
  const themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- 4. Menu di động ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("open"))
    );
  }

  /* ---------- 5. Đổ bóng header + nút lên đầu trang ---------- */
  const header = document.querySelector(".header");
  const toTop = document.querySelector(".to-top");
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 10);
    if (toTop) toTop.classList.toggle("show", y > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- 6. Danh sách Dự án — mở rộng / thu gọn ---------- */
  document.querySelectorAll(".proj-head").forEach((head) => {
    head.addEventListener("click", () => {
      const item = head.closest(".proj-item");
      if (item) {
        const open = item.classList.toggle("open");
        head.setAttribute("aria-expanded", open);
      }
    });
  });

  /* ---------- 7. Hiệu ứng hiện dần khi cuộn ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }
})();
