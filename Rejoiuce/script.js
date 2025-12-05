// video slow
(function slowVideo(){
    const video = document.getElementById("myVideo");
    video.playbackRate = .3; // speed (1 = normal)
})();

// Lenis
const lenis = new Lenis({
    duration: 2.2,
    }
);
  function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

// cursor movement with Page1
function cursorMovement(){
    var page1 = document.querySelector(".page1")
    var cursor = document.querySelector(".cursor")

    page1.addEventListener("mousemove", function(e){
        gsap.to(cursor,{
            x: e.clientX,   // mouse X position
            y: e.clientY,   // mouse Y position    
            ease: "power1.out" // easing
        })
    })
    // to only limit the cursor inside the page1 content
    page1.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale: 1, 
            // ease: "power1.in",
            opacity: 1,
        })
    })
    page1.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 0,
            // ease: "power1.out",
            opacity: 0, 
        })
    })

    // page 3 cursor movement
    var page3Cursor = document.querySelector(".cursorMovement")
    
     page3Cursor.addEventListener("mousemove", function(e){
        gsap.to(cursor,{
            x: e.clientX,   // mouse X position
            y: e.clientY,   // mouse Y position    
            ease: "power1.out" // easing
        })
    })
    // to only limit the cursor inside the page1 content
    page3Cursor.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale: 1, 
            // ease: "power1.in",
            opacity: 1,
        })
    })
    page3Cursor.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 0,
            // ease: "power1.out",
            opacity: 0, 
        })
    })

}
cursorMovement();

// Page1 letter
function letterAnimate(){
    gsap.to(".page1 #letters span", {
    opacity: 1,
    y: -30,
    duration: 0.3,
    // ease: "power3.inOut",
    stagger: 0.09,
});
}


// Page2
function page2Animation(){
    gsap.registerPlugin(ScrollTrigger);
    // bottom animation
    gsap.from(".bottom elem h2", {
        y: 180,
        stagger: 0.3,
        duration:0.9,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            start: "top 40%",
            end:"top 10%",
            // markers: true,
            scrub: 2,
        }, 
    })
    gsap.from(".bottom .oval", {
        x: 190,
        opacity: 0,
        duration:1.2,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            start: "top 30%",
            end: "top 20%",
            scrub: 1,
        },
    })

    // top animation
    gsap.from("#left2", {
    y: -120,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 90%", 
        scrub: 1  // when page2 enters viewport
    }
    });

    gsap.from("#right2", {
        y: -120,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            start: "top 80%",
            scrub: 1
        }
    });

}
page2Animation();

function underline(){
    const sp = document.querySelector(".page2 .bottom .span1");

    sp.addEventListener("mouseenter", () => {
        gsap.to(sp, {
            "--underline-scale": 1,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    sp.addEventListener("mouseleave", () => {
        gsap.to(sp, {
            "--underline-scale": 0,
            duration: 0.4,
            ease: "power2.in"
        });
    });
}
underline();

// page 4 animation
function h2Div(){
    const textDiv = document.querySelector(".page4 .bottom4 elem h2")
    const topTextDiv = document.querySelector(".page4 .top4")

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(textDiv, {
        x: 180,
        stagger: 0.3,
        duration:1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page4",
            scroller: "body",
            start: "top 60%",
            end:"top 10%",
            // markers: true,
            scrub: 2,
        }, 
    })
    gsap.from(topTextDiv, {
        x: -180,
        stagger: 0.3,
        duration:1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page4",
            scroller: "body",
            start: "top 80%",
            end:"top 40%",
            // markers: true,
            scrub: 2,
        }, 
    })
}
h2Div();

// page5 swiper js
function slider(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
}
slider();

// loader animation after that text animate with help of arrow function
function loader(){
    var tl = gsap.timeline()
    tl.from("#loader h3", {
        x: -20,
        opacity: 0,
        duration:1,
        stagger: -0.2,
        ease: "power1.inOut",
    })
    tl.to("#loader h3", {
        opacity:0,
        x: 15,
        duration: 1,
        stagger: -0.2
    })
    tl.to("#loader", {
        opacity: 0,
        ease: "power3.inOut",
    })
    tl.add(()=>{
        letterAnimate()
    })
    tl.to("#loader" ,{
        display: "none"
    })
    }
loader();