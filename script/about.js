const about =
document.querySelector(".About");

const bg1 =
document.querySelector(".bg1");

const bg2 =
document.querySelector(".bg2");

const text1 =
document.getElementById("text1");

const text2 =
document.getElementById("text2");

let current = 1;

function switchScene(){

    about.classList.add("glitch");

    setTimeout(()=>{

        if(current === 1){

            bg1.style.opacity = "0";
            bg2.style.opacity = "1";

            text1.classList.remove("active");
            text2.classList.add("active");

            current = 2;

        }else{

            bg1.style.opacity = "1";
            bg2.style.opacity = "0";

            text2.classList.remove("active");
            text1.classList.add("active");

            current = 1;
        }

    },250);

    setTimeout(()=>{

        about.classList.remove("glitch");

    },1000);
}

setInterval(
    switchScene,
    6000
);