const audio = document.getElementById("backgroundAudio");
const audioIcon = document.getElementById("audioIcon");

audioIcon.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioIcon.classList.remove("fa-volume-up");
    audioIcon.classList.add("fa-volume-mute");
  } else {
    audio.pause();
    audioIcon.classList.remove("fa-volume-mute");
    audioIcon.classList.add("fa-volume-up");
  }
});
