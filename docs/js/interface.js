$(document).ready(function() {
	flexibility(document.documentElement);
	$("body").on("click", ".js-catalog-sort__select__link", function(e){
		e.preventDefault();
		$('.catalog-sort__select__list').slideToggle(50);
	})

	if($('.top-slider').length>0){
		var $topSlider = $('.top-slider');
		$topSlider.slick({
			speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:true,
			useTransform:true,
			accessibility: false,
			infinite: true,
			slidesToShow: 9,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 7,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						adaptiveHeight:true,
					}
				},
			]
		});
	}

	//TOOLTIP
	if ($('.tooltip').length>0) {
		$('.tooltip').tooltipster({
			animation: 'fade',
			delay: 100,
			contentCloning: true
		});
	}
	if ($('.tooltip-default').length>0) {
		$('.tooltip-default').tooltipster({
			animation: 'fade',
			delay: 100,
			contentCloning: true
		});
	}
	if ($('.tooltip-content').length>0) {
		$ ( '.tooltip-content' ). tooltipster ({
			functionInit : function ( instance , helper ) { var content = $ ( helper . origin ). find ( '.tooltip_content' ). detach ();
				instance . content ( content );
			},
			distance: 0,
			contentAsHTML:true,
			interactive: true,
		});
	}


	$("body").on("click", ".js-sidebar__toggle", function(e){
		e.preventDefault();
		$(this).parents('.sidebar__item').toggleClass('active');
		$(this).parents('.sidebar__item').find('.sidebar-submenu').slideToggle();
	});


	//FSTYLER
	if ($('.fs').length>0) {
		$('.fs').styler();
	}

	if ($('.js-phone-mask').length>0) {
		$('.js-phone-mask').inputmask('+7(999)999-99-99');
	}

	if ($('.r-tabs').length>0) {
		var activeTab = $('.r-tabs').attr('data-active');
		$('.r-tabs').responsiveTabs({
			startCollapsed: 'accordion',
			active: activeTab,
			activate: function(event, tab){
				if ($('.favorite-slider').length>0) {
					setTimeout(function(){
						$('.favorite-slider').slick('refresh');
					}, 300);
				}
			},
		});
	}



	//FOOTER-LINKS TOGGLE
	$("body").on("click", ".js-page-footer-menu__toggle", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.page-footer-menu__item').find('.page-footer-menu__list').slideToggle();
	});


	$('.js-truncate').jTruncate({
		length: 200,
		minTrail: 0,
		moreText: "Читать дальше",
		lessText: "Скрыть",
		moreAni: "fast",
		lessAni: 10
	});

	if ($('.res-table').length>0) {
		$('.res-table').resTables();
	}

	//FOOTER-LINKS TOGGLE
	$("body").on("click", ".js-password-toggle", function(e){
		e.preventDefault();
		$(this).toggleClass('active');

		var input = $(this).parents('.input-wrap').find('input');

		input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password');
	});



	$("body").on("click", ".js-list-toggle__link", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.list-toggle__list').slideToggle();
	});

	$(document).click(function (e){
		var div = $(".list-toggle");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.list-toggle__list').slideUp();
			$('.js-list-toggle__link').removeClass('active');
		}
	});



	$('.js-truncate-catalog').jTruncate({
		length: 480,
		minTrail: 0,
		moreText: "Читать дальше",
		lessText: "Скрыть",
		moreAni: "fast",
		lessAni: 10
	});

	$("body").on("click", ".js-catalog-favorite-link", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	});


	if($('.catalog-slider').length>0){
		var $catalogSlider = $('.catalog-slider');
		$catalogSlider.slick({
			//speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:true,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade:true,
		});
		$catalogSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			//console.log(nextSlide);
			return false;
		});
	}

	if($('.favorite-slider').length>0){
		var $favoriteSlider = $('.favorite-slider');
		$favoriteSlider.slick({
			//speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:true,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade:true,
		});
	}



	if($('.index-popular-slider').length>0){
		var $indexPopularSlider = $('.index-popular-slider');

		$indexPopularSlider.slick({
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: $('.index-popular-slider__left'),
			nextArrow: $('.index-popular-slider__right'),
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});
	}



	if($('.index-reviews__slider').length>0){
		var $indexReviewsSlider = $('.index-reviews__slider');



		$indexReviewsSlider.slick({
			//speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			//arrows:false,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: $('.index-reviews-slider__left'),
			nextArrow: $('.index-reviews-slider__right'),
			responsive: [
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});

	}

	if($('.novelty-slider_inner').length>0){
		var $noveltySliderInner = $('.novelty-slider_inner');
		$noveltySliderInner.slick({
			//speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			//arrows:false,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: $('.novelty-slider__left_inner'),
			nextArrow: $('.novelty-slider__right_inner'),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});
		

		$(window).on('load ready resize', function () {
<<<<<<< HEAD
		   var windowWidth = $(window).width();
		   if (windowWidth > 799) {
		   	$('.novelty-slider_inner .slick-slide.slick-active').eq(2).find('.catalog-descr').addClass('catalog-descr--left'); 

		     $('.novelty-slider_inner').on('afterChange', function() {
		     	// $('.novelty-slider_inner .slick-slide .catalog-descr').removeClass('catalog-descr--left');
		     	$('.novelty-slider_inner .slick-slide.slick-active').eq(2).find('.catalog-descr').addClass('catalog-descr--left');
		     	$('.novelty-slider_inner .slick-slide.slick-active').eq(1).find('.catalog-descr').removeClass('catalog-descr--left');
		     	$('.novelty-slider_inner .slick-slide.slick-active').eq(0).find('.catalog-descr').removeClass('catalog-descr--left');
		     });
		   }
		   else if (windowWidth > 0) {
		   	$('.novelty-slider_inner .slick-slide.slick-active').eq(1).find('.catalog-descr').addClass('catalog-descr--left'); 

		     $('.novelty-slider_inner').on('afterChange', function() {
		     	// $('.novelty-slider_inner .slick-slide .catalog-descr').removeClass('catalog-descr--left');
		     	$('.novelty-slider_inner .slick-slide.slick-active').eq(1).find('.catalog-descr').addClass('catalog-descr--left');
		     	$('.novelty-slider_inner .slick-slide.slick-active').eq(0).find('.catalog-descr').removeClass('catalog-descr--left');
		     });	
		   }
			// var windowWidth = $(window).width();
			// if (windowWidth > 799) {
			// 	$('.novelty-slider_inner .slick-slide.slick-active').eq(2).find('.catalog-descr').addClass('catalog-descr--left');
			//
			// 	$('.novelty-slider_inner').on('afterChange', function() {
			// 		$('.novelty-slider_inner .slick-slide .catalog-descr').removeClass('catalog-descr--left');
			// 		$('.novelty-slider_inner .slick-slide.slick-active').eq(2).find('.catalog-descr').addClass('catalog-descr--left');
			// 	});
			// }
			// else if (windowWidth > 0) {
			// 	$('.novelty-slider_inner .slick-slide.slick-active').eq(1).find('.catalog-descr').addClass('catalog-descr--left');
			//
			// 	$('.novelty-slider_inner').on('afterChange', function() {
			// 		$('.novelty-slider_inner .slick-slide .catalog-descr').removeClass('catalog-descr--left');
			// 		$('.novelty-slider_inner .slick-slide.slick-active').eq(1).find('.catalog-descr').addClass('catalog-descr--left');
			// 	});
			// }

		});
	}

	if($('.js-main-slider__list').length>0){

		$('.js-main-slider__list').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			swipe: false,
			infinite: false,
			asNavFor: '.js-main-slider__paginator',
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1439,
					settings: {
						arrows: false,
						infinite: false,
					}
				},
				{
					breakpoint: 768,
					settings: {
						infinite: false,
						swipe: true,
						arrows: false,
						autoplay: true,
						autoplaySpeed: 3000,
					}
				},
			]
		});

		$('.js-main-slider__paginator').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.js-main-slider__list',
			focusOnSelect: true,
			infinite: false,
			arrows: false,
			responsive: [
				{
					breakpoint: 1439,
					settings: {
						variableWidth: true,
						infinite: false,
					}
				},
				{
					breakpoint: 768,
					settings: {
						variableWidth: false,
						slidesToShow: 5,
						infinite: false,
					}
				},
			]
		});

		var windowWidth = window.innerWidth;
		var mobile = 767;

		$('.js-main-slider__list .slick-active').find('video').get(0).play();

		$('.js-main-slider__list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			$(this).find('.main-slider__item:eq(' + (currentSlide + 1) + ') video').each(function() {
				this.play();
			});
		});
	}


	if($('.novelty-slider').length>0){
		var $noveltySlider = $('.novelty-slider');



		$noveltySlider.slick({
			//speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			//arrows:false,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: $('.novelty-slider__left'),
			nextArrow: $('.novelty-slider__right'),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});

	}

	if($('.popular-slider').length>0){
		var $noveltySlider = $('.popular-slider');



		$noveltySlider.slick({
			//speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			//arrows:false,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: $('.novelty-slider__left.popular'),
			nextArrow: $('.novelty-slider__right.popular'),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});



		$(window).on('load ready resize', function () {
			var windowWidth = $(window).width();
			if (windowWidth > 1023) {
				$('.popular-slider .slick-slide.slick-active').eq(3).find('.catalog-descr').addClass('catalog-descr--left');

				$('.popular-slider').on('afterChange', function() {
					$('.popular-slider .slick-slide .catalog-descr').removeClass('catalog-descr--left');
					$('.popular-slider .slick-slide.slick-active').eq(3).find('.catalog-descr').addClass('catalog-descr--left');
				});
			} else if (windowWidth > 800) {
				$('.popular-slider .slick-slide.slick-active').eq(2).find('.catalog-descr').addClass('catalog-descr--left');
				$('.popular-slider').on('afterChange', function() {
					$('.popular-slider .slick-slide .catalog-descr').removeClass('catalog-descr--left');
					$('.popular-slider .slick-slide.slick-active').eq(2).find('.catalog-descr').addClass('catalog-descr--left');
				});
			}
			else if (windowWidth > 599) {
				$('.popular-slider .slick-slide.slick-active').eq(1).find('.catalog-descr').addClass('catalog-descr--left');
				$('.popular-slider').on('afterChange', function() {
					$('.popular-slider .slick-slide .catalog-descr').removeClass('catalog-descr--left');
					$('.popular-slider .slick-slide.slick-active').eq(1).find('.catalog-descr').addClass('catalog-descr--left');
				});
			}
		});


	}
	if($('.index-news-slider').length>0){
		var $indexNewsSlider = $('.index-news-slider');

		$indexNewsSlider.slick({
			//speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			//arrows:false,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: $('.index-news-slider__left'),
			nextArrow: $('.index-news-slider__right'),
		});
	}




	//MINUS-PLUS
	$("body").on("click", ".cart-input-toggle__minus", function(e){
		e.preventDefault();
		var $input = $(this).parents('.cart-input-toggle').find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
	});
	$("body").on("click", ".cart-input-toggle__plus", function(e){
		e.preventDefault();
		var $input = $(this).parents('.cart-input-toggle').find('input');
		var count = parseInt($input.val()) + 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
	});



	if($('.similar-slider').length>0){
		var $similarSlider = $('.similar-slider');
		var slideCount = null;


		$similarSlider.on('init', function(event, slick){
			slideCount = slick.slideCount;
			setSlideCount();
			setCurrentSlideNumber(slick.slidesToShow);
		});

		$similarSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			//console.log(nextSlide);
			setCurrentSlideNumber(nextSlide);
		});

		$similarSlider.slick({
			//speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			//arrows:false,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: $('.similar-slider__left'),
			nextArrow: $('.similar-slider__right'),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});




		function setSlideCount() {
			var $el = $('.slide-count-wrap').find('.total-count');
			$el.text(slideCount);
		}

		function setCurrentSlideNumber(currentSlide) {
			var $el = $('.slide-count-wrap').find('.current');
			$el.text(getActiveSlickLength());
		}

		function getActiveSlickLength(){
			return $('.catalog__item.slick-active').length + $('.slider__item.slick-active').length;
		}

	}



	if($('.reviews-slider').length>0){
		var $reviewsSlider = $('.reviews-slider');

		$reviewsSlider.slick({
			//speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			//arrows:false,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: $('.reviews-slider__left'),
			nextArrow: $('.reviews-slider__right'),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		});
	}

	$('.js-truncate-rev').jTruncate({
		length: 370,
		minTrail: 0,
		moreText: "Читать целиком",
		lessText: "Скрыть",
		moreAni: "fast",
		lessAni: 10
	});

	// if ($('.truncate_more').is(':hidden')) {
	//   	console.log('hidden')
	// } else {
	//   	console.log('not-hidden');
	// }


	$(".js-video").fancybox({
		speed : 330,
		transitionEffect: "slide",
		animationEffect: "zoom-in-out",
		infobar: false,
		buttons: [
			"close"
		],
		image : {
			protect : true,
		}
	});


	$(".js-inline").fancybox({
		speed : 330,
		transitionEffect: "slide",
		animationEffect: "zoom-in-out",
		infobar: false,
		buttons: [
			"close"
		],
	});


	$(".compareTable").tableHeadFixer({'left' : 1});


	$('body').on('click','.menu-btn', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.menu-mobile-list').toggleClass('active');
		$('.menu-mobile__bg').fadeToggle();
		$('body').toggleClass('hidden');
		//$('.menu-mobile-submenu').removeClass('active');
	});
	$('body').on('click','.menu-mobile__bg', function(e){
		e.preventDefault();
		$('.menu-btn').removeClass('active');
		$('.menu-mobile-list').removeClass('active');
		$(this).fadeOut();
		$('body').removeClass('hidden');
	});

	$('body').on('click','.js-mobile-toggle', function(e){
		e.preventDefault();
		$(this).next('.mobile-submenu').slideToggle();
		$(this).toggleClass('active');
	});



	$('body').on('click','.js-tile__link', function(e){
		e.preventDefault();
		$(this).next('.interior-popup').fadeIn();
	});
	$('body').on('click','.js-interior-popup__close', function(e){
		e.preventDefault();
		$(this).parents('.interior-popup').fadeOut();
	});



	//РАСШИРЕННЫЙ ФИЛЬТР
	$("body").on("click", ".js-extended-search-link", function(e){
		e.preventDefault();
		$('.extended').slideDown();
	});
	$("body").on("click", ".js-extended__close", function(e){
		e.preventDefault();
		$('.extended').slideUp();
	})




	//SELECT
	$(".js-select__input").on("keypress keyup blur",function (event) {
		var selectVal = parseFloat($(this).next(".select__val").text());
		console.log(selectVal);
		///*/
		$(this).val($(this).val().replace(/[^0-9\.]/g,''));
		if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
			event.preventDefault();
		}

		//*/
		$(this).parents('.select__wrapper').find('.select__val').text($(this).val());
	});
	$('.js-select__input').blur(function(){
		if( !$(this).val() ) {
			$(this).parents('.select__wrapper').find('.select__val').text('1.08');
		}
	});

	$("body").on("click", ".js-select__link", function(e){
		e.preventDefault();
		$(this).parents('.select__wrapper').find('.select__list').slideToggle(200);
	});
	$("body").on("click", ".js-select__item", function(e){
		e.preventDefault();
		var tTxt = $(this).text();

		$(this).parents('.select__wrapper').find('.select__item').removeClass('select__item--active');
		$(this).addClass('select__item--active');
		$(this).parents('.select__wrapper').find('.select__list').slideUp(100);
		$(this).parents('.select__wrapper').find('.select__link span').text(tTxt);
	});



	//TOP CHECKBOX TOGGLE
	// $("body").on("click", ".js-filter-toggle", function(e){
	// 	e.preventDefault();
	// 	$(this).parents('.top-select-toggle').find('.checkbox-item').addClass('active');
	// 	$(this).parents('.top-select-toggle').find(':checkbox').prop('checked', true);
	// });
	$(".top-select-toggle__collection .checkbox-item :checkbox").on('change', function () {
		if ($(this).prop('checked')) {
			//console.log('true');
		}else{
			$(this).parents('.top-select-toggle').find('.checkbox-item').removeClass('active');
		}
	});


	//add product to basket
	$('.add-prod-basket').on({
		click: function (e) {
			e.preventDefault();
			var valProdId = $(this).attr('data-prodid');
			var valProdCnt = $('#cnt_'+valProdId).val();

			$(this).addClass('js-add-prod-basket_active');

			if ($(this).parent().find('.select__item--active').text() == 'образец') {
				$.ajax({
					type: "POST",
					url: "/local/php_interface/include/ajaxSample.php",
					data: {
						id: valProdId
					},
					success: function (resp) {
						$('#modalsampleorder .popup-content').html(resp);
						$.fancybox.open({
							src  : '#modalsampleorder'
						});
						if ($('.js-phone-mask').length>0) {
							$('.js-phone-mask').inputmask('+7 (999) 999-99-99');
						}
					}
				});
				return false;
			}

			if(valProdId.length > 0){
				$.ajax({
					type: "POST",
					url: "/local/php_interface/include/ajax.php",
					dataType: "json",
					data: "idprod="+valProdId+"&cnt="+valProdCnt,
					success: function(data){
						$(".modal-order_centered-ctn").show();
						setTimeout(function(){
							$('.js-close-modal-order').parent().fadeOut();
						}, 10000);
						if(data.TYPE.length > 0 && data.TYPE == 'ERROR'){

						}
						else if(data.TYPE.length > 0 && data.TYPE == 'OK'){
							updateHeaderBasket();
							updateMainBasket();
						}
					}
				});
				return false;
			}
		}
	});

	$('.add-several-prod-basket').on({
		click: function (e) {
			e.preventDefault();
			var form = this.form;
			let arCheckId = [];
			$('input:checkbox:checked[name="fav-checkbox[]"]',form).each(function(){
				arCheckId.push($(this).val());
			});
			if(arCheckId.length > 0){
				idAddProd = JSON.stringify(arCheckId);
				console.log(idAddProd);
				$.ajax({
					type: "POST",
					url: "/local/php_interface/include/ajax_several.php",
					dataType: "json",
					data: "idprod="+idAddProd,
					success: function(data){
						if(data.TYPE.length > 0 && data.TYPE == 'ERROR'){
							alert('Ошибка добавления товаров');
						}
						else if(data.TYPE.length > 0 && data.TYPE == 'OK'){
							alert('Товары добавлены в корзину!');
						}
					}
				});
			}
		}
	});
	var texture = $("div.texture").find(".active").length;
	if (texture >= 1) {
		$("a.texture").html($("a.texture").html() + ": " + texture);
	}
	var appointment = $("div.appointment").find(".active").length;
	if (appointment >= 1) {
		$("a.appointment").html($("a.appointment").html() + ": " + appointment);
	}
	var color_wrap = $("div.color_wrap").find(".active").length;
	if (color_wrap >= 1) {
		$("a.color_wrap").html($("a.color_wrap").html() + ": " + color_wrap);
	}

	$(".main-slider").show()




	$(".tooltip-content").each(function(){
		$(this).show();
	})
});

