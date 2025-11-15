import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, Search } from "lucide-react";

export default function Villas() {
  const [searchText, setSearchText] = useState("");
  const [bhkFilter, setBhkFilter] = useState("All");

  const villas = [
    { 
      id: 1, title: "Luxury Pool Villa",
      location: "Goa", 
      price: "₹8.5 Cr", 
      beds: 4, baths: 4, 
      area: "4500 sq ft", 
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", 
      features: ["Pool", "Garden", "Parking"] },
    { 
      id: 2, 
      title: "Modern Duplex", 
      location: "Bangalore", 
      price: "₹6.2 Cr", 
      beds: 4, 
      baths: 3, 
      area: "3800 sq ft", 
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", 
      features: ["Garden", "Terrace"] },
    { 
      id: 3, 
      title: "Beach View Villa", 
      location: "Chennai", 
      price: "₹12 Cr", 
      beds: 5, 
      baths: 5, 
      area: "6000 sq ft", 
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800", 
      features: ["Pool", "Beach Access"] },
    { 
      id: 4, 
      title: "Contemporary Villa", 
      location: "Pune", 
      price: "₹5.5 Cr", 
      beds: 3, 
      baths: 3, 
      area: "3200 sq ft", 
      img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800", 
      features: ["Gym", "Garden"] },
    { 
      id: 5, 
      title: "Hillside Villa", 
      location: "Lonavala", 
      price: "₹9.8 Cr", 
      beds: 5, 
      baths: 4, 
      area: "5500 sq ft", 
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800", 
      features: ["Valley View", "Garden"] 
    },
  ];

    const bhkOptions = ["All", "1", "2", "3", "4"];

  const filteredVillas = villas.filter((villas) => {
    const matchesSearch =
      villas.title.toLowerCase().includes(searchText.toLowerCase()) ||
      villas.location.toLowerCase().includes(searchText.toLowerCase());
    const matchesBhk = bhkFilter === "All" || villas.beds === Number(bhkFilter);
    return matchesSearch && matchesBhk;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
     <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-extrabold bg-linear-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent tracking-tight mb-5">
          Luxury Villas
        </h1>
        <span className="text-cyan-400 mt-0 text-md tracking-wide">
          {filteredVillas.length}
        </span>
        <span className="mt-2 text-md tracking-wide">
          {" "}
          properties available
        </span>
      </div>
       <div className="sticky top-16 backdrop-blur-xl border-b border-neutral-800/70">
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
                              border border-neutral-700 rounded-xl outline-none text-sm
                              transition-all duration-200"
                 />
               </div>
     
               <div className="relative w-44">
                 <select
                   value={bhkFilter}
                   onChange={(e) => setBhkFilter(e.target.value)}
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
                       {option === "All" ? "All BHK" : `${option} BHK`}
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
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M19 9l-7 7-7-7"
                   />
                 </svg>
               </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {filteredVillas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVillas.map((villas) => (
              <Link
                key={villas.id}
                to={`/villas/${villas.id}`} //Temporary
                   className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
                           hover:border-neutral-700 transition-all duration-200 hover:scale-[1.02]"
               >
                <img src={villas.img} alt={villas.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{villas.title}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {villas.location}
                  </p>

                  <div className="flex items-center gap-3 text-gray-400 text-sm border-b border-neutral-800 pb-2 mb-3">
                    <span className="flex items-center gap-1"><Bed size={14} /> {villas.beds}</span>
                    <span className="flex items-center gap-1"><Bath size={14} /> {villas.baths}</span>
                    <span className="flex items-center gap-1"><Square size={14} /> {villas.area}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3 text-xs text-gray-400">
                    {villas.features.map((f, i) => (
                      <span key={i} className="px-2 py-0.5 bg-neutral-800 rounded">{f}</span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{villas.price}</span>
                    <span className="text-purple-400 text-sm">View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p>No villas found</p>
          </div>
        )}
      </div>
    </div>
  );
}
