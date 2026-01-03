// ====== Dropdown Menu Logic ======
(function () {
  const menuBtn = document.getElementById("menuBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // Safety check
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

  // Toggle menu on button click
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener("click", function () {
    closeMenu();
  });

  // Close menu when pressing ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  // Prevent clicks inside the menu from closing it
  dropdownMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
})();
