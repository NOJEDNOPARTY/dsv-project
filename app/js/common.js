var common = {
	init: function() {
		common.fixNavigation();
		common.mapFunc();
		common.main();
		common.carousel();
	},
	fixNavigation: function(){
		function fixPanel() {
			if ($(window).scrollTop() > 0) {
				$('header').addClass('fixed');
				$('body').css({'margin-top':$('header').height()})
			}else {
				$('header').removeClass('fixed')
				$('body').css({'margin-top':0})
			}
		};
		if($(window).width() < 993) {fixPanel();}
		$(window).scroll(function() {
			if($(window).width() < 993) {
				fixPanel();
			}
		});
	},
	mapFunc: function(){

		$('.contacts-list-item-title').click( function(e){
			e.preventDefault();
			$('.contacts-list-item').removeClass('active')
			$(this).closest('.contacts-list-item').toggleClass('active');
		});

		$('.contact-trigger').click(function(){
			// data info
			$('.contacts-list-item-cnt-row').removeClass('active')
			$(this).addClass('active');
			var mapItem = '.contacts-map .' + $(this).attr('data-map');
			var mapItemCnt = $(this).find('.contacts-row-content').clone();
			var img = $(this).attr('data-img');
			// popup element
			var popupCnt = $('.contacts-map .map-popup .map-popup-cnt');
			var popupImg = $('.contacts-map .map-popup .popup-img img');
			
			$('.map-item').removeClass('active'); // clear active view of map district
			$(popupCnt).empty(); // remove all of popup content
			mapItemCnt.appendTo(popupCnt); // add new content to popup
			popupImg.attr('src', img) // add new img for popup

			$(mapItem).addClass('active'); // show at map active district
			$('.contacts-map .map-popup').addClass('active'); // show popup with current info
		});

		$('.close-popup').click( function(e){
			$(this).closest('.map-popup').removeClass('active');
			$('.map-item').removeClass('active');
		});

		
		if($(window).width() < 768) {
			$('.contact-trigger').click(function(){
				var destination = $('#contactsMap').offset().top;
				$('html').animate({ scrollTop: destination - 100 }, 1100);
			});
		}

		$('.contacts-map .map-item').click(function(){
			// data info
			var mapItem = '.contacts-map .' + $(this).attr('data-map');
			var contentItem =  $('.contacts-list-item-cnt-row[data-map="' + $(this).attr('data-map') +'"')

			$('.contacts-list-item-cnt-row').removeClass('active')
			$(contentItem).addClass('active');
			var mapItemCnt = contentItem.find('.contacts-row-content').clone();
			
			var img = contentItem.attr('data-img');

			// popup element
			var popupCnt = $('.contacts-map .map-popup .map-popup-cnt');
			var popupImg = $('.contacts-map .map-popup .popup-img img');
			
			$('.map-item').removeClass('active'); // clear active view of map district
			$(popupCnt).empty(); // remove all of popup content
			mapItemCnt.appendTo(popupCnt); // add new content to popup
			popupImg.attr('src', img) // add new img for popup

			$(mapItem).addClass('active'); // show at map active district
			$('.contacts-map .map-popup').addClass('active'); // show popup with current info
		});
		$('.close-popup').click( function(e){
			$(this).closest('.map-popup').removeClass('active');
			$('.map-item').removeClass('active');
		});
		

	},
	main: function(){

		var bLazy = new Blazy({});

		$('.phone-mask').mask("+380(99)999-99-99");

				
		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('nav').addClass('open');
			$('.header-left').addClass('menu-open');
			$(".search-block").removeClass('search-open');
			
				$('.header-slogan-mobile').removeClass('hidden');
				if($(window).width() < 993) {
					$('header .logo').removeClass('hidden');
				}
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
			if($(window).width() < 993) {
				$('header .logo').addClass('hidden');
			}
		});

		$('.search-block button').click( function(e){
			$(".search-block").removeClass('search-open');
			
				$('.header-slogan-mobile').removeClass('hidden');
				if($(window).width() < 993) {
					$('header .logo').removeClass('hidden');
				}
		});

		$('.filter-trigger').click( function(e){
			$(this).closest('.catalog-filter').toggleClass('open');
		});

		$('.table-cnt-trigger').click( function(e){
			e.preventDefault();
			$(this).closest('.product-table-wrap').find('.product-table').addClass('open');
		});
		
		$('.table-cnt-close').click( function(e){
			e.preventDefault();
			$(this).closest('.product-table-wrap').find('.product-table').removeClass('open');
		});
		$(document).mouseup(function (e){ 
			var block = $(".search-block"); 
			var nav = $("nav"); 
			if (!block.is(e.target)
				&& block.has(e.target).length === 0) { 
				block.removeClass('search-open');
				
				$('.header-slogan-mobile').removeClass('hidden');
				if($(window).width() < 993) {
					$('header .logo').removeClass('hidden');
				}
			}
			if (!nav.is(e.target)
				&& nav.has(e.target).length === 0) { 
				nav.removeClass('open');
				$('.header-left').removeClass('menu-open');
				$('.hidden-menu').closest('li').removeClass('active');
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
		$('.owl-carousel').on('changed.owl.carousel', function(event) {
			var bLazy = new Blazy({});
		})
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
		$('.photos-slider').owlCarousel({
			loop:true,
			margin: 70,
			nav: true,
			dots: true,
			lazyLoad: true,
			center: true,
			// autoplay:true,
			// autoplayTimeout: 5000,
			// autoplayHoverPause:true,
			responsive:{
				0:{
					items:1,
					center: false,
					margin: 21,
				},
				371:{
					items:3,
					center: false,
					margin: 21,
				},
				701:{
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
			
		$('.owl-carousel').trigger('refresh.owl.carousel');
	}
};

(function() {
	common.init();
}());


