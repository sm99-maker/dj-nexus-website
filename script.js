const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  const setOpen = (open) => {
    mobileNav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.contains("is-open");
    setOpen(!isOpen);
  });

  document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && e.target !== menuBtn) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}
(function () {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("dropdownMenu");

  if (!btn || !menu) return;

  function openMenu() {
    menu.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    menu.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // close if you click outside
  document.addEventListener("click", () => closeMenu());

  // close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // prevent clicks inside menu from closing instantly
  menu.addEventListener("click", (e) => e.stopPropagation());
})();
