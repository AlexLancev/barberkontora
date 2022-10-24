const headerBurger = document.querySelector('.burger');
const navListContent = document.querySelector('.header__content');
const bodyFixed = document.querySelector('body');

headerBurger.addEventListener('click', function() {

    this.classList.toggle('active');
    navListContent.classList.toggle('active');
    bodyFixed.classList.toggle('lock');

})