(() => {
	//null is problem with selector, null meaning it can't find it
	//DOM list starts js file
	let aud = document.querySelector('audio'),
		play = document.querySelector('#playButton'),
		pause = document.querySelector('#pauseButton'),
		rewind = document.querySelector('#rewindButton');

	//write the function for audio element
	function playAudio() {
		aud.play();
	}

	function pauseAudio() {
		aud.pause();
	}

	function rewindAudio() {
		aud.currentTime = 0;
	}

	//add event handling
	play.addEventListener('click', playAudio);
	pause.addEventListener('click', pauseAudio);
	rewind.addEventListener('click', rewindAudio);

})();