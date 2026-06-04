import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if Lenis is active on the window global scope and reset it
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback for native window layout tracking
      window.scrollTo(0, 0);
    }
  }, [pathname]); // Fires instantly every single time the URL changes

  return null;
}
