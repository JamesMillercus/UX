

/*
	Class that creates Notification messages
*/


export class Notification {
	/*
		Set up of data that controls the message
	*/
	constructor(data, number, nContainer, next) {
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
		this.createNotification(url, number, data.delay, data.messageLength, posX, posY, pageW, pageH, data.width, data.height, notification, audio, nContainer, next);
		
		$( window ).resize(function() {
			notification.resizer(number, pageW, pageH, data.width, data.height, posX, posY);
		});

	}
	/*
		Create message
	*/
	createNotification(url, number, delay, typelength, posX, posY, pageW, pageH, notificationW, notificationH, notification, audio, nContainer, next) {
		// creation
		if(nContainer== 1) $( "#notificationContainer1" ).append("<div class = 'notification' id = 'notification"+ number +"'></div>");
		if(nContainer== 2) $( "#notificationContainer2" ).append("<div class = 'notification' id = 'notification"+ number +"'></div>");
		// check number of notifications
		if($('.notification').length > 1) $( "#notification"+number ).css({"margin-top": "10"});
		// positioning
		$( "#notification"+number ).css({"background-image": "url("+url+")", "z-index":10 + number});
		//play mp3
		audio.play();
		// destroy message after x seconds
		let destroy = setTimeout(function(){ 
	    	$( "#notification"+number ).remove();
		}, 1000);

		let timeout = setTimeout(function(){ 
			next();
		}, delay);
	}

	/*
		Calc message position
	*/
	getPos(number, notificationDimension, pageDimension){
		let notificationYseperator = (pageDimension / notificationDimension)-8.3;
		if(number == 0) return number * notificationDimension;
		else if(number >= 1 && number < 8 ) return (number*notificationDimension)*notificationYseperator;
		else if(number >= 8 && number < 16) return (((number-8) * notificationDimension) * notificationYseperator)+10;
	}
	/*
		Browser re-size
	*/
	resizer(number, pageW, pageH, notificationW, notificationH, posX, posY){
		pageW = $(window).width(), pageH = $(window).height();
		$( "#notification"+number ).css({ "margin-left": (pageW - notificationW)+"px", "margin-top": this.getPos(number,notificationH, pageH) + "px"});	
	}
}