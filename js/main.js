 $(window).on('load', function () {
      $(".jm-loadingpage").fadeOut("slow");
 });

$(document).ready(function(){
    
    window.scroll(0, 0);
//Nice scroll initialization
	$("html").niceScroll({
		scrollspeed: 50,
		autohidemode : true,
		cursorwidth : 8,
		horizrailenabled: false,
		cursorborderradius: 8,
		cursorborder : "0",
		background : "rgba(48, 48, 48, .4)",
		cursorcolor : '#1f1f1f',
		zindex : 999
	});
    
    $('.link').click(function(){
	  var target = $(this.hash);

	  $('html, body').animate({
	      
	    scrollTop: target.offset().top -200
	  }, 1000);
	});
    
    
    var altura = $('nav.menu-tablet').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('nav.menu-tablet').addClass('fixed');
		} else {
			$('nav.menu-tablet').removeClass('fixed');
		}
	});
    
    $(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.bt-menu').click(function(event){
        event.preventDefault();
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};


});