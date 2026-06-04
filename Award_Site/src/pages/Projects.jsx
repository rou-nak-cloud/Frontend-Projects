import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../projectsData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Target all project cards using our custom utility class
      gsap.from(".project-card", {
        y: 70, // Start 70px down
        opacity: 0, // Start completely invisible
        duration: 1,
        ease: "power3.out",
        stagger: 0.2, // Delays the secondary card in the row slightly for a wave look
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Starts when the top of the section enters 80% of the viewport height
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  ); // Clean encapsulation scoping

  return (
    <>
      {/* Attached the containerRef here to anchor our ScrollTrigger scope */}
      <div ref={containerRef} className="bg-white text-black">
        <div className="main-container py-30">
          <h2 className="font-body text-6xl lg:text-8xl leading-none tracking-tight text-center mb-20">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                //    projectCard for gsap
                className="project-card overflow-hidden flex flex-col"
              >
                <div className="overflow-hidden group rounded-2xl h-full flex items-end">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
                <span className="uppercase leading-[1.4] lg:text-2xl font-heading mt-4">
                  {project.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
