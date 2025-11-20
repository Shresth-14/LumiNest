import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, TrendingUp, Eye, MessageSquare, Plus, Settings, ArrowRight, BarChart3 } from 'lucide-react';

export default function SellerDashboard({ onSwitchDashboard }) {
  const navigate = useNavigate();

const myProperties = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Whitefield, Bangalore",
    price: "₹85 Lakhs",
    status: "Active",
    views: 245,
    inquiries: 12,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Commercial Space",
    location: "MG Road, Bangalore",
    price: "₹1.5 Cr",
    status: "Active",
    views: 189,
    inquiries: 8,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
  },
];


  return (
    <div className="min-h-screen bg-black pt-20 font-mono">
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">
                Seller Dashboard
              </h1>
              <p className="text-sm text-neutral-400">
                Manage your listings and track performance
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/sell/post-property')}
                  className="inline-flex text-end items-center gap-3 px-5 py-4 bg-orange-500/20 backdrop-blur-mdborder border-white/1 text-white 
                  rounded-lg
                  transition-all
                  hover:bg-orange-500/30 hover:border-white/20
                  no-underline"
              >
                <Plus className="h-4 w-4" />
                List Property
              </button>
              <button
                onClick={onSwitchDashboard}
                className="px-4 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all"
              >
                Switch Role
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-orange-600/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center ring-1 ring-orange-600/20">
                <Building2 className="h-5 w-5 text-orange-600" strokeWidth={2} />
              </div>
              <span className="text-2xl font-semibold text-white">8</span>
            </div>
            <p className="text-sm font-medium text-white mb-1">Active Listings</p>
            <p className="text-xs text-neutral-500">Properties live</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-orange-600/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center ring-1 ring-orange-600/20">
                <Eye className="h-5 w-5 text-orange-600" strokeWidth={2} />
              </div>
              <span className="text-2xl font-semibold text-white">1.2k</span>
            </div>
            <p className="text-sm font-medium text-white mb-1">Total Views</p>
            <p className="text-xs text-neutral-500">This month</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-orange-600/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center ring-1 ring-orange-600/20">
                <MessageSquare className="h-5 w-5 text-orange-600" strokeWidth={2} />
              </div>
              <span className="text-2xl font-semibold text-white">34</span>
            </div>
            <p className="text-sm font-medium text-white mb-1">Inquiries</p>
            <p className="text-xs text-neutral-500">Pending responses</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-orange-600/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center ring-1 ring-orange-600/20">
                <TrendingUp className="h-5 w-5 text-orange-600" strokeWidth={2} />
              </div>
              <span className="text-2xl font-semibold text-white">+12%</span>
            </div>
            <p className="text-sm font-medium text-white mb-1">Growth</p>
            <p className="text-xs text-neutral-500">vs last month</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold tracking-tight text-white">
                  My Listings
                </h2>
                <button className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                {myProperties.map((property) => (
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
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-sm font-semibold text-white truncate group-hover:text-neutral-300 transition-colors">
                          {property.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-neutral-700 text-white rounded-full ml-2 whitespace-nowrap">
                          {property.status}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mb-2">{property.location}</p>
                      <div className="flex items-center gap-4 text-xs text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" /> {property.views}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" /> {property.inquiries}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white mt-2">{property.price}</p>
                    </div>
                    <button className="text-neutral-400 hover:text-white transition-colors">
                      <Settings className="h-5 w-5" strokeWidth={2} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4">This Month</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Profile Views</span>
                  <span className="text-white">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Avg. Response Time</span>
                  <span className="text-white">2.5h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Conversion Rate</span>
                  <span className="text-white">8.5%</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-2">Pro Tips</h3>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Properties with high-quality photos get 3x more inquiries
              </p>
              <button className="w-full px-4 py-2 text-sm bg-neutral-800 border border-neutral-700 rounded-lg text-white hover:bg-neutral-700 transition-all">
                Improve Listings
              </button>
            </div>

         
          </div>
        </div>
      </div>
    </div>
  );
}
