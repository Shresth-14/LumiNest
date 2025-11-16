import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Search, Building2, Home, Trees, Hammer } from 'lucide-react';

export default function BuyAll() {
  const [searchText, setSearchText] = useState('');

  const allProperties = [
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
      image: "https://images.unsplash.com/photo-1612637968894-660373e23b03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1643297550841-1386b3a10612?q=80&w=2453&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1709744873177-714d7ab0fe02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1655319446878-44e5c1e31551?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1601622962666-d0b6d43a7ac7?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1629997777186-3ccf91c2e009?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const text = searchText.toLowerCase();

  const matchesSearch =
    text === "" ||
    property.title.toLowerCase().includes(text) ||
    property.location.toLowerCase().includes(text);

  return matchesSearch;
});

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 font-mono">

      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-300 mb-5">
          Browse All Properties
        </h1>

        <span className="text-amber-600 text-md">{filteredProperties.length}</span>
        <span className="text-md text-amber-600"> properties available</span>
      </div>

      <div className="backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {[
            { name: 'Apartments', icon: <Building2 size={20} className="text-amber-600" />, link: '/apartments' },
            { name: 'Villas', icon: <Home size={20} className="text-purple-400" />, link: '/villas' },
            { name: 'Plots', icon: <Trees size={20} className="text-green-400" />, link: '/plots' },
            { name: 'New Projects', icon: <Hammer size={20} className="text-orange-400" />, link: '/projects' }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="p-1.5 bg-neutral-800/40 rounded-md">{item.icon}</div>
                <h3 className="text-white text-xs font-medium">{item.name}</h3>
                <p className="text-gray-500 text-[10px]">Explore</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="sticky top-16 backdrop-blur-md z-10 border-b border-neutral-800/50">
        <div className="max-w-6xl  mx-auto px-5 py-3 flex flex-wrap gap-4 items-center justify-between ml-59">
          <div className="relative flex-1 min-w-60">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by name or location..."
              className="w-247 pl-9 pr-3 py-2.5 bg-neutral-800/20 text-gray-200 placeholder-gray-500 
                         border border-neutral-700 rounded-xl outline-none text-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            No properties found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.map((property) => (
              <Link
                key={property.id}
                to={property.link}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
                           hover:border-neutral-700 hover:scale-[1.02] transition-transform duration-300"
              >
                <img src={property.image} alt={property.title} className="h-52 w-full object-cover" />

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">{property.title}</h3>

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
                    <span className="text-amber-600 text-sm">View →</span>
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
