const roles = [

    {
        number:"ROLE #01",
    
        name:"KILLER",
    
        desc:"A ruthless mastermind hiding among the players. Every night he chooses a victim and silently removes them from the game.",
    
        image:"./media/killer.png",
    
        bgImage:"./media/killerBG.png",
    
        color:"#ff2e2e"
    },
    
    {
        number:"ROLE #02",
    
        name:"DETECTIVE",
    
        desc:"Armed with intelligence and deduction, the Detective uncovers hidden identities and exposes the truth.",
    
        image:"./media/det.png",
    
        bgImage:"./media/detBG.png",
    
        color:"#2e9eff"
    },
    
    {
        number:"ROLE #03",
    
        name:"CITIZEN",
    
        desc:"United by trust and teamwork, Citizens must identify the Killer before fear consumes the entire town.",
    
        image:"./media/citizen.png",
    
        bgImage:"./media/citizenBG.png",
    
        color:"#52FF8F"
    },
    
    {
        number:"ROLE #04",
    
        name:"UNKNOWN",
    
        desc:"An unrevealed role shrouded in mystery. Its powers remain hidden until the right moment arrives.",
    
        image:"./media/upcoming.png",
    
        bgImage:"./media/upcomingBG.png",
    
        color:"#ffd700"
    }
    
    ];
    
    let present = 0;
    let autoSlide;
    
    /* ===========================
       ELEMENTS
    =========================== */
    
    const roleNumber =
    document.getElementById("roleNumber");
    
    const roleName =
    document.getElementById("roleName");
    
    const roleDesc =
    document.getElementById("roleDesc");
    
    const roleImage =
    document.getElementById("roleImage");
    
    const roleBgImage =
    document.getElementById("roleBgImage");
    
    const glow =
    document.querySelector(".glow");
    
    const line =
    document.querySelector(".line");
    
    const energyRing =
    document.querySelector(".energy-ring");
    
    const dots =
    document.querySelectorAll(".dot");
    
    const roleText =
    document.querySelector(".role-text");
    
    /* ===========================
       DOTS
    =========================== */
    
    function updateDots(){
    
        dots.forEach(dot => {
    
            dot.classList.remove("active");
    
        });
    
        dots[present].classList.add("active");
    }
    
    /* ===========================
       SHOW ROLE
    =========================== */
    
    function showRole(){
    
        const role = roles[present];
    
        /* Fade Out */
    
        roleImage.classList.add("fade-out");
        roleText.classList.add("fade-out");
    
        setTimeout(()=>{
    
            roleNumber.innerText =
            role.number;
    
            roleName.innerText =
            role.name;
    
            roleDesc.innerText =
            role.desc;
    
            roleImage.src =
            role.image;
    
            roleBgImage.src =
            role.bgImage;
    
            /* Dynamic Colors */
    
            glow.style.background =
            role.color;
    
            line.style.background =
            role.color;
    
            line.style.boxShadow =
            `0 0 20px ${role.color}`;
    
            energyRing.style.borderColor =
            role.color;
    
            roleName.style.textShadow =
            `
            0 0 10px ${role.color},
            0 0 20px ${role.color},
            0 0 40px ${role.color},
            0 0 80px ${role.color}
            `;
    
            /* Update Dots */
    
            updateDots();
    
            /* Fade In */
    
            roleImage.classList.remove("fade-out");
            roleText.classList.remove("fade-out");
    
            roleImage.classList.add("fade-in");
            roleText.classList.add("fade-in");
    
            setTimeout(()=>{
    
                roleImage.classList.remove("fade-in");
                roleText.classList.remove("fade-in");
    
            },700);
    
        },400);
    }
    
    /* ===========================
       NEXT ROLE
    =========================== */
    
    function nextRole(){
    
        present++;
    
        if(present >= roles.length){
    
            present = 0;
        }
    
        showRole();
    }
    
    /* ===========================
       AUTO SLIDE
    =========================== */
    
    function startAutoSlide(){
    
        clearInterval(autoSlide);
    
        autoSlide =
        setInterval(()=>{
    
            nextRole();
    
        },8000);
    }
    
    /* ===========================
       DOT CLICK
    =========================== */
    
    dots.forEach(dot=>{
    
        dot.addEventListener("click",()=>{
    
            present =
            Number(dot.dataset.index);
    
            showRole();
    
            startAutoSlide();
    
        });
    
    });
    
    /* ===========================
       PARALLAX BACKGROUND
    =========================== */
    
    document.addEventListener("mousemove",(e)=>{
    
        const x =
        (window.innerWidth / 2 - e.clientX)
        / 80;
    
        const y =
        (window.innerHeight / 2 - e.clientY)
        / 80;
    
        roleBgImage.style.transform =
        `translate(${x}px, ${y}px) scale(1.08)`;
    
    });
    
    /* ===========================
       INITIAL LOAD
    =========================== */
    
    showRole();
    
    startAutoSlide();