document.addEventListener("click", (e) => {
  if (e.target.classList.contains("prj-more")) {
    const button = e.target;
    const container = button.closest(".content-description");

    // Toggle the class
    container.classList.toggle("expanded");
    const isExpanded = container.classList.contains("expanded");

    // Update button text
    button.textContent = isExpanded ? "Show less" : "Show more";

    if (isExpanded) {
      // Set to the exact pixel height of the content
      container.style.height = container.scrollHeight + "px";
    } else {
      // Snap back to your original collapsed height
      container.style.height = "250px";
    }
  }
});
