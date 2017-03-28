(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = {};

app.init = function () {
	app.events();
};

app.events = function () {
	$(function () {
		console.log('scroll down :)');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLElBQUosR0FBVyxZQUFXO0FBQ3JCLEtBQUksTUFBSjtBQUNBLENBRkQ7O0FBSUEsSUFBSSxNQUFKLEdBQWEsWUFBVTtBQUN0QixHQUFFLFlBQVU7QUFBQyxVQUFRLEdBQVIsQ0FBWSxnQkFBWjtBQUNULElBQUUsOEJBQUYsRUFBa0MsS0FBbEMsQ0FBd0MsWUFBVztBQUNuRCxPQUFJLFNBQVMsUUFBVCxDQUFrQixPQUFsQixDQUEwQixLQUExQixFQUFnQyxFQUFoQyxLQUF1QyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQTRCLEVBQTVCLENBQXZDLElBQTBFLFNBQVMsUUFBVCxJQUFxQixLQUFLLFFBQXhHLEVBQWtIO0FBQ2hILFFBQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0EsYUFBUyxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIsR0FBeUIsRUFBRSxXQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUErQixHQUFqQyxDQUFsQztBQUNBLFFBQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLE9BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixpQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFETCxNQUF4QixFQUVHLElBRkg7QUFHQSxZQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0YsR0FYQztBQVlILEVBYkQ7QUFjQSxDQWZEOztBQWlCQTtBQUNBLEVBQUUsWUFBVTtBQUNYLEtBQUksSUFBSjtBQUNBLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5pbml0ID0gZnVuY3Rpb24gKCl7XG5cdGFwcC5ldmVudHMoKTtcbn07XG5cbmFwcC5ldmVudHMgPSBmdW5jdGlvbigpe1xuXHQkKGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ3Njcm9sbCBkb3duIDopJyk7XG5cdCAgICAkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHQgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG5cdCAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG5cdCAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuXHQgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuXHQgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0ICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuXHQgICAgICAgIH0sIDEwMDApO1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0pO1xuXHR9KTsgXG59XG5cbi8vIGRvYyByZWFkeTpcbiQoZnVuY3Rpb24oKXtcblx0YXBwLmluaXQoKTtcbn0pO1xuXG5cblxuIl19
