# 🍫 Melt Chocolate — Junior Developer Award Site

A high-fidelity, motion-driven frontend showcase built around a premium interactive chocolate concept. This project was engineered to push the boundaries of scroll-synchronized storytelling, dynamic layout vectors, and cinematic web interactions using **React**, **Tailwind CSS**, and **GSAP**.

---
🔗 **[Live Preview Layout](https://frontend-projects-award21.vercel.app/)**
---

## ✨ Key Features & Creative Mechanics

* **Dynamic Theme Routing Engine:** Utilizes React component lifecycles to dynamically toggle root global classes (`body.awardBody`), flipping the site from deep dark mode to an elegant beige color profile seamlessly on route switches.
* **Vector-Driven Scroll Synchronization:** Real-time calculation of viewport boundaries (`getBoundingClientRect()`) to fly chocolate assets across the layout, landing them perfectly centered inside fluid target text grids.
* **Fluid Mobile Navigation Trigger:** A clean, minimal UI layout that adapts to mobile viewports by transforming the "Explore Flavors" action button into a smooth dropdown toggle, omitting heavy hamburger overlays.
* **Alpha-Aware Visual Glows:** Implements targeted CSS `drop-shadow` filters rather than standard layout bounding box-shadows to hug the precise contours of transparent graphical assets.

---

## 🛠️ Tech Stack & Engineering Toolkit

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS (featuring custom `@layer base` and utility abstractions)
* **Motion & Timelines:** GSAP, `@gsap/react` (useGSAP), ScrollTrigger, SplitText
* **Routing:** React Router DOM

---

## 🏗️ Technical Highlights & Code Showcases

### 1. Seamless Multi-Phase Scroll Triggering
To prevent property cross-contamination and the notorious "shrinking single dot" scale bug during component loading, the intro landing sequence and scroll-fade exit are isolated into a single controlled lifecycle handoff:
