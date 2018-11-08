$('.owl-carousel-plazas').owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
    nav: true,
    navText: [" <img src='img/iconos/arrow-left.gif' style='width:80px;padding-top:30px; padding-right:20px;'>", "<img src='img/iconos/arrow-right.gif' style='padding-left:20px;width:80px;padding-top:30px;'>"],
    responsive: {
        0: {
            items: 1,
            loop:true,
            nav: true
        },
        600: {
            items: 3,
            loop:true,
            nav: true
        },
        1000: {
            items: 3,
            loop: true,
            nav: true
        }
    }
})
