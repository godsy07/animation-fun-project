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
  //   console.log("animation started");
  box1.style.animation = "shrinkEnlarge 1.4s ease-in infinite alternate";
  box2.style.animation = "shrinkEnlarge 1.5s ease-in-out infinite alternate";
  box3.style.animation = "shrinkEnlarge 1.2s ease-out infinite alternate";
  box4.style.animation = "shrinkEnlarge 1.7s linear infinite alternate";
  box5.style.animation = "shrinkEnlarge 1.3s linear infinite alternate";
  box6.style.animation = "shrinkEnlarge 1.1s linear infinite alternate";
}

function stopAnimation() {
  //   console.log("animation stopped");
  box1.style.animationPlayState = "paused";
  box2.style.animationPlayState = "paused";
  box3.style.animationPlayState = "paused";
  box4.style.animationPlayState = "paused";
  box5.style.animationPlayState = "paused";
  box6.style.animationPlayState = "paused";
}
