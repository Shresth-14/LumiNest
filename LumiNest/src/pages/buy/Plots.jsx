import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Square, Search, Ruler } from "lucide-react";

export default function Plots() {
  const [selectedType, setSelectedType] = useState("All");
  const [searchText, setSearchText] = useState("");

  const allPlots = [
    {
      id: 1,
      title: "Residential Plot",
      location: "Whitefield, Bangalore",
      price: "₹1.8 Cr",
      priceValue: 18000000,
      area: "2,400 sq ft",
      dimension: "40x60 ft",
      image:
        "https://images.unsplash.com/photo-1655319446878-44e5c1e31551?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Residential",
      status: "Clear Title",
      facing: "East",
    },
    {
      id: 2,
      title: "Commercial Plot",
      location: "Pune, Maharashtra",
      price: "₹3.2 Cr",
      priceValue: 32000000,
      area: "3,600 sq ft",
      dimension: "60x60 ft",
      image:
        "https://images.unsplash.com/photo-1601622962666-d0b6d43a7ac7?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Commercial",
      status: "Clear Title",
      facing: "North",
    },
    {
      id: 3,
      title: "Agricultural Land",
      location: "Nashik, Maharashtra",
      price: "₹45 Lakhs",
      priceValue: 4500000,
      area: "1 Acre",
      dimension: "200x217 ft",
      image:
        "https://images.unsplash.com/photo-1702357013751-69df806ce4c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Agricultural",
      status: "Clear Title",
      facing: "South",
    },

    {
      id: 4,
      title: "Corner Plot in DTCP Approved Layout",
      location: "Hyderabad, Telangana",
      price: "₹2.1 Cr",
      priceValue: 21000000,
      area: "3,000 sq ft",
      dimension: "50x60 ft",
      image:
         "https://plus.unsplash.com/premium_photo-1668456435433-fb89969b0a02?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "DTCP Approved",
      facing: "Corner",
    },
    {
      id: 5,
      title: "Investment Plot",
      location: "Chennai, Tamil Nadu",
      price: "₹2.8 Cr",
      priceValue: 28000000,
      area: "2,800 sq ft",
      dimension: "40x70 ft",
      image:
        "https://images.unsplash.com/photo-1761234800130-432be3b3781e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Commercial",
      status: "Clear Title",
      facing: "West",
    },
    {
      id: 6,
      title: "Premium Villa Plot",
      location: "Goa",
      price: "₹3.5 Cr",
      priceValue: 35000000,
      area: "4,000 sq ft",
      dimension: "50x80 ft",
      image:
        "https://images.unsplash.com/photo-1629997777186-3ccf91c2e009?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Residential",
      status: "Clear Title",
      facing: "East",
    },
  ];

  const filteredPlots =
    allPlots.filter((plot) => {
  const typeOkay =
    selectedType === "All" || plot.type === selectedType;

  const text = searchText.toLowerCase();
  const searchOkay =
    text === "" ||
    plot.title.toLowerCase().includes(text) ||
    plot.location.toLowerCase().includes(text);

  if(typeOkay && searchOkay){
    return true;
  }
  else{
    return false;
  }
});

const clearAllFilters = () => {
  setSelectedType("All");
  setSearchText("");
};

let activeFiltersCount;

if (selectedType !== "All" || searchText !== "") {
  activeFiltersCount =
    (selectedType !== "All" ? 1 : 0) +
    (searchText !== "" ? 1 : 0);
} else {
  activeFiltersCount = 0;
}


  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20 font-mono">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-extrabold bg-linear-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent tracking-tight mb-5">
          Plots For Sale
        </h1>
        <span className="text-amber-700 mt-0 text-md tracking-wide">
          {filteredPlots.length}
        </span>
        <span className="mt-2 text-md tracking-wide text-amber-700">
          {" "}
          properties available
        </span>
      </div>

      <div className="top-16 backdrop-blur-xl border-b border-neutral-800/70 shadow-lg shadow-black/20">
        <div className="max-w-6xl mx-auto px-5 py-3 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-60">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full pl-9 pr-3 py-2.5 bg-neutral-800/80 text-gray-200 placeholder-gray-500 
                         border border-neutral-700 rounded-xl outline-none text-sm"
            />
          </div>

          <div className="relative w-48">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
               border border-neutral-700/80 rounded-xl text-sm cursor-pointer text-gray-200 
              shadow-md transition-all duration-300"
            >
              <option value="All" className="bg-neutral-900 text-gray-300">All Types</option>
              <optgroup label="Urban Plots" className="bg-neutral-800">
                <option value="Residential" className="bg-neutral-900 text-gray-300">Residential</option>
                <option value="Commercial" className="bg-neutral-900 text-gray-300">Commercial</option>
              </optgroup>
              <optgroup label="Rural Plots" className="bg-neutral-800">
                <option value="Agricultural" className="bg-neutral-900 text-gray-300">Agricultural</option>
              </optgroup>
            </select>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-200"
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
          </div>

          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-2 text-sm text-amber-700 hover:text-amber-600 transition"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {filteredPlots.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No plots found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlots.map((plot) => (
              <Link
                key={plot.id}
                to={`#`} //Temporary
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
                           hover:border-neutral-700 transition-all duration-200 hover:scale-[1.02]"
              >
                <img
                  src={plot.image}
                  alt={plot.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold mb-1">{plot.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {plot.location}
                  </p>

                  <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                    <span className="flex items-center gap-1">
                      <Square size={14} /> {plot.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler size={14} /> {plot.dimension}
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded border border-amber-500/30">
                      {plot.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-md font-bold">{plot.price}</span>
                    <span className="text-amber-700 hover:text-amber-600 text-sm">View →</span>
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
