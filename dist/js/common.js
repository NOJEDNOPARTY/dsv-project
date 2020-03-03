var common = {
	init: function() {
		common.main();
		common.carousel();
	},
	main: function(){

		var bLazy = new Blazy({});
		
		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('nav').addClass('open');
			$('.header-left').addClass('menu-open');
			$(".search-block").removeClass('search-open');
			$('.header-slogan-mobile').removeClass('hidden');
		}); 

		$('.nav-close').click(function(event){
			event.preventDefault();
			$('nav').removeClass('open');
			$('.header-left').removeClass('menu-open');
		}); 

		$('.hidden-menu .nav-back').click(function(event){
			event.preventDefault();
			$('.hidden-menu').closest('li').removeClass('active');
		}); 

		$('nav ul li span svg').click(function(event){
			event.preventDefault();
			if($(this).closest('li').hasClass('active') == false){
				$(this).closest('ul').find('li').removeClass('active');
			}
			$(this).closest('li').toggleClass('active');
		}); 

		$('.search-block .search-btn').click( function(e){
			$(this).closest('.search-block').addClass('search-open');
			$('.header-slogan-mobile').addClass('hidden');
		});

		$('.search-block button').click( function(e){
			$(".search-block").removeClass('search-open');
			$('.header-slogan-mobile').removeClass('hidden');
		});
		$(document).mouseup(function (e){ 
			var block = $(".search-block"); 
			var nav = $("nav"); 
			if (!block.is(e.target)
				&& block.has(e.target).length === 0) { 
				block.removeClass('search-open');
				$('.header-slogan-mobile').removeClass('hidden');
			}
			if (!nav.is(e.target)
				&& nav.has(e.target).length === 0) { 
				nav.removeClass('open');
				$('.header-left').removeClass('menu-open');
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
		$('.owl-carousel').trigger('refresh.owl.carousel');
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


