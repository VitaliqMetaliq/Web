$(function(){
    $('.link-to-scroll').on('click', function(e){
        $('html,body').stop().animate({ 
            scrollTop: $(this.hash).offset().top }, 1000);
        if($('.header-nav').hasClass('header-nav-open')) {
            $('.header-nav').removeClass('header-nav-open');
        }
        e.preventDefault();
    });

    $('.header-burger').on('click', function(e) {
        e.preventDefault();
        $('.header-nav').addClass('header-nav-open');
    });

    $('.header-nav-close').on('click', function(e){
        e.preventDefault();
        $('.header-nav').removeClass('header-nav-open');
    });
});