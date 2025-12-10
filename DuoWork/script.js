(function lenis(){
    // Initialize Lenis
const lenis = new Lenis({
    duration: 2,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
})();

function cursor(){
    // cursor
const cursor = document.querySelector("#cursor");
const cursorText = document.getElementById("cursorText");
const video = document.querySelector(".videoContainer video");

// Move cursor
document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
})
// Cursor grows when entering video area
video.addEventListener("mouseenter", () => {
  cursor.style.width = "8vw";
  cursor.style.height = "1.5vw";
  cursor.style.borderRadius = "30px";
  cursor.style.transform += " scale(1.1)";
  cursorText.textContent = "Sound On";
  cursorText.style.opacity = 1;
});

// Return to normal on leave
video.addEventListener("mouseleave", () => {
  cursor.style.width = "1vw";
  cursor.style.height = "1vw";
  cursor.style.borderRadius = "50%";
  cursorText.style.opacity = 0;
});
}
cursor();

// gsap
gsap.registerPlugin(ScrollTrigger)
// page 1 gsap
var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 .pageCenter h1",
        scroller: "body",
        // markers: true,
        start: "top 20%",
        end: "top 0",
        scrub: 3,        
    },
})
tl1.to(".page1 .pageCenter .textFir", {
    x: -100,
},"anim") // same name for everyone to start at once together
tl1.to(".page1 .pageCenter .textSec", {
    x: 100,
},"anim")
tl1.to(".page1 .videoContainer ", {
    width: "90%"
},"anim")    

// page 2
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 60",
        scrub: 3,        
    },
})
tl2.to(".page2", {
    backgroundColor: "#FFF"
})