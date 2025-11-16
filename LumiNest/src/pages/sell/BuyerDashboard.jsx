import React from 'react';
import { Heart, MessageSquare, Eye, Search, MapPin, Home, Building2, ArrowRight } from 'lucide-react';

export default function BuyerDashboard({ onSwitchDashboard }) {
const savedProperties = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Rajpur Road, Dehradun",
    price: "₹85 Lakhs",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
    type: "Apartment",
    beds: 3,
    area: "1,450 sq ft"
  },
  {
    id: 2,
    title: "Modern Villa with Pool",
    location: "Golf Course Road, Gurgaon (Delhi NCR)",
    price: "₹1.2 Cr",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
    type: "Villa",
    beds: 4,
    area: "2,800 sq ft"
  }
];


  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">
                Buyer Dashboard
              </h1>
              <p className="text-sm text-neutral-400">
                Manage your saved properties and searches
              </p>
            </div>
            <button
              onClick={onSwitchDashboard}
              className="px-4 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all"
            >
              Switch Role
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-neutral-400" strokeWidth={2} />
              </div>
              <span className="text-2xl font-semibold text-white">12</span>
            </div>
            <p className="text-sm font-medium text-white mb-1">Saved Properties</p>
            <p className="text-xs text-neutral-500">Properties you liked</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-neutral-400" strokeWidth={2} />
              </div>
              <span className="text-2xl font-semibold text-white">5</span>
            </div>
            <p className="text-sm font-medium text-white mb-1">Active Chats</p>
            <p className="text-xs text-neutral-500">With property owners</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                <Eye className="h-5 w-5 text-neutral-400" strokeWidth={2} />
              </div>
              <span className="text-2xl font-semibold text-white">23</span>
            </div>
            <p className="text-sm font-medium text-white mb-1">Recently Viewed</p>
            <p className="text-xs text-neutral-500">Properties visited</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                <Search className="h-5 w-5 text-neutral-400" strokeWidth={2} />
              </div>
              <span className="text-2xl font-semibold text-white">8</span>
            </div>
            <p className="text-sm font-medium text-white mb-1">Saved Searches</p>
            <p className="text-xs text-neutral-500">Active alerts</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-9">
                <h2 className="text-lg font-semibold tracking-tight text-white">
                  Saved Properties
                </h2>
                <button className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                {savedProperties.map((property) => (
                  <div
                    key={property.id}
                    className="group flex gap-4 bg-neutral-800/50 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 hover:bg-neutral-800 transition-all cursor-pointer"
                  >
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white mb-1 truncate group-hover:text-neutral-300 transition-colors">
                        {property.title}
                      </h3>
                      <p className="text-xs text-neutral-400 flex items-center gap-1 mb-2">
                        <MapPin className="h-3 w-3" /> {property.location}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-neutral-500">
                        <span>{property.beds} BHK</span>
                        <span>•</span>
                        <span>{property.area}</span>
                      </div>
                      <p className="text-sm font-semibold text-white mt-2">{property.price}</p>
                    </div>
                    <button className="text-neutral-400 hover:text-white transition-colors">
                      <Heart className="h-5 w-5" fill="currentColor" strokeWidth={2} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

           
           
          </div>

          <div className="space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4">Your Profile</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Profile Status</span>
                  <span className="text-white">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Saved Searches</span>
                  <span className="text-white">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Member Since</span>
                  <span className="text-white">Jan 2025</span>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 text-sm bg-neutral-800 border border-neutral-700 rounded-lg text-white hover:bg-neutral-700 transition-all">
                Edit Profile
              </button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-2">Personalized Matches</h3>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Get property recommendations based on your preferences
              </p>
              <button className="w-full px-4 py-2 text-sm bg-neutral-800 border border-neutral-700 rounded-lg text-white hover:bg-neutral-700 transition-all">
                Set Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
