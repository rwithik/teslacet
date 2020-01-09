// Countdown thingy

// let countDownDate = new Date("Feb 20, 2020 09:00:00").getTime();
// let countdownDiv = document.querySelector("div.landing__countdown");

// let timerUpdate = setInterval(function() {
//   let now = new Date().getTime();
//   let diff = countDownDate - now;

//   let days = Math.floor(diff / 86400000);
//   let hours = Math.floor((diff % 86400000) / 3600000);
//   let minutes = Math.floor((diff % 3600000) / 60000);
//   let seconds = Math.floor((diff % 60000) / 1000);

//   countdownDiv.innerHTML =
//     days + "d: " + hours + "h: " + minutes + "m: " + seconds + "s";

//   if (diff < 0) {
//     clearInterval(timerUpdate);
//     countdownDiv.innerHTML = "EXPIRED";
//   }
// }, 1000);

let cards = document.querySelectorAll(".container__card");
// let card = cards[0];

let openModal;

cards.forEach(card => {
  card.addEventListener("click", e => {
    openModal = document.querySelector(card.getAttribute("data-target"));
    openModal.classList.remove("modal--hidden");
  });
});

document.querySelectorAll(".modal__close-btn").forEach(item => {
  item.addEventListener("click", e => {
    openModal.classList.add("modal--hidden");
  });
});

let workshopDate = new Date("Jan 14, 2020 06:00:00").getTime();
const now = new Date().getTime();
if (now >= workshopDate) {
  const cards2 = document.querySelectorAll(".container__card:nth-of-type(1)");
  console.log("Workshops Open");
  cards2.forEach(card => {
    card.removeEventListener("click");
    card.addEventListener("click", () => {
      window.location.href = card.getAttribute("href");
    });
  });
}
