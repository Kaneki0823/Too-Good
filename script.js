const playBtn = document.getElementById("play-btn");
const landing = document.getElementById("landing");
const mainContent = document.getElementById("main-content");
const song = document.getElementById("song");
const subtitle = document.getElementById("subtitle");
const centerMessage = document.getElementById("center-message");

// Lyrics and messages (example, add your full synced data)
const timeline = [
  { time: 1, lyric: "Too good to say goodbye", message: "Rain, listen closely…" },
  { time: 5, lyric: "Don't want to say goodbye", message: "This song holds everything I couldn’t say." },
  { time: 10, lyric: "But I guess we ran out of time", message: "Each line is a piece of how I felt." },
];

playBtn.addEventListener("click", () => {
  song.play().then(() => {
    landing.classList.add("fade-out");
    
    setTimeout(() => {
      landing.classList.add("hidden");
      mainContent.classList.remove("hidden");
    }, 1000);
  }).catch((err) => {
    alert("Audio playback failed. Click again or check permissions.");
    console.error(err);
  });
});

// Lyric & message handling
song.addEventListener("timeupdate", () => {
  const current = song.currentTime;
  for (let i = timeline.length - 1; i >= 0; i--) {
    if (current >= timeline[i].time) {
      showLine(timeline[i]);
      break;
    }
  }
});

let lastShown = null;
function showLine({ lyric, message }) {
  if (lastShown === lyric) return;
  lastShown = lyric;

  // Fade lyric
  subtitle.style.opacity = 0;
  centerMessage.style.opacity = 0;

  setTimeout(() => {
    subtitle.textContent = lyric;
    centerMessage.textContent = message;
    subtitle.style.opacity = 1;
    centerMessage.style.opacity = 1;
  }, 300);
}
