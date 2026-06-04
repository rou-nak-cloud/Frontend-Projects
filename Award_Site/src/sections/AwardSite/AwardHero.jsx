import AwardFlavourCard from "./AwardFlavourCard";
import AwardHeroChocolate from "./AwardHeroChocolate";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AwardHero() {
  const [activeFlavor, setActiveFlavor] = useState(null);
  useGSAP(() => {
    const pairs = [
      {
        choco: document.querySelector(".caremel-choco"),
        card: document.querySelector(".caramel-card"),
      },
      {
        choco: document.querySelector(".cocoa-choco"),
        card: document.querySelector(".cocoa-card"),
      },
      {
        choco: document.querySelector(".orange-choco"),
        card: document.querySelector(".orange-card"),
      },
      {
        choco: document.querySelector(".almond-choco"),
        card: document.querySelector(".almond-card"),
      },
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".choco-section",
        start: "top top",
        end: "74% center",
        // markers: true,
        scrub: true,
        invalidateOnRefresh: true, // Forces GSAP to recalculate positions if the screen resizes (critical for responsive layouts)
      },
    });

    // Math
    pairs.forEach(({ choco, card }) => {
      tl.to(
        choco, // Animates the current chocolate item...
        {
          x: () => {
            const c = choco.getBoundingClientRect(); // Get exact current pixel boundaries of the chocolate
            const t = card.getBoundingClientRect(); // Get exact current pixel boundaries of its target card
            // Centering Math: Target Center X minus Current Center X
            return t.left + t.width / 2 - (c.left + c.width / 2);
          },
          y: () => {
            const c = choco.getBoundingClientRect();
            const t = card.getBoundingClientRect();
            return t.top + t.height / 2 - (c.top + c.height * 0.68); // sut at the top of 68% from the top edge of the choco image to sit on the card
          },
          scale: 0.6,
          ease: "none", //No easing curve so it maps 1:1 perfectly with the speed of your thumb scrolling
        },
        0, //This "0" is the timeline position parameter. It forces ALL 4 chocolates to fly simultaneously at the exact same time instead of waiting for one another
      );
    });
  });
  return (
    <>
      <section className="choco-section inner-container">
        <AwardHeroChocolate activeFlavor={activeFlavor} />
        <AwardFlavourCard setActiveFlavor={setActiveFlavor} />
      </section>
    </>
  );
}
