import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Gift from "../assets/images/colored-gift.gif";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useGSAP(() => {
    // Smooth entry slide-down animation on page mount
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  });

  return (
    <>
      {/* Floating Sticky Header Layer */}
      <nav
        ref={navbarRef}
        className="fixed top-0 w-full award-body backdrop-blur-md  z-50 p-4 sm:p-5"
      >
        <div className="max-w-7xl m-auto flex items-stretch justify-between gap-3 sm:gap-5 w-full">
          {/* Main White Branding Card Bar */}
          <div className="flex items-center justify-between bg-white rounded-xl w-full px-4 py-3 shadow-sm text-black">
            {/* Logo */}
            <Link to="/">
              <img
                src={Logo}
                alt="Melt Chocolate"
                className="max-w-28 sm:max-w-36 transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Link Array (Hidden on Mobile view tracks) */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 lg:gap-9 font-medium tracking-tight text-sm lg:text-base">
                <li>
                  <Link to="" className="nav-link-grow">
                    Flavors
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-link-grow">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/award-site" className="nav-link-grow">
                    How it's Made
                  </Link>
                </li>
                <li>
                  <Link
                    to="/award-site"
                    className="group flex items-center justify-between gap-2 text-neutral-800 hover:text-black transition-colors duration-300"
                  >
                    Gifting{" "}
                    <img
                      src={Gift}
                      alt="Gift"
                      className="max-w-11 pb-2 transition-transform duration-300 group-hover:scale-115 group-hover:-rotate-6"
                    />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile View CTA: Acts as the exclusive toggle button for mobile navigation */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden group flex items-center justify-center bg-neutral-100 rounded-lg text-nowrap px-3 py-2 font-medium text-xs sm:text-sm gap-2 transition-all duration-300"
            >
              Explore Flavors
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-500 ${menuOpen ? "rotate-180" : ""}`}
              >
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  transform="matrix(-1 0 0 1 32 0)"
                  fill="#FF6B57"
                />
                <path
                  d="M16 9V23M16 23L22 17M16 23L10 17"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Desktop View Right Call-To-Action Button (Hidden on Mobile) */}
          <Link
            to="/award-site"
            className="group hidden md:flex items-center justify-center bg-white rounded-xl text-nowrap px-4 py-3 font-medium text-sm lg:text-base gap-3 shadow-sm hover:bg-neutral-50 transition-all duration-300 text-black"
          >
            Explore Flavors
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="32"
                height="32"
                rx="16"
                transform="matrix(-1 0 0 1 32 0)"
                fill="#FF6B57"
                className="transition-colors duration-300 group-hover:fill-[#e05340]"
              />
              <path
                d="M23 16H9M23 16L17 22M23 16L17 10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Clean Mobile Dropdown Panel: Slides straight down below the navbar */}
      <div
        className={`fixed z-40 left-4 right-4 bg-white border border-neutral-100 rounded-2xl shadow-xl p-6 flex flex-col items-center gap-5 transition-all duration-500 ease-out md:hidden ${
          menuOpen
            ? "top-22.5 sm:top-27.5 opacity-100 translate-y-0"
            : "top-0 opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 text-lg font-body font-medium tracking-wide text-neutral-800 w-full text-center">
          <li className="w-full">
            <Link
              to=""
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:text-[#FF6B57] transition-colors duration-300"
            >
              Flavors
            </Link>
          </li>
          <li className="w-full">
            <Link
              to=""
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:text-[#FF6B57] transition-colors duration-300"
            >
              Our Story
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/award-site"
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:text-[#FF6B57] transition-colors duration-300"
            >
              How it's Made
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/award-site"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 hover:text-[#FF6B57] transition-colors duration-300"
            >
              Gifting <img src={Gift} alt="Gift" className="max-w-9" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
