const slide = document.querySelector(".carousel-slide");
const contents = document.querySelectorAll(".carousel-content");
const dots = document.querySelectorAll(".dot");
const projectLinks = document.querySelectorAll(".prj-title a");

let counter = 0;

function updateCarousel() {
  document.querySelectorAll(".content-description").forEach((container) => {
    container.classList.remove("expanded");
    container.style.height = "250px";
  });

  document.querySelectorAll(".prj-more").forEach((btn) => {
    btn.textContent = "Show more";
  });

  const size = contents[0].clientWidth;
  slide.style.transform = `translateX(${-size * counter}px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[counter]) dots[counter].classList.add("active");
}

document.getElementById("nextBtn").addEventListener("click", () => {
  counter = counter >= contents.length - 1 ? 0 : counter + 1;
  updateCarousel();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  counter = counter <= 0 ? contents.length - 1 : counter - 1;
  updateCarousel();
});

document.querySelectorAll(".prj-more").forEach((button) => {
  button.addEventListener("click", function () {
    const container = this.closest(".content-description");

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

window.addEventListener("resize", updateCarousel);
updateCarousel();

projectLinks.forEach((link) => {
  link.setAttribute("title", link.textContent.trim());
});
