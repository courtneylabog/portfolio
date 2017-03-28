const app = {};

app.init = function (){
	app.events();
};

app.events = function(){
$('h1').hover(
	function(){
	$('#svgSpan').removeClass('hidden');
	$('#svgSpan').fadeToggle(4000);
	})
	$(function(){console.log('scroll test');
	    $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	 }); 
}

// doc ready:
$(function(){
	app.init();
});



