var common = {
	init: function() {
		common.main();
		common.carousel();
	},
	main: function(){

		var bLazy = new Blazy({});
		 
		$('.search-block').click( function(e){
			$(this).addClass('search-open');
		});
		$(document).mouseup(function (e){ 
			var block = $(".search-block"); 
			if (!block.is(e.target)
				&& block.has(e.target).length === 0) { 
				block.removeClass('search-open');
			}
		});
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
					items: 1,
					margin: 0
				},
				401:{
					items: 3,
					margin: 10
				},
				768:{
					items:1
				}
			}
		});
		$('.news-list').owlCarousel({
			loop:true,
			margin: 22,
			nav: false,
			dots: false,
			lazyLoad: true,
			autoplay:true,
			autoplayTimeout: 5000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items: 1,
					margin: 0
				},
				361:{
					items:2,
					margin: 19
				},
				768:{
					items: 3
				}
			}
		});

		$('.products-slider').owlCarousel({
			loop:true,
			margin: 30,
			nav: true,
			dots: true,
			lazyLoad: true,
			autoplay:true,
			autoplayTimeout: 5000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:3,
					margin: 20
				},
				768:{
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
			autoplay:true,
			autoplayTimeout: 5000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				415:{
					items:2
				},
				670:{
					items:3,
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
				}
			}
		})
			
	}
};

(function() {
	common.init();
}());


