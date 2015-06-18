function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

$(document)
	.ready(function() {
		$('.ryu').mouseenter(function() {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		})
		.mouseleave(function() {
			$('.ryu-ready').hide();
			$('.ryu-still').show();		
		})
		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show().animate(
				{'left': '1020px'},
				500,
				function() {
					$(this).hide();
					$(this).css('left', '520px');
				} 
			);		
		})
		.mouseup(function() {
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
			// ryu goes back to his ready position
		})
	})
	.keydown(function(x) {
		if (x.which == 88) {
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(x) {
		if (x.which == 88) {
			$('.ryu-throwing').hide();			
			$('.ryu-cool').hide();
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
	});


// /* javascript */
// $(document).on('keydown', function(e) {
//     if (e.keyCode === 88) { // 88 is the letter D on the keyboard
//         $('.ken').addClass('punch');
//         setTimeout(function() { $ken.removeClass('punch'); }, 150);
//     }
// });