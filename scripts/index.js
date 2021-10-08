const swiper = new Swiper(".team__swiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet-active",
  },
});

const swiper_battles = new Swiper(".battles__swiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet-active",
  },
});