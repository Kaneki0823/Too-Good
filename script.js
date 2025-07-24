const playBtn = document.getElementById("playBtn");
const landing = document.getElementById("landing");
const mainContent = document.getElementById("mainContent");
const messageBox = document.getElementById("message");
const lyricsBox = document.getElementById("lyrics");
const audio = document.getElementById("bgm");

// 🕐 Replace with your actual timings
const lyrics = [
  { time: 2, text: "There's so much I wanna say" },
  { time: 7, text: "But I know it ain't the time" },
  { time: 14, text: "We grew apart, but I still care" },
  { time: 21, text: "Too good to say goodbye" },
  // Add more
];

const messages = [
  { time: 3, text: "Rain, this song reminds me of everything I couldn’t say." },
  { time: 10, text: "You deserve a proper goodbye..." },
  { time: 17, text: "But maybe this is the closest I can get." },
  { time: 25, text: "I’ll always care. – Kei" },
];

function fadeIn(el) {
  el.style.opacity = 1;
}

function fadeOut(el) {
  el.style.opacity = 0;
}

playBtn.addEventListener("click", async () => {
  try {
    await audio.play(); // Required to prevent autoplay error

    // Fade out landing
    landing.classList.add("fade-out");
    setTimeout(() => {
      landing.classList.add("hidden");
      mainContent.style.display = "flex";
    }, 1000);
  } catch (err) {
    alert("Playback failed. Click again or check browser autoplay settings.");
    console.error(err);
  }
});

audio.addEventListener("timeupdate", () => {
  const current = audio.currentTime;

  lyrics.forEach((line, index) => {
    if (Math.abs(current - line.time) < 0.5) {
      lyricsBox.textContent = line.text;
      fadeIn(lyricsBox);
      setTimeout(() => fadeOut(lyricsBox), 2000);
    }
  });

  messages.forEach((msg) => {
    if (Math.abs(current - msg.time) < 0.5) {
      messageBox.textContent = msg.text;
      fadeIn(messageBox);
      setTimeout(() => fadeOut(messageBox), 3000);
    }
  });
});
