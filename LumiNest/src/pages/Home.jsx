import React, { useState } from "react";
import { Search, ChevronDown, MapPin, Bed, Bath, Square, ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Gurgaon"];

  const featuredProperties = [
    {
      id: 1,
      name: "Skyline Heights",
      location: "Downtown Metro City",
      price: "₹2.5 Cr",
      bedrooms: "3 BHK",
      bathrooms: "2",
      area: "1600 sq ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      slug: "skyline-heights"
    },
    {
      id: 2,
      name: "Ocean View Residency",
      location: "Coastal Boulevard",
      price: "₹3.8 Cr",
      bedrooms: "4 BHK",
      bathrooms: "3",
      area: "2400 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      slug: "ocean-view-residency"
    },
    {
      id: 3,
      name: "Greenwood Villas",
      location: "Green Valley Hills",
      price: "₹5.2 Cr",
      bedrooms: "5 BHK",
      bathrooms: "4",
      area: "3200 sq ft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      slug: "greenwood-villas"
    }
  ];

  const stats = [
    { value: "500+", label: "Properties Listed" },
    { value: "200+", label: "Happy Clients" },
    { value: "50+", label: "Cities Covered" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <main className="w-full min-h-screen bg-black text-white font-sans">
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Find Your <span className="text-gray-300">Dream Home</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
            Discover luxury properties that match your lifestyle and aspirations
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-3xl">
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-2xl">
              {/* City Dropdown */}
              <div className="relative border-r border-gray-200">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-6 py-5 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <MapPin size={20} className="text-gray-400" />
                  <span className="text-sm font-medium">
                    {selectedCity || "Location"}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                      {cities.map((city, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedCity(city);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                  </>
                )}
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search properties, localities, or projects"
                className="flex-1 px-6 py-5 text-gray-700 placeholder-gray-400 outline-none text-sm"
              />

              {/* Search Button */}
              <button className="px-8 py-5 bg-black text-white hover:bg-gray-900 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-400 text-lg">Handpicked properties for discerning buyers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Link
                key={property.id}
                to={`/apartments/${property.slug}`}
                className="group bg-neutral-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white text-sm font-semibold">{property.price}</span>
                  </div>
                </div>

                {/* Property Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-gray-300 transition-colors">
                    {property.name}
                  </h3>

                  {/* Property Details */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Bed size={16} />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square size={16} />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/apartments"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Properties
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-900 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">Comprehensive solutions for all your real estate needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-black rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <Search size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Buy Property</h3>
              <p className="text-gray-400">
                Explore our extensive collection of premium properties and find your perfect home
              </p>
            </div>

            <div className="p-8 bg-black rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sell Property</h3>
              <p className="text-gray-400">
                List your property with us and reach thousands of verified buyers quickly
              </p>
            </div>

            <div className="p-8 bg-black rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <Bed size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rent Property</h3>
              <p className="text-gray-400">
                Find rental homes and commercial spaces that fit your budget and requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Connect with our expert team and let us help you find the perfect property
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apartments"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LumiNest</h3>
              <p className="text-gray-400 text-sm">
                Your trusted partner in finding the perfect home
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/apartments" className="hover:text-white transition-colors">Buy</Link></li>
                <li><Link to="/apartments" className="hover:text-white transition-colors">Sell</Link></li>
                <li><Link to="/apartments" className="hover:text-white transition-colors">Rent</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>info@luminest.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 LumiNest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}