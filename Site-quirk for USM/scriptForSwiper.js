
new Swiper('.users__swiper', {
    navigation: {
        nextEl: '.users__button-next',
        prevEl: '.users__button-prev'
    },

    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    loop: true,
    speed: 700,

});

let swiperTeam = new Swiper('.team-swiper', {
    navigation: {
        nextEl: '.team-swiper-button-next',
        prevEl: '.team-swiper-button-prev'
    },

    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    loop: true,

    speed: 700,

    slidesPerView: 3,

    spaceBetween: 40,

    autoplay: {
        delay: 1500,
        disableOnInteraction: false, 
    },

    centeredSlides: true
    
});