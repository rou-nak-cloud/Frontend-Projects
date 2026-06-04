import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Awarddd from "../pages/Awarddd";

// Shared Layout for standard pages (Home, Projects, etc.)
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Standard Pages Shell (With Main Navbar & Footer) */}
      {/* React Router renders MainLayout first, then injects your Home or Projects component right where <Outlet /> is placed. */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>

      {/* 2. Custom Pages Shell (Isolated from standard layout blocks) */}
      <Route path="/award-site" element={<Awarddd />} />

      {/* easily add more custom landing pages */}
    </Routes>
  );
}