if ($('.layout--interior').length>0) {
	$(window).on('resize.interior', function() {
		var scale = 1,
			$map = $('.interior'),
			orgn_width = 1920,
			curr_width = $map.width();
		scale = curr_width / orgn_width;

		var plusScale= 1 - scale;
		//console.log(plusScale);

		scaleOut = 1.1+(plusScale);
		//console.log(scale);

		$('.interior__tile').css('transform', 'scale('+scale+')');
		$('.scale-inner').css('transform', 'scale('+scaleOut+')');
	}).trigger('resize.interior');

}



$(function(){
	var shrinkHeader = 131;
	$(window).scroll(function() {
		var scroll = getCurrentScroll();
		if ( scroll >= shrinkHeader ) {
			$('.top-select,.layout').addClass('fixed');
		}
		else {
			$('.top-select,.layout').removeClass('fixed');
		}
	});
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});





$(window).resize(function () {

});

// $(window).load(function(){

// });
if ($('.layout--index').length>0) {
	var $window= $(window);
	win_height_padded = $window.height() * 1.1;
	isTouch= Modernizr.touch;
	$window.on('scroll', revealOnScroll);
	$(document).ready(function() {
		revealOnScroll();
	});
}

// functions
function revealOnScroll() {

	var scrolled = $window.scrollTop() - 100;
	$(".translated:not(.animated)").each(function () {
		var $this     = $(this),
			offsetTop = $this.offset().top;
		if (scrolled + win_height_padded > offsetTop) {
			if ($this.data('timeout')) {
				window.setTimeout(function(){
					$this.addClass('animated ' + $this.data('animation'));
				}, parseInt($this.data('timeout'),10));
			} else {
				$this.addClass('animated ' + $this.data('animation'));
			}
		}
	});
}


