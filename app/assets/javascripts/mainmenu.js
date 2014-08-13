var mainMenu = {
	leftBarLock: function(){
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
	},

	init: function(){
		this.leftBarLock()
	},
};

// $(document).ready(function(){
// 	$('.main-bar-left').waypoint(function(direction){
// 		if (direction === 'down') {
// 			$(this).css({
// 				'position': 'fixed',
// 				'top': '0',
// 			});
// 		} else {
// 			$(this).css({
// 				'position': 'absolute',
// 				'top': '122px'
// 			});
// 		};
// 	});
// });