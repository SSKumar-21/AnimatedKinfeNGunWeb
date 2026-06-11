/* =====================================
   SCROLL REVEAL
===================================== */

const cards =
document.querySelectorAll(".board-card");

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

},

{
    threshold:0.2
}

);

cards.forEach(card=>{

    card.classList.add("hidden-card");

    observer.observe(card);
});


/* =====================================
   3D CARD TILT
===================================== */

cards.forEach(card=>{

    card.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateY =
        (x - centerX) / 20;

        const rotateX =
        (centerY - y) / 20;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;
    }
    );

    card.addEventListener(
    "mouseleave",
    ()=>{

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        `;
    }
    );

});


/* =====================================
   FLOATING BOARD EFFECT
===================================== */

const board =
document.querySelector(
".investigation-board"
);

document.addEventListener(
"mousemove",
(e)=>{

    const x =
    (window.innerWidth / 2
    - e.clientX) / 80;

    const y =
    (window.innerHeight / 2
    - e.clientY) / 80;

    board.style.transform =
    `translate(${x}px,${y}px)`;
});


/* =====================================
   SECRET FILE
===================================== */

const secretCard =
document.querySelector(
".secret-card"
);

secretCard.addEventListener(
"click",
()=>{

    alert(
`CLASSIFIED INFORMATION

Role: Killer

Objective:
Eliminate everyone before
your identity is discovered.`
    );

});


/* =====================================
   AUTO GLOW PULSE
===================================== */

const glow =
document.querySelector(
".story-glow"
);

let glowValue = 0;

setInterval(()=>{

    glowValue += 0.03;

    const size =
    1 + Math.sin(glowValue) * 0.08;

    glow.style.transform =
    `
    translate(-50%,-50%)
    scale(${size})
    `;

},30);


/* =====================================
   RANDOM FLASH EFFECT
===================================== */

setInterval(()=>{

    const random =
    Math.random();

    if(random > 0.85){

        document.body.style.filter =
        "brightness(1.2)";

        setTimeout(()=>{

            document.body.style.filter =
            "brightness(1)";

        },120);
    }

},3000);


/* =====================================
   TIMELINE ANIMATION
===================================== */

const titles =
document.querySelectorAll(
".card-info h2"
);

let active = 0;

setInterval(()=>{

    titles.forEach(title=>{

        title.style.color =
        "white";

        title.style.textShadow =
        "none";
    });

    titles[active].style.color =
    "#2e9eff";

    titles[active].style.textShadow =
    "0 0 20px #2e9eff";

    active++;

    if(active >= titles.length){

        active = 0;
    }

},2500);