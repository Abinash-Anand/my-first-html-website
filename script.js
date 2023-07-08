const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  //change the theme of the website
  document.body.classList.toggle("dark");
});

// //printing hello==================================
// const text = "Hola!";

// let index = 0;

// function printLetter() {
//   document.getElementById("animation").textContent += text[index];
//   index++;

//   if (index === text.length) {
//     clearInterval(timer);
//   }
// }

// const timer = setInterval(printLetter, 200);
//carrousel===========================================
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
