import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      // Selects the direct child blocks (the logo, lists, and bottom copyright bar)
      const elementsToAnimate = footerRef.current.querySelectorAll(
        "footer > *, .main-container.flex",
      );

      gsap.from(elementsToAnimate, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15, // Creates a beautiful sequential wave across the columns
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%", // Starts animating when the top of the footer hits 85% of the screen height
          toggleActions: "play none none none", // Plays once cleanly on scroll down
        },
      });
    },
    { scope: footerRef },
  );

  return (
    <>
      {/* Wrapped in a container with a ref for GSAP targeting without altering layout */}
      <div ref={footerRef}>
        {/* divider */}
        <div className="max-w-315 bg-white m-auto h-px opacity-20"></div>
        <footer className="main-container max-sm:text-center grid md:grid-cols-2 lg:grid-cols-4 py-20 gap-10">
          <h1 className="font-heading font-bold text-3xl text-purple-400">
            JD
          </h1>
          <div>
            <h3 className="font-body font-medium text-2xl mb-5">Services</h3>
            <ul className="flex flex-col gap-1 text-base text-slate-300 lg:text-lg cursor-pointer transition-colors duration-300">
              <li className="mb-1 hover:text-slate-200">Branding</li>
              <li className="mb-1 hover:text-slate-200">Web Design</li>
              <li className="mb-1 hover:text-slate-200">UI/UX</li>
            </ul>
          </div>

          <div>
            <h3 className="font-body font-medium text-2xl mb-5">
              Accessibility
            </h3>
            <ul className="flex flex-col gap-1 text-base text-slate-300 lg:text-lg cursor-pointer transition-colors duration-300">
              <li className="mb-1 hover:text-slate-200">
                Mon - Fri: 9AM - 5PM
              </li>
              <li className="mb-1 hover:text-slate-200">
                24/7 Whatsapp & Email
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body font-medium text-2xl mb-5">Contact</h3>
            <ul className="flex flex-col gap-1 text-base text-slate-300 lg:text-lg cursor-pointer transition-colors duration-300">
              <li className="mb-1 hover:text-slate-200">123 Main Street</li>
              <li className="mb-1 hover:text-slate-200">johndoe@gmail.com</li>
            </ul>
          </div>
        </footer>
        {/* divider */}
        <div className="max-w-315 bg-white m-auto h-px opacity-20"></div>
        <div className="main-container flex max-sm:flex-col gap-2 items-center justify-between py-2 text-sm text-slate-300">
          <div className="text-purple-200">© 2026 JD. All rights reserved.</div>
          <div className="socials flex gap-4 items-center">
            <span className="text-slate-300 hover:text-slate-200 transition-colors duration-300 cursor-pointer">
              Twitter
            </span>
            <span className="text-slate-300 hover:text-slate-200 transition-colors duration-300 cursor-pointer">
              LinkedIn
            </span>
            <span className="text-slate-300 hover:text-slate-200 transition-colors duration-300 cursor-pointer">
              Instagram
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
