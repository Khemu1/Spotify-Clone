// Disable left-click on the entire document
document.addEventListener("click", function (e) {
	e.preventDefault();
});

// Disable mouse movement on the entire document
document.addEventListener("mousemove", function (e) {
	e.preventDefault();
});

// Disable the selection of text on the entire document
document.addEventListener("selectstart", function (e) {
	e.preventDefault();
});

// Disable the double-click effect on the entire document
document.addEventListener("dblclick", function (e) {
	e.preventDefault();
});

// //switching bettwen asides
let Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector(".playlists"));
let Scrollbar2 = window.Scrollbar;
Scrollbar.init(document.querySelector(".content-type"));
let Scrollbar3 = window.Scrollbar;
Scrollbar.init(document.querySelector("section.song-info .cont-1"));
//switcing bettwen aside elements
let elements = document.querySelectorAll("aside .icon");

elements.forEach((e) => {
	e.addEventListener("click", function () {
		elements.forEach((el) => {
			el.classList.remove("default");
		});

		e.classList.toggle("default");
	});
});

// cancel button for info
let closeButton = document.querySelector(".close-head");
let Song_info = document.querySelector("section.song-info");
let toggleSong_info = document.querySelector(".open-song-info");
let playlists = document.querySelectorAll(".type-playlists");
let playlist4 = document.querySelectorAll(".type-playlists .type-playlist")[7].innerHTML;

toggleSong_info.addEventListener("click", function () {
	let inner = toggleSong_info.querySelectorAll("path");
	let heads = document.querySelectorAll(".head-playlist");

	if (Song_info.classList.contains("closed")) {
		playlists.forEach((playlistElement) => {
			let children = playlistElement.children;
			for (let i = children.length - 1; i > 6; i--) {
				children[i].remove();
			}
		});
		inner.forEach((e) => {
			e.classList.toggle("normal-icon");
		});
		heads.forEach((e) => {
			e.style.flexBasis = "300px";
		});
		Song_info.classList.toggle("closed");
	} else {
		playlists.forEach((playlistElement) => {
			for (let i = 0; i < 1; i++) {
				const newP = document.createElement("div");
				newP.innerHTML = playlist4;
				newP.classList.add("type-playlist");
				playlistElement.appendChild(newP);
			}
		});

		inner.forEach((e) => {
			e.classList.toggle("normal-icon");
		});
		heads.forEach((e) => {
			e.style.flexBasis = "400px";
		});
		Song_info.classList.toggle("closed");
	}
});

closeButton.addEventListener("click", function () {
	let inner = toggleSong_info.querySelectorAll("path");
	let heads = document.querySelectorAll(".head-playlist");
	playlists.forEach((playlistElement) => {
		for (let i = 0; i < 1; i++) {
			const newP = document.createElement("div");
			newP.innerHTML = playlist4;
			newP.classList.add("type-playlist");
			playlistElement.appendChild(newP);
		}
	});

	inner.forEach((e) => {
		e.classList.toggle("normal-icon");
	});
	heads.forEach((e) => {
		e.style.flexBasis = "400px";
	});
	Song_info.classList.toggle("closed");
});

let asideIcons = document.querySelectorAll("div.icon");
asideIcons.forEach((icon) => {
	icon.addEventListener("click", function () {
		asideIcons.forEach((otherIcon) => {
			otherIcon.classList.remove("default");
		});
		icon.classList.toggle("default");
	});
});

// // open library
let open = document.querySelector(".library .head .left .open-button");
let aside = document.querySelector("main nav aside");
let expand = document.querySelector(".library .head .exp");
let playlist1 = document.querySelectorAll(".type-playlists .type-playlist")[0].innerHTML;
let playlist2 = document.querySelectorAll(".type-playlists .type-playlist")[1].innerHTML;
let playlist3 = document.querySelectorAll(".type-playlists .type-playlist")[2].innerHTML;

const originalSVG1 = open.innerHTML;
const originalSVG2 = expand.innerHTML;

