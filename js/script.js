$(document).ready(function () {
  // burger
  $('.burger').click(function () {
    console.log('click')
    $(this).toggleClass('active')
    $('.burger_line').toggleClass('burger_active')
    $('.menu_vertical').toggle('visible')
  });
  // toggle list
$('.border_b').on('click', function () {
  var kidd = $('.border_b').children('.display_none');
  var kid = $(this).children('.display_none');
  $(kidd).slideUp();
  $(kid).slideDown().siblings();
});

  particlesJS('particles-js', {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: '#b0b0b0' },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 },
        image: { src: 'img/github.svg', width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 0.8, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 350,
        color: '#b0b0b0',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 2 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  })

  /* ---- particles.js1 config ---- */

  // burger
  // $('.a-nav-toggle').on('click', function () {
  //   if ($('header').hasClass('body-menu-opened')) {
  //     $('header').removeClass('body-menu-opened').addClass('body-menu-close')
  //     $('nav .s1').animate(
  //       {
  //         left: '-150vw',
  //       },
  //       0,
  //     )
  //     $('nav .s2').animate(
  //       {
  //         left: '-150vw',
  //       },
  //       300,
  //     )
  //     $('nav .s3').animate(
  //       {
  //         left: '-150vw',
  //       },
  //       500,
  //     )
  //     $('header nav .menu').animate(
  //       {
  //         top: '-100vh',
  //         opacity: '0',
  //       },
  //       0,
  //     )
  //   } else {
  //     $('header').addClass('body-menu-opened').removeClass('body-menu-close')
  //     $('nav .s1').animate(
  //       {
  //         left: '-10vw',
  //       },
  //       0,
  //     )
  //     $('nav .s2').animate(
  //       {
  //         left: '-10vw',
  //       },
  //       300,
  //     )
  //     $('nav .s3').animate(
  //       {
  //         left: '-10vw',
  //       },
  //       500,
  //     )
  //     $('header nav .menu').animate(
  //       {
  //         top: '0',
  //         opacity: '1',
  //       },
  //       700,
  //     )
  //   }
  // })


  if ($(window).width() > 991) {
    $('.product').hover(function () {
      $(this).toggleClass('active').siblings().removeClass('active')
      $(this).find('.desc').stop().slideToggle()
    })
  } else {
    $('.product').click(function () {
      $(this)
        .toggleClass('active')
        .siblings()
        .removeClass('active')
        .find('.desc')
        .stop()
        .slideUp()
      $(this).find('.desc').stop().slideToggle()
    })
  }
 img_array = []
  // Initialize Swiper
  $(document).ready(function () {
    $('.mySwiper').each(function () {
      // let optionsStr = $(this).data('options');
      // let options = eval('({' + optionsStr + '})');
      var swiper = new Swiper('.mySwiper', {
        direction: 'vertical',
        autoHeight: true,
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        clickable: true,
        pagination: {
          el: '.swiper-pagination .inner-wrapper',
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '"><img src="images/icons/services-1.svg" alt=""></span>'
            )
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      $(this).addClass('swiper-inited')
    })
  })
})

