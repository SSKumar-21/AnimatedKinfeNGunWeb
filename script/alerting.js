function msg(text){

    const old = document.getElementById("crime-modal");
    if(old) old.remove();

    const modal = document.createElement("div");
    modal.id = "crime-modal";

    modal.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.9);
        backdrop-filter:blur(10px);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:999999;
        animation:flash .4s ease;
    `;

    const box = document.createElement("div");

    box.style.cssText = `
        width:550px;
        max-width:90%;
        background:#050505;
        border:2px solid #ff0000;
        border-radius:12px;
        overflow:hidden;
        box-shadow:
        0 0 15px red,
        0 0 40px red,
        0 0 80px rgba(255,0,0,.5);
        position:relative;
        animation:popup .4s ease;
    `;

    box.innerHTML = `
        <div style="
            background:#120000;
            color:#ff4444;
            padding:18px;
            font-weight:bold;
            letter-spacing:3px;
            text-transform:uppercase;
            border-bottom:1px solid red;
            text-shadow:
            0 0 10px red,
            0 0 20px red;
        ">
            ⚠ RESTRICTED EVIDENCE FILE ⚠
        </div>

        <div style="
            color:#ddd;
            padding:25px;
            line-height:1.8;
            font-size:16px;
        ">
            ${text}
        </div>

        <div style="
            padding:20px;
            text-align:right;
        ">
            <button id="close-file-btn" style="
                background:#160000;
                color:#ff5555;
                border:1px solid red;
                padding:12px 22px;
                border-radius:6px;
                cursor:pointer;
                font-weight:bold;
                letter-spacing:2px;
                transition:.3s;
            ">
                CLOSE FILE
            </button>
        </div>
    `;

    modal.appendChild(box);
    document.body.appendChild(modal);

    const btn = document.getElementById("close-file-btn");

    btn.onmouseenter = () => {

        btn.style.background = "#ff0000";
        btn.style.color = "white";

        btn.style.boxShadow =
            "0 0 10px red,0 0 25px red,0 0 50px red";

        btn.style.transform = "scale(1.05)";
    };

    btn.onmouseleave = () => {

        btn.style.background = "#160000";
        btn.style.color = "#ff5555";
        btn.style.boxShadow = "none";
        btn.style.transform = "scale(1)";
    };

    btn.onclick = () => {

        modal.style.opacity = "0";
        modal.style.transition = ".3s";

        setTimeout(()=>{
            modal.remove();
        },300);
    };

    let pulse = true;

    const pulseInterval = setInterval(()=>{

        if(!document.body.contains(box)){
            clearInterval(pulseInterval);
            return;
        }

        if(pulse){

            box.style.boxShadow =
            "0 0 25px red,0 0 80px red";

        }else{

            box.style.boxShadow =
            "0 0 15px red,0 0 40px red";
        }

        pulse = !pulse;

    },1000);

    const shakeInterval = setInterval(()=>{

        if(!document.body.contains(box)){
            clearInterval(shakeInterval);
            return;
        }

        box.animate([
            {transform:'translate(0px)'},
            {transform:'translate(-2px,1px)'},
            {transform:'translate(2px,-1px)'},
            {transform:'translate(-1px,2px)'},
            {transform:'translate(0px)'}
        ],{
            duration:200
        });

    },7000);
}

const style = document.createElement("style");

style.textContent = `

@keyframes popup{
    from{
        opacity:0;
        transform:translateY(30px) scale(.9);
    }
    to{
        opacity:1;
        transform:translateY(0) scale(1);
    }
}

@keyframes flash{
    from{
        background:rgba(255,0,0,.3);
    }
    to{
        background:rgba(0,0,0,.9);
    }
}

`;

document.head.appendChild(style);