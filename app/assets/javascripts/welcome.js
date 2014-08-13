// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

var welcome = {
	slideshow: function(){
		$('#slideshow').fadeSlideShow({
		width: "100%",
		height: "100%",
		speed:750,
		interval: 4000,
		autoplay: true,
 		});
	},

	verticalAlign: function(){
		$('.slideshow-text').css({
			'position': 'relative',
			'top': '25%',
		});
	},

	init: function(){
		this.verticalAlign();
		this.slideshow();
	},
};
