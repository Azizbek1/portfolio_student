window.onload = function () {
  // =======================
    // OWL CAROUSEL 
        let $owlCarousel = $('.owl-carousel')
        $owlCarousel.owlCarousel({
          items: 4,
          loop: true,
          responsive :{
              0: {
                  items: 2
              },
              576: {
                  items: 2
              },
              900: {
                  items: 3
              },
              992: {
                  items: 4
              }
          },
          autoplayTimeout: 1000,
          autoplay: true,
          autoplayHoverPause: true
      });
      $('.owl_start').on('click',function(){
        $owlCarousel.trigger('play.owl.autoplay',[1000])
      })
      $('.owl_stop').on('click',function(){
        $owlCarousel.trigger('stop.owl.autoplay')
      })
   
  
      // SLIDE OUR ============
      let slideout = new Slideout({
          'panel': document.getElementById('panel'),
          'menu': document.getElementById('menu'),
          'padding': 256,
          'tolerance': 70
        });
        // Toggle button
        document.querySelector('.gamb').addEventListener('click', function() {
          slideout.toggle();
        });
        document.querySelector('.close').addEventListener('click', function() {
          slideout.toggle();
        });
  // =======================
        
  
  
  
        // ====Header clone ============
      let options = {
          offset : 200
      }
      let header = new Headhesive('.menu-top' , options);
  // =======================
          
  
  
      // ???? tab toggle
      $('.lio').not(':first').hide();
      $('.tab-box').click(function(){
          $('.tab-box').removeClass('active').eq($(this).index()).addClass('active');
          $('.lio').hide().eq($(this).index()).fadeIn();
      })
  // ===========================
  
  
  
  
  // ====== Paralaks 
  let scene = document.getElementById('scene');
  let parallaxInstance = new Parallax(scene);
  // ===========================
      
     
  
  // ========== Particle js Molekuli
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#00d1ff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 7,
              "color": "#ffffff"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.2917079919655286,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 12.668918918918909,
              "size_min": 1.5982994094283678,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 116.68319678621143,
            "color": "#979797",
            "opacity": 0.8417859196719539,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": false,
              "mode": "bubble"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
          "retina_detect": true
      })
  // =====================================
  
  
  
  
  // ======= Меню в выборе -  Menu-link header
  let $links = $('.item');
  $links.click(function(e){
      e.preventDefault();
      $links.removeClass('active');
      let attr = $(this).addClass('active').attr('href')
      let target = $(attr).offset().top
      $('body, html').animate({
          scrollTop : target
      },1000)
  })
  
  
  
  // =====================================
  
      
      
      
     
  }