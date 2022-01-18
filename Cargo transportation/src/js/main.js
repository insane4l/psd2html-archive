$(document).ready(function(){
  $('.promo-carousel__wrapper').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
    speed: 1500,
    prevArrow: '<div class="slick-arrow slick-arrow_left"></div>',
    nextArrow: '<div class="slick-arrow slick-arrow_right"></div>',
  });

  $('.advantages-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    prevArrow: '<div class="slick-arrow slick-arrow_left"></div>',
    nextArrow: '<div class="slick-arrow slick-arrow_right"></div>',
  });

  $('.news-page__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.news-page__slider-nav',
  });
  $('.news-page__slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '5px',
    asNavFor: '.news-page__slider',
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="news-page__slider-arrow news-page__slider-arrow_left"></div>',
    nextArrow: '<div class="news-page__slider-arrow news-page__slider-arrow_right"></div>',
  });






  const servicesBlocks = document.querySelector('.services-blocks');

  const showButton = event => {
    const target = event.target.closest('.services-block');

    if (target) {
      const servicesButton = target.querySelector('.services-block__button');
      const img = target.querySelector('.service-img');
      const drop = img.dataset.backdrop;

      servicesButton.classList.toggle('services-block__button_active');
      target.classList.toggle('services-block_active');

      img.dataset.backdrop = img.src;
      img.src = drop;

    }
  };

  servicesBlocks.addEventListener('mouseover', showButton);
  servicesBlocks.addEventListener('mouseout', showButton);




  //services-block tabs
  $('ul.services-page__list').on('click', 'li:not(.services-page__li_active)', function(event) {
    event.preventDefault();
    $(this)
      .addClass('services-page__li_active').siblings().removeClass('services-page__li_active')
      .closest('section.services-page').find('div.services-page__content').removeClass('services-page__content_active').eq($(this).index()).addClass('services-page__content_active');
  });
  


  //news-block tabs
  $('ul.news-items').on('click', 'li:not(.news-item_active)', function(event) {
    event.preventDefault();
    $(this)
      .addClass('news-item_active').siblings().removeClass('news-item_active')
      .closest('section.news-page').find('div.news-page__content').removeClass('news-page__content_active').eq($(this).index()).addClass('news-page__content_active');
  });

  //<a> dont scroll up (partners, social-icons)
  $('.partners-list__link, .contacts__social-link').on('click', function(e) {
    e.preventDefault();
  });



});