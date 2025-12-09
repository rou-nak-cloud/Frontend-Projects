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