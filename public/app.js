(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = {};

app.init = function () {
	console.log('init');
	app.events();
};

app.events = function () {
	$('h1').hover(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLElBQUosR0FBVyxZQUFXO0FBQ3JCLFNBQVEsR0FBUixDQUFZLE1BQVo7QUFDQSxLQUFJLE1BQUo7QUFDQSxDQUhEOztBQUtBLElBQUksTUFBSixHQUFhLFlBQVU7QUFDdkIsR0FBRSxJQUFGLEVBQVEsS0FBUixDQUNDLFlBQVU7QUFDVixVQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsSUFBRSxVQUFGLEVBQWMsV0FBZCxDQUEwQixRQUExQjtBQUNBLElBQUUsVUFBRixFQUFjLFVBQWQsQ0FBeUIsSUFBekI7QUFDQTtBQUNBO0FBQ0MsRUFQRjtBQVFDLEdBQUUsWUFBVTtBQUFDLFVBQVEsR0FBUixDQUFZLG9CQUFaO0FBQ1QsSUFBRSw4QkFBRixFQUFrQyxLQUFsQyxDQUF3QyxZQUFXO0FBQ25ELE9BQUksU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWdDLEVBQWhDLEtBQXVDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNEIsRUFBNUIsQ0FBdkMsSUFBMEUsU0FBUyxRQUFULElBQXFCLEtBQUssUUFBeEcsRUFBa0g7QUFDaEgsUUFBSSxTQUFTLEVBQUUsS0FBSyxJQUFQLENBQWI7QUFDQSxhQUFTLE9BQU8sTUFBUCxHQUFnQixNQUFoQixHQUF5QixFQUFFLFdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixDQUFoQixDQUFYLEdBQStCLEdBQWpDLENBQWxDO0FBQ0EsUUFBSSxPQUFPLE1BQVgsRUFBbUI7QUFDakIsT0FBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3RCLGlCQUFXLE9BQU8sTUFBUCxHQUFnQjtBQURMLE1BQXhCLEVBRUcsSUFGSDtBQUdBLFlBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRixHQVhDO0FBWUYsRUFiRjtBQWNBLENBdkJEOztBQXlCQTtBQUNBLEVBQUUsWUFBVTtBQUNYLEtBQUksSUFBSjtBQUNBLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5pbml0ID0gZnVuY3Rpb24gKCl7XG5cdGNvbnNvbGUubG9nKCdpbml0Jylcblx0YXBwLmV2ZW50cygpO1xufTtcblxuYXBwLmV2ZW50cyA9IGZ1bmN0aW9uKCl7XG4kKCdoMScpLmhvdmVyKFxuXHRmdW5jdGlvbigpe1xuXHRjb25zb2xlLmxvZygndGhpc3dvcmtzJylcblx0JCgnI3N2Z1NwYW4nKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdCQoJyNzdmdTcGFuJykuZmFkZVRvZ2dsZSgyMDAwKTtcblx0Ly8gJCgnI3N2Z1NwYW4nKS5mYWRlSW4oNjAwKTtcblx0Ly8gJCgnI3N2Z1NwYW4nKS5mYWRlT3V0KDYwMCk7XG5cdH0pXG5cdCQoZnVuY3Rpb24oKXtjb25zb2xlLmxvZygneW8sIHRoaXMgaXMgYSB0ZXN0Jyk7XG5cdCAgICAkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHQgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG5cdCAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG5cdCAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuXHQgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuXHQgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0ICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuXHQgICAgICAgIH0sIDEwMDApO1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0pO1xuXHQgfSk7IFxufVxuXG4vLyBkb2MgcmVhZHk6XG4kKGZ1bmN0aW9uKCl7XG5cdGFwcC5pbml0KCk7XG59KTtcblxuXG5cbiJdfQ==
