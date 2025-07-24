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
  { time: 185, text: "It's you that I'm missin'" },
  { time: 187, text: "Take my hand, I wanna go, I wanna go" },
  { time: 194, text: "If we're gonna fight this fight for better days" },
  { time: 199, text: "I know we're gonna make it" },
  { time: 202, text: "This is the chance, let's take it" },
  { time: 204, text: "Baby, ain't nobody gonna love me like the way you do" },
  { time: 210, text: "Tell me what can I do to make it up to you?" },
  { time: 216, text: "And you ain't never gonna find a love like mine" },
  { time: 224, text: "'Cause what we got's too good to say goodbye" },
  { time: 230, text: "Goodbye" },
  { time: 233, text: "Baby, ain't nobody gonna love me like the way you do" },
  { time: 240, text: "And you ain't never gonna find a love like mine" },
  { time: 244, text: "Tell me what can I do to make it up to you?" },
  { time: 252, text: "'Cause what we got's too good to say goodbye, goodbye" },
];


// === PERSONAL MESSAGES (Center) ===
const messages = [
  { time: 0,    text: "This is for you, Rain." },
  { time: 2,    text: "Inspired by “Too Good to Say Goodbye” by Bruno Mars." },
  { time: 5,    text: "No excuses. No pressure. Just my heart." },
  { time: 8,    text: "one last time." },

  { time: 14,   text: "I did. I won’t deny that." },
  { time: 17,   text: "And I’m not here to erase what I did. I’m here to own it." },
  { time: 20,   text: "You didn’t deserve to feel what I made you feel." },

  { time: 20,   text: "You trusted me with your heart." },
  { time: 23,   text: "I should’ve held it with both hands." },
  { time: 25,   text: "And instead… I dropped it." },

  { time: 26,   text: "And now all I can do is watch the person I love most walk away" },
  { time: 30,   text: "not because you stopped loving me," },
  { time: 33,   text: "but because I hurt you too deeply." },

  { time: 36,   text: "If there’s even just 1% left of the Rain who once smiled because of me…" },
  { time: 41,   text: "I’m not asking you to forget. I’m asking if I can try to be better." },

  { time: 61,   text: "I replay those days again and again." },
  { time: 65,   text: "And every time I do, I realize how much of a blessing they were" },
  { time: 70,   text: "and how I failed to protect them." },

  { time: 74,   text: "Because my love for you, Rain" },
  { time: 77,   text: "it isn’t just love." },
  { time: 80,   text: "It’s soul deep, raw, messy, stubborn, and still yours even after everything." },

  { time: 87,   text: "And maybe this is goodbye." },
  { time: 90,   text: "Maybe you’ve already closed the chapter." },
  { time: 93,   text: "But if you ever find yourself rereading the pages" },
  { time: 96,   text: "I’ll still be here." },

  { time: 115,  text: "I’m not entitled to a second chance." },
  { time: 119,  text: "But if love means anything" },
  { time: 122,  text: "it’s trying, even if the odds are gone." },

  { time: 142,  text: "I don’t want to change your mind." },
  { time: 145,  text: "I only want you to know" },
  { time: 148,  text: "I remember every moment you gave me." },
  { time: 151,  text: "And I cherish them still." },

  { time: 182,  text: "I blocked you thinking it was fate’s job." },
  { time: 185,  text: "But it’s not fate’s job to love you. That’s mine." },
  { time: 189,  text: "And I’m sorry I gave up, even for a second." },

  { time: 206,  text: "Maybe nothing I do will fix this." },
  { time: 210,  text: "But I still want to spend the rest of my days trying" },
  { time: 214,  text: "in silence or in presence, with you or from afar." },

  { time: 252,  text: "Maybe now isn’t our time." },
  { time: 255,  text: "Maybe we aren’t meant to continue right now." },
  { time: 258,  text: "But if the universe ever turns us around again" },
  { time: 262,  text: "I’ll be waiting, still loving, still choosing you." },
  { time: 267,  text: "- Kei." },
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
