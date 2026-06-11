const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

const entryBtn = 
document.getElementById("enterBtn");

let isPlaying = false;

function startMusic(){

    bgMusic.play();

    musicBtn.classList.add(
        "music-playing"
    );

    isPlaying = true;
}

function stopMusic(){

    bgMusic.pause();

    bgMusic.currentTime = 0;

    musicBtn.classList.remove(
        "music-playing"
    );

    isPlaying = false;
}

musicBtn.addEventListener(
"click",
()=>{

    if(!isPlaying){

        startMusic();

    }else{

        stopMusic();
    }
});

entryBtn.addEventListener(
    "click",
    ()=>{
    
        if(!isPlaying){
    
            startMusic();
    
        }else{
    
            stopMusic();
        }
    });

