$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 100) {
            $(".navigation").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else {
            $(".navigation").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });

    $(".goTop").click(function(){scroll(0,0)})

    $(".menu-toggler").click(function() {
        $(this).toggleClass("active");
        $(".navigation-menu").toggleClass("active");
    });

    $(".navigation-menu a").click(function() {
        $(".menu-toggler").toggleClass("active");
        $(".navigation-menu").toggleClass("active");
    })

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});