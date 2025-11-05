import React from "react";
import { MapPin, Search } from "lucide-react";


export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white font-sans overflow-x-hidden overflow-y-auto scroll-smooth">
      {/* 🔹 SECTION 1 - Hero with Video */}
      <section className="relative h-screen bg-linear-to-br from-[#0a0a0a] via-[#111111] to-[#1c1c1c] flex flex-col items-center justify-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/realestate2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-black/40 via-black/30 to-transparent"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Welcome to LumiNest
          </h1>

          {/* Search Input */}
          <div className="relative mt-8 w-[800px] max-w-[90%] mx-auto">
            <input
              type="text"
              placeholder="Search for homes, localities, or projects"
              className="w-full pl-16 pr-16 py-6 rounded-4xl text-lg
                bg-linear-to-r from-white/10 to-white/5 backdrop-blur-md
                border-2 border-[#b98a5a]/25 shadow-inner
                text-gray-100 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-[#b98a5a]/20
                transition-all duration-300"
            />
            <MapPin className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#b98a5a] w-6 h-6" />
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2
                cursor-pointer p-3 rounded-full
                bg-linear-to-r from-white/15 to-white/5 backdrop-blur-md
                border border-[#b98a5a]/25 text-[#cfa97c]
                hover:text-white hover:from-[#d4b48a]/30 hover:to-[#b98a5a]/15
                hover:border-[#d4b48a]/40 transition-all duration-300
                shadow-[0_0_12px_rgba(185,138,90,0.15)]"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 2 - About */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-linear-to-br from-[#141414] via-[#1a1a1a] to-[#222222] px-6">
        <h2 className="text-4xl font-semibold mb-4 text-gray-200">
          Discover Premium Homes
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          Explore a curated collection of luxury apartments, peaceful villas, and modern residencies.
          LumiNest connects you to dream properties that blend comfort, elegance, and innovation.
        </p>
      </section>

      {/* 🔹 SECTION 3 - Featured Apartments */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-linear-to-br from-[#1a1a1a] via-[#222] to-[#2a2a2a] px-6">
        <h2 className="text-4xl font-semibold mb-6 text-gray-200">
          Featured Apartments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Skyline Heights</h3>
            <p className="text-gray-400 text-sm">
              Modern city apartments with panoramic skyline views.
            </p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Ocean View Residency</h3>
            <p className="text-gray-400 text-sm">
              Experience serene oceanfront living with stunning sunsets.
            </p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Greenwood Villas</h3>
            <p className="text-gray-400 text-sm">
              Nature-inspired homes surrounded by lush greenery.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 4 - Contact */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-linear-to-br from-[#0f0f0f] via-[#101010] to-[#161616] px-6">
        <h2 className="text-4xl font-semibold mb-4 text-gray-200">
          Get in Touch
        </h2>
        <p className="text-gray-400 max-w-xl text-lg mb-8">
          Have a question or need assistance finding your next home?
          Contact our team today — we’re here to help you every step of the way.
        </p>
        <button className="px-6 py-3 rounded-full text-lg font-medium bg-[#b98a5a] text-black hover:bg-[#d4b48a] transition-all duration-300">
          Contact Us
        </button>
      </section>
    </main>
  );
}
