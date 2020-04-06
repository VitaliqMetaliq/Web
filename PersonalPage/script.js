$(function(){
    $('.slider').slick({
          infinite: false,
          appendArrows: $('.your-class-arrow'),
          prevArrow: $('.prev'),
          nextArrow: $('.next'),
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [{
              breakpoint: 1025,
              settings: {
                  dots: true,
                  arrows: false,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: false  
              }
          }, {
              breakpoint: 640, 
              settings: {
                  dots: true,
                  arrows: false,
                  slidesToShow: 1, 
                  slidesToScroll: 1, 
                  infinite: false
              }
          }]
    });
    
    $('.flat-elements__top1').css({
        'top': '-13px', 
        'left': '6.9%',
        'transform': 'rotate(27deg)'
    });
    $('.flat-elements__top2').css({
        'top': '12px', 
        'left': '41%',
        'transform': 'rotate(-20deg)'
    });
    $('.flat-elements__top3').css({
        'top': '165px', 
        'left': '13%',
        'transform': 'rotate(17deg)'
    });
    $('.flat-elements__top4').css({
        'top': '407px',
        'left': '19.6%', 
        'transform': 'rotate(-22deg)'
    });
    $('.flat-elements__top5').css({
        'top': '308px', 
        'left': '49%',
        'transform': 'rotate(18deg)'
    });
});