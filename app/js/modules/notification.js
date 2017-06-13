

/*
	Class that creates Notification messages
*/

import { slide, fade } from './animation.js';

export class Notification {
	/*
		Set up of data that controls the message
	*/
	constructor(data, number, next) {
	// constructor(data, number, next) {
		let url = data.url,
			posX = data.posX,
			posY = data.posY,
			pageW = $(window).width(),
			pageH = $(window).height(),
			audio = new Audio('./assets/content/notification/sounds/reminder.wav'),
			notification = this,
			self = this;
		// this.createNotification(url, number, data.delay, data.messageLength, posX, posY, pageW, pageH, data.width, data.height, notification, audio, next);
		this.createNotification(url, number, data.delay, data.messageLength, posX, posY, pageW, pageH, data.width, data.height, notification, audio, next);
		
		$( window ).resize(function() {
			notification.resizer(number, pageW, pageH, data.width, data.height, posX, posY);
		});

	}
	/*
		Create message
	*/
	createNotification(url, number, delay, typelength, posX, posY, pageW, pageH, notificationW, notificationH, notification, audio, next) {
		// creation
		$( "#notificationContainer1" ).append("<div class = 'notification' id = 'notification"+ number +"'></div>");
		// positioning
		$( "#notification"+number ).css({"background-image": "url("+url+")", "z-index":10 + number, "margin-top": 10, "margin-right": -$("#notification"+number).width()});
		slide($("#notification"+number));
		//play mp3
		audio.play();
		let duration = 5000;
		// destroy message after x seconds
		// console.log("start destroy timer");
		let destroy = setTimeout(function(){ 
			fade($( "#notification"+number ));
	    	// console.log("destroyed not after 3 seconds");
			// $( "div" ).remove( "#notification"+number );
		}, duration);

		if(!delay) delay = 200;
			
		let timeout = setTimeout(function(){ 
			notification.nextStep(next, destroy, timeout, number);
		}, delay);
	}

	nextStep(next, destroy, timeout, number){
    	// $( "#notification"+number ).remove();
		clearTimeout(timeout);
		// clearTimeout(destroy);
		next();
	}

	/*
		Calc message position
	*/
	getPos(number, notificationDimension, pageDimension){
		let notificationYseperator = (pageDimension / notificationDimension)-8.3;
		return (number*notificationDimension)*notificationYseperator;
		// if(number == 0) return number * notificationDimension;
		// else if(number >= 1 && number < 8 ) return (number*notificationDimension)*notificationYseperator;
		// else if(number >= 8 && number < 16) {
		// 	console.log("BROKEN!!");
		// 	return (((number-8) * notificationDimension) * notificationYseperator)+10;
		// }
	}
	/*
		Browser re-size
	*/
	resizer(number, pageW, pageH, notificationW, notificationH, posX, posY){
		pageW = $(window).width(), pageH = $(window).height();
		$( "#notification"+number ).css({ "margin-left": (pageW - notificationW)+"px", "margin-top": this.getPos(number,notificationH, pageH) + "px"});	
	}
}