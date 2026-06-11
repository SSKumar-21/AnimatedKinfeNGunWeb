const progressBar = document.getElementById("progress-bar");
const percentText = document.getElementById("percent");

const enterBtn = document.getElementById("enterBtn");

const loader = document.getElementById("loader");
const main = document.getElementById("main");

const video = document.getElementById("heroVideo");

let progress = 0;
let videoLoaded = false;


// VIDEO LOADED
video.addEventListener("canplaythrough", () => {
    videoLoaded = true;
});


// LOADING ANIMATION
let loading = setInterval(() => {

    if(progress < 69){

        progress++;

        progressBar.style.width = progress + "%";
        percentText.innerText = progress;

    }

    if(progress === 69){

        clearInterval(loading);

        setTimeout(() => {

            const checkVideo = setInterval(() => {

                if(videoLoaded){

                    clearInterval(checkVideo);

                    let finalLoad = setInterval(() => {

                        progress++;

                        progressBar.style.width = progress + "%";
                        percentText.innerText = progress;

                        if(progress >= 100){

                            progress = 100;

                            progressBar.style.width = "100%";
                            percentText.innerText = "100";

                            clearInterval(finalLoad);

                            enterBtn.style.display = "block";

                            document.getElementById("texting").innerHTML = '\n• INVESTIGATION COMPLETED...' ;
                            document.getElementById("texting").classList.toggle("blinking-element");

                        }

                    },10); //50

                }

            },100);

        },10);//3000

    }

},40);


// ENTER BUTTON
enterBtn.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";
        main.style.display = "block";

        video.play();

    },1000);

});
