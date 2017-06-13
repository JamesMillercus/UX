

/*
	Class that creates background sounds
*/


export class BackgroundSound {
	/*
		Set up of data that controls the sound
	*/
	constructor(data, number, next) {
		let audio = new Audio(data.url),
		backgroundsound = this,
		self = this;
		this.createSound(audio, next);
	}
	/*
		Create sound
	*/
	createSound(audio, next) {
		//play mp3
		audio.play();
		next();
		
	}
}