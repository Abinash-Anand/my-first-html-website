const carousel = document.querySelector(".carousel");
const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
const slideWidth = carouselContainer.offsetWidth;

let currentPosition = 0;

nextBtn.addEventListener("click", () => {
  currentPosition -= slideWidth;
  carouselContainer.style.transform = `translateX(${currentPosition}px)`;

  if (
    currentPosition <= -(slideWidth * (carouselContainer.children.length - 1))
  ) {
    currentPosition = 0;
  }
});

prevBtn.addEventListener("click", () => {
  currentPosition += slideWidth;
  carouselContainer.style.transform = `translateX(${currentPosition}px)`;

  if (currentPosition > 0) {
    currentPosition = -(slideWidth * (carouselContainer.children.length - 1));
  }
});

var resumeContainer = document.querySelector(".iframe-container");
var resumeIframe = document.getElementById("resume");
var originalHeight;

function toggleResumeSize() {
  var maximizeButton = document.querySelector(".maximize-button");
  var minimizeButton = document.querySelector(".minimize-button");

  if (resumeContainer.classList.contains("maximized")) {
    resumeContainer.style.height = originalHeight;
    maximizeButton.style.display = "block";
    minimizeButton.style.display = "none";
    resumeContainer.classList.remove("maximized");
  } else {
    originalHeight = resumeContainer.style.height;
    resumeContainer.style.height = "100vh";
    maximizeButton.style.display = "none";
    minimizeButton.style.display = "block";
    resumeContainer.classList.add("maximized");
  }
}
