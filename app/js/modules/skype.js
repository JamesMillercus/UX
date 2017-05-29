export class Skype {
	/*
		Set up of data that controls the message
	*/
	constructor(data, number, next) {
		let url = data.url,
			pageW = $(window).width(),
			pageH = $(window).height(),
			duration, 
			audio = $('#skypeA').get(0),
			skype = this;

		this.createSkype(url, number, data.delay, pageW, pageH, data.width, data.height, duration, audio, skype, next);
		
		$( window ).resize(function() {
			skype.resizer(number, pageW, pageH, data.width, data.height);
		});
	}
	/*
		Create message
	*/
	createSkype(url, number, delay, pageW, pageH, skypeW, skypeH, duration, audio, skype, next) {
		// creation
		$( ".container" ).append( $( "<div class = 'skype' id = 'skype"+ number +"'> </div>") );
		// positioning
		$( "#skype"+number ).css({ "margin-left": this.getPos(2, pageW,skypeW)+"px", "margin-top": this.getPos(2.2, pageH,skypeH) + "px", "background-image": "url("+url+")", "z-index": "10"+number});		
		//play mp3
		skype.playMP3(audio, delay, duration, next);	
		// when mp3 finishes
		audio.addEventListener("ended", function() {
			// remove skype box
	    	$( "#skype"+number ).remove();
	    });
	}
	/*
		Play MP3
	*/
	playMP3(audio, delay, duration, next){
		audio.play();
	    duration = audio.duration;
		if(!delay) delay = duration * 1000;
	    	// console.log("skype next();");
	    let timeout = setTimeout(function(){ 
	    	next();
		}, delay);
	}
	/*
		Calc message position
	*/
	getPos(pos, pageDimension, skypeDimension){
		// console.log("new pos = " + (pageDimension - skypeDimension)/ pos);
		return (pageDimension - skypeDimension)/ pos;
	}
	/*
		Browser re-size
	*/
	resizer(number, pageW, pageH, skypeW, skypeH){
		pageW = $(window).width(), pageH = $(window).height();
		$( "#skype"+number ).css({ "margin-left": this.getPos(2,pageW,skypeW)+"px", "margin-top": this.getPos(2.2,pageH,skypeH) + "px"});	
	}

}