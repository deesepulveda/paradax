"use strict";

// ****** FUNCTION FOR SCROLLING ******

// window.addEventListener("scroll", () => {
//   let scrolled = window.pageYOffset;
//   let rate = scrolled * 1;

//   // spiderman.style.transform = "scale(2)";
//   spiderman.style.top = rate * 2 + "px";
//   spiderman.style.left = rate * 0.5 + "px";
//   // spiderman.classList.toggle("spidermanMove", window.scrollY > 10);
// });

// ****** PROJECT BELOW ******

const container = document.getElementById("container");
const title = document.getElementById("title");
const triangleBox = document.getElementById("triangleBox");
const palmTrees = document.getElementById("palmTrees");
const sunBox = document.getElementById("sunBox");
const treesOne = document.getElementById("trees1");
const treesTwo = document.getElementById("trees2");
const mountains = document.getElementById("mountains");
const moonBox = document.getElementById("moonBox");
const waveTwo = document.getElementById("waveTwo");
const waveFour = document.getElementById("waveFour");
const waveSix = document.getElementById("waveSix");
const waveEight = document.getElementById("waveEight");

window.addEventListener("scroll", () => {
  //   console.log(window.pageYOffset);

  let scrollable = window.pageYOffset;

  const wavers = [waveTwo, waveFour, waveSix, waveEight];

  wavers.forEach((element) => {
    element.classList.toggle("wavesSideToSide", window.scrollY > 600);
  });

  title.classList.toggle("titleGrow", window.scrollY > 50);
  triangleBox.classList.toggle("triangleGrow", window.scrollY > 600);
  // triangleBox.classList.toggle("triangleGone", window.scrollY > 900);
  treesOne.style.left = scrollable * -0.15 + "px";
  treesTwo.style.left = scrollable * 0.15 + "px";
  mountains.style.left = scrollable * -0.05 + "px";
  waveBox.classList.toggle("wavesFlow", window.scrollY > 600);
  sunBox.classList.toggle("sunSet", window.scrollY > 3900);
  sunBox.style.left = scrollable * -0.05 + "px";
  sunBox.style.top = scrollable * 0.05 + "px";
  moonBox.classList.toggle("moonGrow", window.scrollY > 4000);
});

console.log(wavers);
