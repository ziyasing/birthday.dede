const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const confettiBtn = document.getElementById("confettiBtn");
const confetti = document.getElementById("confetti");
const audio = document.getElementById("audioPlayer");
const musicToggle = document.getElementById("musicToggle");
const songs = document.querySelectorAll(".song");

openLetter.addEventListener("click", () => {
  letter.scrollIntoView({ behavior: "smooth" });
});

function celebrate() {
  const icons = ["🎉","✨","💙","🩷","⭐","🎈","🧸","🚂"];
  for (let i = 0; i < 55; i++) {
    const item = document.createElement("span");
    item.className = "confetti-piece";
    item.textContent = icons[Math.floor(Math.random() * icons.length)];
    item.style.left = Math.random() * 100 + "%";
    item.style.animationDelay = Math.random() * .8 + "s";
    item.style.fontSize = (14 + Math.random() * 16) + "px";
    confetti.appendChild(item);
    setTimeout(() => item.remove(), 4500);
  }
}
confettiBtn.addEventListener("click", celebrate);

songs.forEach(song => {
  song.addEventListener("click", () => {
    const src = song.dataset.song;
    if (audio.src.endsWith(src)) {
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
    } else {
      audio.src = src;
      audio.play().catch(() => {
        alert("File lagunya belum ada. Masukkan file MP3 ke folder 'music' sesuai nama tombolnya yaa 💗");
      });
    }
  });
});

musicToggle.addEventListener("click", () => {
  if (!audio.src) {
    alert("Pilih salah satu lagu di bagian playlist dulu yaa 🎧");
    document.querySelector(".music-section").scrollIntoView({ behavior: "smooth" });
    return;
  }
  if (audio.paused) audio.play().catch(() => {});
  else audio.pause();
});

window.addEventListener("load", () => {
  setTimeout(celebrate, 700);
});
