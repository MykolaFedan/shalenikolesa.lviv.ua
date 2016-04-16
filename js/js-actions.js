$(document).ready(function(){

	$('.zoom-image').fancybox({
		helpers : {
			title : null,
			overlay : {
				css : {
					'background' : 'url(./js/fancy/fancybox_overlay.png) repeat transparent'
				}
			}
		},
		openEffect	: 'elastic',
    		closeEffect	: 'elastic'
	});	

	$('.show-popup').fancybox({
		helpers : {
			title : null,
			overlay : {
				css : {
					'background' : 'url(./js/fancy/fancybox_overlay.png) repeat transparent'
				}
			}
		},
		openEffect	: 'fade',
    		closeEffect	: 'fade'		
	});

	/* дата устанавливается в формате - ГОД - МЕСЯЦ - ДЕНЬ, при этом месяц начинается с 0 - январь */
	/*var untilDate = new Date('2013', '11', '31'); */
	/* или так: +число - количество дней(d), часов(h), минут(m) от текущей даты */
	 var untilDate = '+0d +9h +37m +15s';
	$('#top-timer').countdown({ until: untilDate, format: 'HMS' });

	jQuery("#feedback-slider").jcarousel({
	        scroll: 1,
	        wrap: 'last'
	});	

});

$(window).load(function() {

	$('.lables-slider').liMarquee({
		direction: 'left', 
		loop:-1,    
		scrolldelay: 500,
		scrollamount:45,
		circular: true,
		drag: false,
		hoverstop:true,
		xml:false
	});

});