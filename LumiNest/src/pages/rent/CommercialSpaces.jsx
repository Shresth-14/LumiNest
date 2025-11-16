import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Square, Search, Building2, Users } from "lucide-react";

export default function CommercialSpaces() {
  const [Type, setType] = useState("All");
  const [searchText, setSearchText] = useState("");

  const allSpaces = [
    {
      id: 1,
      title: "Premium Office Space",
      location: "MG Road, Bangalore",
      rent: "₹1,50,000/month",
      rentValue: 150000,
      area: "2,500 sq ft",
      type: "Office",
      capacity: "50-60 seats",
      furnished: "Fully Furnished",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      available: "Immediate",
      amenities: ["AC", "Parking", "Cafeteria"],
    },
    {
      id: 2,
      title: "Retail Shop in Mall",
      location: "Inorbit Mall, Mumbai",
      rent: "₹2,00,000/month",
      rentValue: 200000,
      area: "800 sq ft",
      type: "Retail",
      capacity: "High Footfall",
      furnished: "Shell",
      image:
        "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      available: "15 Days",
      amenities: ["AC", "Security", "Mall Parking"],
    },
    {
      id: 3,
      title: "Co-Working Space",
      location: "Cyber City, Gurgaon",
      rent: "₹8,000/seat",
      rentValue: 8000,
      area: "4,000 sq ft",
      type: "Co-Working",
      capacity: "80-100 seats",
      furnished: "Fully Furnished",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      available: "Immediate",
      amenities: ["WiFi", "Cafeteria", "Meeting Rooms"],
    },
    {
      id: 4,
      title: "Warehouse Space",
      location: "Bhiwandi, Mumbai",
      rent: "₹75,000/month",
      rentValue: 75000,
      area: "5,000 sq ft",
      type: "Warehouse",
      capacity: "Heavy Storage",
      furnished: "Bare Shell",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      available: "1 Month",
      amenities: ["24/7 Access", "Loading Dock", "Security"],
    },
    {
      id: 5,
      title: "Restaurant Space",
      location: "Koramangala, Bangalore",
      rent: "₹1,20,000/month",
      rentValue: 120000,
      area: "1,800 sq ft",
      type: "Restaurant",
      capacity: "60-70 Covers",
      furnished: "Semi-Furnished",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      available: "Immediate",
      amenities: ["Kitchen Setup", "Parking", "AC"],
    },
    {
      id: 6,
      title: "Medical Clinic Space",
      location: "Whitefield, Bangalore",
      rent: "₹60,000/month",
      rentValue: 60000,
      area: "1,200 sq ft",
      type: "Office",
      capacity: "3-4 Rooms",
      furnished: "Unfurnished",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      available: "15 Days",
      amenities: ["AC", "Waiting Area", "Parking"],
    },
  ];

  const filteredSpaces = allSpaces.filter((space) => {
    const search = searchText.toLowerCase();

    const typeMatch = Type === "All" || space.type === Type;

    const textMatch =
      search === "" ||
      space.title.toLowerCase().includes(search) ||
      space.location.toLowerCase().includes(search);

    return typeMatch && textMatch;
  });

  const clearAllFilters = () => {
    setType("All");
    setSearchText("");
  };

  let activeFiltersCount;
  if (Type !== "All") {
    activeFiltersCount = 1;
  } else {
    activeFiltersCount = 0;
  }
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20 font-mono">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-extrabold bg-linear-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent tracking-tight mb-5">
          Commercial Spaces
        </h1>
        <span className="text-amber-600 text-md tracking-wide">
          {filteredSpaces.length}
        </span>
        <span className="text-md tracking-wide text-amber-600"> spaces available</span>
      </div>

      <div className="sticky top-16 backdrop-blur-xl border-b border-neutral-800/70">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-60">
            <Search
              className="absolute inset-y-0 left-3 my-auto text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-neutral-800/80 text-gray-200 placeholder-gray-500 
                         border border-neutral-700 rounded-xl outline-none text-sm transition-all duration-200"
            />
          </div>

          <div className="relative w-44">
            <select
              value={Type}
              onChange={(e) => setType(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
                         border border-neutral-700 rounded-xl text-sm cursor-pointer text-gray-200 
                         shadow-md transition-all duration-300"
            >
              <option value="All" className="bg-neutral-900 text-gray-300">All Types</option>
              <optgroup label="Work Spaces" className="bg-neutral-800">
                <option value="Office" className="bg-neutral-900 text-gray-300">Office</option>
                <option value="Co-Working" className="bg-neutral-900 text-gray-300">Co-Working</option>
              </optgroup>
              <optgroup label="Business Spaces" className="bg-neutral-800">
                <option value="Retail" className="bg-neutral-900 text-gray-300">Retail</option>
                <option value="Restaurant" className="bg-neutral-900 text-gray-300">Restaurant</option>
                <option value="Warehouse" className="bg-neutral-900 text-gray-300">Warehouse</option>
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

          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-2 text-sm text-amber-600 hover:text-amber-500 transition"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {filteredSpaces.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No spaces found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpaces.map((space) => (
              <Link
                key={space.id}
                to={`/rent/commercial/${space.id}`} //Temporary
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
                           hover:border-neutral-700 transition-all duration-200 hover:scale-[1.02]"
              >
                <img
                  src={space.image}
                  alt={space.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{space.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {space.location}
                  </p>

                  <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                    <span className="flex items-center gap-1">
                      <Square size={14} /> {space.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} /> {space.capacity}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3 text-xs text-gray-400">
                    <span className="px-2 py-0.5 bg-neutral-800 rounded">
                      {space.type}
                    </span>
                    {space.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-neutral-800 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{space.rent}</span>
                    <span className="text-orange-400 text-sm">View →</span>
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
