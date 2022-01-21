$(document).ready(function() {
    $('.burger').click(function(event) {
      $('.burger,.header__content').toggleClass('active');
      $('.burger span:before,.burger span:after').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });



  $(function(){

    $('.menu__link').on('mouseover', function(e) {
        e.preventDefault();
  
        $('.menu__link').removeClass('menu__link--active');
        $(this).addClass('menu__item--active');
  
        $('.popup-img').removeClass('popup-img--active');
        $($(this).attr('href')).addClass('popup-img--active');
    });
  });

  // $(function(){

  //   $('.menu__item').on('mouseover', function(e) {
  //       e.preventDefault();
  
  //       $('.menu__item').removeClass('menu__item--active');
  //       $(this).addClass('menu__item--active');
  
  //       $('.popup-img').removeClass('popup-img--active');
  //       $($(this).attr('href')).addClass('popup-img--active');
  //   });
  // });


  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });


  $(function(){
    $('.shops__images-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        asNavFor: '.shops__info-slider',
        fade: true,
        prevArrow: false,
        nextArrow: false
    });

    $('.shops__info-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        asNavFor: '.shops__images-slider',
        fade: true,
        prevArrow: '<button class="slick-btn slick-prev">ПРЕДЫДУЩИЙ БАРБЕРШОП</button>',
        nextArrow: '<button class="slick-btn slick-next">СЛЕДУЮЩИЙ БАРБЕРШОП</button>'
    });

});

$(function(){
  $('.barbers-slider').slick({
      slidesToShow: 1,
      lazyLoad: 'ondemand',
      fade: true
  });

});

$(function(){
  $('.market-home__slider').slick({
      slidesToShow: 1,
      lazyLoad: 'ondemand',
      fade: true
  });

});

$(function(){

  $('.mainthing__link').on('click', function(e) {
      e.preventDefault();

      $('.mainthing__link').removeClass('mainthing__link--active');
      $(this).addClass('mainthing__link--active');

      $('.mainthing-mainthing').removeClass('mainthing-mainthing--active');
      $($(this).attr('href')).addClass('mainthing-mainthing--active');
  });
});

$(function(){

  $('.market__link').on('click', function(e) {
      e.preventDefault();

      $('.market__link').removeClass('market__link--active');
      $(this).addClass('market__link--active');

      $('.market__body').removeClass('market__body--active');
      $($(this).attr('href')).addClass('market__body--active');
  });
});


$(function(){
  $('.mainthihg-maithing__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      dots: false
  });
});


$(function(){
  $('.barbershop-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: '.barbers-info__slider'
  });

  $('.barbers-info__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.barbershop-slider',
      fade: true,
      arrows: false
  });
});

$(function(){
  $('.barbers-people__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true
  });
});
