// Cambia tamaño Logo en Menú //
$(function() {
  $(document).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $('.logo-white').attr('src', 'imagenes/logo/logo-rubik-alternativo.png')
      }
      if ($(this).scrollTop() < 1) {
        $('.logo-black').attr('src', 'imagenes/logo/logo-rubik-alternativo.png');
      }
    }); 
});

// EFECTO MENÚ SCROLL
$(document).ready(function(){
  var flag = false;
  var scroll;
  var percentTime;
    
  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 0){
      if(!flag){
        $(".navbar").css({"background-color": "rgba(0,0,0,0.5)", "backdrop-filter": "blur(10px)"});
        flag = true;
      }
    } 
    else{
      if(flag){
        $(".navbar").css({"background-color": "rgba(0,0,0,0.5)", "backdrop-filter": "blur(10px)"});
        flag = false;
      }
    }     
  });
  var lastScrollTop = 0;
  $(window).scroll(function () {
    
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass('scrolled');
    }
    if ($(window).scrollTop() < 1) {
      $('.navbar').removeClass('scrolled');
    }
  });
});

/*Efecto Botón hamburger*/
$(document).ready(function(){
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });
});





/*Carousel Servicios Home*/
$(document).ready( function() {
  $(".productos-home").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });
});
