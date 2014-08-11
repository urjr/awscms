// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
	$('.main-bar-left').waypoint(function(direction){
		if (direction === 'down') {
			$(this).css({
				'position': 'fixed',
				'top': '0',
			});
		} else {
			$(this).css({
				'position': 'absolute',
				'top': '122px'
			});
		};
	});

	$('#slideshow').fadeSlideShow({
		width: "100%",
		height: "100%",
		speed:2000,
		interval: 5000,
		autoplay: true,
	});
});
