const playBtn = document.getElementById("playBtn");
const landing = document.getElementById("landing");
const song = document.getElementById("song");
const subtitle = document.getElementById("subtitle");
const message = document.getElementById("message");

const lyrics = [
  { time: 4, text: "Too good to say goodbye..." },
  { time: 9, text: "When I think of the memories we made" },
  { time: 14, text: "I still see your smile in the rain" },
  { time: 19, text: "But I know this can't go on..." },
];

const messages = [
  { time: 6, text: "I wish I could hold you just one more time." },
  { time: 12, text: "You didn’t deserve to carry the weight alone." },
  { time: 17, text: "If this is the last thing I say, I hope it brings peace." },
  { time: 23, text: "Rain, you were too good to say goodbye to." },
];

function showLine(target, text) {
  target.textContent = text;
  target.style.opacity = 1;
  setTimeout(() => {
    target.style.opacity = 0;
  }, 4000);
}

playBtn.addEventListener("click", async () => {
  try {
    await song.play();

    // Start fade out
    landing.classList.add("fade-out");

    setTimeout(() => {
      landing.classList.add("hidden");
    }, 1000);

    const startTime = Date.now();

    // Interval to check time and show lyrics/messages
    const interval = setInterval(() => {
      const currentTime = (Date.now() - startTime) / 1000;

      lyrics.forEach((line) => {
        if (Math.abs(currentTime - line.time) < 0.5) {
          showLine(subtitle, line.text);
        }
      });

      messages.forEach((msg) => {
        if (Math.abs(currentTime - msg.time) < 0.5) {
          showLine(message, msg.text);
        }
      });

      // Stop interval when song ends
      if (song.ended) clearInterval(interval);
    }, 200);
  } catch (err) {
    alert("Playback failed. Try clicking again or check browser autoplay settings.");
    console.error(err);
  }
});
