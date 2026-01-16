//each mood has an array of songs
//each song is an object with titles and url

// YouTube API Key
const YOUTUBE_API_KEY = CONFIG.YoutubeAPIKey; 

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

//Youtube Player Variable
let player;
let playerReady = false;

//intialize Youtube Player when API loads
window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('youtubePlayer', {
        height: '0',
        width: '0',
        playerVars: {
           'playsinline': 1,
           'controls' : 0, 
        },
        events: {
            'onReady': onPlayerReady,
            'onstateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    playerReady = true;
    console.log('YouTube Player is ready');
}

function onPlayerStateChange(event)  {
    //when video ends (state 0), play next song
    if (event.data === 0) {
        nextSong();
    }
}

//functions

async function setMood(mood) {
    //saving the current mood
    currentMood = mood;

    //Show loading message
    songTitle.textContent = 'Loading Songs...';

    //get yt videos for this mood
    const youtubePlaylist = await searchYouTubeByMood(mood);

    //use youtube playlist if available, else fallback to predefined playlist
    if (youtubePlaylist.length > 0) {
        currentPlaylist = youtubePlaylist;
    } else {
        currentPlaylist = moodPlaylists[mood];
    }

    //start from first song
    currentSongIndex = 0;

    //change theme based on mood
    document.body.className = mood;

    //loading the first song
    loadSong(0);
}

function loadSong(index) {
if (!currentPlaylist || currentPlaylist.length === 0) return;

    const song = currentPlaylist[index];

    //Update Song title
    songTitle.textContent = song.title;

    //Load Youtube video if player is ready
    if (playerReady && song.videoId) {
        player.loadVideoById(song.videoId);
        player.pauseVideo();//Dont autoplay yet
    }
}

function togglePlay() {
    //check if mood is selected
    if (currentMood === null) {
        alert('Please select a mood first');
        return;
    }

    if(!playerReady) {
        alert('Player is loading, please wait');
        return;
    }

    //If music is playing, Pause it
    if(isPlaying) {
        player.pauseVideo();
        playBtn.textContent = '▶️' ;
    }

    //If musics is paused, play it
    else {  
        player.playVideo();
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
  console.log('updateProgress called');
  
  if (!playerReady) {
    console.log('Player not ready');
    return;
  }
  
  try {
    const currentTime = player.getCurrentTime();
    const duration = player.getDuration();
    
    console.log('Time:', currentTime, 'Duration:', duration);
    
    if (duration > 0) {
      const progress = (currentTime / duration) * 100;
      progressBar.style.width = progress + '%';
      console.log('Progress set to:', progress + '%');
    }
  } catch (error) {
    console.error('Progress error:', error);
  }
}
// Search YouTube for videos based on mood
async function searchYouTubeByMood(mood) {
  // Different search terms for each mood
  const searchTerms = {
    happy: 'happy upbeat music',
    sad: 'sad emotional music',
    energetic: 'energetic workout music',
    calm: 'calm relaxing music',
    romantic: 'romantic love music',
    focused: 'focus study music'
  };
  
  const searchQuery = searchTerms[mood];
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&videoCategoryId=10&maxResults=10&key=${YOUTUBE_API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Convert YouTube results to our playlist format
    const playlist = data.items.map(item => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }));
    
    return playlist;
    
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

//EVENT LISTENERS

// Mood button clicks
moodButtons.forEach(button => {
    button.addEventListener('click', async () => {
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
    if(playerReady) {
        player.setVolume(volume);
    }
});

// Update the progress bar as song plays
setInterval(updateProgress, 1000);