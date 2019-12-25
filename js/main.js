let countDownDate = new Date("Feb 20, 2020 09:00:00").getTime();
let countdownDiv = document.querySelector("div.landing__countdown");

let timerUpdate = setInterval(function() {
  let now = new Date().getTime();
  let diff = countDownDate - now;

  let days = Math.floor(diff / 86400000);
  let hours = Math.floor((diff % 86400000) / 3600000);
  let minutes = Math.floor((diff % 3600000) / 60000);
  let seconds = Math.floor((diff % 60000) / 1000);

  countdownDiv.innerHTML =
    days + "d: " + hours + "h: " + minutes + "m: " + seconds + "s";

  if (diff < 0) {
    clearInterval(timerUpdate);
    countdownDiv.innerHTML = "EXPIRED";
  }
}, 1000);

let cards = document.querySelectorAll(".container__card");
let card = cards[0];

let openModal;

card.addEventListener("click", e => {
  openModal = document.querySelector(card.getAttribute("data-target"));
  openModal.classList.remove("modal--hidden");
});

document.querySelectorAll(".modal__close-btn").forEach(item => {
  item.addEventListener("click", e => {
    openModal.classList.add("modal--hidden");
  });
});
