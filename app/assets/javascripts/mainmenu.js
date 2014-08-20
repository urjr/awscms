var mainMenu = {

	isHidden: false,

	verifyIsHidden: function(){
		if ($('.main-bar-left').css('left') === '-225px'){
			this.isHidden = true;
			console.log('verifyIsHidden = ' + this.isHidden);
		} else {
			this.isHidden = false;
			console.log('verifyIsHidden = ' + this.isHidden);
		}
	},

	leftBarLock: function(){
		if ($(window).width() > 1240) {
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
		};
	},

	leftBarControl: function(){
		$(window).resize(function(){
			mainMenu.verifyIsHidden();
		});

		$('.show-menu').click(function(event){
			event.preventDefault();
			if (mainMenu.isHidden) {

				$('.main-bar-left').css({
					'left': 0,
				});

				$('.show-menu').html('Hide Menu');
				mainMenu.isHidden = false;

				console.log('isHidden = ' + this.isHidden);

			} else {

				$('.main-bar-left').css({
					'left': '',
				});

				$('.show-menu').html('Show Menu');
				mainMenu.isHidden = true;
				
				console.log('isHidden = ' + this.isHidden);

			};
		});
	},

	init: function(){
		this.leftBarLock();
		this.verifyIsHidden();
		this.leftBarControl();
	},
};