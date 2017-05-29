import { Email } from './email';
import { Skype } from './skype';
import { Notification } from './notification';
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

export function next() {
	content.trackingVars.active++;
	if(content.UX[content.trackingVars.active]){
		// DISPLAY THAT CONTENT
		if(content.UX[content.trackingVars.active].type == "email") content.create.message[content.trackingVars.active] = new Email(content.UX[content.trackingVars.active], content.trackingVars.active, next);
		else if(content.UX[content.trackingVars.active].type == "skype") content.create.message[content.trackingVars.active] = new Skype(content.UX[content.trackingVars.active], content.trackingVars.active, next);
		else if(content.UX[content.trackingVars.active].type == "notification") {
			content.trackingVars.currentNotification = $('.notification').length;
			if( content.trackingVars.currentNotification >= 0 && content.trackingVars.currentNotification < 8) content.create.message[ content.trackingVars.active ] = new Notification(content.UX[ content.trackingVars.active  ], content.trackingVars.currentNotification, 1, next);
			else content.create.message[ content.trackingVars.active ] = new Notification(content.UX[ content.trackingVars.active  ], content.trackingVars.currentNotification, 2, next);	
		}
	// IF NO CONTENT
	} else {
		let finishTimer = setTimeout(function() { 
			finish();
		}, 1500);
	}
	
}

export function finish() {
	let notifications = $('.notification').length, skypes = $('.skype').length;
	if(notifications == 0 && skypes == 0){
		content.trackingVars.active = -1;
		$( ".email" ).remove();
		$( ".container" ).css({"background-image": "url(./assets/content/background/images/end.png)"});
		let restart = setTimeout(function() { 
			$( ".container" ).css({"background-image": "url(./assets/content/background/images/start.png)"});
			content.trackingVars.begin = false;
		}, 5000);
	} else {
		$( ".notification" ).remove();
		$( ".skype" ).remove();
		finish();
	}
}