// links pages
/*
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 10px 0 30px; font-size: 16px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="news.html">News</a></li> \
		<li><a href="search.html">Search</a></li> \
		<li><a href="reg.html">Registration</a></li> \
		<li><a href="profile1.html">Profile1</a></li> \
		<li><a href="profile2.html">Profile2</a></li> \
		<li><a href="profile3.html">Profile3</a></li> \
		<li><a href="profile4.html">Profile4</a></li> \
		<li><a href="oformit.html">Oformit</a></li> \
		<li><a href="page404.html">Page404</a></li> \
		<li><a href="catalog.html">Catalog</a></li> \
		<li><a href="history.html">History</a></li> \
		<li><a href="favorite.html">Favorite</a></li> \
		<li><a href="text.html">Text</a></li> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="plitka.html">Plitka</a></li> \
		<li><a href="cart.html">Korzina</a></li> \
		<li><a href="product.html">Product</a></li> \
		<li><a href="menu.html">Menu</a></li> \
		<li><a href="sravnit.html">Sravnit</a></li> \
		<li><a href="interior.html">Interior</a></li> \
	</ol> \
</div>');
*/

$(document).ready(function () {
	$.ajax({
		type: "POST",
		url: "/local/php_interface/include/ajaxCompare.php",
		data: {
			get: 'Y',
			iblockId: 7
		},
		success: function (resp) {
			var jsonResp;
			try {
				jsonResp = JSON.parse(resp);
			} catch (e) {
			}
			if (jsonResp) {
				for (var val in jsonResp) {
					$('.add-to-compare[data-id=' + val + ']').addClass('active').attr('title', 'Убрать из сравнения');
				}
			}
		}
	});

	$(document).on('click', '.remove-basket-item', function (e) {
		var $this = $(this),
			id = $this.data('id');

		$.ajax({
			type: "POST",
			url: "/local/php_interface/include/ajaxRemoveBasketItem.php",
			data: {
				id: id
			},
			success: function (resp) {
				updateHeaderBasket();
				updateMainBasket();
			}
		});

		e.preventDefault();
	});
})

