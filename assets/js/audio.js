let audioControl = document.querySelector(".audioControl");
let audio = document.querySelector("audio");

let audioState = false;

audioControl.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioState = true;
    audioControl.style.backgroundImage = "url('images/play.svg')";
  } else {
    audio.pause();
    audioState = false;
    audioControl.style.backgroundImage = "url(images/pause.svg)";
  }
});

console.log(audioControl);
