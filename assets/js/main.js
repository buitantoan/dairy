( function( $ ) {

    function swiper_slider_func(element, swiper_option) {
        let swiper = new Swiper(element, swiper_option);
    }

    $(document).ready(function () {
        
        var swiper_hero = $('.d-hero-swiper'); 
        var swiper_herro_data = {
            spaceBetween: 0,
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            speed: 1200,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination--hero",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next-hero",
              prevEl: ".swiper-button-prev-hero",
            },
        };

        swiper_slider_func(swiper_hero, swiper_herro_data);

    });


})( jQuery );