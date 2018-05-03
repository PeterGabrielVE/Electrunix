/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

(function($){
	
	// Number of Segundos in every time division
	var Días	= 24*60*60,
		Horas	= 60*60,
		Minutos	= 60;
	
	// Creating the plugin
	$.fn.countdown = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);
		
		var left, d, h, m, s, positions;

		// Initialize the plugin
		init(this, options);
		
		positions = this.find('.position');
		
		(function tick(){
			
			// Time left
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if(left < 0){
				left = 0;
			}
			
			// Number of Días left
			d = Math.floor(left / Días);
			updateDuo(0, 1, d);
			left -= d*Días;
			
			// Number of Horas left
			h = Math.floor(left / Horas);
			updateDuo(2, 3, h);
			left -= h*Horas;
			
			// Number of Minutos left
			m = Math.floor(left / Minutos);
			updateDuo(4, 5, m);
			left -= m*Minutos;
			
			// Number of Segundos left
			s = left;
			updateDuo(6, 7, s);
			
			// Calling an optional user supplied callback
			options.callback(d, h, m, s);
			
			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();
		
		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};


	function init(elem, options){
		elem.addClass('countdownHolder');

		// Creating the markup inside the container
		$.each(['Días','Horas','Minutos','Segundos'],function(i){
			var boxName;
			if(this=="Días") {
				boxName = "Días";
			}
			else if(this=="Horas") {
				boxName = "Horas";
			}
			else if(this=="Minutos") {
				boxName = "Minutos";
			}
			else {
				boxName = "Segundos";
			}
			$('<div class="count'+this+'">' +
				'<span class="position">' +
					'<span class="digit static">0</span>' +
				'</span>' +
				'<span class="position">' +
					'<span class="digit static">0</span>' +
				'</span>' +
				'<span class="boxName">' +
					'<span class="'+this+'">' + boxName + '</span>' +
				'</span>'
			).appendTo(elem);
			
			if(this!="Segundos"){
				elem.append('<span class="points">:</span><span class="countDiv countDiv'+i+'"></span>');
			}
		});

	}

	// Creates an animated transition between the two numbers
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// We are already showing this number
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:0,
				opacity:0
			},
			html:number
		});
		
		// The .static class is added when the animation
		// completes. This makes it run smoother.
		
		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:0,opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);