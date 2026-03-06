document.addEventListener("DOMContentLoaded", () => {
  const moreButtons = document.querySelectorAll(".prj-more");

  moreButtons.forEach((button) => {
    const container = button.closest(".content-description");

    container.style.height = "250px";

    button.addEventListener("click", function () {
      container.classList.toggle("expanded");
      const isExpanded = container.classList.contains("expanded");

      this.textContent = isExpanded ? "Show less" : "Show more";

      if (isExpanded) {
        container.style.height = container.scrollHeight + "px";
      } else {
        container.style.height = "250px";
      }
    });
  });
});
