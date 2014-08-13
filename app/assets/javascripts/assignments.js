var assignment = {
	hideIfNoLink: function(){
		$('[src="http://"]').hide();
		if ($('iframe').is(":hidden")) {

			$('.vimeo, .resources').css({
				'width':'100%',
				'height': '275px',
			});
		};
	},
	init: function(){
		this.hideIfNoLink();
	},
};