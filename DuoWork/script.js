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
        end: "top 60%",
        scrub: 3,        
    },
})
tl2.to(".page2", {
    backgroundColor: "#FFF"
})
// page 3
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 40%",
        scrub: 3,        
    },
})
tl3.to(".page3", {
    backgroundColor: "#000"
})



function imageDisplay(){
        var elemC = document.querySelector("#elemContainer");
    var fixedImg = document.querySelector("#fixedImage");
     var elems = document.querySelectorAll(".box"); // asAll gives nodeList similar as array

    //  Desktop mode
    // show / hide
    elemC.addEventListener("mouseenter", function () {
        fixedImg.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixedImg.style.display = "none";
    });

    // change image
    elems.forEach(function (e) {  // e-> each element and maps until all elements
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixedImg.style.backgroundImage = `url(${image})`;
        });
    }); // static ends

      // ----------- FOLLOW MOUSE WITH EASING + LIMITS ----------
    let x = 0, y = 0;
    let mx = 0, my = 0;

    document.addEventListener("mousemove", function (e) {
        x = e.clientX + 20; // offset from cursor
        y = e.clientY + 20;
    });

    function animate() {
        mx += (x - mx) * 0.1;
        my += (y - my) * 0.1;

        // prevent image going outside right/bottom edges
        const maxX = window.innerWidth - fixedImg.offsetWidth - 20;
        const maxY = window.innerHeight - fixedImg.offsetHeight - 20;

        let finalX = Math.min(mx, maxX);
        let finalY = Math.min(my, maxY);

        // prevent image from going above/left edges
        finalX = Math.max(0, finalX);
        finalY = Math.max(0, finalY);

        fixedImg.style.transform = `translate(${finalX}px, ${finalY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}
imageDisplay();