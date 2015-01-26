var assignment = {
	hideIfNoLink: function(){
		$('[src="https://"]').hide();
		if ($('iframe').is(":hidden")) {

			$('.resources').css({
				'width':'100%',
				'height': '275px',
			});
		};
	},
	init: function(){
		this.hideIfNoLink();
	},
};