open.addEventListener("click", function () {
	aside.classList.toggle("open");
	let heads = document.querySelectorAll(".head-playlist");
	if (aside.classList.contains("open")) {
		const newSVG1 = `
        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" class="normal-icon"></path></svg>`;
		open.innerHTML = newSVG1;

		// Loop through each playlist element
		playlists.forEach((playlistElement) => {
			let children = playlistElement.children;
			for (let i = 0; i < 2; i++) {
				children[0].remove(); // Remove the first two children
			}
		});
		document.querySelector(".library .head > *").style.justifyContent = "space-between";
		document.querySelector(".library .playlists").style.display = "block";
		document.querySelector("nav aside ul").style.alignItems = "flex-start";
		document.querySelector(".library .playlists").style.height = "calc(100vh - (98px + 72px + 10px + 16px + 88px))";
		heads.forEach((e) => {
			e.style.flexBasis = "350px";
		});
	} else {
		playlists.forEach((playlistElement) => {
			// Create newP elements
			for (let i = 0; i < 2; i++) {
				const newP = document.createElement("div");
				if (i === 0) {
					newP.innerHTML = playlist2;
				} else {
					newP.innerHTML = playlist1;
				}
				newP.classList.add("type-playlist");

				// Append the newP element to the playlistElement
				playlistElement.insertBefore(newP, playlistElement.firstChild);
			}
		});
		document.querySelector(".library .head > *").style.justifyContent = "center";
		document.querySelector(".library .playlists").style.display = "flex";
		document.querySelector("nav aside ul").style.alignItems = "center";
		document.querySelector(".library .playlists").style.height = "calc(100vh - (98px + 72px + 10px + 16px + 34px))";
		heads.forEach((e) => {
			e.style.flexBasis = "400px";
		});
		open.innerHTML = originalSVG1;
	}
});

expand.addEventListener("click", function () {
	aside.classList.toggle("expanded");
	let heads = document.querySelectorAll(".head-playlist");

	if (aside.classList.contains("expanded")) {
		const newSVG2 = `
      <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 leya-dW">
        <path d="M8.81 1A.749.749 0 0 0 7.53.47L0 7.99l7.53 7.521a.75.75 0 0 0 1.234-.815.75.75 0 0 0-.174-.243L2.87 8.74h12.38a.75.75 0 1 0 0-1.498H2.87l5.72-5.713c.14-.14.22-.331.22-.53z" class="normal-icon"></path>
      </svg>`;
		playlists.forEach((playlistElement) => {
			let children = playlistElement.children;
			for (let i = 0; i < 1; i++) {
				children[0].remove(); // Remove the first two children
			}
		});
		expand.innerHTML = newSVG2;
		heads.forEach((e) => {
			e.style.flexBasis = "350px";
		});
		document.querySelector(".library .playlists").style.height = "calc(100vh - (98px + 72px + 10px + 16px + 131px))";
	} else {
		playlists.forEach((playlistElement) => {
			// Create newP elements
			for (let i = 0; i < 1; i++) {
				const newP = document.createElement("div");
				newP.innerHTML = playlist3;

				newP.classList.add("type-playlist");

				// Append the newP element to the playlistElement
				playlistElement.insertBefore(newP, playlistElement.firstChild);
			}
		});
		expand.innerHTML = originalSVG2;
		heads.forEach((e) => {
			e.style.flexBasis = "400px";
		});
		document.querySelector(".library .playlists").style.height = "calc(100vh - (98px + 72px + 10px + 16px + 88px))";
	}
});

let close1 = document.querySelector(".close-search-1");
let close2 = document.querySelector(".close-search-2");
let open1 = document.querySelector(".open-search-1");
let open2 = document.querySelector(".open-search-2");
let searchBar1 = document.querySelector(".search-bar-1");
let searchBar2 = document.querySelector(".search-bar-2");

// close bars
function shrinkSearchBars() {
	if (searchBar1.value.trim() === "") {
		searchBar1.classList.add("shrink");
	}
	if (searchBar2.value.trim() === "") {
		searchBar2.classList.add("shrink");
	}
}

open1.addEventListener("click", function (e) {
	e.stopPropagation();
	searchBar1.classList.remove("shrink");
});

open2.addEventListener("click", function (e) {
	e.stopPropagation();
	searchBar2.classList.remove("shrink");
});

document.addEventListener("click", function () {
	shrinkSearchBars();
});

searchBar1.addEventListener("click", function (e) {
	e.stopPropagation();
});

