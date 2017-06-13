/* create ipod page
	- play sound on start
	- loop sound till finish
*/

import { Email } from './email';
import { Skype } from './skype';
import { Notification } from './notification';
import { BackgroundSound } from './backgroundsound';

let options = {
	email: {
		dimensions:{
			width: 750,
			height: 640
		},
		beginning: {
			delay: 10000,
			messageLength: 30
		},
		middle: {
			delay: 5000,
			messageLength: 20
		},
		finish: {
			delay: 3000,
			messageLength: 10
		}
	},
	skype: {
		dimensions:{
			width: 529,
			height: 201
		},
		beginning: {
			delay: null // 2000
		},
		middle: {
			delay: null, // 1000
		},
		finish: {
			delay: null, // 1000
		}
	},
	notification: {
		dimensions:{
			width: 399,
			height: 115
		},
		beginning: {
			delay: 3000
		},
		middle: {
			delay: 1000,
		},
		finish: {
			delay: 500,
		}
	},
};

let content = {
	// content that is displayed is stored & declared here
	create: {
			message:[]
	},
	// variables to keep track of where the user journey is
	trackingVars: {
		// track which content is currently active
		active: -1,
		// boolean to start & finish experience
		begin: false,
		allowNext: true
	},
	// definining & declaring the content
	definition: {
		// content type
		type: [
			"email",
			"skype",
			"notification",
			"backgroundsound"
		],
		// declare each content type with their associated class
		class: [
			Email,
			Skype,
			Notification,
			BackgroundSound
		]
	},
	// User Journey
	UX: [
	
	// BEGINNING
		// background sound
		{ "type": "backgroundsound", "url" : "./assets/content/background/sounds/talking.mp3"},
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-02.png", "posX" : 2, "posY" : 2, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.beginning.delay, "messageLength": options.email.beginning.messageLength },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-37.png", "posX" : 2.5, "posY" : 3, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.beginning.delay, "messageLength": options.email.beginning.messageLength },
		// skype content
		{ "type": "skype", "url" : "./assets/content/skype/images/ComputerScreen-v2-03.png", "width": options.skype.dimensions.width, "height": options.skype.dimensions.height, "delay": options.skype.beginning.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-17.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.beginning.delay },

	// MIDDLE
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-11.png", "posX" : 5, "posY" : 5, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.middle.delay, "messageLength": options.email.middle.messageLength },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-12.png", "posX" : 4, "posY" : 4, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.middle.delay, "messageLength": options.email.beginning.messageLength },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-13.png", "posX" : 1.5, "posY" : 6, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.middle.delay, "messageLength": options.email.beginning.messageLength },
		// skype content
		{ "type": "skype", "url" : "./assets/content/skype/images/ComputerScreen-v2-04.png", "width": options.skype.dimensions.width, "height": options.skype.dimensions.height, "delay": options.email.middle.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-18.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.middle.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-19.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.middle.delay },
		// email content
		// { "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-14.png", "posX" : 7, "posY" : 8, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.middle.delay, "messageLength": options.email.middle.messageLength },
		// // notification content
		// { "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-20.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.middle.delay },
		// // skype content
		// { "type": "skype", "url" : "./assets/content/skype/images/ComputerScreen-v2-05.png", "width": options.skype.dimensions.width, "height": options.skype.dimensions.height, "delay": options.skype.middle.delay },
		// // email content
		// { "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-15.png", "posX" : 6, "posY" : 2, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.middle.delay, "messageLength": options.email.beginning.messageLength },

	// FINISH
		// background sound
		{ "type": "backgroundsound", "url" : "./assets/content/background/sounds/talking.mp3"},
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-16.png", "posX" : 3, "posY" : 3, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-14.png", "posX" : 8, "posY" : 8, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-39.png", "posX" : 4, "posY" : 10, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-21.png", "width": options.email.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-22.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-23.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.notification, "delay": options.notification.finish.delay },
		// skype content
		{ "type": "skype", "url" : "./assets/content/skype/images/ComputerScreen-v2-06.png", "width": options.skype.dimensions.width, "height": options.skype.dimensions.height, "delay": options.skype.finish.delay },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-40.png", "posX" : 10, "posY" : 5, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-24.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-25.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-26.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-41.png", "posX" : 2, "posY" : 7, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-42.png", "posX" : 7, "posY" : 2, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-27.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-28.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-29.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-30.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// skype content
		{ "type": "skype", "url" : "./assets/content/skype/images/ComputerScreen-v2-07.png", "width": options.skype.dimensions.width, "height": options.skype.dimensions.height, "delay": options.skype.finish.delay },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-43.png", "posX" : 12, "posY" : 12, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-44.png", "posX" : 9, "posY" : 8, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
		// skype content
		{ "type": "skype", "url" : "./assets/content/skype/images/ComputerScreen-v2-08.png", "width": options.skype.dimensions.width, "height": options.skype.dimensions.height, "delay": options.skype.finish.delay },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-38.png", "posX" : 9, "posY" : 8, "width": options.email.dimensions.width, "height": options.email.dimensions.height, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-32.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-33.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-34.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-35.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-36.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-20.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-31.png", "width": options.notification.dimensions.width, "height": options.notification.dimensions.height, "delay": options.notification.finish.delay },
	]
}

export { content }