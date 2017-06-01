import { content } from './content';

export function start(){
	$( "html" ).keydown(function() {
		if(!content.trackingVars.begin){
			content.trackingVars.begin = true;
			$( ".container" ).css({"background-image": "url(./assets/content/background/images/active.png)"});

			let start = setTimeout(function(){ 
				next();
			}, 2000);
		}
	});
}

function next() {
	// advance to the next content to be displayed
	content.trackingVars.active++;
	// if content is there
	if(content.UX[content.trackingVars.active]){
		// for each type of content type
		for(let x = 0; x < content.definition.type.length; x++){
			// check what type it is & then display it on the page
			if(content.UX[content.trackingVars.active].type == content.definition.type[x]) {
				// if notification, then trigger notification function
				if(content.UX[content.trackingVars.active].type == "notification") createNotification();
				// else display content
				else content.create.message[content.trackingVars.active] = new content.definition.class[x](content.UX[content.trackingVars.active], content.trackingVars.active, next);	
			}
		}
	// if no content
	} else {
		let finishTimer = setTimeout(function() { 
			finish();
		}, 1500);
	}	
}

function createNotification(){
	// check how many notifications exist
	let currentNotification = $('.notification').length;
	// if notifications are under 8 then put into first notification holder
	if( currentNotification >= 0 && currentNotification < 8) content.create.message[ content.trackingVars.active ] = new content.definition.class[2](content.UX[ content.trackingVars.active  ], currentNotification, 1, next);
	// else put into second notification holder
	else content.create.message[ content.trackingVars.active ] = new content.definition.class[2](content.UX[ content.trackingVars.active  ], currentNotification, 2, next);	
}

function finish() {
	// track currently existing notification & skype content
	let notifications = $('.notification').length, skypes = $('.skype').length;
	// if there is no longer any existing notification / skype content
	if(notifications == 0 && skypes == 0){
		// reset the active tracking variables
		content.trackingVars.active = -1;
		// reset the displayed message array
		content.create.message = [];
		// remove all existing emails
		$( ".email" ).remove();
		// display the end screen background image
		$( ".container" ).css({"background-image": "url(./assets/content/background/images/end.png)"});
		// trigger the restart timer
		let restart = setTimeout(function() { 
			// once timer is complete reset background and all the experience to start again
			$( ".container" ).css({"background-image": "url(./assets/content/background/images/start.png)"});
			content.trackingVars.begin = false;
		}, 5000);
		// if content still exists
	} else {
		// remove the content
		$( ".notification" ).remove();
		$( ".skype" ).remove();
		// restart the finish function
		finish();
	}
}