searchBar2.addEventListener("click", function (e) {
	e.stopPropagation();
});

// view/hide close
close1.style.display = "none";
close2.style.display = "none";

searchBar1.addEventListener("input", function () {
	let inputValue = searchBar1.value.trim().toLowerCase();
	let libPlaylists = document.querySelectorAll(".library .playlist");
	libPlaylists.forEach((e) => {
		let playlistName = e.querySelector(".lib-playlist-name").textContent.toLowerCase();
		if (inputValue === "") {
			e.style.display = "flex"; // Display all playlists when input is empty
		} else if (playlistName.includes(inputValue)) {
			e.style.display = "flex";
		} else {
			e.style.display = "none";
		}
	});
});

searchBar2.addEventListener("input", function () {
	let inputValue = searchBar2.value.trim().toLowerCase();
	let libPlaylists = document.querySelectorAll(".library .playlist");
	libPlaylists.forEach((e) => {
		let playlistName = e.querySelector(".lib-playlist-name").textContent.toLowerCase();
		if (inputValue === "") {
			e.style.display = "flex"; // Display all playlists when input is empty
		} else if (playlistName.includes(inputValue)) {
			e.style.display = "flex";
		} else {
			e.style.display = "none";
		}
	});
});
close1.addEventListener("click", function (e) {
	e.stopPropagation();
	searchBar1.value = "";
	close1.style.display = "none";
});

close2.addEventListener("click", function (e) {
	e.stopPropagation();
	searchBar2.value = ""; // Clear the input field
	close2.style.display = "none"; // Hide the close button
});
// // adding the swiper

