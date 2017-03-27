const app = {};

app.init = function (){
	console.log('init')
	app.events();
};

app.events = function(){
$('h1').hover(
	function(){
	console.log('thisworks')
	$('#svgSpan').toggleClass('hidden');
	$('#svgSpan').fadeToggle(2000);
	// $('#svgSpan').fadeIn(600);
	// $('#svgSpan').fadeOut(600);
	})
	$(function(){console.log('yo, this is a test');
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



