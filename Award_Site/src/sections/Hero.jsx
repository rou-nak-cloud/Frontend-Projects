import Svg from "../components/Svg";
import Button from "../components/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Hero() {
  const heroRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const buttonRef = useRef(null);

  // pin hero
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });

      // Create a timeline to cleanly chain animations together
      const tl = gsap.timeline();

      // split text and animate
      SplitText.create(h1Ref.current, {
        type: "lines,words",
        mask: "lines", // masking means making text appear as if it is sliding up out of thin air
        autoSplit: true, //acts as a performance anchor. resizing browser window or shifts their phone from portrait to landscape mode, the layout changes.
        onSplit(self) {
          //lifecycle callback function. SplitText runs its calculations asynchronously to make sure it doesn't cause browser rendering stutters.
          tl.from(
            self.words, //The self argument is an object containing arrays of the newly created elements.
            {
              y: 100,
              opacity: 0,
              duration: 1.5,
              ease: "power3.out",
              stagger: 0.2,
            },
            0,
          );
        },
      });
      SplitText.create(h2Ref.current, {
        type: "lines,words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          tl.from(
            self.words,
            {
              y: 100,
              opacity: 0,
              duration: 1.3,
              ease: "power3.out",
              stagger: 0.1,
              // delay: 0.1,
            },
            0.4,
          ); // delay
        },
      });

      // button animation
      if (buttonRef.current) {
        tl.from(
          buttonRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            clearProps: "all",
            // delay: 1,
          },
          1,
        );
      }

      gsap.from(".star svg", {
        scale: 0,
        opacity: 0,
        rotate: 180,
        duration: 1.3,
        transformOrigin: "center center",
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(".star svg", {
            rotate: 360,
            duration: 20,
            ease: "linear",
            repeat: -1,
          });
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <>
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="main-container h-screen flex flex-col items-start justify-center lg:py-12 sm:py-16">
          <h1
            ref={h1Ref}
            className="line-gradient font-heading text-3xl lg:text-5xl font-semibold text-white leading-18"
          >
            Junior Developer <span className="text-yellow-600 px-1">2026.</span>
          </h1>
          <h2
            ref={h2Ref}
            className="font-body text-5xl lg:text-7xl text-white/80 mt-3 mb-4 leading-22 tracking-tight"
          >
            Celebrating the best junior <br />{" "}
            <span>
              {" "}
              <span className="text-stroke">developers</span> in the industry.
            </span>
          </h2>
          <Button
            innerRef={buttonRef}
            text="View Awards"
            className="gradient-btn"
            to="/award-site"
          />
        </div>

        <div className="star absolute -z-10 top-55 lg:top-16 right-[-30%] lg:right-[-12%]">
          <Svg />
        </div>
      </div>
    </>
  );
}
