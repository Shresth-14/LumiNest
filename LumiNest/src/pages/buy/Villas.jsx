import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, Search } from "lucide-react";

export default function Villas() {
  const [searchText, setSearchText] = useState("");
  const [bhkFilter, setBhkFilter] = useState("All");

  const villas = [
    {
      id: 1,
      title: "Luxury Pool Villa",
      location: "Goa",
      price: "₹8.5 Cr",
      beds: 4,
      baths: 4,
      area: "4500 sq ft",
      img: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Pool", "Garden", "Parking"],
    },
    {
      id: 2,
      title: "Modern Duplex",
      location: "Bangalore",
      price: "₹6.2 Cr",
      beds: 4,
      baths: 3,
      area: "3800 sq ft",
      img: "https://images.unsplash.com/photo-1643297550841-1386b3a10612?q=80&w=2453&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Garden", "Terrace"],
    },
    {
      id: 3,
      title: "Beach View Villa",
      location: "Chennai",
      price: "₹12 Cr",
      beds: 5,
      baths: 5,
      area: "6000 sq ft",
      img: "https://images.unsplash.com/photo-1709744873177-714d7ab0fe02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Pool", "Beach Access"],
    },
    {
      id: 4,
      title: "Contemporary Villa",
      location: "Pune",
      price: "₹5.5 Cr",
      beds: 3,
      baths: 3,
      area: "3200 sq ft",
      img: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=2415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Gym", "Garden"],
    },
    {
      id: 5,
      title: "Hillside Villa",
      location: "Lonavala",
      price: "₹9.8 Cr",
      beds: 5,
      baths: 4,
      area: "5500 sq ft",
      img: "https://plus.unsplash.com/premium_photo-1694475571402-3c76c5ecf9f7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Valley View", "Garden"],
    },
  ];

  const filteredVillas = villas.filter((villa) => {
    const text = searchText.toLowerCase();

    const searchOkay =
      villa.title.toLowerCase().includes(text) ||
      villa.location.toLowerCase().includes(text);

    const bhkOkay = bhkFilter === "All" || villa.beds === Number(bhkFilter);

    if(searchOkay && bhkOkay){
      return true;
    }else{
      return false;
    }
  });

  const clearAllFilters = () => {
    setBhkFilter("All");
    setSearchText("");
  };

  let activeFiltersCount;

  if (bhkFilter !== "All" || searchText !== "") {
    activeFiltersCount =
      (bhkFilter !== "All" ? 1 : 0) + (searchText !== "" ? 1 : 0);
  } else {
    activeFiltersCount = 0;
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20 font-mono">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-extrabold bg-linear-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent tracking-tight mb-5">
          Luxury Villas
        </h1>
        <span className="text-amber-700 mt-0 text-md">
          {filteredVillas.length}
        </span>
        <span className="mt-2 text-md tracking-wide text-amber-700">
          {" "}
          properties available
        </span>
      </div>
      <div className="top-16 backdrop-blur-xl border-b border-neutral-800/70">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap gap-4 items-center justify-between">
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
                              border border-neutral-700 rounded-xl outline-none text-sm"
            />
          </div>

          <div className="relative w-44">
            <select
              value={bhkFilter}
              onChange={(e) => setBhkFilter(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
                              border border-neutral-700 rounded-xl text-sm cursor-pointer text-gray-200 
                            shadow-md"
            >
              <option value="All" className="bg-neutral-900 text-gray-300">
                All BHK
              </option>
              <optgroup label="Compact" className="bg-neutral-800">
                <option value="1" className="bg-neutral-900 text-gray-300">
                  1 BHK
                </option>
                <option value="2" className="bg-neutral-900 text-gray-300">
                  2 BHK
                </option>
              </optgroup>
              <optgroup label="Spacious" className="bg-neutral-800">
                <option value="3" className="bg-neutral-900 text-gray-300">
                  3 BHK
                </option>
                <option value="4" className="bg-neutral-900 text-gray-300">
                  4 BHK
                </option>
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
        {filteredVillas.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No villas found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVillas.map((villas) => (
              <Link
                key={villas.id}
                to={`#`} //Temporary
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
                           hover:border-neutral-700 transition-all duration-200 hover:scale-[1.02]"
              >
                <img
                  src={villas.img}
                  alt={villas.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold mb-1">{villas.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {villas.location}
                  </p>

                  <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                    <span className="flex items-center gap-1">
                      <Bed size={14} /> {villas.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} /> {villas.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Square size={14} /> {villas.area}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 my-4">
                    {villas.features.map((f, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded border border-amber-500/30"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-md font-bold">{villas.price}</span>
                    <span className="text-amber-700 hover:text-amber-600 text-sm">
                      View →
                    </span>
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
