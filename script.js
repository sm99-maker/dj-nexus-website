(function () {
  const menuBtn = document.getElementById("menuBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (!menuBtn || !dropdownMenu) return;

  function openMenu() {
    dropdownMenu.hidden = false;
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    dropdownMenu.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  dropdownMenu.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", () => closeMenu());

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
