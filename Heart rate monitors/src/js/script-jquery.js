$(document).ready(function() {
  //Catalog-block tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.catalog__wrapper').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  

  //Catalog-block elements content
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-element__content').eq(i).toggleClass('catalog-element__content_active');
        $('.catalog-element__list').eq(i).toggleClass('catalog-element__list_active');
      })
    });
  };
  
  toggleSlide('.catalog-element__details');
  toggleSlide('.catalog-element__back');
  
  //Modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  });

  $('.button_purchase').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__subtitle').text($('.catalog-element__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  //Validate forms
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 6
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста укажите ваше имя",
          minlength: jQuery.validator.format("*Минимум {0} символа!")
        },
        phone: {
          required: "Пожалуйста укажите ваш телефон",
          minlength: jQuery.validator.format("*Телефон введен неверно!")
        },
        email: {
          required: "Пожалуйста укажите вашу почту",
          email: "*Адрес почты введен неверно!"
        }
      },
    });
  };

  validateForms('#consultation-form');
  validateForms('#order form');
  validateForms('#consultation form');


  //отправка форм
  $('form').submit(function(e) {
    e.preventDefault(); //отключаем стандартное поведение браузера про сабмите (перезагрузку страницы) 
    $.ajax({
      type: "POST", //отправляем
      url: "mailer/smart.php", //куда отправляем
      data: $(this).serialize() //обрабатываем инфо для понимания сервером
    }).done(function() { //когда будет выполнено выше перечисленная функция
      $(this).find("input").val(""); //находим из выбранной формы инпуты и очищаем их от введенной информации (значение value "" - пустое)
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset'); //все формы на сайте должны обновиться(очиститься)
    });
    return false;
  });


  //возврат на первый экран
  $(window).scroll(function() { //берем все окно браузера и слежение за событием скролл
    if ($(this).scrollTop() > 2450) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    };
  });

  //плавная прокрутка
  $("a[href='#promo']").click(function() { // $("a[href^='#']") берем все ссылки с трибутом href котрый начинается^ с #
    const _href = $(this).attr("href"); //переменная берет из той ссылки на 0которю нажали(this) значение атрибута href
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});
