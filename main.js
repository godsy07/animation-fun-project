// Add elements in JS
const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");

const box1 = document.querySelector(".box1-area");
const box2 = document.querySelector(".box2-area");
const box3 = document.querySelector(".box3-area");
const box4 = document.querySelector(".box4-area");
const box5 = document.querySelector(".box5-area");
const box6 = document.querySelector(".box6-area");

// Add Event Listeners to elements
startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);

function startAnimation() {
  console.log("animation started");
}

function stopAnimation() {
  console.log("animation stopped");
}
