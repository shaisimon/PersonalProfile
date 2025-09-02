const facts = [
  "I’m currently learning Figma and Frontend Development.",
  "I enjoy exploring different art forms when I’m not coding.",
  "I’m an active student leader at Gordon College.",
  "My dream is to become a skilled UI/UX developer.",
  "I love relaxing and recharging with creative activities."
];

const factBtn = document.getElementById("factBtn");
const factDisplay = document.getElementById("factDisplay");

factBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = facts[randomIndex];
});

let menuIcon = document.querySelector('#menu-icon');
let menu = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}

const heyBtn = document.getElementById("heyBtn");
if (heyBtn) {
  heyBtn.addEventListener("click", () => {
    showHeyNotification();
  });
}

function showHeyNotification() {

  const homeImg = document.querySelector('.home-img');
  if (!homeImg) return;

  const notif = document.createElement("div");
  notif.textContent = "Hey, Shai!";
  notif.style.position = "absolute";
  notif.style.top = "25%";
  notif.style.left = "65%";
  notif.style.transform = "translateY(-50%)";
  notif.style.background = "var(--main-color)";
  notif.style.color = "var(--bg-color)";
  notif.style.padding = "1.2rem 2.5rem";
  notif.style.borderRadius = "2rem";
  notif.style.fontSize = "2rem";
  notif.style.fontWeight = "bold";
  notif.style.boxShadow = "0 0 20px var(--main-color)";
  notif.style.zIndex = "999";
  notif.style.transition = "opacity 0.5s";
  notif.style.whiteSpace = "nowrap";

  if (getComputedStyle(homeImg).position === "static") {
    homeImg.style.position = "relative";
  }

  homeImg.appendChild(notif);

  setTimeout(() => {
    notif.style.opacity = "0";
    setTimeout(() => notif.remove(), 500);
  }, 1800);
}
