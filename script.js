const playBtn = document.getElementById("playBtn");
const landing = document.getElementById("landing");
const main = document.getElementById("main");
const audio = document.getElementById("audio");
const lyricsEl = document.getElementById("lyrics");
const messageEl = document.getElementById("message");

// Hardcoded lyrics and messages
const lyrics = [
  { time: 5, text: "I’ve made mistakes, I could have treated you better" },
  { time: 12, text: "I let you get away..." },
  { time: 20, text: "There’s no one like you" },
  { time: 30, text: "You’re too good to say goodbye" }
  // Add more lyrics as needed with actual timestamps
];

const messages = [
  { time: 6, text: "Rain, I know this song speaks for what I couldn't." },
  { time: 15, text: "I wish I could hold your hand right now." },
  { time: 25, text: "You're not alone in what you feel." },
  { time: 35, text: "This is my way of saying what I never could." }
];

playBtn.onclick = () => {
  console.log("Play button clicked");

  landing.classList.add("hidden");
  main.classList.remove("hidden");

  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Audio is playing");
        startSync();
      })
      .catch((err) => {
        console.error("Autoplay blocked or failed:", err);
        alert("Audio playback failed. Click again or check browser permissions.");
      });
  }
};

function fadeIn(el, text) {
  el.innerText = text;
  el.style.opacity = 1;
}

function fadeOut(el) {
  el.style.opacity = 0;
}

function startSync() {
  setInterval(() => {
    const time = Math.floor(audio.currentTime);

    const currentLyric = lyrics.find(l => l.time === time);
    if (currentLyric) {
      fadeIn(lyricsEl, currentLyric.text);
      setTimeout(() => fadeOut(lyricsEl), 3000);
    }

    const currentMessage = messages.find(m => m.time === time);
    if (currentMessage) {
      fadeIn(messageEl, currentMessage.text);
      setTimeout(() => fadeOut(messageEl), 4000);
    }
  }, 1000);
}
