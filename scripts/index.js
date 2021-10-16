const formRegistration = document.querySelector('.form'),
buttonRegistrationFooter = document.querySelector('.button_position_footer'),
buttonRegistrationHeader = document.querySelector('.button_position_header'),
buttonRegistrationForm = document.querySelector('.button_position_reg-form'),
buttonRegistrationFormCancel = document.querySelector('.button_type_cancel'),
popupRegistration = document.querySelector('.registration-window'),
swiper = new Swiper(".team__swiper", {
  grabCursor: true,
  // loop: true,
  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet_active",
  },
  breakpoints: {
    320: {slidesPerView: 1},
    340: {
      slidesPerView: 1.2,
      spaceBetween: 18,
      watchOverflow: true,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 28,
      watchOverflow: true,
    },
    1120: {
      slidesPerView: 3,
      spaceBetween: 65,
      watchOverflow: true,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 80,
      watchOverflow: true,
    }
  }
});

const battlesSwiper = new Swiper(".battles__swiper", {
  grabCursor: true,
  // loop: true,
  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet_active",
  },
  breakpoints: {
    320: {slidesPerView: 1},
    340: {
      slidesPerView: 1.2,
      spaceBetween: 18,
      watchOverflow: true,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 28,
      watchOverflow: true,
    },
    1120: {
      slidesPerView: 3,
      spaceBetween: 65,
      watchOverflow: true,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 80,
      watchOverflow: true,
    }
  }
});


function openPopup(popup) {
  popup.classList.add('registration-window_opened');
};

function closePopup(popup) {
  popup.classList.remove('registration-window_opened');
};

buttonRegistrationHeader.addEventListener('click', () => {
  openPopup(popupRegistration); 
});

buttonRegistrationFooter.addEventListener('click', () => {
  openPopup(popupRegistration); 
});

buttonRegistrationFormCancel.addEventListener('click', () => {
  closePopup(popupRegistration); 
});
