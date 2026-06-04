import { useEffect } from "react";

import AwardHero from "../sections/AwardSite/AwardHero";
import AwardFooter from "../components/AwardFooter";
import AwardHeader from "../components/AwardHeader";
import AwardTaste from "../sections/AwardSite/AwardTaste";
import AwardQuality from "../sections/AwardSite/AwardQuality";
import AwardParallax from "../sections/AwardSite/AwardParallax";

export default function Awarddd() {
  useEffect(() => {
    //  Grab the global body element
    const body = document.body;

    //  Add your award layout styling class
    body.classList.add("awardBody");

    //  CLEANUP: When the user leaves the award page, remove it
    // so the rest of site goes back to normal dark mode!
    return () => {
      body.classList.remove("awardBody");
    };
  }, []);

  return (
    <>
      <section className="min-h-screen w-full">
        <AwardHeader />
        <AwardHero />
        <AwardTaste />
        <AwardQuality />
        <AwardParallax />
        <AwardFooter />
      </section>
    </>
  );
}
