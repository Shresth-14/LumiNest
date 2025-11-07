import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./config/firebaseConfig"
import Home from "./pages/Home";

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
      </Routes>
    </div>
  );
}
