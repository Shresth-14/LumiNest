import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Square, Phone, Mail, Calendar } from "lucide-react";

export default function OceanViewResidency() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link
          to="/apartments"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <ArrowLeft size={18} />
          Back to Apartments
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=500&fit=crop"
          alt="Ocean View Residency"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-10 left-6">
          <h1 className="text-4xl font-bold mb-2">Ocean View Residency</h1>
          <p className="flex items-center gap-2 text-gray-300">
            <MapPin size={18} /> Coastal Boulevard
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#d4b48a]">About</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                Wake up to the sound of waves at Ocean View Residency, an exclusive beachfront
                development offering unmatched luxury. Each residence provides panoramic ocean views
                and direct beach access for an extraordinary lifestyle.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Experience sophisticated living with private balconies, spa facilities, and
                intelligent home automation — where every day feels like a vacation.
              </p>
            </div>

            {/* Floor Plans */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#d4b48a]">Floor Plans</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {/* Plan 1 */}
                <div className="p-6 rounded-xl bg-white/5 border border-neutral-700 hover:border-[#b98a5a]/50 transition">
                  <h3 className="font-bold text-lg text-[#d4b48a] mb-2">3 BHK</h3>
                  <div className="text-gray-400 space-y-1">
                    <p className="flex items-center gap-2">
                      <Square size={15} /> 1800 sq ft
                    </p>
                    <p className="text-white font-semibold">₹3.8 Cr</p>
                  </div>
                </div>

                {/* Plan 2 */}
                <div className="p-6 rounded-xl bg-white/5 border border-neutral-700 hover:border-[#b98a5a]/50 transition">
                  <h3 className="font-bold text-lg text-[#d4b48a] mb-2">4 BHK</h3>
                  <div className="text-gray-400 space-y-1">
                    <p className="flex items-center gap-2">
                      <Square size={15} /> 2400 sq ft
                    </p>
                    <p className="text-white font-semibold">₹5.2 Cr</p>
                  </div>
                </div>

                {/* Plan 3 */}
                <div className="p-6 rounded-xl bg-white/5 border border-neutral-700 hover:border-[#b98a5a]/50 transition">
                  <h3 className="font-bold text-lg text-[#d4b48a] mb-2">5 BHK Penthouse</h3>
                  <div className="text-gray-400 space-y-1">
                    <p className="flex items-center gap-2">
                      <Square size={15} /> 3200 sq ft
                    </p>
                    <p className="text-white font-semibold">₹6.5 Cr</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#d4b48a]">Luxury Amenities</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-gray-400">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b98a5a] rounded-full"></span> Private Beach Access
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b98a5a] rounded-full"></span> Infinity Pool
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b98a5a] rounded-full"></span> Spa & Wellness Center
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b98a5a] rounded-full"></span> Valet Parking
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b98a5a] rounded-full"></span> Concierge Service
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b98a5a] rounded-full"></span> Private Elevator
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b98a5a] rounded-full"></span> Ocean View Balconies
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b98a5a] rounded-full"></span> Smart Home Features
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Price Card */}
            <div className="p-6 rounded-xl bg-white/5 border border-neutral-700">
              <h3 className="text-xl font-bold mb-4">Price Range</h3>
              <p className="text-3xl font-bold text-[#d4b48a] mb-2">₹3.8 - 6.5 Cr</p>
              <p className="text-gray-400 text-sm mb-4">Beachfront luxury</p>

              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-orange-400">Under Construction</span>
                </div>
                <div className="flex justify-between">
                  <span>Possession:</span>
                  <span>Dec 2025</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#b98a5a] to-[#d4b48a] text-black font-semibold py-3 rounded-lg hover:scale-105 transition">
                Register Interest
              </button>

              <button className="w-full mt-3 border border-[#b98a5a] text-[#d4b48a] font-semibold py-3 rounded-lg hover:bg-[#b98a5a]/10 transition">
                Download Brochure
              </button>
            </div>

            {/* Contact Card */}
            <div className="p-6 rounded-xl bg-white/5 border border-neutral-700">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#b98a5a]" />
                  <div>
                    <p className="font-medium text-white">+91 98765 43210</p>
                    <p className="text-sm text-gray-400">Sales Team</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#b98a5a]" />
                  <div>
                    <p className="font-medium text-white">oceanview@luminest.com</p>
                    <p className="text-sm text-gray-400">Project Inquiry</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-[#b98a5a]" />
                  <div>
                    <p className="font-medium text-white">Mon - Sun</p>
                    <p className="text-sm text-gray-400">9 AM - 8 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
