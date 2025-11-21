import React from "react";
import { Building2, Home, Trees, Upload } from "lucide-react";

export default function PostProperty() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-20 font-['Roboto',sans-serif]">
      <div className="border-b border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <h1 className="text-4xl font-medium text-white mb-2">Post Your Property</h1>
          <p className="text-xs text-gray-400">List your property in simple steps</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-4">
          <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
            <h2 className="text-sm font-medium text-white mb-3">Property Type</h2>

           <div className="grid grid-cols-3 gap-2">
  <div
    className="p-3 rounded-lg border border-neutral-700/40 text-gray-400 
    hover:border-neutral-600 hover:bg-neutral-800/40 transition-all cursor-pointer
    flex flex-col items-center justify-center"
  >
    <Building2 className="text-gray-400 mb-1" size={20} />
    <p className="text-xs font-medium text-gray-300">Apartment</p>
  </div>

  <div
    className="p-3 rounded-lg border border-neutral-700/40 text-gray-400 
    hover:border-neutral-600 hover:bg-neutral-800/40 transition-all cursor-pointer
    flex flex-col items-center justify-center"
  >
    <Home className="text-gray-400 mb-1" size={20} />
    <p className="text-xs font-medium text-gray-300">Villa/House</p>
  </div>

  <div
    className="p-3 rounded-lg border border-neutral-700/40 text-gray-400 
    hover:border-neutral-600 hover:bg-neutral-800/40 transition-all cursor-pointer
    flex flex-col items-center justify-center"
  >
    <Trees className="text-gray-400 mb-1" size={20} />
    <p className="text-xs font-medium text-gray-300">Plot/Land</p>
  </div>
</div>
</div>

          <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
            <h2 className="text-sm font-medium text-white mb-3">Basic Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-400 mb-1">Property Title</label>
                <input
                  type="text"
                  placeholder="e.g., Spacious 3BHK Apartment"
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md 
                  text-sm text-gray-200 placeholder:text-gray-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Listing Type</label>
                <select
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md 
                  text-sm text-gray-200 outline-none cursor-pointer"
                >
                  <option>Sell</option>
                  <option>Rent</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Price (₹)</label>
                <input
                  type="text"
                  placeholder="Enter price"
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md 
                  text-sm text-gray-200 placeholder:text-gray-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md 
                  text-sm text-gray-200 placeholder:text-gray-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">State</label>
                <input
                  type="text"
                  placeholder="State"
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md 
                  text-sm text-gray-200 placeholder:text-gray-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
            <h2 className="text-sm font-medium text-white mb-3">Property Details</h2>

            <div className="grid grid-cols-3 gap-2.5">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">BHK</label>
                <select className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md 
                    text-sm text-gray-200 outline-none cursor-pointer"
                >
                  <option>Select</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Bathrooms</label>
                <select className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md 
                    text-sm text-gray-200 outline-none cursor-pointer"
                >
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Area (sq ft)</label>
                <input
                  type="text"
                  placeholder="Area"
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md 
                  text-sm text-gray-200 placeholder:text-gray-500 outline-none"
                />
              </div>

              <div className="col-span-3">
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Furnished Status</label>
                <div className="flex gap-2">
                  {["Unfurnished", "Semi-Furnished", "Fully Furnished"].map((item) => (
                    <div
                      key={item}
                      className="flex-1 px-2 py-1.5 rounded-md text-xs font-medium border border-neutral-700/40 
                      text-gray-400 hover:border-neutral-600 cursor-pointer transition"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
            <h2 className="text-sm font-medium text-white mb-2.5">Amenities</h2>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-1.5">
              {[
                "Parking",
                "Gym",
                "Swimming Pool",
                "Garden",
                "Power Backup",
                "Elevator",
                "Security",
                "Club House",
                "Play Area",
                "Intercom",
              ].map((item) => (
                <div
                  key={item}
                  className="px-2 py-1 rounded-md text-xs font-medium border border-neutral-700/40 
                  text-gray-400 hover:border-neutral-600 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
            <h2 className="text-sm font-medium text-white mb-2.5">Property Photos</h2>

            <div className="border-2 border-dashed border-neutral-700/40 rounded-lg p-4 text-center 
              hover:border-amber-600/50 transition-all cursor-pointer"
            >
              <Upload className="mx-auto text-gray-400 mb-1.5" size={28} />
              <p className="text-xs text-gray-300 font-medium mb-0.5">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>

          <div className="flex gap-2.5 pt-1">
            <button
              type="button"
              className="flex-1 px-4 py-2 bg-neutral-800/60 hover:bg-neutral-800 text-white text-sm font-medium 
              rounded-md transition-all"
            >
              Save as Draft
            </button>

            <button
              type="button"
              className="
                inline-flex items-center gap-3
                px-10 py-4
                bg-orange-500/20 backdrop-blur-md
                border border-white/10
                text-white
                rounded-lg
                transition-all
                hover:bg-orange-500/30 hover:border-white/20"
            >
              Submit Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
