//intialization plugins
$(document).ready(function () {
    //animation icon toggler of navbar
    $(`.navbar-toggler`).click(function() {
        $(`.navbar-toggler`).toggleClass(`active`);
    });

    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    new WOW().init();

    //smooth_scroll
    smoothScroll.init();
    var amountScrolled = 300;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('#scroll-btn').fadeIn('slow');
        } else {
            $('#scroll-btn').fadeOut('slow');
        }
    });
    $('#scroll-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    //fancybox
    $("[data-fancybox]").fancybox({
        selector: '[data-fancybox="images"]',
        loop: true
    });
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})