import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CTA() {
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(ctaRef.current, {
        backgroundColor: "#ffffff",
        color: "#000000",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "center bottom",
          end: "60% bottom",
          scrub: 1,
          ease: "power2.in",
        },
      });
    },
    { scope: ctaRef },
  ); // Scopes the animation cleanly

  return (
    <>
      {/* Outer wrapper: Takes up 100% viewport width and receives the GSAP background animation */}
      <div ref={ctaRef} className="w-full transition-colors duration-150">
        {/* Inner wrapper: Keeps your content centered and bounded to your grid standard */}
        <div className="main-container py-20 lg:py-28 flex flex-col gap-8 justify-center items-center">
          <h3 className="max-w-4xl text-2xl lg:text-4xl text-center leading-tight font-body">
            {
              "Freelance projects, collaborations and opportunities. Let's get acquainted!"
            }
          </h3>
          <Button text="Get in Touch" className="gradient-btn" />
        </div>
      </div>
    </>
  );
}
