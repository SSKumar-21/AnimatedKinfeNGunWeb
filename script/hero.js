// ===========================
// SELECT ELEMENTS
// ===========================

const navbar = document.querySelector(".navbar");

const hero = document.querySelector(".hero");

const videoCard = document.querySelector(".video-card");

const bigText1 = document.querySelector(".bigText1");

const bigText2 = document.querySelector(".bigText2");


// ===========================
// NAVBAR + PARALLAX
// ===========================

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    // Navbar shrink

    if(scroll > 100){

        navbar.classList.add("active");

    }else{

        navbar.classList.remove("active");
    }

    // Hero Parallax

    if(bigText1){

        bigText1.style.transform =
        `translateY(${scroll * 0.2}px)`;
    }

    if(bigText2){

        bigText2.style.transform =
        `translateY(${-scroll * 0.15}px)`;
    }

    // Hero Bend Effect

    const heroHeight = hero.offsetHeight;

const progress = Math.min(scroll / heroHeight, 1);

// diagonal cut
const cut = progress * 12;

// scale
const scale = 1 - progress * 0.15;

// tilt
const rotateX = progress * 8;

hero.style.clipPath = `
polygon(
0 0,
100% 0,
100% 100%,
0 ${100-cut}%
)
`;

hero.style.transform = `
perspective(2000px)
rotateX(${rotateX}deg)
scale(${scale})
`;
});


// ===========================
// FLOATING VIDEO CARD
// ===========================

if(videoCard){

    let time = 0;

    function animateCard(){

        time += 0.02;

        const y =
        Math.sin(time) * 15;

        const rotate =
        Math.sin(time) * 3;

        videoCard.style.transform =
        `translate(-50%,-50%)
         translateY(${y}px)
         rotate(${rotate}deg)`;

        requestAnimationFrame(animateCard);
    }

    animateCard();
}


// ===========================
// HERO FADE IN
// ===========================

window.addEventListener("load", () => {

    hero.style.opacity = "1";

});