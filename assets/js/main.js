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


        $('.button-menu-toggle').on('click', function (e) {
           $(this).toggleClass('icon-expanded'); 
           $('#menu-mobile').toggleClass('nav-expanded'); 
        });

        $('#menu-mobile .menu-item-has-children').on('click', '.dropdown-toggle',function (e) {
            $(this).toggleClass('icon-up')
            $(this).next('.dropdown-menu').slideToggle('swing');
        });


        $(".nav .menu-item").on('click', function(event) {

            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var headerHeight = $('.header').outerHeight();
                
                if($(hash).length){
                    $('html, body').animate({
                        scrollTop: parseInt($(hash).offset().top) - headerHeight
                    }, 600);
                }
 
            }
        });

    });


})( jQuery );