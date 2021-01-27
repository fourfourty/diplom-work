
$(function(){
  const bodyStateElem = document.querySelector('body');
  const menuElem = document.querySelector('.js-headerLinks');
  const btnMenu = document.querySelector('.js-menuBtn');
  $('.scrollto-1').on('click', function(e){
    if (bodyStateElem.style.position === 'fixed') {
      enableScroll();
      menuElem.classList.toggle('menu-transform');
      btnMenu.classList.toggle('nav__close-menu');
    }
      $('html,body').stop().animate({ scrollTop: $('[name="services"]').offset().top }, 1500);
      e.preventDefault();
  });
  $('.scrollto-2').on('click', function(e){
    if (bodyStateElem.style.position === 'fixed') {
      enableScroll();
      menuElem.classList.toggle('menu-transform');
      btnMenu.classList.toggle('nav__close-menu');
    }
      $('html,body').stop().animate({ scrollTop: $('[name="portfolio"]').offset().top }, 1500);
      e.preventDefault();
});
  $('.scrollto-3').on('click', function(e){
    if (bodyStateElem.style.position === 'fixed') {
        enableScroll();
        menuElem.classList.toggle('menu-transform');
        btnMenu.classList.toggle('nav__close-menu');
    }
        $('html,body').stop().animate({ scrollTop: $('[name="cost"]').offset().top }, 1500);
        e.preventDefault();
});
});