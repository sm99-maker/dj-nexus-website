const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn?.addEventListener("click", () => {
  const open = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!open));
  menu.hidden = open;
});

// Close menu when clicking a link (mobile)
menu?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.tagName === "A") {
    btn.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }
});
