var common = {
	init: function() {
		common.main();
		common.carousel();
	},
	main: function(){

		var bLazy = new Blazy({});

	},
	carousel: function(){

		$('.banner').owlCarousel({
			loop:true,
			margin: 0,
			nav: false,
			dots: true,
			lazyLoad: true,
			autoplay:true,
    		autoplayTimeout: 5000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});

		$('.products-slider').owlCarousel({
			loop:true,
			margin: 30,
			nav: true,
			dots: true,
			lazyLoad: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:4
				}
			}
		})
		$('.videos-slider').owlCarousel({
			loop:true,
			margin: 30,
			nav: true,
			dots: false,
			lazyLoad: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				}
			}
		})
		$('.about-slider').owlCarousel({
			loop:true,
			margin: 0,
			nav: true,
			dots: false,
			lazyLoad: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})
			
	}
};

(function() {
	common.init();
}());


