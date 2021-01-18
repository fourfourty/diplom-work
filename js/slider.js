
const slide = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slide, {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
  },
  loop: true,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
    slidesPerView: 2,
    spaceBetween: 35,
    },
    1025: {
    spaceBetween: 35,
    },
    1200: {
    slidesPerView: 3,
    spaceBetween: 3,
    },
  }
})




    