//variables
const playbutton = document.getElementById("play")
const skipnextbutton = document.getElementById("skipnext")
const skipbackbutton = document.getElementById("skipback")
const audioplayer = document.getElementById("audioplayer")
const playlist = ["letithappen.mp3", "thelessiknowthebetter.mp3", "pushthefeelingon.mp3", "letmetakeyoudancing.mp3"]
let currenttrackindex = 0; //chooses the song in the list of the "playlist" variable
//logic for play and pause
let isplaying = false;

playbutton.onclick = function(){
if (isplaying === false){ //a single "=" means assigning a value and "===" means checking/comparing if the variable has the specified value
    audioplayer.play();
    playbutton.innerText = "Pause";
    isplaying = true;
}
else if(isplaying === true){
    audioplayer.pause();
    playbutton.innerText = "Play";
    isplaying = false;
}

skipnextbutton.onclick = function(){
    currenttrackindex = currenttrackindex + 1;
    if (currenttrackindex  >= playlist.length){
        currenttrackindex = 0;
    }
    audioplayer.src = playlist[currenttrackindex];
    audioplayer.play();
    isplaying = true;
    playbutton.innerText = "Pause";
}

skipbackbutton.onclick = function(){
    if(audioplayer.currentTime > 3){
        audioplayer.currentTime = 0;
    }
    else if(audioplayer.currentTime < 3){
        currenttrackindex = currenttrackindex - 1
        audioplayer.src = playlist[currenttrackindex];
        audioplayer.play()
        isplaying = true;
        playbutton.innerText = "Pause"
    }
}
}