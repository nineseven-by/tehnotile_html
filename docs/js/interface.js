$(document).ready(function() {
	flexibility(document.documentElement);
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })

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
		$('.js-phone-mask').inputmask('+999 (99) 999-99-99');
	}

	if ($('.r-tabs').length>0) {
		$('.r-tabs').responsiveTabs({
			startCollapsed: 'accordion',
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
        var selectVal = parseFloat($('.select__val').text());

 		$(this).val($(this).val().replace(/[^0-9\.]/g,''));
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }

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
	$("body").on("click", ".js-filter-toggle", function(e){
		e.preventDefault();
		$(this).parents('.top-select-toggle').find('.checkbox-item').addClass('active');
		$(this).parents('.top-select-toggle').find(':checkbox').prop('checked', true);
	});
	$(".top-select-toggle__collection .checkbox-item :checkbox").on('change', function () {
        if ($(this).prop('checked')) {
            //console.log('true');
        }else{
        	$(this).parents('.top-select-toggle').find('.checkbox-item').removeClass('active');
        }
    });
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
