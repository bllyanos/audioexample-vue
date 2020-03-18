
export class SFx {
	constructor(src) {
		this.src = src;
		this.audio = new Audio(src);
	}
}

export const audios = [
	new SFx("/resah.mp3"),
	new SFx("/aimer.mp3")
];

export function startLoading() {
	for (let sf of audios) {
		sf.audio.play();
		sf.audio.pause();
		sf.audio.currentTime = 0;

		console.log(`${sf.src} loaded`);
	}
}

export function play(src) {
	return audios.find(a => a.src === src).audio.play();
}

export function pause(src) {
	return audios.find(a => a.src === src).audio.pause();
}

export function stop(src) {
	let ev = audios.find(a => a.src === src).audio.pause();
	audios.find(a => a.src === src).audio.currentTime = 0;
	return ev;
}