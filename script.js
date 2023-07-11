"strict mode";
const wordElement = document.getElementById("word");
const words = ["Hello!", "I'm Abinash Anand", "Welcome to my Profile"]; // Array of words/phrases you want to animate
let wordIndex = 0;
let letterIndex = 0;
let reverse = false;

function typeLetter() {
  const currentWord = words[wordIndex];

  if (!reverse) {
    wordElement.textContent += currentWord[letterIndex];
    letterIndex++;

    if (letterIndex === currentWord.length) {
      reverse = true;
      setTimeout(typeLetter, 1000); // Delay before starting reverse printing (adjust as needed)
      return;
    }
  } else {
    letterIndex--;
    wordElement.textContent = currentWord.substring(0, letterIndex);

    if (letterIndex === 0) {
      reverse = false;
      wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    }
  }

  setTimeout(typeLetter, 100); // Delay between each letter (adjust as needed)
}

typeLetter();

//Hello! I'm Abinash Anand
//Variables
// const heading = document.querySelectorAll(".heading-animation");

const cloudElementTwo = document.querySelector(".bottom-cloud");
const middleContainer = document.querySelector(".middle-container");
const webTechHeading = document.querySelectorAll(".web-tech");
const techStackComponent = document.querySelectorAll(".tech-stack");
const technologyElements = document.querySelectorAll(".technology");
const socialIcons = document.querySelectorAll(".socials");
const copyRight = document.querySelector(".copy-right");
const internshipExpContent = document.querySelectorAll(".child");
const workExp = document.querySelector(".exp");
const workExpChildElement = document.querySelectorAll(".child");
//=================== Dark mode ===========================
const cloudElement = document.getElementById("cloud");
const color = document.body;

function nightMode() {
  color.style.backgroundColor = "#0F0E0E";
  color.style.color = "#9336B4";
  color.style.transition = ".5s ease-in";
  //dark mode button glow
  cloudElement.style.filter =
    " brightness(150%) drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))";
  cloudElementTwo.style.display = "none";
  //Heading Name glow
  // heading.forEach((component) => {
  //   component.style.filter =
  //     "brightness(150%) drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))";
  //   heading.style.boxShadow = "3px 3px 3px white";
  // });

  //darkmode for social elements
  socialIcons.forEach((icon) => {
    icon.style.backgroundColor = "white";
    icon.style.borderRadius = "50%";
    icon.style.filter =
      "brightness(150%) drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))";

    //tech stack component
    techStackComponent.forEach((component) => {
      component.style.backgroundColor = "#BBBBBB";
    });
    //web stack technology elements components
    technologyElements.forEach((elements) => {
      elements.style.backgroundColor = "#bbbbbba4 ";
    });

    // web stack
    webTechHeading.forEach((heading) => {
      heading.style.color = "white";
    });

    //stack elements
    // webTechHeading.forEach((heading) => {
    //   heading.style.color = "white";
    // });
  });

  //internshExp
  internshipExpContent.forEach((element) => {
    element.style.backgroundColor = "#393E46";
  });

  workExp.style.backgroundColor = "#20262E";
  workExp.style.color = "#9681EB";
  workExp.style.boxShadow = "15px 10px  rgb(41, 41, 41)";

  //copyright
  copyRight.style.paddingTop = "15px";
  copyRight.style.paddingLeft = "50px";
  copyRight.style.color = "#fff";
  copyRight.style.filter =
    "brightness(150%) drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))";
  harryPotter.style.backgroundColor = "white";
}
// function refresh() {
//   window.location.reload();
// }

cloudElement.addEventListener("click", nightMode);
cloudElement.addEventListener("click", refresh);
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

//buttons functionality
const button1 = document.getElementById("myButton");
const button2 = document.getElementById("myButton2");
const buttons = [button1, button2];
const internshipOne =
  "https://drive.google.com/drive/u/0/folders/1EvJ_SiFYsKEZ8v-5XlSh90aiyOs6acWb";