function updateHeaderBasket() {
	$.ajax({
		type: "POST",
		url: "/local/php_interface/include/ajaxHeaderBasket.php",
		success: function (resp) {
			$('.header-basket-content__init').html($(resp).html());
		}
	});
}

function updateMainBasket() {
	if ($('.main-basket__init').length > 0) {
		$.ajaxSetup({async: false});
		$.ajax({
			type: "POST",
			url: location.href,
			success: function (resp) {
				$('.main-basket__init').html($(resp).find('.main-basket__init').html());
				if ($('.tooltip-content').length > 0) {
					$('.tooltip-content').tooltipster({
						functionInit: function (instance, helper) {
							var content = $(helper.origin).find('.tooltip_content').detach();
							instance.content(content);
						},
						distance: 0,
						contentAsHTML: true,
						interactive: true,
					});

				}
				if ($('.tooltip').length > 0) {
					$('.tooltip').tooltipster({
						animation: 'fade',
						delay: 100,
					});
				}
				if ($('.tooltip-default').length > 0) {
					$('.tooltip-default').tooltipster({
						animation: 'fade',
						delay: 100,
					});
				}
			}
		});

	}
}

$(document).on('click', '.person-type__action', function () {
	var id = $(this).data('id');
	$('input[name=PERSON_TYPE]').val(id);
	$('#description_' + id).removeAttr('disabled');
	if (id == 1) {
		$('#description_2').attr('disabled', 'disabled');
	} else {
		$('#description_1').attr('disabled', 'disabled');
	}
	updateOrder();
});

