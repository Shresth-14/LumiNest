import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Search } from 'lucide-react';

export default function HomesForRent() {
  const [BHK, setBHK] = useState('All');
  const [Type, setType] = useState('All');
  const [searchText, setSearchText] = useState('');

  const allHomes = [
    {
      id: 1,
      title: "Spacious 3BHK Apartment",
      location: "Koramangala, Bangalore",
      rent: "₹35,000/month",
      rentValue: 35000,
      deposit: "₹1,05,000",
      beds: 3,
      baths: 2,
      area: "1,450 sq ft",
      type: "Apartment",
      furnished: "Semi-Furnished",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      available: "Immediate"
    },
    {
      id: 2,
      title: "Modern 2BHK Flat",
      location: "Bandra West, Mumbai",
      rent: "₹55,000/month",
      rentValue: 55000,
      deposit: "₹1,65,000",
      beds: 2,
      baths: 2,
      area: "1,100 sq ft",
      type: "Apartment",
      furnished: "Fully Furnished",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      available: "15 Days"
    },
    {
      id: 3,
      title: "Luxury 4BHK Duplex Villa",
      location: "DLF Phase 3, Gurgaon",
      rent: "₹80,000/month",
      rentValue: 80000,
      deposit: "₹2,40,000",
      beds: 4,
      baths: 3,
      area: "2,500 sq ft",
      type: "Villa",
      furnished: "Fully Furnished",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      available: "Immediate"
    },
    {
      id: 4,
      title: "Cozy 1BHK Studio",
      location: "Whitefield, Bangalore",
      rent: "₹18,000/month",
      rentValue: 18000,
      deposit: "₹54,000",
      beds: 1,
      baths: 1,
      area: "650 sq ft",
      type: "Apartment",
      furnished: "Semi-Furnished",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      available: "Immediate"
    },
    {
      id: 5,
      title: "Beautiful 3BHK with Balcony",
      location: "Pune, Maharashtra",
      rent: "₹32,000/month",
      rentValue: 32000,
      deposit: "₹96,000",
      beds: 3,
      baths: 2,
      area: "1,350 sq ft",
      type: "Apartment",
      furnished: "Unfurnished",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      available: "1 Month"
    },
    {
      id: 6,
      title: "Premium Villa House",
      location: "Anna Nagar, Chennai",
      rent: "₹65,000/month",
      rentValue: 65000,
      deposit: "₹1,95,000",
      beds: 3,
      baths: 3,
      area: "2,000 sq ft",
      type: "Villa",
      furnished: "Semi-Furnished",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      available: "15 Days"
    }
  ];

 const filteredHomes = allHomes.filter((home) => {
  const bhkOkay =
    BHK === "All" || home.beds === Number(BHK);

  const typeOkay =
  Type === "All" || home.type === Type;

  const query = searchText.toLowerCase();
  const searchOkay =
    query === "" ||
    home.title.toLowerCase().includes(query) ||
    home.location.toLowerCase().includes(query);

  return bhkOkay && typeOkay && searchOkay;
});

 const clearAllFilters = () => {
  setBHK("All");
  setType("All");
  setSearchText("");
};

let activeFiltersCount;

if (BHK !== "All" || Type !== "All" || searchText !== "") {
  activeFiltersCount =
    (BHK !== "All" ? 1 : 0) +
    (Type !== "All" ? 1 : 0) +
    (searchText !== "" ? 1 : 0);
} else {
  activeFiltersCount = 0;
}


  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-extrabold bg-linear-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent tracking-tight mb-5">
          Homes for Rent
        </h1>
        <span className="text-cyan-400 text-md tracking-wide">{filteredHomes.length}</span>
        <span className="text-md tracking-wide"> properties available</span>
      </div>

      <div className="sticky top-16 backdrop-blur-xl border-b border-neutral-800/70">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-60">
            <Search className="absolute inset-y-0 left-3 my-auto text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-neutral-800/80 text-gray-200 placeholder-gray-500 
                         border border-neutral-700 rounded-xl outline-none text-sm transition-all duration-200"
            />
          </div>

          <div className="relative w-36">
            <select
              value={BHK}
              onChange={(e) => setBHK(e.target.value)}
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
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="relative w-36">
            <select
              value={Type}
              onChange={(e) => setType(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
                         border border-neutral-700 rounded-xl text-sm cursor-pointer text-gray-200 
                         shadow-md transition-all duration-300"
            >
              <option value="All" className="bg-neutral-900 text-gray-300">All Types</option>
              <optgroup label="Residential" className="bg-neutral-800">
                <option value="Apartment" className="bg-neutral-900 text-gray-300">Apartment</option>
                <option value="Villa" className="bg-neutral-900 text-gray-300">Villa</option>
              </optgroup>
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

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

      <div className="max-w-6xl mx-auto px-4 py-8">
        {filteredHomes.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No homes found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHomes.map((home) => (
              <Link
                key={home.id}
                to={`/rent/homes/${home.id}`}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
                           hover:border-neutral-700 transition-all duration-200 hover:scale-[1.02]"
              >
                <img src={home.image} alt={home.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{home.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {home.location}
                  </p>

                  <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                    <span className="flex items-center gap-1">
                      <Bed size={14} /> {home.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} /> {home.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Square size={14} /> {home.area}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3 text-xs text-gray-400">
                    <span className="px-2 py-0.5 bg-neutral-800 rounded">{home.furnished}</span>
                    <span className="px-2 py-0.5 bg-neutral-800 rounded">{home.available}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold">{home.rent}</span>
                      <p className="text-xs text-gray-500">Deposit: {home.deposit}</p>
                    </div>
                    <span className="text-blue-400 text-sm">View →</span>
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
