/*
 * Animación del logo de la home
 */
const red = document.querySelector("#blue");

function setProperty(duration) {
  red.style.animationDuration = Math.floor(Math.random() * 6 + 6) + "s";
}

function changeAnimationTime() {
  const animationDuration = Math.random();
  setProperty(animationDuration);
}

setInterval(changeAnimationTime, 1000);