function updateOrder() {
	$('input[name=DELIVERY_ID]').val($('.r-tabs-state-active .delivery-id__init:checked').val());
	var form = $('form[name=ORDER_FORM]'),
		form_data = new FormData(),
		sessid = '';

	form.find('input').each(function () {
		if ($(this).attr('name') == 'sessid' && $(this).attr('name')) {
			sessid = $(this).val();
		}
		if ($(this).attr('name')) {
			form_data.append('order[' + $(this).attr('name') + ']', $(this).val());
		}
	});

	form_data.append('sessid', sessid);
	form_data.append('soa-action', 'refreshOrderAjax');

	$.ajax({
		type: "POST",
		url: form.attr('action'),
		data: form_data,
		processData: false,
		contentType: false,
		success: function (resp) {
			if (resp.order.PAY_SYSTEM) {
				var html = '', is_checked = 0;
				for (k in resp.order.PAY_SYSTEM) {
					if (resp.order.PAY_SYSTEM[k].CHECKED == 'Y') {
						is_checked++;
					}
				}
				for (k in resp.order.PAY_SYSTEM) {
					if (is_checked == 0) {
						resp.order.PAY_SYSTEM[k].CHECKED = 'Y';
						is_checked++;
					}
					var logo = '';
					if (resp.order.PAY_SYSTEM[k].PSA_LOGOTIP_SRC) {
						logo = '<img src="' + resp.order.PAY_SYSTEM[k].PSA_LOGOTIP_SRC + '" alt="' + resp.order.PAY_SYSTEM[k].NAME + '" class="card-img">';
					}
					html += '<div class="radio-item">' +
						'         <input' +
						'                type="radio"' +
						'                id="radio_1_' + resp.order.PAY_SYSTEM[k].ID + '"' +
						'                name="c"' +
						'                value="' + resp.order.PAY_SYSTEM[k].ID + '"' +
						'                class="payment__init"' +
						(resp.order.PAY_SYSTEM[k].CHECKED == 'Y' ? ' checked="checked"' : '') +
						'        >' +
						'        <label for="radio_1_' + resp.order.PAY_SYSTEM[k].ID + '"' + (resp.order.PAY_SYSTEM[k].CHECKED == 'Y' ? ' class="active"' : '') + '>' +
						resp.order.PAY_SYSTEM[k].NAME + logo +
						'        </label>' +
						'    </div>';
				}
				$('.pay-system-block__init').html(html);
			}
		}
	});

}

