import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Square, Phone, Mail, Calendar } from "lucide-react";

export default function GreenwoodVillas() {
  return (
    <main className="min-h-screen bg-black text-white pt-20 font-sans">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          to="/apartments"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#d4b48a] transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span>Back to Apartments</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden rounded-xl mx-6">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=600&fit=crop"
          alt="Greenwood Villas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="absolute bottom-10 left-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#d4b48a] to-[#b98a5a] bg-clip-text text-transparent drop-shadow-lg">
            Greenwood Villas
          </h1>
          <div className="flex items-center gap-2 mt-3 text-gray-300">
            <MapPin size={20} />
            <span className="text-sm tracking-wide">Green Valley Hills</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#d4b48a]">
                About Greenwood Villas
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Escape to your private sanctuary at Greenwood Villas, where contemporary architecture
                meets natural beauty. Nestled in the serene Green Valley Hills, these independent villas
                offer the perfect blend of luxury, privacy, and sustainable living.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Each villa is thoughtfully designed with expansive layouts, private gardens, and
                eco-friendly features. The community is surrounded by lush greenery and offers
                a peaceful retreat from city life while staying connected to urban conveniences.
              </p>
            </div>

            {/* Floor Plans */}
            <div>
              <h3 className="text-2xl font-semibold mb-5 text-[#d4b48a]">
                Villa Options
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Villa 1 */}
                <div className="bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/80 border border-[#b98a5a]/20 rounded-xl p-6 hover:border-[#b98a5a]/40 transition-all duration-300">
                  <h4 className="text-[#d4b48a] font-bold text-lg mb-2">4 BHK Villa</h4>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Square size={16} />
                      <span>2500 sq ft</span>
                    </div>
                    <div className="text-white font-semibold">₹4.2 Cr</div>
                  </div>
                </div>

                {/* Villa 2 */}
                <div className="bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/80 border border-[#b98a5a]/20 rounded-xl p-6 hover:border-[#b98a5a]/40 transition-all duration-300">
                  <h4 className="text-[#d4b48a] font-bold text-lg mb-2">5 BHK Villa</h4>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Square size={16} />
                      <span>3200 sq ft</span>
                    </div>
                    <div className="text-white font-semibold">₹5.8 Cr</div>
                  </div>
                </div>

                {/* Villa 3 */}
                <div className="bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/80 border border-[#b98a5a]/20 rounded-xl p-6 hover:border-[#b98a5a]/40 transition-all duration-300">
                  <h4 className="text-[#d4b48a] font-bold text-lg mb-2">6 BHK Villa</h4>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Square size={16} />
                      <span>4000 sq ft</span>
                    </div>
                    <div className="text-white font-semibold">₹7.8 Cr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-2xl font-semibold mb-5 text-[#d4b48a]">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b98a5a]" />
                  <span>Private Gardens</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b98a5a]" />
                  <span>Home Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b98a5a]" />
                  <span>Solar Power</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b98a5a]" />
                  <span>Private Garage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b98a5a]" />
                  <span>Security System</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b98a5a]" />
                  <span>Landscaped Parks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b98a5a]" />
                  <span>Jogging Track</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b98a5a]" />
                  <span>Community Center</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/80 border border-[#b98a5a]/20 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-[#d4b48a] mb-4">
                Price Range
              </h3>
              <p className="text-3xl font-bold text-[#d4b48a]">₹4.2 – 7.8 Cr</p>
              <p className="text-gray-400 text-sm mb-5">Independent Villas</p>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Status:</span>
                  <span className="text-blue-400 font-semibold">Pre-Launch</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Possession:</span>
                  <span className="text-white">June 2026</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#b98a5a] to-[#d4b48a] text-black font-semibold py-3 rounded-lg hover:scale-[1.02] transition-all duration-300">
                Early Bird Booking
              </button>
              <button className="w-full mt-3 border border-[#b98a5a]/60 text-[#d4b48a] font-semibold py-3 rounded-lg hover:bg-[#b98a5a]/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/80 border border-[#b98a5a]/20 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-[#d4b48a] mb-4">
                Contact Us
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#b98a5a]" />
                  <div>
                    <p className="text-white font-medium">+91 98765 43210</p>
                    <p className="text-sm text-gray-400">Villa Sales</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#b98a5a]" />
                  <div>
                    <p className="text-white font-medium">villas@luminest.com</p>
                    <p className="text-sm text-gray-400">Villa Inquiry</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-[#b98a5a]" />
                  <div>
                    <p className="text-white font-medium">Mon – Sat</p>
                    <p className="text-sm text-gray-400">10 AM – 6 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
