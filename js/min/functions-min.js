$(function(){function a(){$(".hero-text-container h1").addClass("animated fadeInUp"),setTimeout(function(){$(".hero-p:nth-child(2)").addClass("animated fadeInUp")},400),setTimeout(function(){$(".hero-p:nth-child(3)").addClass("animated fadeInUp")},600)}function n(){$(".work-hero-logo").addClass("will-animate animated fadeInUp"),setTimeout(function(){$(".work-first-img").addClass("will-animate animated fadeInUp")},100)}a(),$(window).width()>768&&n(),$(window).scroll(function(){$(this).scrollTop()<=500?($(".hero-text-container h1").addClass("animated fadeInUp"),setTimeout(function(){$(".hero-text-container .hero-p:nth-child(2)").addClass("animated fadeInUp")},400),setTimeout(function(){$(".hero-text-container .hero-p:nth-child(3)").addClass("animated fadeInUp")},600)):($(".hero-text-container h1").removeClass("animated fadeInUp"),$(".hero-p:nth-child(2)").removeClass("animated fadeInUp"),$(".hero-p:nth-child(3)").removeClass("animated fadeInUp"))}),$(".menu-toggle").click(function(){$(".main-nav").toggleClass("menu-active"),setTimeout(function(){$(".main-nav > a:first-child").toggleClass("main-nav-a-active")},200),setTimeout(function(){$(".main-nav > a:nth-child(2)").toggleClass("main-nav-a-active")},300),setTimeout(function(){$(".main-nav > a:nth-child(3)").toggleClass("main-nav-a-active")},400)}),$("a, .main-nav").on("click",function(){$(".main-nav").removeClass("menu-active"),$(".main-nav > a").removeClass("main-nav-a-active")}),$(".work-item-role-overlay").hover(function(){$(this).children(".role").addClass("role-active")},function(){$(this).children(".role").removeClass("role-active")}),$("a.page-scroll").bind("click",function(a){var n=$(this);$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top-0},900,"easeInOutExpo"),a.preventDefault()})});