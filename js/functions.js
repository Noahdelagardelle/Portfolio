$(function(){

  animate();

  workAnimate();

/*
  $(window).scroll(function() {
    if ($(this).scrollTop() < 500) {
      $('.hero-text-container h1').addClass('animated fadeInUp');
      setTimeout(function(){
        $('.hero-text-container .hero-p:nth-child(2)').addClass('animated fadeInUp');
      }, 200);
      setTimeout(function(){
        $('.hero-text-container .hero-p:nth-child(3)').addClass('animated fadeInUp');
      }, 400);
    } else {
      $('.hero-text-container h1').removeClass('animated fadeInUp');
      setTimeout(function(){
        $('.hero-text-container .hero-p:nth-child(2)').removeClass('animated fadeInUp');
      }, 200);
      setTimeout(function(){
        $('.hero-text-container .hero-p:nth-child(3)').removeClass('animated fadeInUp');
      }, 400);
    }
  });
*/

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

  function animate() {
    $('.hero-text-container h1').addClass('animated fadeInUp');
    setTimeout(function(){
      $('.hero-text-container .hero-p:nth-child(2)').addClass('animated fadeInUp');
    }, 200);
    setTimeout(function(){
      $('.hero-text-container .hero-p:nth-child(3)').addClass('animated fadeInUp');
    }, 400);
  }

  function workAnimate() {
    $('.work-hero-logo').addClass('animated fadeInUp');
    setTimeout(function(){
      $('.work-first-img').addClass('animated fadeInUp');
    }, 100);
  }

  $('.work-item-role-overlay').hover(
    function() {
      $(this).children('.role').addClass('role-active');
      //$('.role').addClass('role-active');
    }, function() {
      $(this).children('.role').removeClass('role-active');
      //$('.role').removeClass('role-active');
    }
  );

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 0)
      }, 900, 'easeInOutExpo');
      event.preventDefault();
  });

});
