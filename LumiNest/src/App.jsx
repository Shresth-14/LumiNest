import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import ApartmentsList from "./pages/ApartmentsList";
import SkylineHeights from "./pages/apartments/SkylineHeights";
import OceanViewResidency from "./pages/apartments/OceanViewResidency";
import GreenwoodVillas from "./pages/apartments/GreenwoodVillas";
import Home from "./pages/Home";

export default function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {!hideNavbar && <Navbar />}

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartments/skyline-heights" element={<SkylineHeights />} />
        <Route path="/apartments/ocean-view-residency" element={<OceanViewResidency />} />
        <Route path="/apartments/greenwood-villas" element={<GreenwoodVillas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
