// Playlist of songs (Add actual URLs to mp3 files)
const playlist = [
    { title: "Song 1", src: "musics/Y2meta.app-Kendrick-Lamar-Not-Like-Us-128-kbps.mp3" },
    { title: "Song 2", src: "musics/Drake-Knife-Talk-Ft-21-Savage-And-Project-Pat-(TrendyBeatz.com).mp3" },
    { title: "Song 3", src: "musics/Oliver_Tree_-_Life_Goes_On_CeeNaija.com_.mp3" },
    { title: "Song 4", src: "musics/ice_spice_think_u_the_shit_fart.mp3" },
    { title: "Song 5", src: "musics/dave_x_aj_tracey_thiago_silva_mp3_37239.mp3" },
    { title: "Song 6", src: "musics/denzel_curry_ultimate_lyrics_mp3_37584.mp3" },
];

let currentTrackIndex = 0;
let isPlaying = false;
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const volumeControl = document.getElementById('volume');
const currentSongElement = document.getElementById('current-song');

// Update the current song display
function updateSong() {
    const currentTrack = playlist[currentTrackIndex];
    audioPlayer.src = currentTrack.src;
    currentSongElement.textContent = `Now Playing: ${currentTrack.title}`;
}

// Toggle play/pause
playButton.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    } else {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

// Skip to next song
nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    updateSong();
    if (isPlaying) audioPlayer.play();
});

// Skip to previous song
prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    updateSong();
    if (isPlaying) audioPlayer.play();
});

// Adjust volume
volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value;
});

// Initialize with first track
updateSong();
