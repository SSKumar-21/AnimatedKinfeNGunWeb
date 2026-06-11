
/* ==========================================
   ELEMENTS
========================================== */

const folder =
document.querySelector(".folder-image");

const cards =
document.querySelectorAll(".file-card");

const reportTag =
document.querySelector(".report-tag");

const threatBar =
document.querySelector(".threat-fill");

const securityWarning =
document.querySelector(".security-warning");

const finalWarning =
document.querySelector(".final-warning");

const suspect =
document.querySelector(".suspect-photo");

const redString =
document.querySelector(".red-string");

const floatingPrints =
document.querySelectorAll(".floating-print");

const secretNote =
document.querySelector(".secret-note");


/* ==========================================
   FOLDER PARALLAX
========================================== */

document.addEventListener(
"mousemove",
(e)=>{

    if(!folder) return;

    const x =
    (window.innerWidth/2 - e.clientX)
    / 30;

    const y =
    (window.innerHeight/2 - e.clientY)
    / 30;

    folder.style.transform =
    `
    translate(${x}px,${y}px)
    rotateY(${x/4}deg)
    rotateX(${-y/4}deg)
    `;
});


/* ==========================================
   CARD TILT EFFECT
========================================== */

cards.forEach(card=>{

    card.addEventListener(
    "mousemove",
    e=>{

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
        (x - centerX) / 12;

        const rotateX =
        (centerY - y) / 12;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-15px)
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
        translateY(0px)
        `;
    }
    );

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
document.querySelectorAll(
`
.report-left,
.report-right,
.case-overview,
.file-card,
.connection-title,
.threat-level,
.evidence-board,
.final-warning
`
);

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "visible"
            );

        }

    });

},
{
    threshold:0.15
}
);

revealElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================================
   REPORT TAG RANDOM STATUS
========================================== */

const reportMessages = [

    "♦ CLASSIFIED DOSSIER ♦",

    "♦ ACCESS GRANTED ♦",

    "♦ SURVEILLANCE ACTIVE ♦",

    "♦ FILE VERIFIED ♦",

    "♦ SUBJECT LOCATED ♦",

    "♦ THREAT DETECTED ♦",

    "♦ OBSERVATION ACTIVE ♦"

];

setInterval(()=>{

    const random =
    Math.floor(
    Math.random() *
    reportMessages.length
    );

    reportTag.innerText =
    reportMessages[random];

},4000);


/* ==========================================
   THREAT BAR PULSE
========================================== */

let threat = 0;

setInterval(()=>{

    threat += 0.04;

    const scale =
    1 +
    Math.sin(threat) * 0.04;

    if(threatBar){

        threatBar.style.transform =
        `scaleY(${scale})`;
    }

},50);


/* ==========================================
   SECURITY WARNING FLICKER
========================================== */

setInterval(()=>{

    if(!securityWarning) return;

    const opacity =
    0.7 +
    Math.random() * 0.3;

    securityWarning.style.opacity =
    opacity;

},120);


/* ==========================================
   CASE FILE GLOW
========================================== */

const caseOverview =
document.querySelector(".case-overview");

let glow = 0;

setInterval(()=>{

    glow += 0.05;

    if(caseOverview){

        const intensity =
        25 +
        Math.sin(glow) * 15;

        caseOverview.style.boxShadow =
        `
        0 0 ${intensity}px
        rgba(255,0,0,.45)
        `;
    }

},40);


/* ==========================================
   FOLDER HOVER EFFECT
========================================== */

if(folder){

    folder.addEventListener(
    "mouseenter",
    ()=>{

        folder.style.filter =
        `
        drop-shadow(
        0 0 30px rgba(255,0,0,.8)
        )
        drop-shadow(
        0 0 80px rgba(255,0,0,.4)
        )
        `;
    });

    folder.addEventListener(
    "mouseleave",
    ()=>{

        folder.style.filter =
        `
        drop-shadow(
        0 0 20px rgba(255,0,0,.2)
        )
        `;
    });

}


/* ==========================================
   SUSPECT PHOTO FLOAT
========================================== */

if(suspect){

    let angle = 0;

    setInterval(()=>{

        angle += 0.015;

        suspect.style.transform =
        `
        rotate(${Math.sin(angle)*4}deg)
        translateY(${Math.sin(angle)*10}px)
        `;

    },30);

}


/* ==========================================
   RED STRING MOVEMENT
========================================== */

if(redString){

    let move = 0;

    setInterval(()=>{

        move += 0.02;

        redString.style.transform =
        `
        translateX(${Math.sin(move)*12}px)
        rotate(${Math.sin(move)*2}deg)
        `;

    },30);

}


/* ==========================================
   FLOATING FINGERPRINTS
========================================== */

floatingPrints.forEach(

(print,index)=>{

    let pos = index * 2;

    setInterval(()=>{

        pos += 0.02;

        print.style.transform =
        `
        translateY(
        ${Math.sin(pos)*15}px
        )
        rotate(
        ${Math.sin(pos)*8}deg
        )
        `;

    },30);

});


/* ==========================================
   SECRET NOTE
========================================== */

if(secretNote){

    const messages = [

        "SUBJECT DETECTED",

        "YOU WERE SEEN",

        "SURVEILLANCE ACTIVE",

        "UNKNOWN PRESENCE",

        "CASE REOPENED",

        "LOOK BEHIND YOU",

        "FILE CORRUPTED",

        "NO ESCAPE"
    ];

    setInterval(()=>{

        const random =
        Math.floor(
        Math.random() *
        messages.length
        );

        secretNote.innerText =
        messages[random];

    },5000);

}


/* ==========================================
   FINAL WARNING GLITCH
========================================== */

if(finalWarning){

    setInterval(()=>{

        finalWarning.style.transform =
        `
        translate(
        ${Math.random()*6-3}px,
        ${Math.random()*4-2}px
        )
        `;

        setTimeout(()=>{

            finalWarning.style.transform =
            "translate(0px,0px)";

        },80);

    },2500);

}


/* ==========================================
   RANDOM SCREEN GLITCH
========================================== */

setInterval(()=>{

    document.body.classList.add(
    "screen-glitch"
    );

    setTimeout(()=>{

        document.body.classList.remove(
        "screen-glitch"
        );

    },100);

},12000);


/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const desc =
document.querySelector(".report-desc");

if(desc){

    const original =
    desc.innerHTML;

    desc.innerHTML = "";

    let i = 0;

    const speed = 15;

    function typeWriter(){

        if(i < original.length){

            desc.innerHTML +=
            original.charAt(i);

            i++;

            setTimeout(
            typeWriter,
            speed
            );
        }
    }

    setTimeout(
    typeWriter,
    800
    );

}


/* ==========================================
   EVIDENCE COUNTER
========================================== */

const evidenceNumbers =
document.querySelectorAll(
".evidence-box span"
);

evidenceNumbers.forEach(el=>{

    const target =
    parseInt(el.innerText);

    let count = 0;

    const interval =
    setInterval(()=>{

        count++;

        el.innerText = count;

        if(count >= target){

            clearInterval(interval);
        }

    },50);

});