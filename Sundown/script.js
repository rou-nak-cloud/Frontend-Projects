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
