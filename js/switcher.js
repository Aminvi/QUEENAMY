/*==============================
	STYLE SWITCHER SCRIPT INSTALLATION
 ===============================*/
 
(function($) {
	"use strict";

	$(".green" ).click(function(){
		
		$("#colors" ).attr("href", "css/style.css" );
		return false;
	});

	$(".blue" ).click(function(){
		$("#colors" ).attr("href", "css/blue.html" );
		return false;
	});

	$(".purple" ).click(function(){
		$("#colors" ).attr("href", "css/purple.html" );
		return false;
	});

	$(".orange" ).click(function(){
		$("#colors" ).attr("href", "css/orange.html" );
		return false;
	});

	$(".yellow" ).click(function(){
		$("#colors" ).attr("href", "css/yellow.html" );
		return false;
	});

	$(".nvblue" ).click(function(){
		$("#colors" ).attr("href", "css/nvblue.html" );
		return false;
	});

	$(".redcl" ).click(function(){
		$("#colors" ).attr("href", "css/red.html" );
		return false;
	});

	$(".pink" ).click(function(){
		$("#colors" ).attr("href", "css/pink.html" );
		return false;
	});

	// Style Switcher	
	$('#style-switcher').animate({
		left: '-220px'
	});

	$('#style-switcher h2 a').click(function(e){
		e.preventDefault();
		var div = $('#style-switcher');
		/*console.log(div.css('left'));*/
		if (div.css('left') === '-220px') {
			$('#style-switcher').animate({
				left: '0px'
			}); 
		} else {
			$('#style-switcher').animate({
				left: '-220px'
			});
		}
	});

	$('.colors li a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
    
})(jQuery);
