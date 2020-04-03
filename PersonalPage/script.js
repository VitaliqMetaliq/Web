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
        
});