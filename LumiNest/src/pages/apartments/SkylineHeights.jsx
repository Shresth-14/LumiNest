import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Square, Phone, Mail, Calendar } from "lucide-react";

export default function SkylineHeights() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link
          to="/apartments"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back to Apartments</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=400&fit=crop"
          alt="Skyline Heights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8">
          <h1 className="text-4xl font-bold text-white mb-2">Skyline Heights</h1>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={20} />
            <span>Downtown Metro City</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">About Skyline Heights</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Experience urban luxury at its finest with Skyline Heights, a prestigious residential tower 
                  that redefines modern living in the heart of Downtown Metro City. This architectural marvel 
                  offers breathtaking panoramic views of the city skyline and beyond.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Each residence is meticulously designed with premium finishes, spacious layouts, and 
                  floor-to-ceiling windows that flood the interiors with natural light. The building 
                  features state-of-the-art amenities and services that cater to your every need.
                </p>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Specifications</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* 2 BHK */}
                  <div className="bg-[#0f0f0f]/90 border border-neutral-700/60 rounded-lg p-6">
                    <h4 className="text-[#d4b48a] font-bold text-lg mb-2">2 BHK</h4>
                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Square size={16} />
                        <span>1200 sq ft</span>
                      </div>
                      <div className="text-white font-semibold">₹2.5 Cr</div>
                    </div>
                  </div>

                  {/* 3 BHK */}
                  <div className="bg-[#0f0f0f]/90 border border-neutral-700/60 rounded-lg p-6">
                    <h4 className="text-[#d4b48a] font-bold text-lg mb-2">3 BHK</h4>
                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Square size={16} />
                        <span>1600 sq ft</span>
                      </div>
                      <div className="text-white font-semibold">₹3.2 Cr</div>
                    </div>
                  </div>

                  {/* 4 BHK */}
                  <div className="bg-[#0f0f0f]/90 border border-neutral-700/60 rounded-lg p-6">
                    <h4 className="text-[#d4b48a] font-bold text-lg mb-2">4 BHK</h4>
                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Square size={16} />
                        <span>2000 sq ft</span>
                      </div>
                      <div className="text-white font-semibold">₹4.2 Cr</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Amenities</h3>
                <div className="grid md:grid-cols-2 gap-3 text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#b98a5a] rounded-full"></div>
                    <span>Swimming Pool</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#b98a5a] rounded-full"></div>
                    <span>Fitness Center</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#b98a5a] rounded-full"></div>
                    <span>24/7 Security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#b98a5a] rounded-full"></div>
                    <span>Parking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#b98a5a] rounded-full"></div>
                    <span>Garden & Landscaping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#b98a5a] rounded-full"></div>
                    <span>Children's Play Area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#b98a5a] rounded-full"></div>
                    <span>Club House</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#b98a5a] rounded-full"></div>
                    <span>Power Backup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-[#0f0f0f]/90 border border-neutral-700/60 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Price Range</h3>
                <div className="text-3xl font-bold text-[#d4b48a] mb-2">₹2.5 - 4.2 Cr</div>
                <div className="text-gray-400 text-sm mb-4">Starting prices</div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-semibold">Ready to Move</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Possession:</span>
                    <span className="text-white">Immediate</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#b98a5a] to-[#d4b48a] text-black font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300 mb-3">
                  Book Site Visit
                </button>
                
                <button className="w-full border border-[#b98a5a] text-[#d4b48a] font-semibold py-3 rounded-lg hover:bg-[#b98a5a]/10 transition-all duration-300">
                  Download Brochure
                </button>
              </div>

              {/* Contact Card */}
              <div className="bg-[#0f0f0f]/90 border border-neutral-700/60 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-[#b98a5a]" />
                    <div>
                      <div className="text-white font-medium">+91 98765 43210</div>
                      <div className="text-gray-400 text-sm">Sales Team</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-[#b98a5a]" />
                    <div>
                      <div className="text-white font-medium">sales@luminest.com</div>
                      <div className="text-gray-400 text-sm">Email Inquiry</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-[#b98a5a]" />
                    <div>
                      <div className="text-white font-medium">Mon - Sat</div>
                      <div className="text-gray-400 text-sm">10 AM - 7 PM</div>
                    </div>
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
