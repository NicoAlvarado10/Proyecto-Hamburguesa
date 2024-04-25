document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav__listas');
    
    menuToggle.addEventListener('click', function(){
        navMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnsideMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnsideMenuToggle){
            navMenu.classList.remove('active')
        }
    });
    });

    //ANIMACIONES
    window.sr = ScrollReveal();

    ScrollReveal().reveal();

    //header

    sr.reveal('.img',{
        duration : 1000,
        origin : 'left',
        distance : '-100px',
    });

    sr.reveal('.header__subtitle',{
        duration : 1000,
        origin : 'bottom',
        distance : '100px',
        delay : 450,
    });

    sr.reveal('.header__title',{
        duration : 1500,
        origin : 'bottom',
        distance : '100px',
        delay : 500,
    });


    //MENU

    sr.reveal('.dos',{
        duration : 1000,
        origin : 'bottom',
        distance : '100px',
   
    });

    sr.reveal('.tres',{
        duration : 1000,
        origin : 'bottom',
        distance : '100px',
        delay : 450,
    });


    //EVENTS

    sr.reveal('.events__content',{
        duration : 1000,
        delay : 100,
    });


