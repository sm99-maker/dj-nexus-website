(function () {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  function openMenu() {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.classList.add("show");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.classList.remove("show");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn) menuBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  // Click outside to close
  if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) closeMenu();
    });
  }

  // ESC to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Waveform play buttons are visual (Spotify embed below does real playback)
  document.querySelectorAll(".wavePlay").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = btn.textContent.trim() === "▶" ? "⏸" : "▶";
    });
  });
})();

