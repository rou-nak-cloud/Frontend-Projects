import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function About() {
  const aboutRef = useRef(null);
  const aboutTextRef = useRef(null);

  // reveal animation of chars
  useGSAP(
    () => {
      SplitText.create(aboutTextRef.current, {
        type: "lines,chars",
        autoSplit: true,
        onSplit(self) {
          gsap.set(self.chars, {
            opacity: 0.25,
          });
          gsap.to(self.chars, {
            opacity: 1,
            stagger: 0.07,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 60%",
              end: "center center",
              scrub: 1,
            },
          });
        },
      });
    },
    { scope: aboutRef },
  );

  return (
    <div
      ref={aboutRef}
      className="relative z-10 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px]"
    >
      <div
        ref={aboutTextRef}
        className="main-container font-body text-4xl px-2 lg:px-4 py-2 lg:py-4 lg:text-5xl font-semibold text-black leading-8 lg:leading-14 flex justify-center items-center h-full"
      >
        Our approach merges award-winning digital craftsmanship, immersive
        motion design, and cutting-edge aesthetics to ensure every interface
        challenges industry standards. Whether it's securing an Awwwards Site of
        the Day, engineering fluid WebGL interactions, or defining a luxury
        brand's global presence, we focus on creating unforgettable digital
        spaces that captivate audiences and leave a lasting cultural legacy.
      </div>
    </div>
  );
}
