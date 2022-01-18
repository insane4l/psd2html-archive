document.addEventListener('DOMContentLoaded', function() {
  const googleMap = () => {
    clientHeight = document.documentElement.clientWidth;

  }
  
  //Slider
  const slider = tns({
    container: '.carousel__inner',
    nav: true,
    controls: false,
    center: true,
    responsive: {
      767: {
        nav: true,
      },
      992: {
        nav: false,
      },
    },
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click',  function () {
    slider.goTo('next');
  });

});
