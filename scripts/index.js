
window.addEventListener('resize', function(evt){
  const width = document.body.clientWidth;
  console.log(width);
  if (width <= 320) {
    const swiper = new Swiper(".team__swiper", {
      grabCursor: true,
    //для 320
      effect: "flip",
      pagination: {
        el: ".swiper__pagination",
        clickable: true,
        bulletClass: "swiper__bullet",
        bulletActiveClass: "swiper__bullet-active",
      },
    });
  }
  if (width > 320) {
    const swiper = new Swiper(".team__swiper", {
      grabCursor: true,
      slidesPerView: 1.5,
      spaceBetween: 28,
      pagination: {
        el: ".swiper__pagination",
        clickable: true,
        },
        watchOverflow: true,
    });
  }
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