const internshipTwo =
  "https://drive.google.com/file/d/1-BNdLteyIbdUESJX90dmCqzT4AWHe-nj/view?usp=sharing";
const links = [internshipOne, internshipTwo];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    window.location.href = links[i];
  });
}

// var resumeContainer = document.querySelector(".iframe-container");
// var resumeIframe = document.getElementById("resume");
// var originalHeight;

// function toggleResumeSize() {
//   var maximizeButton = document.querySelector(".maximize-button");
//   var minimizeButton = document.querySelector(".minimize-button");

//   if (resumeContainer.classList.contains("maximized")) {
//     resumeContainer.style.height = originalHeight;
//     maximizeButton.style.display = "block";
//     minimizeButton.style.display = "none";
//     resumeContainer.classList.remove("maximized");
//   } else {
//     originalHeight = resumeContainer.style.height;
//     resumeContainer.style.height = "100vh";
//     maximizeButton.style.display = "none";
//     minimizeButton.style.display = "block";
//     resumeContainer.classList.add("maximized");
//   }
// }
//dp animation

// const imgHover = document.getElementsByClassName("dp")[0]; // Select the first element with the class name "dp"
// const profileStyle = document.querySelector(".profile").style;

// function mouseOver() {}

// function mouseLeave() {}

// imgHover.addEventListener("mouseover", mouseOver);
// imgHover.addEventListener("mouseleave", mouseLeave);

//projects redirect
// const project1 = document.querySelector("#project1");
// const project2 = document.querySelector("#project2");
// const project3 = document.querySelector("#project3");
// const project4 = document.querySelector("#project4");

// function (){
//   if(project1)
// }
//css custom button
// const btn = document.querySelectorAll(".btn-custom");

function pressDown() {
  this.style.backgroundColor = "#E4A5FF";
  this.style.color = "white";
  const path = this.getAttribute("data-path");
  console.log("Navigate to: " + path);
}
function btnRelease() {
  this.style.backgroundColor = "white";
  this.style.color = "black";
}
btn.forEach(function (btn) {
  btn.addEventListener("click", pressDown);
  btn.addEventListener("mouseleave", btnRelease);
});

// const url = document.querySelectorAll(".btn-custom");
// function redirectToURL() {
//   (window.open = "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"),
//     "_blank";
// }
// const cloudElement = document.querySelector(".top-cloud");
// const topContainer = document.querySelector(".top_container");

// // const footer = document.querySelector(".foot-bar");
// // const elementArray = [topContainer, middleContainer, footer];

// // function darkMode() {
// //   for (let index = 0; index < elementArray.length; index++) {
// //     body.style.backgroundColor = "grey";
// //   }
// // }

// // cloudElement.addEventListener("click", darkMode);

// // const centerLineElement = document.querySelector(".center-line");
// const cloudElement = document.querySelector(".top-cloud");

// const elementArray = [document.body, topContainer]; // Add other elements you want to apply dark mode to here

// const harryPotter = document.querySelector(".harry-potter");

// function darkMode() {
//   for (let index = 0; index < elementArray.length; index++) {
//     //body backgeound color
//     elementArray[index].style.backgroundColor = "#000000";
//     elementArray[index].style.color = "white";

//     // centerLineElement.style.backgroundColor = "white";
//     // centerLineElement.style.filter =
//     //   "brightness(150%) drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))";

//transitions ==================
// elementArray.forEach((transition) => {
//   transition.style.transition = ".5s ease-in";
// });
//     //heading glowup
//     heading.forEach((element) => {
//       element.style.filter =
//         "brightness(150%) drop-shadow(0 0 10px rgba(0, 255, 255, 0.7))";
//     });

//   }
//   // for (let index = 0; index < array.length; index++) {
//   //   fontColorElements[index].color = "white";
//   // }
// }

// cloudElement.addEventListener("click", darkMode);
//typing letter animation
