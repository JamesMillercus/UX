export class Email {
	/*
		Set up of data that controls the message
	*/
	constructor(data, number, next) {
		let url = data.url,
			posX = data.posX,
			posY = data.posY,
			pageW = $(window).width(),
			pageH = $(window).height(),
			audio = new Audio('./assets/content/email/sounds/Email.wav'),
			email = this,
			self = this;
		this.createEmail(url, number, data.delay, data.messageLength, posX, posY, pageW, pageH, data.width, data.height, email, audio, next);
		
		$( window ).resize(function() {
			email.resizer(number, pageW, pageH, data.width, data.height, posX, posY);
		});

	}
	/*
		Create message
	*/
	createEmail(url, number, delay, typelength, posX, posY, pageW, pageH, emailW, emailH, email, audio, next) {
		// console.log("EMAIL NUMBER = " + number);
		// console.log("EMAIL POS = "+ this.getPos(posX,pageW,emailW));
		// creation
		$( ".container" ).append( $( "<div class = 'email' id = 'email"+ number +"'> <form class= 'textbox' id = 'textbox" + number + "'> <input id = 'inputbox" + number + "' type='text' value=''></form></div>") );
		// positioning
		$( "#email"+number ).css({ "margin-left": this.getPos(posX,pageW,emailW)+"px", "margin-top": this.getPos(posY,pageH,emailH) + "px", "background-image": "url("+url+")", "z-index": number});
		// select input to type
		$( "#inputbox"+number ).focus().select();
		//play mp3
		audio.play();
		// destroy message after x seconds
		let timeout = setTimeout(function(){ 
			// trigger next pop up
			email.nextStep(number, next, timeout);
		}, delay);
		// destroy message after x keystrokes
		$( "#inputbox"+number ).keydown(function() {
			if(event.keyCode == 13) {
		      event.preventDefault();
		      return false;
		    }

			if(this.value.length + 2 > typelength) email.nextStep(number, next, timeout);
		});	
	}

	nextStep(number, next, timeout){
		clearTimeout(timeout);
		document.getElementById("inputbox"+number).disabled = true;
		next();
	}

	/*
		Calc message position
	*/
	getPos(pos, pageDimension, emailDimension){
		if(pos) return (pageDimension - emailDimension) / pos;
		return (pageDimension - emailDimension)
	}
	/*
		Browser re-size
	*/
	resizer(number, pageW, pageH, emailW, emailH, posX, posY){
		pageW = $(window).width(),
		pageH = $(window).height();
		$( "#email"+number ).css({ "margin-left": this.getPos(posX,pageW,emailW)+"px", "margin-top": this.getPos(posY,pageH,emailH) + "px"});	
	}
}