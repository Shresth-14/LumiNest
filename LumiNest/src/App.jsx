import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/login";
import Signup from "./pages/Signup";

export default function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {/* Navbar (hidden on login page) */}
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <section
              className="min-h-screen bg-linear-to-br from-[#0a0a0a] via-[#111111] to-[#1c1c1c]
              text-white font-sans flex flex-col items-center justify-center text-center"
            >
              <h1 className="text-5xl font-bold bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                Welcome to LumiNest
              </h1>
              <p className="text-gray-400 mt-4 text-lg">
                Discover luxury homes and modern spaces.
              </p>
            </section>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  );
}
