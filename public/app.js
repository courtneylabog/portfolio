(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = {};

app.init = function () {
	console.log('init');
	app.events();
};

app.events = function () {
	$('#FED').hover(function () {
		console.log('thisworks');
		$('#svgSpan').toggleClass('hidden');
		$('#svgSpan').fadeToggle(2000);
		// $('#svgSpan').fadeIn(600);
		// $('#svgSpan').fadeOut(600);
	});
	$(function () {
		console.log('yo, this is a test');
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
};

// doc ready:
$(function () {
	app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLElBQUosR0FBVyxZQUFXO0FBQ3JCLFNBQVEsR0FBUixDQUFZLE1BQVo7QUFDQSxLQUFJLE1BQUo7QUFDQSxDQUhEOztBQUtBLElBQUksTUFBSixHQUFhLFlBQVU7QUFDdkIsR0FBRSxNQUFGLEVBQVUsS0FBVixDQUNDLFlBQVU7QUFDVixVQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsSUFBRSxVQUFGLEVBQWMsV0FBZCxDQUEwQixRQUExQjtBQUNBLElBQUUsVUFBRixFQUFjLFVBQWQsQ0FBeUIsSUFBekI7QUFDQTtBQUNBO0FBQ0MsRUFQRjtBQVFDLEdBQUUsWUFBVTtBQUFDLFVBQVEsR0FBUixDQUFZLG9CQUFaO0FBQ1QsSUFBRSw4QkFBRixFQUFrQyxLQUFsQyxDQUF3QyxZQUFXO0FBQ25ELE9BQUksU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWdDLEVBQWhDLEtBQXVDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNEIsRUFBNUIsQ0FBdkMsSUFBMEUsU0FBUyxRQUFULElBQXFCLEtBQUssUUFBeEcsRUFBa0g7QUFDaEgsUUFBSSxTQUFTLEVBQUUsS0FBSyxJQUFQLENBQWI7QUFDQSxhQUFTLE9BQU8sTUFBUCxHQUFnQixNQUFoQixHQUF5QixFQUFFLFdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixDQUFoQixDQUFYLEdBQStCLEdBQWpDLENBQWxDO0FBQ0EsUUFBSSxPQUFPLE1BQVgsRUFBbUI7QUFDakIsT0FBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3RCLGlCQUFXLE9BQU8sTUFBUCxHQUFnQjtBQURMLE1BQXhCLEVBRUcsSUFGSDtBQUdBLFlBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRixHQVhDO0FBWUYsRUFiRjtBQWNBLENBdkJEOztBQXlCQTtBQUNBLEVBQUUsWUFBVTtBQUNYLEtBQUksSUFBSjtBQUNBLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5pbml0ID0gZnVuY3Rpb24gKCl7XG5cdGNvbnNvbGUubG9nKCdpbml0Jylcblx0YXBwLmV2ZW50cygpO1xufTtcblxuYXBwLmV2ZW50cyA9IGZ1bmN0aW9uKCl7XG4kKCcjRkVEJykuaG92ZXIoXG5cdGZ1bmN0aW9uKCl7XG5cdGNvbnNvbGUubG9nKCd0aGlzd29ya3MnKVxuXHQkKCcjc3ZnU3BhbicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcblx0JCgnI3N2Z1NwYW4nKS5mYWRlVG9nZ2xlKDIwMDApO1xuXHQvLyAkKCcjc3ZnU3BhbicpLmZhZGVJbig2MDApO1xuXHQvLyAkKCcjc3ZnU3BhbicpLmZhZGVPdXQoNjAwKTtcblx0fSlcblx0JChmdW5jdGlvbigpe2NvbnNvbGUubG9nKCd5bywgdGhpcyBpcyBhIHRlc3QnKTtcblx0ICAgICQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdCAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcblx0ICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcblx0ICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG5cdCAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG5cdCAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHQgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXG5cdCAgICAgICAgfSwgMTAwMCk7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSk7XG5cdCB9KTsgXG59XG5cbi8vIGRvYyByZWFkeTpcbiQoZnVuY3Rpb24oKXtcblx0YXBwLmluaXQoKTtcbn0pO1xuXG5cblxuIl19
