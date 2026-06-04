// Import your global scroller configuration utilities
import SmoothScroller from "./utility/SmoothScroller";
import ScrollToTop from "./utility/ScrollToTop";

// Import your brand new clean routing configuration
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <SmoothScroller>
      <ScrollToTop />
      <AppRoutes />
    </SmoothScroller>
  );
}
