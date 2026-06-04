import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AwardQuality() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const mainTextRef = useRef(null);
  const paraTextRef = useRef(null);

  useGSAP(
    () => {
      // 1. Set initial states individually before the scroll timeline captures them
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          y: "180%",
          rotate: i % 2 === 0 ? -10 : 10, // Alternate starting rotation angles
        });
      });

      // 2. Create SINGLE master timeline to handle ALL pinning and sequencing
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Pins neatly when the section hits the top of the viewport
          end: "+=250%", // Provides smooth scroll distance to show text then cards
          scrub: 1, // Smooth 1-second capture delay
          pin: true, // ONLY PIN ONCE HERE!
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Step A: Slide up the Heading text
      masterTl.from(mainTextRef.current, {
        y: 60,
        // opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Step B: Slide up the Paragraph text right after (staggered slightly by 0.3s)
      masterTl.from(
        paraTextRef.current,
        {
          y: 60,
          // opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.2",
      );

      // Step C: Fly the cards in sequence after the text animation is fully finished
      masterTl.to(
        cardsRef.current,
        {
          y: 0,
          rotate: 0,
          duration: 2,
          stagger: 1, // Delays the introduction of each card sequentially
          ease: "power2.out",
        },
        "-=1.5", // Slight intentional pause after text finishes before cards start flying up
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="inner-container pt-20 pb-30 w-full min-h-screen overflow-hidden"
    >
      <div className="grid grid-cols-12 gap-10 px-20 h-full items-center">
        {/* LEFT CONTENT */}
        <div className="col-span-7 flex flex-col justify-center gap-12">
          <h2
            ref={mainTextRef}
            className="max-w-195 font-body text-4xl leading-20"
          >
            What goes into every bar of{" "}
            <span className="text-orange">MELT</span>
          </h2>
          <div
            ref={paraTextRef}
            className="max-w-135 leading-12 text-5xl font-medium"
          >
            Every bar is a result of careful sourcing, precise timing, and
            countless taste tests — all to make sure each bite feels
            intentional.
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="col-span-5 relative h-130 flex items-center justify-end">
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="card bg-blue text-white rounded-3xl max-w-115 w-full p-10 min-h-112 flex flex-col justify-between absolute shadow-xl"
          >
            <div>
              <div className="text-[7.5vw] font-semibold leading-40">200+</div>
              <div className="text-3xl font-semibold">Taste Iterations</div>
            </div>
            <div>Refined until the flavour feels just right.</div>
          </div>

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="card bg-yellow text-white rounded-3xl max-w-135 w-full p-10 min-h-112 flex flex-col justify-between absolute top-16 shadow-xl"
          >
            <div>
              <div className="text-[7.5vw] font-semibold leading-40">30+</div>
              <div className="text-3xl font-semibold">Test Batches</div>
            </div>
            <div>Small batches. Big attention to detail.</div>
          </div>

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="card bg-green text-white rounded-3xl max-w-115 w-full p-10 min-h-112 flex flex-col justify-between absolute top-32 shadow-xl"
          >
            <div>
              <div className="text-[7.5vw] font-semibold leading-40">100%</div>
              <div className="text-3xl font-semibold">Natural Ingredients</div>
            </div>
            <div>No shortcuts. No compromises.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
