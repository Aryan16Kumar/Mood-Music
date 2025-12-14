//each mood has an array of songs
//each song is an object with titles and url

const moodPlaylists = {
    happy: [
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
    ],
    sad: [
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
    ],
    energetic: [
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
    ],
    calm: [
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
    ],
    romantic: [
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
    ],
    focused: [
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
        {title: "song name", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
    ],
}

//DOM

const moodButtons = document.querySelectorAll('.mood-buttons button');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songTitle = document.getElementById('songTitle');
const progressBar = document.getElementById('progress');
const volumeSlider = document.getElementById('volumeSlider');

//State Variables

let currentMood = null;
let currentPlaylist = [];
let currentSongIndex = 0;
let isPlaying = false;

//functions

function setMood(mood) {
    //saving the current mood
    currentMood = mood;

    //geting the playlist for this mood
    currentPlaylist = moodPlaylists[mood];

    //start from the first song
    currentSongIndex = 0;

    document.body.className = mood;

    //loading the first song
    loadSong(0);
}

function loadSong(index) {
    //geting the song object from the playlist
    const song = currentPlaylist[index];

    //Setting the audio player's source to the song url
    audioPlayer.src = song.url;

    //Updating song title on screen
    songTitle.textContent = song.title;
}

function togglePlay() {
    //check if mood is selected
    if (currentMood === null) {
        alert('Please select a mood first');
        return;
    }

    //If music is playing, Pause it
    if(isPlaying) {
        audioPlayer.pause();
        playBtn.textContent = '▶️' ;
    }

    //If musics is paused, play it
    else {
        audioPlayer.play();
        playBtn.textContent = '⏸️';
    }

    //toggle isPlaying state
    isPlaying = !isPlaying
}

function nextSong() {
    //check if Playlist exist
    if(currentPlaylist.length === 0) return;

    //move to next song (if at end go back to 0)
    currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;

    //Load the new song
    loadSong(currentSongIndex);

    //if music was playing keep playing
    if (isPlaying) {
        audioPlayer.play();
    }
}

function prevSong() {
    if(currentPlaylist.length === 0) return;

    //move to prevSong
    currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;

    //load new song
    loadSong(currentSongIndex);

    if(isPlaying) {
        audioPlayer.play();
    }
} 

function updateProgress() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + '%';
}

//EVENT LISTENERS

// Mood button clicks
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.id;
        setMood(mood);
        moodButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Music control buttons
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Volume Slider
volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value;
    audioPlayer.volume = volume / 100;
});

// Update the progress bar as song plays
audioPlayer.addEventListener('timeupdate', updateProgress);

// Auto-Play next song when current ends
audioPlayer.addEventListener('ended', nextSong);