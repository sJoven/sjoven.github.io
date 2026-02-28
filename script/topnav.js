const navDrawer = document.getElementById("navDrawer");
const navOverlay = document.getElementById("navOverlay");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const topNav = document.getElementById("top-nav"); // Targeted the navbar

const toggleMenu = (isOpen) => {
  navDrawer.classList.toggle("open", isOpen);
  navOverlay.classList.toggle("active", isOpen);

  // Toggles the dimmed class to fade the logo/background
  topNav.classList.toggle("dimmed", isOpen);

  document.body.style.overflow = isOpen ? "hidden" : "";
};

menuOpen.addEventListener("click", () => toggleMenu(true));
menuClose.addEventListener("click", () => toggleMenu(false));
navOverlay.addEventListener("click", () => toggleMenu(false));

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});