const swiper = new Swiper(".swiper", {
	slidesPerView: "auto",
	spaceBetween: 5,
	// slidesPerGroup: 4,
	// effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// making the player
let button = document.querySelector(".pause-play-player");

const progressBar = document.querySelector(".progress-bar");
const currentTimeIndicator = document.querySelector(".current-time");
const durationIndicator = document.querySelector(".duration");
const volumeSlider = document.querySelector(".volume-control input");
const muteIcon = document.querySelector(".volume-icon");
const loopButton = document.querySelector(".repeat ");
const shuffleButton = document.querySelector(".shuffle-player");
const queueButton = document.querySelector(".player-queue");

// Create a Howl instance with source URLs
const playlist = [
	{ songName: "Fehu", artist: `Wardruna`, url: "assets/songs/Wardruna - Fehu (First Flight of the White Raven Live Version).mp3", img: `<img src="/assets/imges/backgrounds/ab67616d00001e028d04475e55ae72b62e09111a.jpg" class="player-img" alt="">` },
	{ songName: "The Banks Of The Sansretour", artist: `Piotr Musiat`, url: "assets/songs/The Banks Of The Sansretour - Blood and Wine - The Witcher 3 - Soundtrack.mp3", img: `<img src="assets/imges/player-songs/Witcher.jpg" class="player-img" alt="">` },
	{ songName: "Bana", artist: `danhiem`, url: "assets/songs/Bana.mp3", img: `<img src="assets/imges/player-songs/Bana.jpg" class="player-img" alt="">` },
	{ songName: "Hefna", artist: `danhiem`, url: "assets/songs/Danheim - Hefna.mp3", img: `<img src="assets/imges/player-songs/Hefna.jpg" class="player-img" alt="">` },
];

let currentTrackIndex = 0;
const howls = []; // Array to store Howl instances

playlist.forEach((track, index) => {
	const howl = new Howl({
		src: [track.url],
		html5: true,
		loop: false,
		volume: 0.5,
		preload: true,
		onplay: () => {
			document.title = `${track.songName}  • ${track.artist}`;
			document.querySelector(".player-song-name").textContent = track.songName;
			document.querySelector(".player-artist").textContent = track.artist;
			document.querySelector(".player-song-img").innerHTML = track.img;
			button.innerHTML = `<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" fill="#000"></path></svg>`;
		},
		onpause: () => {
			button.innerHTML = `<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
      data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
      <path
          d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
          fill="#000"></path>
      </svg>`;
		},
		onend: () => {
			// Automatically play the next track when the current track ends
			playNextTrack();
		},
	});

	howls.push(howl);
});

// Play/pause button click event
document.querySelector(".pause-play-player").addEventListener("click", function () {
	const howl = howls[currentTrackIndex];
	if (howl.playing()) {
		howl.pause();
	} else {
		howl.play();
	}
});

// Function to play the next track
function playNextTrack() {
	const currentHowl = howls[currentTrackIndex];
	currentHowl.stop();

	currentTrackIndex++;
	if (currentTrackIndex >= playlist.length) {
		currentTrackIndex = 0; // Wrap around to the first track
	}

	const nextHowl = howls[currentTrackIndex];
	nextHowl.play();
}

// Next button click event
document.querySelector(".next-player").addEventListener("click", function () {
	playNextTrack();
});

// Previous button click event
document.querySelector(".prev-player").addEventListener("click", function () {
	const currentHowl = howls[currentTrackIndex];
	currentHowl.stop();

	currentTrackIndex--;
	if (currentTrackIndex < 0) {
		currentTrackIndex = playlist.length - 1;
	}

	const prevHowl = howls[currentTrackIndex];
	prevHowl.play();
});

// Update the progress bar and time indicators
howls[currentTrackIndex].on("play", () => {
	const updateInterval = setInterval(() => {
		const currentTime = howls[currentTrackIndex].seek();
		const duration = howls[currentTrackIndex].duration();

		if (!isNaN(duration)) {
			const progressValue = (currentTime / duration) * 100;
			progressBar.value = progressValue;
			currentTimeIndicator.textContent = formatTime(currentTime);
			durationIndicator.textContent = formatTime(duration);
		}

		if (!howls[currentTrackIndex].playing() || currentTime >= duration) {
			clearInterval(updateInterval);
		}
	}, 500);
});

// format time in mm:ss format
function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.floor(seconds % 60);
	return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

progressBar.addEventListener("input", () => {
	const seekTime = (progressBar.value / 100) * howls[currentTrackIndex].duration();
	howls[currentTrackIndex].seek(seekTime);
});
function updateVolume() {
	const volume = volumeSlider.value / 100;
	console.log("Volume Slider Element:", volumeSlider);
	console.log("Volume Slider Value:", volumeSlider.value);
	howls[currentTrackIndex].volume(volume);
}

volumeSlider.addEventListener("input", updateVolume);

// toggle mute state and update the mute button icon
function toggleMute() {
	const howl = howls[currentTrackIndex];
	if (howl.mute()) {
		howl.mute(false); // Unmute
		muteIcon.innerHTML = `<svg role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volume high"
		id="volume-icon" viewBox="0 0 16 16" data-encore-id="icon"
		class="Svg-sc-ytk21e-0 haNxPq">
		<path
			d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
			class="normal-icon"></path>
		<path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"
		class="normal-icon"></path>
	</svg>`;
	} else {
		howl.mute(true); // Mute
		muteIcon.innerHTML = `<svg role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volume high"
		id="volume-icon" viewBox="0 0 16 16" data-encore-id="icon"
		class="Svg-sc-ytk21e-0 haNxPq">
		<path
			d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
			fill="green"></path>
		<path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"
		fill="green"></path>
	</svg>`;
	}
}
muteIcon.addEventListener("click", toggleMute);

//  loop
// ...

// loop button click event
loopButton.addEventListener("click", function () {
	// Get the current Howl instance
	const currentHowl = howls[currentTrackIndex];

	const isLooping = !currentHowl.loop();
	currentHowl.loop(isLooping);
	let inner = loopButton.querySelector("path");
	if (isLooping) {
		inner.classList.toggle("normal-icon");
	} else {
		inner.classList.toggle("normal-icon");
	}
});
shuffleButton.addEventListener("click", function () {
	let inner = shuffleButton.querySelectorAll("path");
	inner.forEach((e) => {
		e.classList.toggle("normal-icon");
	});
});
queueButton.addEventListener("click", function () {
	let inner = queueButton.querySelectorAll("path");
	inner.forEach((e) => {
		e.classList.toggle("normal-icon");
	});
});
like = document.querySelectorAll(".heart");
like.forEach((e) => {
	e.addEventListener("click", function () {
		e.classList.toggle("heart");
	});
});
