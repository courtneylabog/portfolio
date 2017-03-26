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
		// $('#svgSpan').addClass('hidden');
	});
};

// doc ready:
$(function () {
	app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLElBQUosR0FBVyxZQUFXO0FBQ3JCLFNBQVEsR0FBUixDQUFZLE1BQVo7QUFDQSxLQUFJLE1BQUo7QUFDQSxDQUhEOztBQU1BLElBQUksTUFBSixHQUFhLFlBQVU7QUFDdkIsR0FBRSxNQUFGLEVBQVUsS0FBVixDQUNDLFlBQVU7QUFDVixVQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsSUFBRSxVQUFGLEVBQWMsV0FBZCxDQUEwQixRQUExQjtBQUNBO0FBQ0MsRUFMRjtBQU1DLENBUEQ7O0FBU0E7QUFDQSxFQUFFLFlBQVU7QUFDWCxLQUFJLElBQUo7QUFDQSxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGFwcCA9IHt9O1xuXG5hcHAuaW5pdCA9IGZ1bmN0aW9uICgpe1xuXHRjb25zb2xlLmxvZygnaW5pdCcpXG5cdGFwcC5ldmVudHMoKTtcbn07XG5cblxuYXBwLmV2ZW50cyA9IGZ1bmN0aW9uKCl7XG4kKCcjRkVEJykuaG92ZXIoXG5cdGZ1bmN0aW9uKCl7XG5cdGNvbnNvbGUubG9nKCd0aGlzd29ya3MnKVxuXHQkKCcjc3ZnU3BhbicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcblx0Ly8gJCgnI3N2Z1NwYW4nKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cdH0pXG59XG5cbi8vIGRvYyByZWFkeTpcbiQoZnVuY3Rpb24oKXtcblx0YXBwLmluaXQoKTtcbn0pO1xuXG5cblxuIl19
