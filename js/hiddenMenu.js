(function(){
    const btnOpenMenuEl = document.querySelector('.js-menuBtn');
    const menuEl = document.querySelector('.js-headerLinks');

    function onClickBtnOpenMenu (event) {
        event.preventDefault();
            menuEl.classList.toggle('menu-transform');
            btnOpenMenuEl.classList.toggle('nav__close-menu');
            btnOpenMenuEl.matches('.nav__close-menu') ? disableScroll() :  enableScroll();
    } 

    btnOpenMenuEl.addEventListener('click',onClickBtnOpenMenu)
})()