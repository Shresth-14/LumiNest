import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Search } from 'lucide-react';

export default function Apartments() {
  const [selectedBHK, setSelectedBHK] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
      type: "Under Construction",
    },
  ];

  const filteredApartments = allApartments.filter((apt) => {
    const matchesBHK = selectedBHK === 'All' || apt.beds === parseInt(selectedBHK);
    const matchesStatus = selectedStatus === 'All' || apt.type === selectedStatus;
    const matchesSearch =
      searchQuery === '' ||
      apt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBHK && matchesStatus && matchesSearch;
  });

  const bhkOptions = ['All', '1', '2', '3', '4'];
  const statusOptions = ['All', 'Ready to Move', 'Under Construction'];

  return (
    <div className="min-h-screen text-white pt-20">
      {/* Heading */}
          <div className="max-w-6xl mx-auto px-4 py-8 text-center">
  <h1 className="text-6xl font-extrabold bg-linear-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent tracking-tight">
    Luxury Apartments
  </h1>
  <p className="text-gray-400 mt-2 text-md tracking-wide">
    {filteredApartments.length} properties available
  </p>
</div>


      {/* Filter Bar */}
      <div className="sticky top-16 backdrop-blur-xl border-b border-neutral-800/70">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 min-w-60">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full pl-9 pr-3 py-2.5 bg-neutral-800/80 text-gray-200 placeholder-gray-500 
                         border border-neutral-700 rounded-xl outline-none text-sm
                         hover:bg-neutral-800 transition-all duration-200"
            />
          </div>

          {/* BHK Filter */}
          <div className="relative w-44">
            <select
              value={selectedBHK}
              onChange={(e) => setSelectedBHK(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
                         border border-neutral-700 rounded-xl text-sm cursor-pointer text-gray-200 
                       shadow-md transition-all duration-300"
            >
              {bhkOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-neutral-900 text-gray-300"
                >
                  {option === 'All' ? 'All BHK' : `${option} BHK`}
                </option>
              ))}
            </select>

            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Status Filter */}
          <div className="relative w-52">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
                         border border-neutral-700 rounded-xl text-sm cursor-pointer text-gray-200 
                         focus:ring-2 focus:ring-cyan-600/30 focus:border-cyan-500/50
                         hover:border-cyan-500/30 shadow-md transition-all duration-300"
            >
              {statusOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-neutral-900 text-gray-300"
                >
                  {option}
                </option>
              ))}
            </select>

            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Apartments Grid */}
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
                           hover:border-neutral-700 transition-all duration-200 hover:shadow-lg hover:shadow-black/30"
              >
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{apartment.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {apartment.location}
                  </p>

                  <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                    <span className="flex items-center gap-1"><Bed size={14} /> {apartment.beds}</span>
                    <span className="flex items-center gap-1"><Bath size={14} /> {apartment.baths}</span>
                    <span className="flex items-center gap-1"><Square size={14} /> {apartment.area}</span>
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
