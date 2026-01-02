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
