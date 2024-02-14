var swiper = new Swiper(".myBlogSwiper", {
    spaceBetween: 25,
    // centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      200: {
        slidesPerView: 1,
    },
    999: {
        slidesPerView: 2,
    }
  }
  });