const storyImage =
document.getElementById("storyImage");

document.addEventListener(
"mousemove",
(e)=>{

    const x =
    (window.innerWidth/2 - e.clientX)
    / 50;

    const y =
    (window.innerHeight/2 - e.clientY)
    / 50;

    storyImage.style.transform =
    `translate(${x}px, ${y}px)`;
});