$(window).on("load", function() {
  $(".loader").fadeOut(500);
});

$(document).ready(function() {
  $('#slides').superslides( {
    animation: 'fade',
    play: 5000,
    pagination: false
  });
});

$('.owl-forward').owlCarousel({
    loop: true,
    rtl: false,
    autoplay: true,
    autoplayTimeout:1600,
    autoplayHoverPause:false,
    margin:0,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.owl-backwards').owlCarousel({
    loop: true,
    rtl: true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    margin:0,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.owl-forward2').owlCarousel({
    loop: true,
    rtl: false,
    autoplay: true,
    autoplayTimeout:1200,
    autoplayHoverPause:false,
    margin:0,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.owl-new').owlCarousel({
    loop: true,
    rtl: false,
    margin:50,
    nav:false,
    dots: false,
    stagePadding: 100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

var navMain = $("#navbarNav");
navMain.on("click", "a", null, function() {
  navMain.collapse('hide');
});
