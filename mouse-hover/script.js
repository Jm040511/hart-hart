const audio = document.getElementById("music");
const playPauseButton = document.getElementById("playPauseButton");
const playPauseIcon = document.getElementById("playPauseIcon");
const progressFill = document.getElementById("progress-fill");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");

// Play audio automatically on page load
document.addEventListener("DOMContentLoaded", () => {
    audio.play().catch((error) => {
        console.error("Autoplay was prevented:", error);  // If autoplay is blocked, log the error
    });
    // Change the play button to pause after autoplay
    playPauseIcon.classList.replace( "fa-pause", "fa-play");
});

audio.onloadedmetadata = () => {
    durationDisplay.textContent = formatTime(audio.duration);
};

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        playPauseIcon.classList.replace("fa-pause", "fa-play");
    }
}

audio.ontimeupdate = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${progress}%`;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
};

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function rewind() { audio.currentTime = Math.max(0, audio.currentTime - 10); }
function forward() { audio.currentTime = Math.min(audio.duration, audio.currentTime + 10); }
function shuffle() { console.log("Shuffle function"); }
function repeat() { console.log("Repeat function"); }
