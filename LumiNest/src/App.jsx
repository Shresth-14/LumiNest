import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./config/firebaseConfig"
import Home from "./pages/Home";
import BuyAll from "./pages/buy/BuyAll";
import Apartments from "./pages/buy/Apartments";
import Villas from "./pages/buy/Villas";
import Plots from "./pages/buy/Plots";
import NewProjects from "./pages/buy/NewProjects";

export default function App() {
  const location = useLocation();
  

// inside component:
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged user:", user);
  }
});

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {!hideNavbar && <Navbar />}

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Buy Section Routes */}
        <Route path="/buy" element={<BuyAll />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/plots" element={<Plots />} />
        <Route path="/projects" element={<NewProjects />} />
      </Routes>
    </div>
  );
}
