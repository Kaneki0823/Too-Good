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
  { time: 14, text: "I've made mistakes" },
  { time: 20, text: "I could have treated you better" },
  { time: 26, text: "I let you get away" },
  { time: 31, text: "There goes my happily ever after" },
  { time: 36, text: "Tell me why, why can't we try and start again?" },
  { time: 45, text: "This can't be how our story ends" },
  { time: 51, text: "You're more than my girl, you're my best friend" },
  { time: 58, text: "Tell me you remember when" },
  { time: 61, text: "Oooh, I was your man and you were my girl" },
  { time: 65, text: "It was you and me against the world" },
  { time: 68, text: "Baby, ain't nobody gonna love me like the way you do" },
  { time: 74, text: "And you ain't never gonna find a love like mine" },
  { time: 79, text: "Tell me what can I do to make it up to you?" },
  { time: 87, text: "'Cause what we got's too good to say goodbye, goodbye" },
  { time: 98, text: "Yeah, I'm still in love with you darlin'" },
  { time: 104, text: "I know you feel the same" },
  { time: 107, text: "Oh, what's the point of both of us being broken hearted?" },
  { time: 115, text: "I pray it's never too late" },
  { time: 120, text: "So tell me, why, why can't we try and start again?" },
  { time: 129, text: "This can't be how our story ends" },
  { time: 135, text: "You're more than my girl, you're my best friend" },
  { time: 142, text: "Tell me you remember when" },
  { time: 146, text: "I was your man and you were my girl" },
  { time: 149, text: "It was you and me against the world" },
  { time: 152, text: "Baby, ain't nobody gonna love me like the way you do" },
  { time: 159, text: "And you ain't never gonna find a love like mine" },
  { time: 163, text: "Tell me what can I do to make it up to you?" },
  { time: 171, text: "'Cause what we got's too good to say goodbye, goodbye" },
  { time: 182, text: "Girl won't you listen?" },
  { time: 185, text: "(Oh, don't you give up)" },
  { time: 188, text: "It's you that I'm missin'" },
  { time: 190, text: "(Oh, don't you give up)" },
  { time: 192, text: "Take my hand, I wanna go, I wanna go" },
  { time: 199, text: "(All the way)" },
  { time: 204, text: "If we're gonna fight this fight for better days" },
  { time: 209, text: "I know we're gonna make it" },
  { time: 212, text: "This is the chance, let's take it" },
  { time: 214, text: "Baby, ain't nobody gonna love me like the way you do" },
  { time: 222, text: "(No, no, no, no)" },
  { time: 226, text: "And you ain't never gonna find a love like mine" },
  { time: 230, text: "(Oh, tell me)" },
  { time: 234, text: "Tell me what can I do to make it up to you?" },
  { time: 244, text: "'Cause what we got's too good to say goodbye" },
  { time: 250, text: "(Come on, come on) goodbye" },
  { time: 253, text: "(Oh baby, baby)" },
  { time: 256, text: "Baby, ain't nobody gonna love me like the way you do" },
  { time: 263, text: "And you ain't never gonna find a love like mine" },
  { time: 267, text: "(Oh, tell me)" },
  { time: 271, text: "Tell me what can I do to make it up to you?" },
  { time: 280, text: "'Cause what we got's too good to say goodbye, goodbye" },
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
