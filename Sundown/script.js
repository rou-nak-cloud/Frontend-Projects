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

// fixed image
function imageDisplay() {
    var elemC = document.querySelector("#elemContainer");
    var fixedImg = document.querySelector("#fixedImage");

    // show / hide
    elemC.addEventListener("mouseenter", function () {
        fixedImg.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixedImg.style.display = "none";
    });

    // change image
    var elems = document.querySelectorAll(".elem"); // asAll gives nodeList similar as array
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

// cursor movement
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

    // for footer 
    var footer = document.querySelector(".footer")

    footer.addEventListener("mousemove", function(e){
        gsap.to(cursor,{
            x: e.clientX,   // mouse X position
            y: e.clientY,   // mouse Y position    
            ease: "power1.out" // easing
        })
    })
    // to only limit the cursor inside the page1 content
    footer.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale: 1, 
            // ease: "power1.in",
            opacity: 1,
        })
    })
    footer.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 0,
            // ease: "power1.out",
            opacity: 0, 
        })
    })

    // swiper slide
    var swiperSlides = document.querySelectorAll(".page5 .swiper .swiper-slide")

     swiperSlides.forEach(slide => {
    slide.addEventListener("mousemove", function(e){
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            ease: "power1.out"
        })
    });

    slide.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        })
    });

    slide.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        })
    });
});
}
cursorMovement();

// swiper
function swiper(){
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: false, // to make left side div
      spaceBetween: 100,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
}
swiper();