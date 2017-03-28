(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = {};

app.init = function () {
	app.events();
};

app.events = function () {
	$('h1').hover(function () {
		$('#svgSpan').removeClass('hidden');
		$('#svgSpan').fadeToggle(4000);
	});
	$(function () {
		console.log('scroll test');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLElBQUosR0FBVyxZQUFXO0FBQ3JCLEtBQUksTUFBSjtBQUNBLENBRkQ7O0FBSUEsSUFBSSxNQUFKLEdBQWEsWUFBVTtBQUN2QixHQUFFLElBQUYsRUFBUSxLQUFSLENBQ0MsWUFBVTtBQUNWLElBQUUsVUFBRixFQUFjLFdBQWQsQ0FBMEIsUUFBMUI7QUFDQSxJQUFFLFVBQUYsRUFBYyxVQUFkLENBQXlCLElBQXpCO0FBQ0MsRUFKRjtBQUtDLEdBQUUsWUFBVTtBQUFDLFVBQVEsR0FBUixDQUFZLGFBQVo7QUFDVCxJQUFFLDhCQUFGLEVBQWtDLEtBQWxDLENBQXdDLFlBQVc7QUFDbkQsT0FBSSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBZ0MsRUFBaEMsS0FBdUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE0QixFQUE1QixDQUF2QyxJQUEwRSxTQUFTLFFBQVQsSUFBcUIsS0FBSyxRQUF4RyxFQUFrSDtBQUNoSCxRQUFJLFNBQVMsRUFBRSxLQUFLLElBQVAsQ0FBYjtBQUNBLGFBQVMsT0FBTyxNQUFQLEdBQWdCLE1BQWhCLEdBQXlCLEVBQUUsV0FBVyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLENBQWhCLENBQVgsR0FBK0IsR0FBakMsQ0FBbEM7QUFDQSxRQUFJLE9BQU8sTUFBWCxFQUFtQjtBQUNqQixPQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDdEIsaUJBQVcsT0FBTyxNQUFQLEdBQWdCO0FBREwsTUFBeEIsRUFFRyxJQUZIO0FBR0EsWUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBWEM7QUFZRixFQWJGO0FBY0EsQ0FwQkQ7O0FBc0JBO0FBQ0EsRUFBRSxZQUFVO0FBQ1gsS0FBSSxJQUFKO0FBQ0EsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBhcHAgPSB7fTtcblxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKXtcblx0YXBwLmV2ZW50cygpO1xufTtcblxuYXBwLmV2ZW50cyA9IGZ1bmN0aW9uKCl7XG4kKCdoMScpLmhvdmVyKFxuXHRmdW5jdGlvbigpe1xuXHQkKCcjc3ZnU3BhbicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcblx0JCgnI3N2Z1NwYW4nKS5mYWRlVG9nZ2xlKDQwMDApO1xuXHR9KVxuXHQkKGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ3Njcm9sbCB0ZXN0Jyk7XG5cdCAgICAkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHQgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG5cdCAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG5cdCAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuXHQgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuXHQgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0ICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuXHQgICAgICAgIH0sIDEwMDApO1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0pO1xuXHQgfSk7IFxufVxuXG4vLyBkb2MgcmVhZHk6XG4kKGZ1bmN0aW9uKCl7XG5cdGFwcC5pbml0KCk7XG59KTtcblxuXG5cbiJdfQ==
