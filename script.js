const currentPage = document.body.dataset.page;
document.querySelectorAll("[data-page]").forEach(link => {
  if (link.dataset.page === currentPage) link.classList.add("active");
});

const titleInput = document.querySelector("#project-title");
const descInput = document.querySelector("#project-description");
const statusInput = document.querySelector("#project-status");
const previewTitle = document.querySelector("#preview-title");
const previewDesc = document.querySelector("#preview-description");
const previewStatus = document.querySelector("#preview-status");

function updatePreview() {
  if (!titleInput) return;
  previewTitle.textContent = titleInput.value || "Untitled Forest Project";
  previewDesc.textContent = descInput.value || "Your project description will grow here.";
  previewStatus.textContent = statusInput.value;
}

[titleInput, descInput, statusInput].filter(Boolean).forEach(el => {
  el.addEventListener("input", updatePreview);
});
updatePreview();

const saveButton = document.querySelector("#save-project");
if (saveButton) {
  saveButton.addEventListener("click", () => {
    const original = saveButton.textContent;
    saveButton.textContent = "Saved to the grove ✓";
    setTimeout(() => saveButton.textContent = original, 1800);
  });
}
