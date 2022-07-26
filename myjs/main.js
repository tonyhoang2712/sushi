$('.owl-carousel-banner').owlCarousel({
    loop:true,
    nav:true,
    items: 1
})

$('.comment-of-customer-content').owlCarousel({
    loop:true,
    items: 3,
    margin: 15,
    dots: true,
    nav: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        }
    }
})

$(function () {
    $(".mobile_menu").slideMobileMenu({
        onMenuLoad: function(menu) {
            console.log(menu)
        },
        onMenuToggle: function(menu, opened) {
            console.log(opened)
        }
    });
    $('.js-show-min-cart').click(function () {
        $('.shop-mini').toggle(2000);
    });
});
