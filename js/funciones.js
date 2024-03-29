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

/*Efecto Chapitas*/
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

// SLIDER HOME
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
  ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});

/*Contador*/
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
};
$(document).ready(function() {

$('.counter').each(function () {
$(this).prop('Counter',0).animate({
Counter: $(this).text()
}, {
duration: 4000,
easing: 'swing',
step: function (now) {
$(this).text(Math.ceil(now));
}
});
});

});