$(document).on('change', '.delivery-id__init', function (e) {
	$('input[name=DELIVERY_ID]').val($(this).val());
	updateOrder();
});

$(document).on('change', '.pay-system-block__init input', function (e) {
	$('.pay-system-block__init label').removeClass('active');
});

function isValidEmailAddress(emailAddress) {
	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	return pattern.test(emailAddress);
};

$(document).on('submit', 'form[name=ORDER_FORM]', function (e) {
	e.preventDefault();

	var form = $(this),
		id = $('input[name=PERSON_TYPE]').val(),
		error = 0,
		city = $('#city_' + id).val(),
		street = $('#street_' + id).val(),
		house = $('#house_' + id).val(),
		housing = $('#housing_' + id).val(),
		flat = $('#flat_' + id).val();

	$('input[name=DELIVERY_ID]').val($('#tab-' + id).find('.delivery-id__init:checked').val());
	$('input[name=PAY_SYSTEM_ID]').val($('#tab-' + id).find('.payment__init:checked').val());

	$('#address_for_' + id).val('г.' + city + ', улица ' + street + (house.length > 0 ? ', дом ' + house : '') + (housing.length > 0 ? ', корпус ' + housing : '') + (flat.length > 0 ? ', помещение ' + flat : ''));

	$('#tab-' + id).find('.is-req').each(function () {
		if ($.trim($(this).val()).length <= 0) {
			$(this).addClass('err');
			error++;
		} else {
			$(this).removeClass('err');
		}
		if ($(this).hasClass('email')) {
			if (!isValidEmailAddress($.trim($(this).val()))) {
				$(this).addClass('err');
				error++;
			} else {
				$(this).removeClass('err');
			}
		}
	});

	if (error <= 0) {
		$.ajax({
			type: "POST",
			url: form.attr('action'),
			dataType: "html",
			data: form.serialize(),
			success: function (resp) {
				var json;
				if (resp) {
					try {
						json = JSON.parse(resp);
					} catch (e) {
						console.log('error');
					}
					if (json.order.REDIRECT_URL.length > 0) {
						window.location.href = json.order.REDIRECT_URL;
					}
				}
			}
		});
	}
});

