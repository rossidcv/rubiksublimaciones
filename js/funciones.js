$(document).ready(function(){
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });
});

// Permite que se ejecute el codigo cuando se halla cargado la pagina
$(function() {
  $(document).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $('.logo-white').attr('src', 'imagenes/logo/logo-rubik-alternativo.png')
      }
      if ($(this).scrollTop() < 1) {
        $('.logo-black').attr('src', 'imagenes/logo/logo-blanco.png');
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
        $(".navbar").css({"background-color": "#000"});
        $(".ul.navbar.nav li a").css({"color": "#000", "font-weight": "500"});
        flag = true;
      }
    } 
    else{
      if(flag){
        $(".navbar").css({"background-color": "rgba(0, 0, 0, 0.5)"});
        $(".ul.navbar.nav li a").css({"color": "#000", "font-weight": "500"});
        flag = false;
      }
    }     
  });
  var lastScrollTop = 0;
  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass('scrolled');
    }
    if ($(window).scrollTop() < 1) {
      $('.navbar').removeClass('scrolled');
    }
  });
});


