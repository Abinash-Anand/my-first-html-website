"strict mode";
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
//dp animation
const imgHover = document.getElementsByClassName("dp")[0]; // Select the first element with the class name "dp"
const profileStyle = document.querySelector(".profile").style;

function mouseOver() {
  profileStyle.backgroundColor = "#EF6262";
  profileStyle.color = " white";
  profileStyle.transition = ".7s ease";
  profileStyle.fontSize = "large";
}

function mouseLeave() {
  profileStyle.backgroundColor = "white";
  profileStyle.color = " #40514e";
}

imgHover.addEventListener("mouseover", mouseOver);
imgHover.addEventListener("mouseleave", mouseLeave);

//projects redirect
// const project1 = document.querySelector("#project1");
// const project2 = document.querySelector("#project2");
// const project3 = document.querySelector("#project3");
// const project4 = document.querySelector("#project4");

// function (){
//   if(project1)
// }
