// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

var welcome = {
	slideshow: function(){
		$('#slideshow').fadeSlideShow({
		width: "100%",
		height: "100%",
		speed:2000,
		interval: 5000,
		autoplay: true,
 		});
	},

	init: function(){
		this.slideshow();
	},
};

// $(document).ready(function(){
// 	$('#slideshow').fadeSlideShow({
// 		width: "100%",
// 		height: "100%",
// 		speed:2000,
// 		interval: 5000,
// 		autoplay: true,
// 	});
// });
