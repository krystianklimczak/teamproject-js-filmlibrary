const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}