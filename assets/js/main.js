$(document).ready(function(){

	$('html').smoothScroll(800);

	new WOW().init();

	$('.video_active').magnificPopup({
  		type: 'iframe',
	});

	$('.counter').counterUp({
		delay: 50,
        time: 2000,
	});



	var owl = $('.owlo');
  	owl.owlCarousel({
	    margin: 10,
	    autoplay: true,
	    animateOut: 'fadeOut',
	    autoplayTimeout: 6000,
	    autoplayHoverPause: false,
	    touchDrag: true,
	    mouseDrag: true,
	    nav: true,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    loop: true,
	    responsive: {
	      0: {
	        items: 1
	      },
	      1000: {
	        items: 1
	      }
	    }
  	})


  	var owl = $('.owlu');
  	owl.owlCarousel({
	    margin: 10,
	    autoplay: true,
	    animateOut: 'fadeOut',
	    autoplayTimeout: 3000,
	    autoplayHoverPause: true,
	    touchDrag: true,
	    mouseDrag: true,
	    nav: true,
	    loop: true,
	    responsive: {
	      0: {
	        items: 1
	      },
	      500: {
	        items: 2
	      },
	      1000: {
	        items: 3
	      }
	    }
  	})

  	var mixer = mixitup('.container1');
  	var mixer = mixitup(containerEl);

  	var mixer = mixitup(containerEl, {
	    selectors: {
	        target: '.blog-item'
	    },
	    animation: {
	        duration: 300
	    }
	});

  	

})