import projects from "../projectsData";
import Button from "../components/Button";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Work() {
  const workRef = useRef(null);
  const titleRef = useRef(null);
  const projectRef = useRef(null);

  useGSAP(() => {
    const projectsWidth = projectRef.current.scrollWidth;
    const scrollDistance = projectsWidth - window.innerWidth;

    // pin horizontally scroll
    gsap.to(projectRef.current, {
      x: -scrollDistance,
      ease: "linear",
      scrollTrigger: {
        trigger: workRef.current,
        start: "center center",
        end: () => `+=${projectsWidth}`,
        pin: true,
        anticipatePin: 1, // for not flickering
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <>
      <div
        ref={workRef}
        className="bg-white text-black h-screen py-14 lg:py-20"
      >
        {/* title wrapper */}
        <div
          ref={titleRef}
          className="main-container pb-6 lg:pb-8 flex max-md:flex-col gap-6 lg:gap-8 justify-between items-start lg:items-end"
        >
          <div className="max-w-xl mt-5">
            <h2 className="font-base mb-3">Selected Work</h2>
            <p className="text-xl lg:text-2xl">
              We have a proven track record of delivering exceptional results
              for our clients, and we are proud to showcase some of our most
              recent work.
            </p>
          </div>
          <Button
            text="Explore All"
            className="gradient-btn-light"
            to="/projects"
          />
        </div>

        {/* project wrapper */}
        <div ref={projectRef}>
          <div className="flex gap-4 px-3 lg:px-2 py-2 lg:py-4 ms-6 lg:ms-[40%]">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="relative w-full min-w-87.5 lg:min-w-xl h-64 lg:h-80 rounded-xl overflow-hidden  group"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <h3 className="font-bold font-heading text-sm px-2.5 rounded-xl absolute top-2 right-4 bg-black text-white uppercase">
                  {project.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
