const audio = document.getElementById("audio");
const landing = document.getElementById("landing");
const main = document.getElementById("main");
const playBtn = document.getElementById("playBtn");
const message = document.getElementById("message");
const lyrics = document.getElementById("lyrics");

// Replace with your actual timestamps and lyrics
const lyricsData = [
  { time: 3, text: "Too good to say goodbye..." },
  { time: 10, text: "I know you're thinking..." },
  { time: 18, text: "But every time you hurt me..." },
  { time: 26, text: "I tried, I tried..." }
];

// Replace with your custom message lines
const messageData = [
  { time: 5, text: "Rain, I know it's hard to say goodbye..." },
  { time: 12, text: "But this isn't goodbye, it's love lingering..." },
  { time: 20, text: "You were never alone, not even now." },
  { time: 28, text: "—Kei" }
];

playBtn.addEventListener("click", async () => {
  try {
    await audio.play();

    // Fade out landing
    landing.classList.add("fade-out");
    setTimeout(() => {
      landing.classList.add("hidden");
      main.classList.remove("hidden");
    }, 1000);
  } catch (err) {
    alert("Playback failed. Try clicking again or check browser autoplay settings.");
  }
});

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;

  // Show lyrics
  const currentLyric = lyricsData.find(
    (line, i) =>
      currentTime >= line.time &&
      (i === lyricsData.length - 1 || currentTime < lyricsData[i + 1].time)
  );

  if (currentLyric) {
    lyrics.textContent = currentLyric.text;
    lyrics.style.opacity = 1;
  } else {
    lyrics.style.opacity = 0;
  }

  // Show message
  const currentMessage = messageData.find(
    (line, i) =>
      currentTime >= line.time &&
      (i === messageData.length - 1 || currentTime < messageData[i + 1].time)
  );

  if (currentMessage) {
    message.textContent = currentMessage.text;
    message.style.opacity = 1;
  } else {
    message.style.opacity = 0;
  }
});