$(document).on('change', '.quantity-input__init', function (e) {
	var $this = $(this),
		quantity = $this.val(),
		id = $this.data('id'),
		product_id = $this.data('pid');

	if (quantity <= 0 || isNaN(quantity)) {
		quantity = 1;
		$this.val(quantity);
	} else {
		$.ajax({
			type: "POST",
			url: "/local/php_interface/include/ajaxChangeBasketQuantity.php",
			data: {
				id: id,
				quantity: quantity,
				product_id: product_id
			},
			success: function (resp) {
				updateHeaderBasket();
				updateMainBasket();
			}
		});
	}
});

$(document).on('click', '.add-additional-product', function (e) {
	var $this = $(this),
		id = $this.data('id'),
		quantity = $(this).parent().parent().find('.additional-quantity__init').val();

	if (quantity <= 0 || isNaN(quantity)) {
		quantity = 1;
	}

	$.ajax({
		type: "POST",
		url: "/local/php_interface/include/ajax.php",
		data: {
			idprod: id,
			cnt: quantity
		},
		success: function (resp) {
			updateHeaderBasket();
			updateMainBasket();
		}
	});

	e.preventDefault();
})

/* compare */
$(document).on('click', '.add-to-compare', function (e) {
	var $this = $(this),
		id = $this.data('id'),
		iblockId = $(this).data('iblock');

	if ($this.hasClass('active')) {
		$this.removeClass('active').attr('title', 'Добавить в сравнение');
	} else {
		$this.addClass('active').attr('title', 'Убрать из сравнения');
	}

	$.ajax({
		type: "POST",
		url: "/local/php_interface/include/ajaxCompare.php",
		data: {
			id: id,
			iblockId: iblockId
		},
		success: function (resp) {
			$('.top-select-links__item--compare .top-select-links__count').text(resp);
		}
	});

	e.preventDefault();
});

