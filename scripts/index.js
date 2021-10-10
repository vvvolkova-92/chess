const swiper = new Swiper(".team__swiper", {
  grabCursor: true,
  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet-active",
  },
  breakpoints: {
    320: {slidesPerView: 1},
    340: {
      slidesPerView: 1.2,
      spaceBetween: 18,
      watchOverflow: true,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2.1,
      spaceBetween: 28,
      watchOverflow: true,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 28,
      watchOverflow: true,
    }
  }
});

const battlesSwiper = new Swiper(".battles__swiper", {
  grabCursor: true,
  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet-active",
  },
  breakpoints: {
    320: {slidesPerView: 1},
    340: {
      slidesPerView: 1.2,
      spaceBetween: 18,
      watchOverflow: true,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2.1,
      spaceBetween: 28,
      watchOverflow: true,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 28,
      watchOverflow: true,
    }
  }
});