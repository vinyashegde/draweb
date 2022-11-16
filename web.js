const card = document.querySelector(".card__inner");
const but = document.querySelector(".butt");
const but1 = document.querySelector(".butt1");

but.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

but1.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });