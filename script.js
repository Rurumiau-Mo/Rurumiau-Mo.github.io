document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-button");
  const dropdown = document.querySelector(".dropdown");

  if (button && dropdown) {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdown.classList.toggle("open");
      button.setAttribute("aria-expanded", dropdown.classList.contains("open"));
    });

    document.addEventListener("click", () => {
      dropdown.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });

    dropdown.addEventListener("click", (event) => event.stopPropagation());
  }

  const testImage = (src, onLoad) => {
    const image = new Image();
    image.onload = onLoad;
    image.src = src;
  };

  testImage("images/navbar-cat.png", () => {
    document.body.classList.add("has-navbar-cat");
  });
});
