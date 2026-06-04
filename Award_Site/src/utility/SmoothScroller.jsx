import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Critical for ensuring layout stability during programmatic scroll tracking
import "lenis/dist/lenis.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SmoothScroller({ children }) {
  useGSAP(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      syncTouch: true,
    });

    window.lenis = lenis; // THIS LINE TO ATTACH IT GLOBALLY for scrollToTop

    // 2. Synchronize Lenis scrolling calculations with GSAP ScrollTrigger updates
    lenis.on("scroll", ScrollTrigger.update);

    // 3. Connect Lenis' loop rendering step to run on every frame step inside GSAP
    const updateRaf = (time) => {
      lenis.raf(time * 1000); // Converts seconds to milliseconds for high precision
    };
    gsap.ticker.add(updateRaf);

    // Disable lag smoothing configuration within GSAP for frame matching
    gsap.ticker.lagSmoothing(0);

    // Cleanup functions when navigating away from this page or unmounting
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []); // Run once on application initialization

  return <>{children}</>;
}
