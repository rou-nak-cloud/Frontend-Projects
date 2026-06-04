import Services from "../sections/Services";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import Marquee from "../sections/Marquee";
import CTA from "../components/CTA";
// messed up the file name at the first time so i have to create a new jsconfig.json file to make the path work, a ts error due to globally install , next time in one go..

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Marquee />
      <CTA />
    </>
  );
}
