
let options = {
	email: {
		beginning: {
			delay: 5000,
			messageLength: 50
		},
		middle: {
			delay: 2000,
			messageLength: 20
		},
		finish: {
			delay: 1000,
			messageLength: 10
		}
	},
	skype: {
		beginning: {
			delay: 5000
		},
		middle: {
			delay: null,
		},
		finish: {
			delay: null,
		}
	},
	notification: {
		beginning: {
			delay: 1500
		},
		middle: {
			delay: 1000,
		},
		finish: {
			delay: 100,
		}
	},
};

let content = {
	create: {
			message:[]
	},
	trackingVars: {
		active: -1,
		begin: false,
		currentNotification: 0
	},
	UX: [

	// BEGINNING
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-44.png", "posX" : 2, "posY" : 2, "width": 750, "height": 640, "delay": options.email.beginning.delay, "messageLength": options.email.beginning.messageLength },
		// skype content
		{ "type": "skype", "url" : "./assets/content/skype/images/ComputerScreen-v2-03.png", "width": 529, "height": 201, "delay": options.email.beginning.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-17.png", "width": 359, "height": 115, "delay": options.notification.beginning.delay },

	// MIDDLE
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-44.png", "posX" : 5, "posY" : 5, "width": 750, "height": 640, "delay": options.email.middle.delay, "messageLength": options.email.middle.messageLength },
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-44.png", "posX" : 4, "posY" : 4, "width": 750, "height": 640, "delay": options.email.middle.delay, "messageLength": options.email.beginning.messageLength },
		// skype content
		{ "type": "skype", "url" : "./assets/content/skype/images/ComputerScreen-v2-03.png", "width": 529, "height": 201, "delay": options.email.middle.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-17.png", "width": 359, "height": 115, "delay": options.notification.middle.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-18.png", "width": 359, "height": 115, "delay": options.notification.middle.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-19.png", "width": 359, "height": 115, "delay": options.notification.middle.delay },
	

	// FINISH
		// email content
		{ "type": "email", "url" : "./assets/content/email/images/ComputerScreen-v2-44.png", "posX" : 3, "posY" : 3, "width": 750, "height": 640, "delay": options.email.finish.delay, "messageLength": options.email.finish.messageLength },
			// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-20.png", "width": 359, "height": 115, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-21.png", "width": 359, "height": 115, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-22.png", "width": 359, "height": 115, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-23.png", "width": 359, "height": 115, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-24.png", "width": 359, "height": 115, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-25.png", "width": 359, "height": 115, "delay": options.notification.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-26.png", "width": 359, "height": 115, "delay": options.notification.finish.delay },
		// skype content
		{ "type": "skype", "url" : "./assets/content/skype/images/ComputerScreen-v2-03.png", "width": 529, "height": 201, "delay": options.skype.finish.delay },
		// notification content
		{ "type": "notification", "url" : "./assets/content/notification/images/ComputerScreen-v2-17.png", "width": 359, "height": 115, "delay": options.notification.finish.delay },

	]
}



export { content }