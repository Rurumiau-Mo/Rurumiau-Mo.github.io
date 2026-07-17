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

  document.querySelectorAll(".decorated").forEach((el) => {
    const layer = document.createElement("span");
    layer.className = "panel-decor";
    layer.setAttribute("aria-hidden", "true");
    ["ivy-top","ivy-left","ivy-right","moss-bottom"].forEach((cls) => {
      const part = document.createElement("span");
      part.className = cls;
      layer.appendChild(part);
    });
    el.appendChild(layer);
  });
});
