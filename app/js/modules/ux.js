import { content } from './content';

export function start() {
	$( "html" ).keydown(function() {
		if(!content.trackingVars.begin){
			content.trackingVars.begin = true;
			$( ".container" ).css({"background-image": "url(./assets/content/background/images/active.png)"});
			clearTimeout(start);
			let start = setTimeout(function(){ 
				next();
			}, 2000);
		}
	});
}

function next() {
	if(content.trackingVars.allowNext){
		// advance to the next content to be displayed
		content.trackingVars.active++;
		// if content is there
		if(content.UX[content.trackingVars.active]){
			// for each type of content type
			for(let x = 0; x < content.definition.type.length; x++){
				// check what type it is 
				if(content.UX[content.trackingVars.active].type == content.definition.type[x]) {
					// display that content type on the page with the correct class
					content.create.message[content.trackingVars.active] = new content.definition.class[x](content.UX[content.trackingVars.active], content.trackingVars.active, next);	
				}
			}
		// if no content
		} else {
			// console.log("trigger finish timer 5 seconds");
			content.trackingVars.allowNext = false;
			clearTimeout(finishTimer);
			let finishTimer = setTimeout(function() { 
				// console.log("finish triggered");
				finish();
			}, 500);
		}	
	}
}

function finish() {
	// track currently existing notification & skype content
	let notifications = $('.notification').length, skypes = $('.skype').length;
	// if there is no longer any existing notification / skype content
	if(notifications == 0 && skypes == 0){
		// reset the displayed message array
		// remove all existing emails
		$( ".email" ).remove();
		// display the end screen background image
		$( ".container" ).css({"background-image": "url(./assets/content/background/images/end.png)"});
		// trigger the restart timer
		clearTimeout(restart);
		let restart = setTimeout(function() { 
			// once timer is complete reset background and all the experience to start again
			$( ".container" ).css({"background-image": "url(./assets/content/background/images/start.png)"});
			// reset the active tracking variables
			content.trackingVars.active = -1;
			//empty all other arrays + vars in the program
			content.create.message = [];
			content.trackingVars.begin = false;
			content.trackingVars.allowNext = true;
		}, 10000);
		// if content still exists
	} else {
		// remove the content
		$( ".notification" ).remove();
		$( ".skype" ).remove();
		// restart the finish function
		finish();
	}
}