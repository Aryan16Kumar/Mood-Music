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

//Listens for clicks on mood buttons
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        //get the mood from buttons id
        const mood = button.id;
        
        //calls set mood function
        setMood(mood);

        //Add 'active' class to clicked button
        moodButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});