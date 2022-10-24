$(function () {
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

  $('.barbers-slider').slick({
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    fade: true
  });

  $('.market-home__slider').slick({
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    fade: true
  });

  $('.mainthihg-maithing__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    dots: false
  });

  $('.barbers-people__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true
  });

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