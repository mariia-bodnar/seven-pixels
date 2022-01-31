$(document).ready(function () {

    function animateTextTyping(el, speed) {
        let text = el.text();
        el.text('')
        let ele = '<span>' + text.split('').join('</span><span>') + '</span>';

        if (!speed) {
            let speed = 150;
        }

        $(ele).hide().appendTo(el).each(function (i) {
            $(this).delay(speed * i).css({
                display: 'inline',
                opacity: 0
            }).animate({
                opacity: 1
            }, speed);
        });
    }



    // var typed = new Typed('#typing', {
    //     strings: ["development", "solution", "Spirit"],
    //     typeSpeed: 150,
    //     backDelay: 1500,
    //     startDelay: 2500,
    //     loop: true,
    //     loopCount: 999,
    //     contentType: 'html',
    // });



    /* ---- particles.js config ---- */


    /*var count_particles, stats, update;
      stats = new Stats;
      stats.setMode(10);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector('.js-count-particles');
      update = function() {
        stats.begin();
        stats.end();
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);*/
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 30, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#b0b0b0"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {"enable": false, "speed": 0.8, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": true, "distance": 350, "color": "#b0b0b0", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": true,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "repulse"},
                "onclick": {"enable": true, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
                "push": {"particles_nb": 2},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });



    /* ---- particles.js1 config ---- */


    // burger
    $('.a-nav-toggle').on('click', function () {
        if ($('header').hasClass('body-menu-opened')) {
            $('header').removeClass('body-menu-opened').addClass('body-menu-close');
            $('nav .s1').animate({
                left: '-150vw'
            }, 0);
            $('nav .s2').animate({
                left: '-150vw'
            }, 300);
            $('nav .s3').animate({
                left: '-150vw'
            }, 500);
            $('header nav .menu').animate({
                top: '-100vh',
                opacity: '0'
            }, 0);
        } else {
            $('header').addClass('body-menu-opened').removeClass('body-menu-close');
            $('nav .s1').animate({
                left: '-10vw'
            }, 0);
            $('nav .s2').animate({
                left: '-10vw'
            }, 300);
            $('nav .s3').animate({
                left: '-10vw'
            }, 500);
            $('header nav .menu').animate({
                top: '0',
                opacity: '1'
            }, 700);
        }
    });

    $('.popup-manager').click(function () {
        event.preventDefault();
        $('.popup-modal.popup-modal-main .bg1').css({'left': '0', 'top': '0'});
        $('.popup-modal.popup-modal-main .bg2').css({'left': '0', 'top': '50vh'});
        $('.popup-modal.popup-modal-main .bg3').css({'left': '50vw', 'top': '0'});
        $('.popup-modal.popup-modal-main .bg4').css({'left': '50vw', 'top': '50vh'});
        $('.popup-modal.popup-modal-main .close').css({'transform': 'rotate(-45deg)'});
        setTimeout(function () {
            $('.popup-modal.popup-modal-main form').css('display', 'flex');
        }, 800);
    });
    $('.popup-modal.popup-modal-main .bg1, .popup-modal.popup-modal-main .bg2, .popup-modal.popup-modal-main .bg3, .popup-modal.popup-modal-main .bg4, .popup-modal.popup-modal-main .close').click(function () {
        $('.popup-modal.popup-modal-main .bg1').css({'left': '-50vw', 'top': '-50vw'});
        $('.popup-modal.popup-modal-main .bg2').css({'left': '100vw', 'top': '-50vh'});
        $('.popup-modal.popup-modal-main .bg3').css({'left': '-50vw', 'top': '100vh'});
        $('.popup-modal.popup-modal-main .bg4').css({'left': '100vw', 'top': '100vh'});
        $('.popup-modal.popup-modal-main .close').css({'transform': 'rotate(135deg)'});
        $('.popup-modal.popup-modal-main form').hide(0);
    });

    $('.popup-contacts-main').click(function () {
        event.preventDefault();
        $('.popup-contacts.popup-modal .bg1').css({'left': '0', 'top': '0'});
        $('.popup-contacts.popup-modal .bg2').css({'left': '0', 'top': '50vh'});
        $('.popup-contacts.popup-modal .bg3').css({'left': '50vw', 'top': '0'});
        $('.popup-contacts.popup-modal .bg4').css({'left': '50vw', 'top': '50vh'});
        $('.popup-contacts.popup-modal .close').css({'transform': 'rotate(-45deg)'});
        setTimeout(function () {
            $('.popup-contacts.popup-modal form').css('display', 'flex');
        }, 800);
    });
    $('.popup-contacts.popup-modal .bg1, .popup-contacts.popup-modal .bg2, .popup-contacts.popup-modal .bg3, .popup-contacts.popup-modal .bg4, .popup-contacts.popup-modal .close').click(function () {
        $('.popup-contacts.popup-modal .bg1').css({'left': '-50vw', 'top': '-50vw'});
        $('.popup-contacts.popup-modal .bg2').css({'left': '100vw', 'top': '-50vh'});
        $('.popup-contacts.popup-modal .bg3').css({'left': '-50vw', 'top': '100vh'});
        $('.popup-contacts.popup-modal .bg4').css({'left': '100vw', 'top': '100vh'});
        $('.popup-contacts.popup-modal .close').css({'transform': 'rotate(135deg)'});
        $('.popup-contacts.popup-modal form').hide(0);
    });


    new WOW().init();
    $(document).on('mosuemove', function () {
        $('.active .content h2, .active .content a, .active .content p').addClass('a-up');
    });

    // if( $('.headtel').hover() ) {
    // 	$('.headerContacts').css('display', 'block');
    // } else {
    // 	$('.headerContacts').css('display', 'none');
    // }

    $('.headtel').mouseenter(function () {
        $('.headerContacts').css('display', 'block');
    });

    if($(window).width() < 991) {
        $('.product').hover(function (){
            $(this).toggleClass('active');
            $(this).find('.desc').stop().slideToggle();
        });
    } else {
        $('.product').click(function (){
            $(this).toggleClass('active');
            $(this).find('.desc').stop().slideToggle();
        });
    }

});