import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Calendar, Search } from 'lucide-react';

export default function NewProjects() {
  const [status, setStatus] = useState('All');
  const [searchText, setSearchText] = useState('');

  const allProjects = [
    {
      id: 1,
      title: "Skyline Heights",
      builder: "Prestige Group",
      location: "Electronic City, Bangalore",
      priceRange: "₹75 Lakhs - ₹1.2 Cr",
      priceValue: 7500000,
      configurations: "2, 3 BHK",
      totalUnits: 450,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      possession: "Dec 2025",
      status: "Under Construction",
      completionPercent: 65,
      amenities: ["Clubhouse", "Pool", "Gym", "Park"]
    },
    {
      id: 2,
      title: "Green Valley Residences",
      builder: "Godrej Properties",
      location: "Hinjewadi, Pune",
      priceRange: "₹60 Lakhs - ₹95 Lakhs",
      priceValue: 6000000,
      configurations: "1, 2, 3 BHK",
      totalUnits: 320,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      possession: "Jun 2026",
      status: "Pre-Launch",
      completionPercent: 25,
      amenities: ["Garden", "Gym", "Kids Play Area", "Security"]
    },
    {
      id: 3,
      title: "Luxury Towers",
      builder: "DLF Limited",
      location: "Gurgaon, Haryana",
      priceRange: "₹1.5 Cr - ₹3.5 Cr",
      priceValue: 15000000,
      configurations: "3, 4 BHK",
      totalUnits: 200,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      possession: "Mar 2026",
      status: "Under Construction",
      completionPercent: 45,
      amenities: ["Spa", "Pool", "Concierge", "Rooftop Garden"]
    },
    {
      id: 4,
      title: "Urban Nest",
      builder: "Sobha Limited",
      location: "Whitefield, Bangalore",
      priceRange: "₹85 Lakhs - ₹1.4 Cr",
      priceValue: 8500000,
      configurations: "2, 3, 4 BHK",
      totalUnits: 380,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      possession: "Sep 2025",
      status: "Under Construction",
      completionPercent: 75,
      amenities: ["Clubhouse", "Tennis Court", "Gym", "Pool"]
    },
    {
      id: 5,
      title: "Palm Springs",
      builder: "Brigade Group",
      location: "Sarjapur Road, Bangalore",
      priceRange: "₹70 Lakhs - ₹1.1 Cr",
      priceValue: 7000000,
      configurations: "2, 3 BHK",
      totalUnits: 280,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
      possession: "Dec 2026",
      status: "Newly Launched",
      completionPercent: 15,
      amenities: ["Pool", "Gym", "Yoga Deck", "Amphitheatre"]
    },
    {
      id: 6,
      title: "Riverfront Heights",
      builder: "Oberoi Realty",
      location: "Mulund, Mumbai",
      priceRange: "₹1.8 Cr - ₹4.2 Cr",
      priceValue: 18000000,
      configurations: "3, 4, 5 BHK",
      totalUnits: 150,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      possession: "Mar 2027",
      status: "Pre-Launch",
      completionPercent: 10,
      amenities: ["River View", "Clubhouse", "Pool", "Private Terrace"]
    }
  ];

const filteredProjects = allProjects.filter((project) => {
  const statusOkay =
    status === "All" || project.status === status;

  const text = searchText.toLowerCase();
  const searchOkay =
    text === "" ||
    project.title.toLowerCase().includes(text) ||
    project.location.toLowerCase().includes(text) ||
    project.builder.toLowerCase().includes(text);

  if (statusOkay && searchOkay) {
    return true;
  } else {
    return false;
  }
});

const clearAllFilters = () => {
  setStatus("All");
  setSearchText("");
};

let activeFiltersCount;

if (status !== "All" || searchText !== "") {
  activeFiltersCount =
    (status !== "All" ? 1 : 0) +
    (searchText !== "" ? 1 : 0);
} else {
  activeFiltersCount = 0;
}


  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-extrabold bg-linear-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent tracking-tight mb-5">
          Luxury Apartments
        </h1>
        <span className="text-cyan-400 mt-0 text-md tracking-wide">
          {filteredProjects.length}
        </span>
        <span className="mt-2 text-md tracking-wide">
          {" "}
          properties available
        </span>
      </div>
      <div className="sticky top-16 backdrop-blur-xl border-b border-neutral-800/70 shadow-lg shadow-black/20">
        <div className="max-w-6xl mx-auto px-5 py-3 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-60">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
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
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-linear-to-b from-neutral-800 to-neutral-900 
                         border border-neutral-700 rounded-xl text-sm cursor-pointer
                         text-gray-200 shadow-inner transition-all duration-200
                         hover:border-neutral-600 hover:bg-neutral-800/90 
                         outline-none"
            >
              <option value="All" style={{ backgroundColor: "#202020", color: "#e5e5e5" }}>All Status</option>
              <optgroup label="Early Stage" style={{ backgroundColor: "#1a1a1a" }}>
                <option value="Pre-Launch" style={{ backgroundColor: "#202020", color: "#e5e5e5" }}>Pre-Launch</option>
                <option value="Newly Launched" style={{ backgroundColor: "#202020", color: "#e5e5e5" }}>Newly Launched</option>
              </optgroup>
              <optgroup label="In Progress" style={{ backgroundColor: "#1a1a1a" }}>
                <option value="Under Construction" style={{ backgroundColor: "#202020", color: "#e5e5e5" }}>Under Construction</option>
              </optgroup>
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
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No projects found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`} //Temporary
                 className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
                           hover:border-neutral-700 transition-all duration-200 hover:scale-[1.02]"
               >
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-400 mb-2">by {project.builder}</p>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {project.location}
                  </p>

                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span className="text-gray-300 font-medium">{project.completionPercent}%</span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${project.completionPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                    <span className="flex items-center gap-1">
                      <Building2 size={14} /> {project.configurations}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {project.possession}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3 text-xs text-gray-400">
                    {project.amenities.map((amenity, i) => (
                      <span key={i} className="px-2 py-0.5 bg-neutral-800 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{project.priceRange.split(' - ')[0]}</span>
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
