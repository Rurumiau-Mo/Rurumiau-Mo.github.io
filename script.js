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

  testImage("images/mushroom-decoration.png", () => {
    document.body.classList.add("has-mushroom-decoration");
  });

  testImage("images/frog-decoration.png", () => {
    document.body.classList.add("has-frog-decoration");
  });


  // Reusable decoration layers for major panels and cards.
  const decoratedSelectors = [
    ".hero",
    ".content-panel",
    ".card",
    ".blog-post",
    ".project-item",
    ".feature",
    ".bookshelf",
    ".video-embed"
  ];

  document.querySelectorAll(decoratedSelectors.join(",")).forEach((element) => {
    if (element.querySelector(":scope > .panel-decoration-layer")) return;

    const layer = document.createElement("span");
    layer.className = "panel-decoration-layer";
    layer.setAttribute("aria-hidden", "true");

    ["ivy-top", "ivy-left", "ivy-right", "moss-bottom"].forEach((name) => {
      const part = document.createElement("span");
      part.className = `panel-decoration panel-decoration-${name}`;
      layer.appendChild(part);
    });

    element.appendChild(layer);
  });

  document.querySelectorAll(".topbar").forEach((bar) => {
    if (bar.querySelector(":scope > .navbar-moss-layer")) return;
    const moss = document.createElement("span");
    moss.className = "navbar-moss-layer";
    moss.setAttribute("aria-hidden", "true");
    bar.appendChild(moss);
  });

});
