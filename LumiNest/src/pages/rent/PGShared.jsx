import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Search, Utensils, Wifi, Shield } from 'lucide-react';

export default function PGShared() {
  const [RoomType, setRoomType] = useState('All');
  const [Gender, setGender] = useState('All');
  const [searchText, setSearchText] = useState('');

  const allPGs = [
    {
      id: 1,
      title: "Comfort Living PG",
      location: "Koramangala, Bangalore",
      rent: "₹8,500/month",
      rentValue: 8500,
      roomType: "Single",
      sharing: "Single Occupancy",
      gender: "Male",
      meals: "3 Meals",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop",
      available: "Immediate",
      amenities: ["WiFi", "AC", "Laundry"],
      pgType: "PG"
    },
    {
      id: 2,
      title: "Girls Hostel - Safe Stay",
      location: "Indiranagar, Bangalore",
      rent: "₹12,000/month",
      rentValue: 12000,
      roomType: "Single",
      sharing: "Single Occupancy",
      gender: "Female",
      meals: "2 Meals",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop",
      available: "5 Days",
      amenities: ["WiFi", "AC", "Security"],
      pgType: "Hostel"
    },
    {
      id: 3,
      title: "Budget Friendly PG",
      location: "HSR Layout, Bangalore",
      rent: "₹6,000/month",
      rentValue: 6000,
      roomType: "Double",
      sharing: "Double Sharing",
      gender: "Male",
      meals: "Breakfast Only",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop",
      available: "Immediate",
      amenities: ["WiFi", "Laundry", "Common Room"],
      pgType: "PG"
    },
    {
      id: 4,
      title: "Premium Ladies PG",
      location: "Whitefield, Bangalore",
      rent: "₹15,000/month",
      rentValue: 15000,
      roomType: "Single",
      sharing: "Single Occupancy",
      gender: "Female",
      meals: "3 Meals",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
      available: "10 Days",
      amenities: ["WiFi", "AC", "Gym", "Security"],
      pgType: "PG"
    },
    {
      id: 5,
      title: "Co-Living Space",
      location: "Electronic City, Bangalore",
      rent: "₹10,000/month",
      rentValue: 10000,
      roomType: "Double",
      sharing: "Double Sharing",
      gender: "Unisex",
      meals: "No Meals",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      available: "Immediate",
      amenities: ["WiFi", "Kitchen Access", "Common Area"],
      pgType: "Co-Living"
    },
    {
      id: 6,
      title: "Student PG",
      location: "Jayanagar, Bangalore",
      rent: "₹7,500/month",
      rentValue: 7500,
      roomType: "Triple",
      sharing: "Triple Sharing",
      gender: "Male",
      meals: "3 Meals",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop",
      available: "Immediate",
      amenities: ["WiFi", "Study Room", "Laundry"],
      pgType: "PG"
    },
    {
      id: 7,
      title: "Working Women's Hostel",
      location: "MG Road, Bangalore",
      rent: "₹13,500/month",
      rentValue: 13500,
      roomType: "Double",
      sharing: "Double Sharing",
      gender: "Female",
      meals: "2 Meals",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&auto=format&fit=crop",
      available: "7 Days",
      amenities: ["WiFi", "AC", "Security", "Parking"],
      pgType: "Hostel"
    },
    {
      id: 8,
      title: "Affordable Shared Room",
      location: "BTM Layout, Bangalore",
      rent: "₹5,000/month",
      rentValue: 5000,
      roomType: "Triple",
      sharing: "Triple Sharing",
      gender: "Male",
      meals: "Breakfast Only",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&auto=format&fit=crop",
      available: "Immediate",
      amenities: ["WiFi", "Common Kitchen"],
      pgType: "PG"
    }
  ];

const filteredPGs = allPGs.filter((pg) => {
  const roomTypeOkay =
    RoomType === "All" || pg.roomType === RoomType;

  const genderOkay =
    Gender === "All" || pg.gender === Gender;


  const text = searchText.toLowerCase();
  const searchOkay =
    text === "" ||
    pg.title.toLowerCase().includes(text) ||
    pg.location.toLowerCase().includes(text);

  return roomTypeOkay && genderOkay && searchOkay;
});

const clearAllFilters = () => {
  setRoomType("All");
  setGender("All");
  setSearchText("");
};

let activeFiltersCount;

if (RoomType !== "All" || Gender !== "All" || searchText !== "") {
  activeFiltersCount =
    (RoomType !== "All" ? 1 : 0) +
    (Gender !== "All" ? 1 : 0) +
    (searchText !== "" ? 1 : 0);
} else {
  activeFiltersCount = 0;
}


  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-extrabold bg-linear-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent tracking-tight mb-5">
          PG & Shared Accommodations
        </h1>
        <span className="text-cyan-400 text-md tracking-wide">{filteredPGs.length}</span>
        <span className="text-md tracking-wide"> options available</span>
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
              value={RoomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
                         border border-neutral-700 rounded-xl text-sm cursor-pointer text-gray-200 
                         shadow-md transition-all duration-300"
            >
              <option value="All" className="bg-neutral-900 text-gray-300">All Rooms</option>
              <optgroup label="Private" className="bg-neutral-800">
                <option value="Single" className="bg-neutral-900 text-gray-300">Single</option>
              </optgroup>
              <optgroup label="Shared" className="bg-neutral-800">
                <option value="Double" className="bg-neutral-900 text-gray-300">Double</option>
                <option value="Triple" className="bg-neutral-900 text-gray-300">Triple</option>
              </optgroup>
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="relative w-32">
            <select
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800/90 to-neutral-900/90 
                         border border-neutral-700 rounded-xl text-sm cursor-pointer text-gray-200 
                         shadow-md transition-all duration-300"
            >
              <option value="All" className="bg-neutral-900 text-gray-300">All Genders</option>
              <option value="Male" className="bg-neutral-900 text-gray-300">Male</option>
              <option value="Female" className="bg-neutral-900 text-gray-300">Female</option>
              <option value="Unisex" className="bg-neutral-900 text-gray-300">Unisex</option>
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
        {filteredPGs.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No accommodations found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPGs.map((pg) => (
              <Link
                key={pg.id}
                to={`/rent/pg/${pg.id}`}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
                           hover:border-neutral-700 transition-all duration-200 hover:scale-[1.02]"
              >
                <img src={pg.image} alt={pg.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{pg.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {pg.location}
                  </p>

                  <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                    <span className="flex items-center gap-1">
                      <Users size={14} /> {pg.sharing}
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield size={14} /> {pg.gender}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3 text-xs text-gray-400">
                    <span className="px-2 py-0.5 bg-neutral-800 rounded flex items-center gap-1">
                      <Utensils size={12} /> {pg.meals}
                    </span>
                    {pg.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-0.5 bg-neutral-800 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{pg.rent}</span>
                    <span className="text-purple-400 text-sm">View →</span>
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
