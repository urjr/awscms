var info = {
	titleLock: function(){
		$('.page-title').waypoint(function(direction){
			if (direction === 'down') {
				$(this).css({
					'position': 'fixed',
					'top': '0',
					'width': '300px'
				});
			};
		});

		$('.page-text').waypoint(function(direction){
			if (direction === 'up'){
				$('.page-title').css({
					'position': 'static',
				});
			};
		});
	},

	init: function(){
		this.titleLock();
	},
};