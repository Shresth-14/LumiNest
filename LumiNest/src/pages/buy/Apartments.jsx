import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, Search } from "lucide-react";

export default function Apartments() {
  const [bhkFilter, setBhkFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const allApartments = [
    {
      id: 1,
      title: "Modern 3BHK Apartment",
      location: "Mumbai, Maharashtra",
      price: "₹2.5 Cr",
      priceValue: 25000000,
      beds: 3,
      baths: 2,
      area: "1,850 sq ft",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      type: "Ready to Move",
    },
    {
      id: 2,
      title: "Luxury 4BHK Penthouse",
      location: "Bangalore, Karnataka",
      price: "₹4.2 Cr",
      priceValue: 42000000,
      beds: 4,
      baths: 3,
      area: "2,500 sq ft",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      type: "Under Construction",
    },
    {
      id: 3,
      title: "Spacious 2BHK Flat",
      location: "Delhi NCR",
      price: "₹1.8 Cr",
      priceValue: 18000000,
      beds: 2,
      baths: 2,
      area: "1,200 sq ft",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      type: "Ready to Move",
    },
    {
      id: 4,
      title: "Premium 3BHK Corner Unit",
      location: "Pune, Maharashtra",
      price: "₹2.1 Cr",
      priceValue: 21000000,
      beds: 3,
      baths: 2,
      area: "1,650 sq ft",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      type: "Ready to Move",
    },
    {
      id: 5,
      title: "Designer 4BHK Apartment",
      location: "Hyderabad, Telangana",
      price: "₹3.5 Cr",
      priceValue: 35000000,
      beds: 4,
      baths: 3,
      area: "2,200 sq ft",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
      type: "Under Construction",
    },
  ];

  const filteredApartments = allApartments.filter((apt) => {
    const bhkOkay =
      bhkFilter === "All" || apt.beds === Number(bhkFilter);

    const statusOkay =
      statusFilter === "All" || apt.type === statusFilter;

    const text = searchText.toLowerCase();
    const searchOkay =
      text === "" ||
      apt.title.toLowerCase().includes(text) ||
      apt.location.toLowerCase().includes(text);

    return bhkOkay && statusOkay && searchOkay;
  });
const clearAllFilters = () => {
  setBhkFilter("All");
  setStatusFilter("All");
  setSearchText("");
};

let activeFiltersCount;

if (bhkFilter !== "All" || statusFilter !== "All" || searchText !== "") {
  activeFiltersCount =
    (bhkFilter !== "All" ? 1 : 0) +
    (statusFilter !== "All" ? 1 : 0) +
    (searchText !== "" ? 1 : 0);
} else {
  activeFiltersCount = 0;
}


  return (
    <div className="min-h-screen text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-extrabold bg-linear-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent tracking-tight mb-5">
          Luxury Apartments
        </h1>
        <span className="text-cyan-400 mt-0 text-md tracking-wide">
          {filteredApartments.length}
        </span>
        <span className="mt-2 text-md tracking-wide">
          {" "}
          properties available
        </span>
      </div>

      {/* FILTER BAR */}
      <div className="sticky top-16 backdrop-blur-xl border-b border-neutral-800/70">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap gap-4 items-center justify-between">
          {/* SEARCH INPUT */}
          <div className="relative flex-1 min-w-60">
            <Search
              className="absolute inset-y-0 left-3 my-auto text-gray-400"
              size={16}
            />
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full pl-9 pr-3 py-2.5 bg-neutral-800/80 text-gray-200 placeholder-gray-500 
                         border border-neutral-700 rounded-xl outline-none text-sm
                         transition-all duration-200"
            />
          </div>

          {/* BHK FILTER */}
          <div className="relative w-44">
            <select
              value={bhkFilter}
              onChange={(e) => setBhkFilter(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
                         border border-neutral-700 rounded-xl text-sm cursor-pointer text-gray-200 
                       shadow-md transition-all duration-300"
            >
              <option value="All" className="bg-neutral-900 text-gray-300">All BHK</option>
              <optgroup label="Compact" className="bg-neutral-800">
                <option value="1" className="bg-neutral-900 text-gray-300">1 BHK</option>
                <option value="2" className="bg-neutral-900 text-gray-300">2 BHK</option>
              </optgroup>
              <optgroup label="Spacious" className="bg-neutral-800">
                <option value="3" className="bg-neutral-900 text-gray-300">3 BHK</option>
                <option value="4" className="bg-neutral-900 text-gray-300">4 BHK</option>
              </optgroup>
            </select>

            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* STATUS FILTER */}
          <div className="relative w-52">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
                         border border-neutral-700 rounded-xl text-sm cursor-pointer text-gray-200"
            >
              <option value="All" className="bg-neutral-900 text-gray-300">All Status</option>
              <optgroup label="Availability" className="bg-neutral-800">
                <option value="Ready to Move" className="bg-neutral-900 text-gray-300">Ready to Move</option>
                <option value="Under Construction" className="bg-neutral-900 text-gray-300">Under Construction</option>
              </optgroup>
            </select>

            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* CLEAR BUTTON */}
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-2 text-sm text-blue-400 hover:text-blue-300 transition"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* APARTMENTS LIST */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {filteredApartments.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No apartments found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApartments.map((apartment) => (
              <Link
                key={apartment.id}
                to={`/apartments/${apartment.id}`}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
                           hover:border-neutral-700 transition-all duration-200 hover:scale-[1.02]"
              >
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-1">
                    {apartment.title}
                  </h4>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {apartment.location}
                  </p>

                  <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                    <span className="flex items-center gap-1">
                      <Bed size={14} /> {apartment.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} /> {apartment.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Square size={14} /> {apartment.area}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{apartment.price}</span>
                    <span className="text-cyan-400 text-sm">View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
