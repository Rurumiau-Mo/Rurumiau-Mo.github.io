
const menuWrap = document.querySelector(".pages-menu");
const menuButton = document.querySelector(".pages-control");

if (menuWrap && menuButton) {
  const closeMenu = () => {
    menuWrap.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = menuWrap.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });
}
