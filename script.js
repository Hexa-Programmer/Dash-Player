//variables
const playbutton = document.getElementById("play")
const skipnextbutton = document.getElementById("skipnext")
const skipbackbutton = document.getElementById("skipback")
const playlist = ["Music/letithappen.mp3", "Music/thelessiknowthebetter.mp3", "Music/pushthefeelingon.mp3", "Music/letmetakeyoudancing.mp3"]
const audioplayer = document.getElementById("audioplayer")
const songtitle = document.querySelector(".song-title");
const dropArea = document.querySelector(".drop-area");




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

dropArea.addEventListener('dragover', function(event){
    event.preventDefault();
});

dropArea.addEventListener('drop', function(event){
    event.preventDefault();
});

window.addEventListener('dragover', function(event){ //stop the browser from opening the file in a new tab
    event.preventDefault();
});

window.addEventListener('drop', function(event){ //make the browser actually catch the file when dropped
    event.preventDefault();
    console.log(event.dataTransfer.files); //allow the browser to read the metadata of the file ex: file name, type, size etc.

    const droppedFile = event.dataTransfer.files[0];

    if(droppedFile){
        const temporaryURL = URL.createObjectURL(droppedFile);

    audioplayer.src = temporaryURL;
    songtitle.innerText = droppedFile.name;

    audioplayer.play()
        playbutton.innerText = "Pause";
        isplaying = true;
    }
});