$(document).on('click', '.remove-compare-item', function (e) {
	var $this = $(this),
		id = $this.data('id'),
		iblockId = $this.data('iblock');

	$.ajax({
		type: "POST",
		url: "/local/php_interface/include/ajaxCompare.php",
		data: {
			id: id,
			iblockId: iblockId
		},
		success: function (resp) {
			window.location.reload();
		}
	});

	e.preventDefault();
});

$(document).on('click', '.compare-links__clear', function (e) {
	$.ajax({
		type: "POST",
		url: "/local/php_interface/include/ajaxCompare.php",
		data: {
			all: 'Y'
		},
		success: function (resp) {
			window.location.reload();
		}
	});

	e.preventDefault();
});

$(document).on('click', '.select__item.js-select__item', function (e) {
	if ($(this).text() == 'образец') {
		var id = $(this).parents('form').find('.add-prod-basket').attr('data-prodid');

		$.ajax({
			type: "POST",
			url: "/local/php_interface/include/ajaxSample.php",
			data: {
				id: id
			},
			success: function (resp) {
				$('#modalsampleorder .popup-content').html(resp);
				$.fancybox.open({
					src  : '#modalsampleorder'
				});
				if ($('.js-phone-mask').length>0) {
					$('.js-phone-mask').inputmask('+7 (999) 999-99-99');
				}
			}
		});
		e.preventDefault();
		e.stopPropagation();
	}
});

$(document).on('click', '.cookie-popup span.close', function (e) {
	var popup = $(this).parents('.cookie-popup');

	$.ajax({
		type: "POST",
		url: "/include/cookie_popup.php",
		data: {set: 'Y'},
		success: function (resp) {
			popup.hide();
		}
	});
});


$(document).on('click', '.top-search-mobile__link', function (e) {
	$('.header-mobile-search').toggleClass('active');
	e.preventDefault();
});

$(document).on('change', '.js-select__input', function () {
	let value = $(this).val();
	var b = $(this).attr('id').split('_')[1];
	var input = $(this);
	var select =$(this).siblings('.select__val');
	if(value>=0) {
		$.ajax({
			type: "POST",
			url: "/local/php_interface/include/quantity.php",
			dataType: "json",
			data: "idprod=" + b + "&cnt=" + value,
			success: function (data) {
				input.val(data);
				select.html(data);

			}
		});
	}
});


//скролл до элемента
$(function () {
	$('.anchor[href^="#"]').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top - 80}, 800);
		return false;
	});
});

//липкий блок на странице о нас
$(window).on('load ready resize', function () {
	var windowWidth = $(window).width();

	if (windowWidth > 991) {
		stick();
	}
	else {
		unstick();
	}
});

function stick() {
	$("#sticker").sticky({
		topSpacing: 80,
		responsiveWidth: true
	});

	$("#sticker-order").sticky({
		topSpacing: 80,
		responsiveWidth: true,
		zIndex: 200,
		className: 'asd'
	});
}

function unstick() {
	$('#sticker').unstick();
	$('#sticker-order').unstick();
}

$(function () {
	$("body").on("click", ".js-close-modal-order", function(e){
		e.preventDefault();
		$(this).parent().fadeOut();
	});

	setTimeout(function(){
		$('.js-close-modal-order').parent().fadeOut();
	}, 10000);
});
$(function () {

	$(".main-slider").on("click", function () {
		$('.main-slider__item').each(function () {
			if (!$(this).hasClass("slick-active")) {
				if($(this).find('video')[0]) {
					$(this).find('video').get(0).pause();
				}
			}else
			{if($(this).find('video')[0]) {
				$(this).find('video').get(0).play();
			}}
		})
	})
})
$(document).ready(function () {
	function select() {
		var height = 0;
		$('.js_height_auto').find('.top-select-item').each(function (index, element) {
			if (index < 15) {
				height += $(element).height();
				height += 13;
			} else {
				$(element).parents('.top-select-list').css({'max-height': 'none'});
				$(element).parents('.top-select-list').height(height);
			}
		})
	};
	setTimeout(select, 2000);

	$('.brands').find('.top-slider__img').each(function (index, element) {
		var src = $(element).find('img').data('src');
		$(element).find('img').attr("src", src);
	})
})