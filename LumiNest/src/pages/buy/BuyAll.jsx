import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Search, Building2, Home, Trees, Hammer } from 'lucide-react';

export default function BuyAll() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allProperties = [
    // Apartments
    {
      id: 'apt-1',
      category: 'Apartments',
      title: "Modern 3BHK Apartment",
      location: "Mumbai, Maharashtra",
      price: "₹2.5 Cr",
      priceValue: 25000000,
      beds: 3,
      baths: 2,
      area: "1,850 sq ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      type: "Ready to Move",
      link: "/apartments"
    },
    {
      id: 'apt-2',
      category: 'Apartments',
      title: "Luxury 4BHK Penthouse",
      location: "Bangalore, Karnataka",
      price: "₹4.2 Cr",
      priceValue: 42000000,
      beds: 4,
      baths: 3,
      area: "2,500 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      type: "Under Construction",
      link: "/apartments"
    },
    {
      id: 'apt-3',
      category: 'Apartments',
      title: "Spacious 2BHK Flat",
      location: "Delhi NCR",
      price: "₹1.8 Cr",
      priceValue: 18000000,
      beds: 2,
      baths: 2,
      area: "1,200 sq ft",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      type: "Ready to Move",
      link: "/apartments"
    },
    // Villas
    {
      id: 'villa-1',
      category: 'Villas',
      title: "Luxury Pool Villa",
      location: "Goa",
      price: "₹8.5 Cr",
      priceValue: 85000000,
      beds: 4,
      baths: 4,
      area: "4,500 sq ft",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
      features: ["Private Pool", "Garden", "Parking"],
      link: "/villas"
    },
    {
      id: 'villa-2',
      category: 'Villas',
      title: "Modern Duplex Villa",
      location: "Bangalore, Karnataka",
      price: "₹6.2 Cr",
      priceValue: 62000000,
      beds: 4,
      baths: 3,
      area: "3,800 sq ft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      features: ["Garden", "Terrace", "Parking"],
      link: "/villas"
    },
    {
      id: 'villa-3',
      category: 'Villas',
      title: "Beach View Villa",
      location: "Chennai, Tamil Nadu",
      price: "₹12 Cr",
      priceValue: 120000000,
      beds: 5,
      baths: 5,
      area: "6,000 sq ft",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
      features: ["Private Pool", "Beach Access", "Parking"],
      link: "/villas"
    },
    // Plots
    {
      id: 'plot-1',
      category: 'Plots',
      title: "Residential Plot in Gated Community",
      location: "Whitefield, Bangalore",
      price: "₹1.8 Cr",
      priceValue: 18000000,
      area: "2,400 sq ft",
      dimension: "40x60 ft",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop",
      plotType: "Residential",
      link: "/plots"
    },
    {
      id: 'plot-2',
      category: 'Plots',
      title: "Commercial Plot on Main Road",
      location: "Pune, Maharashtra",
      price: "₹3.2 Cr",
      priceValue: 32000000,
      area: "3,600 sq ft",
      dimension: "60x60 ft",
      image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&auto=format&fit=crop",
      plotType: "Commercial",
      link: "/plots"
    },
    {
      id: 'plot-3',
      category: 'Plots',
      title: "Premium Villa Plot",
      location: "Goa",
      price: "₹3.5 Cr",
      priceValue: 35000000,
      area: "4,000 sq ft",
      dimension: "50x80 ft",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
      plotType: "Residential",
      link: "/plots"
    },
    // New Projects
    {
      id: 'project-1',
      category: 'New Projects',
      title: "Skyline Heights",
      location: "Electronic City, Bangalore",
      price: "₹75 Lakhs",
      priceValue: 7500000,
      builder: "Prestige Group",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      status: "Under Construction",
      completionPercent: 65,
      link: "/projects"
    },
    {
      id: 'project-2',
      category: 'New Projects',
      title: "Green Valley Residences",
      location: "Hinjewadi, Pune",
      price: "₹60 Lakhs",
      priceValue: 6000000,
      builder: "Godrej Properties",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      status: "Pre-Launch",
      completionPercent: 25,
      link: "/projects"
    },
    {
      id: 'project-3',
      category: 'New Projects',
      title: "Luxury Towers",
      location: "Gurgaon, Haryana",
      price: "₹1.5 Cr",
      priceValue: 15000000,
      builder: "DLF Limited",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      status: "Under Construction",
      completionPercent: 45,
      link: "/projects"
    }
  ];

  const filteredProperties = allProperties.filter((property) => {
    const matchesCategory = selectedCategory === 'All' || property.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());

    
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Apartments', 'Villas', 'Plots', 'New Projects'];

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24">
      {/* Page Heading */}
      <div className="max-w-6xl mx-auto text-center px-4 py-10 border-b border-neutral-800">
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-gray-50 via-gray-200 to-gray-300 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
          Explore All Properties
        </h1>
        <p className="text-gray-400 mt-3 text-base">
          {filteredProperties.length} properties available
        </p>
      </div>

      {/* Category Quick Links */}
      <div className="border-b border-neutral-800 bg-neutral-900/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { name: 'Apartments', icon: <Building2 size={22} className="text-blue-400" />, link: '/apartments', color: 'hover:border-blue-500' },
            { name: 'Villas', icon: <Home size={22} className="text-purple-400" />, link: '/villas', color: 'hover:border-purple-500' },
            { name: 'Plots', icon: <Trees size={22} className="text-green-400" />, link: '/plots', color: 'hover:border-green-500' },
            { name: 'New Projects', icon: <Hammer size={22} className="text-orange-400" />, link: '/projects', color: 'hover:border-orange-500' }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={`p-5 rounded-xl border border-neutral-800 bg-neutral-950 transition-all duration-300 ${item.color} hover:bg-neutral-900/80`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="p-2 bg-neutral-800/50 rounded-lg">{item.icon}</div>
                <h3 className="text-white font-semibold text-sm">{item.name}</h3>
                <p className="text-gray-400 text-xs">View details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 backdrop-blur-lg border-b border-neutral-800/70 shadow-lg shadow-black/20 z-10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 min-w-60">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full pl-9 pr-3 py-2.5 bg-neutral-900 text-gray-200 placeholder-gray-500 
                         border border-neutral-700 rounded-xl outline-none text-sm
                         hover:border-neutral-600 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Category Filter */}
          <div className="relative w-44">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 
                         rounded-xl text-sm cursor-pointer text-gray-200 shadow-inner
                         hover:border-neutral-600 focus:border-blue-500 outline-none transition-all duration-200"
            >
              {categories.map((option) => (
                <option key={option} value={option} style={{ backgroundColor: '#1c1c1c', color: '#e5e5e5' }}>
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

      {/* Properties */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            <p>No properties found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.map((property) => (
              <Link
                key={property.id}
                to={property.link}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 hover:scale-[1.02] transition-transform duration-300"
              >
                <img src={property.image} alt={property.title} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1 text-gray-100">{property.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {property.location}
                  </p>

                  {property.beds && (
                    <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                      <span className="flex items-center gap-1"><Bed size={14} /> {property.beds}</span>
                      <span className="flex items-center gap-1"><Bath size={14} /> {property.baths}</span>
                      <span className="flex items-center gap-1"><Square size={14} /> {property.area}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-100">{property.price}</span>
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
