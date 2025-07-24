const playBtn = document.getElementById("play-button");
const landing = document.getElementById("landing");
const mainScene = document.getElementById("main-scene");
const bgMusic = document.getElementById("bg-music");
const messageContainer = document.getElementById("message-container");
const subtitleContainer = document.getElementById("subtitle-container");

let currentLyric = "";
let currentMessage = "";

// === LYRICS DATA (Subtitles) ===
const lyrics = [
  { time: 22, text: "Piano intro" },
  { time: 56, text: "I've waited a hundred years" },
  { time: 61, text: "But I'd wait a million more for you" },
  { time: 74, text: "Nothing prepared me for" },
  { time: 77, text: "What the privilege of being yours would do" },
  { time: 90, text: "If I had only felt the warmth within your touch" },
  { time: 99, text: "If I had only seen how you smile when you blush" },
  { time: 107, text: "Or how you curl your lip when you concentrate enough" },
  { time: 112, text: "I would have known what I was living for all along" },
  { time: 124, text: "What I've been living for" },
  { time: 135, text: "Your love is my turning page" },
  { time: 138, text: "Where only the sweetest words remain" },
  { time: 150, text: "Every kiss is a cursive line" },
  { time: 153.6, text: "Every touch is a redefining phrase" },
  { time: 165, text: "I surrender who I've been for who you are" },
  { time: 173, text: "For nothing makes me stronger than your fragile heart" },
  { time: 181, text: "If I had only felt how it feels to be yours" },
  { time: 186, text: "Well, I would have known what I've been living for all along" },
  { time: 199, text: "What I've been living for" },
  { time: 225, text: "Though we're tethered to the story we must tell" },
  { time: 233, text: "When I saw you, well I knew we'd tell it well" },
  { time: 241, text: "With a whisper, we will tame the vicious seas" },
  { time: 248, text: "Like a feather, bringing kingdoms to their knees" }
];

// === PERSONAL MESSAGES (Center) ===
const messages = [
  { time: 0, text: "For Rain, the One I Was Meant to Wait For." },
  { time: 22, text: "Inspired by 'Turning Page' - Sleeping at Last." },
  { time: 46, text: "A love that only God could write." },
  { time: 56, text: "Maybe I never really Understood what waiting meant." },
  { time: 62, text: "Until I met you." },
  { time: 72, text: "Waiting isn't about the time." },
  { time: 77, text: "It's about the faith." },
  { time: 82, text: "It's the quiet belief that even if the world turns its back, my heart won't." },
  { time: 92, text: "Because Rain, I'd wait every lifetime over if it means." },
  { time: 99, text: "I'd find you again." },
  { time: 105, text: "There was a time we were just two names drifting in the same place." },
  { time: 115, text: "But He must've whispered your name into my prayers long before I ever said it out loud." },
  { time: 125, text: "You were meant to come back." },
  { time: 130, text: "Not when it was easy." },
  { time: 135, text: "But when it was real." },
  { time: 145, text: "I never knew I could love someone this gently." },
  { time: 150, text: "This deeply." },
  { time: 155, text: "Loving you doesn't ask to be loud." },
  { time: 160, text: "It just asks to stay." },
  { time: 165, text: "So Rain, even when you feel uncertain, or like you're not worth it." },
  { time: 175, text: "Know that every breathe I take for you is one of promise." },
  { time: 185, text: "No scripts, no cue lines, just us and the story." },
  { time: 190, text: "That writes itself between silence and sighs." },
  { time: 195, text: "You are the book I never want to close." },
  { time: 200, text: "The page I turn with both hands gently." },
  { time: 205, text: "Because this isn't just a chapter." },
  { time: 210, text: "It's every page I've ever longed to read." },
  { time: 220, text: "'Therefore what God has joined together, let no one seperate' - Mark 10:9." },
  { time: 230, text: "Because I believe in the story He's writing. He wrote your name besides mine." },
  { time: 240, text: "Forever turning each page with you." },
  { time: 250, text: "Love." },
  { time: 260, text: "— Kei" }
];

// === SYNC FUNCTION ===
function syncTimedContent() {
  const current = bgMusic.currentTime;

  // === LYRICS ===
  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (current >= lyrics[i].time) {
      if (lyrics[i].text !== currentLyric) {
        subtitleContainer.style.opacity = 0;
        setTimeout(() => {
          subtitleContainer.textContent = lyrics[i].text;
          subtitleContainer.style.opacity = 1;
          currentLyric = lyrics[i].text;
        }, 200);
      }
      break;
    }
  }

  // === MESSAGES ===
  for (let i = messages.length - 1; i >= 0; i--) {
    if (current >= messages[i].time) {
      if (messages[i].text !== currentMessage) {
        messageContainer.style.opacity = 0;
        setTimeout(() => {
          messageContainer.textContent = messages[i].text;
          messageContainer.style.opacity = 1;
          currentMessage = messages[i].text;
        }, 200);
      }
      break;
    }
  }
}

// === ON PLAY ===
playBtn.addEventListener("click", () => {
  landing.style.opacity = 0;

  setTimeout(() => {
    landing.classList.add("hidden");
    mainScene.classList.remove("hidden");
    mainScene.style.opacity = 1;

    bgMusic.play();
    setInterval(syncTimedContent, 300); // sync every 300ms
  }, 1000);
});
