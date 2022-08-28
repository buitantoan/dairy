( function( $ ) {

    "use strict";

    function swiper_slider_func(element, swiper_option) {
        let swiper = new Swiper(element, swiper_option);
    }

    $(document).ready(function () {

        var hash_link = window.location.hash;
        if(hash_link){
            let header = $('.header').outerHeight();
            $('html, body').animate({
                scrollTop: $(hash_link).offset().top - header
            }, 1000);

            $("nav").find("a").click(function(e) {

                $("html, body").animate({
                    scrollTop: $(hash_link).offset().top - header
                },1000);
                
            });

        }

        $(window).scroll(function(){

            let showAfter = 100;
            if ( $(this).scrollTop() > showAfter ) { 
                $('.btn-back-to-top').fadeIn();
            } else { 
                $('.btn-back-to-top').fadeOut();
            }
        });
       

        $('#backToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
        
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

        $('#menu-mobile .menu-item-has-children').on('click', '.dropdown-toggle .menu-icon',function (e) {
            e.preventDefault();  
            $(this).parent().toggleClass('icon-up');
            $(this).parent().next('.dropdown-menu').slideToggle('swing');
        });

    });


})( jQuery );