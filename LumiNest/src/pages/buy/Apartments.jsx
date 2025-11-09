import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, Filter, Search, X } from 'lucide-react';

export default function Apartments() {
  const [selectedBHK, setSelectedBHK] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

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
      type: "Ready to Move"
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
      type: "Under Construction"
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
      type: "Ready to Move"
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
      type: "Ready to Move"
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
      type: "Under Construction"
    },
    {
      id: 6,
      title: "Compact 1BHK Studio",
      location: "Chennai, Tamil Nadu",
      price: "₹75 Lakhs",
      priceValue: 7500000,
      beds: 1,
      baths: 1,
      area: "650 sq ft",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      type: "Ready to Move"
    },
    {
      id: 7,
      title: "Sea View 3BHK Luxury",
      location: "Mumbai, Maharashtra",
      price: "₹5.2 Cr",
      priceValue: 52000000,
      beds: 3,
      baths: 3,
      area: "2,100 sq ft",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      type: "Ready to Move"
    },
    {
      id: 8,
      title: "Smart 2BHK with Terrace",
      location: "Bangalore, Karnataka",
      price: "₹1.9 Cr",
      priceValue: 19000000,
      beds: 2,
      baths: 2,
      area: "1,400 sq ft",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop",
      type: "Under Construction"
    }
  ];

  const filteredApartments = allApartments.filter(apt => {
    const matchesBHK = selectedBHK === 'All' || apt.beds === parseInt(selectedBHK);
    const matchesStatus = selectedStatus === 'All' || apt.type === selectedStatus;
    const matchesSearch = searchQuery === '' || 
      apt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange === 'Under 1 Cr') matchesPrice = apt.priceValue < 10000000;
    else if (priceRange === '1-2 Cr') matchesPrice = apt.priceValue >= 10000000 && apt.priceValue < 20000000;
    else if (priceRange === '2-3 Cr') matchesPrice = apt.priceValue >= 20000000 && apt.priceValue < 30000000;
    else if (priceRange === 'Above 3 Cr') matchesPrice = apt.priceValue >= 30000000;

    return matchesBHK && matchesStatus && matchesSearch && matchesPrice;
  });

  const bhkOptions = ['All', '1', '2', '3', '4'];
  const statusOptions = ['All', 'Ready to Move', 'Under Construction'];
  const priceOptions = ['All', 'Under 1 Cr', '1-2 Cr', '2-3 Cr', 'Above 3 Cr'];

  const clearAllFilters = () => {
    setSelectedBHK('All');
    setSelectedStatus('All');
    setPriceRange('All');
    setSearchQuery('');
  };

  const activeFiltersCount = [selectedBHK, selectedStatus, priceRange].filter(f => f !== 'All').length;

  return (
    <div className="min-h-screen bg-neutral-950 pt-20">
      <div className="bg-linear-to-b from-neutral-900 to-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Dream Apartment
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore {allApartments.length}+ modern residential spaces across India
            </p>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by location, project name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-full text-gray-200 placeholder:text-gray-500 outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-16 z-30 border-b border-neutral-800 bg-neutral-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Mobile Filter Dropdown */}
          <div className="lg:hidden">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
                activeFiltersCount > 0 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-neutral-800 hover:bg-neutral-700 text-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter size={18} />
                <span className="font-medium">Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-semibold">
                    {activeFiltersCount}
                  </span>
                )}
              </div>
              <svg
                className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showFilters && (
              <div className="mt-3 p-4 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">BHK Configuration</label>
                  <div className="grid grid-cols-5 gap-2">
                    {bhkOptions.map(option => (
                      <button
                        key={option}
                        onClick={() => setSelectedBHK(option)}
                        className={`py-2 text-sm font-medium rounded-lg transition ${
                          selectedBHK === option
                            ? 'bg-white text-neutral-900'
                            : 'bg-neutral-900/50 text-gray-300 hover:bg-neutral-700'
                        }`}
                      >
                        {option === 'All' ? 'All' : option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Property Status</label>
                  <div className="grid grid-cols-2 gap-2">
                    {statusOptions.map(status => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`py-2.5 text-sm font-medium rounded-lg transition ${
                          selectedStatus === status
                            ? 'bg-white text-neutral-900'
                            : 'bg-neutral-900/50 text-gray-300 hover:bg-neutral-700'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2.5 bg-neutral-900/50 text-gray-200 rounded-lg border border-neutral-700/50 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                  >
                    {priceOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="w-full py-2.5 text-sm text-red-400 hover:text-red-300 font-medium transition"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Desktop Filter Bar */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-3 mb-4">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeFiltersCount > 0 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-neutral-800 hover:bg-neutral-700 text-gray-200'
                }`}
              >
                <Filter size={18} />
                <span>All Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <div className="h-8 w-px bg-neutral-700"></div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 font-medium">BHK:</span>
                <div className="flex gap-2">
                  {bhkOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => setSelectedBHK(option)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedBHK === option
                          ? 'bg-white text-neutral-900 shadow-md'
                          : 'bg-neutral-800 hover:bg-neutral-700 text-gray-300'
                      }`}
                    >
                      {option === 'All' ? 'All' : option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-8 w-px bg-neutral-700"></div>

              <div className="flex gap-2">
                {statusOptions.slice(1).map(status => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(selectedStatus === status ? 'All' : status)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedStatus === status
                        ? 'bg-white text-neutral-900 shadow-md'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-gray-300'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              {activeFiltersCount > 0 && (
                <>
                  <div className="h-8 w-px bg-neutral-700"></div>
                  <button
                    onClick={clearAllFilters}
                    className="ml-auto px-4 py-2 text-sm text-red-400 hover:text-red-300 font-medium transition"
                  >
                    Clear All
                  </button>
                </>
              )}
            </div>

            {/* Extended Filters Panel */}
            {showFilters && (
              <div className="p-5 bg-neutral-800/60 backdrop-blur-sm rounded-xl border border-neutral-700/50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2.5 uppercase tracking-wide">Price Range</label>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-900/70 text-gray-200 rounded-lg border border-neutral-700/50 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                    >
                      {priceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2.5 uppercase tracking-wide">Property Status</label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-900/70 text-gray-200 rounded-lg border border-neutral-700/50 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                    >
                      {statusOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2.5 uppercase tracking-wide">BHK Configuration</label>
                    <select
                      value={selectedBHK}
                      onChange={(e) => setSelectedBHK(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-900/70 text-gray-200 rounded-lg border border-neutral-700/50 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                    >
                      {bhkOptions.map(option => (
                        <option key={option} value={option}>
                          {option === 'All' ? 'All BHK' : `${option} BHK`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Available Apartments</h2>
            <p className="text-gray-400 mt-1">
              {filteredApartments.length} {filteredApartments.length === 1 ? 'property' : 'properties'} found
            </p>
          </div>
        </div>

        {filteredApartments.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-800 mb-4">
              <Search className="text-gray-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No properties found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your filters or search criteria</p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-3 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApartments.map((apartment) => (
              <div
                key={apartment.id}
                className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/5"
              >
                {/* Image */}
                <div className="relative h-56 bg-neutral-800 overflow-hidden">
                  <img
                    src={apartment.image}
                    alt={apartment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <button className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-red-500 hover:scale-110 transition-all duration-200">
                    <Heart size={18} className="text-white" />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-3 py-1 backdrop-blur-md text-white text-xs font-semibold rounded-full ${
                      apartment.type === 'Ready to Move' ? 'bg-green-500/90' : 'bg-orange-500/90'
                    }`}>
                      {apartment.type}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                    {apartment.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <MapPin size={14} className="shrink-0" />
                    <span className="line-clamp-1">{apartment.location}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 pb-4 border-b border-neutral-800">
                    <div className="flex items-center gap-1">
                      <Bed size={16} className="text-gray-500" />
                      <span>{apartment.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} className="text-gray-500" />
                      <span>{apartment.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square size={16} className="text-gray-500" />
                      <span>{apartment.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Price</div>
                      <div className="text-2xl font-bold text-white">{apartment.price}</div>
                    </div>
                    <Link
                      to={`/apartments/${apartment.id}`}
                      className="px-4 py-2 bg-white/10 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredApartments.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg transition-all hover:scale-105">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
