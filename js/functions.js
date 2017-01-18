$(function(){

  $('.menu-toggle').click(function(){
    $('.main-nav').toggleClass('menu-active');
    setTimeout(function(){
      $('.main-nav > a:first-child').toggleClass('main-nav-a-active')
    }, 200);
    setTimeout(function(){
      $('.main-nav > a:nth-child(2)').toggleClass('main-nav-a-active')
    }, 300);
    setTimeout(function(){
      $('.main-nav > a:nth-child(3)').toggleClass('main-nav-a-active')
    }, 400);
  });

  $('a, .main-nav').on('click', function(){
    $('.main-nav').removeClass('menu-active');
    $('.main-nav > a').removeClass('main-nav-a-active');
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 0)
      }, 900, 'easeInOutExpo');
      event.preventDefault();
  });

});
