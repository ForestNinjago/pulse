$(document).ready(function(){
    $('.caruosel__inner').slick({
        speed: 1200, 
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {   breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
    });
  });