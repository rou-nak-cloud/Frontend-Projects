import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef(null);
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  });

  return (
    <>
      {/* background color opacity, backdrop blur, and a subtle bottom border */}
      <nav
        ref={navbarRef}
        className="fixed top-0 w-full bg-[#0a0a0a]/20 backdrop-blur-md border-b border-white/5 mix-blend-difference z-50"
      >
        <div className="logo main-container py-4 lg:py-6 flex items-center justify-between">
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-purple-600">
            JD <span className="text-yellow-400 text-2xl px-1">26</span>
          </h1>

          {/* Adjusted menu lines for better alignment and layout */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-line flex flex-col gap-1.5 cursor-pointer"
          >
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white/75 transition-all duration-300 origin-center
                ${menuOpen ? "rotate-45 translate-y-1" : ""}`}
            ></span>
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white/75 transition-all duration-300 origin-center
                ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`}
            ></span>
          </div>
        </div>
      </nav>

      {/* full screen nav */}
      <div
        className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center gap-5 leading-25 transition-transform duration-700 ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
        onClick={() => setMenuOpen(false)}
      >
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/projects" className="menu-link">
          Projects
        </Link>
        <Link to="/award-site" className="menu-link">
          Awarddd
        </Link>
        <Link to="/contact" className="menu-link">
          Contact
        </Link>
      </div>
    </>
  );
}
