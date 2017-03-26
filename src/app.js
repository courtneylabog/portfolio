const app = {};

app.init = function (){
	console.log('init')
	app.events();
};


app.events = function(){
$('#FED').hover(
	function(){
	console.log('thisworks')
	$('#svgSpan').toggleClass('hidden');
	// $('#svgSpan').addClass('hidden');
	})
}

// doc ready:
$(function(){
	app.init();
});



