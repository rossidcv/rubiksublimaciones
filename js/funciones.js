// Permite que se ejecute el codigo cuando se halla cargado la pagina
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
        $(".ul.navbar.nav li a").css({"color": "#000", "font-weight": "500"});
        flag = true;
      }
    } 
    else{
      if(flag){
        $(".navbar").css({"background-color": "rgba(0,0,0,0.5)", "backdrop-filter": "blur(10px)"});
        $(".ul.navbar.nav li a").css({"color": "#000", "font-weight": "500"});
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


/*Efecto marcas medios de pagor*/
$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});