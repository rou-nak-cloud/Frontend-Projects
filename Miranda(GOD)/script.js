function lenis(){
    // Initialize Lenis
const lenis = new Lenis({
    duration: 1.6
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
}
function loader() {
    const page = document.querySelector(".page1");
    const nav = document.querySelector(".nav");
    
    const tl = gsap.timeline();
    
    // initial 
    tl.set(page, {
        y: "100vh",
        scale: 0.6,
    });
    
    tl.set(nav, {
        y: "-100%",
        opacity: 0,
    });
    
    // page comes in
    tl.to(page, {
        y: "20vh",
        duration: 1,
        ease: "power3.out",
        delay: .7,
    });
    
    // page settles
    tl.to(page, {
        y: "0vh",
        scale: 1,
        rotation: -360,
        duration: 1,
        ease: "power3.inOut",
    });
    
    // nav appears AFTER page settles
    tl.to(nav, {
        y: "0%",
        opacity: 1,
    duration: 0.6,
    ease: "power2.out",
}, "-=0.4"); // overlap timing
}


lenis();
loader();
