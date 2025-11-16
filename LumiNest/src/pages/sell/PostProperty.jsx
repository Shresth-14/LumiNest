import React, { useState } from 'react';
import { Building2, Home, Trees, Upload } from 'lucide-react';

export default function PostProperty() {
  const [formData, setFormData] = useState({
    propertyType: '',
    listingType: 'Sell',
    title: '',
    description: '',
    price: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    bhk: '',
    bathrooms: '',
    area: '',
    furnished: 'Unfurnished',
    amenities: [],
    images: []
  });

  const propertyTypes = [
    { id: 'apartment', label: 'Apartment', icon: Building2, color: 'blue' },
    { id: 'villa', label: 'Villa/House', icon: Home, color: 'purple' },
    { id: 'plot', label: 'Plot/Land', icon: Trees, color: 'green' }
  ];

  const amenitiesList = [
    'Parking', 'Gym', 'Swimming Pool', 'Garden', 'Power Backup',
    'Elevator', 'Security', 'Club House', 'Play Area', 'Intercom'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-neutral-950 pt-20 font-['Roboto',sans-serif]">
      <div className="border-b border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <h1 className="text-4xl font-medium text-white mb-2">Post Your Property</h1>
          <p className="text-xs text-gray-400">List your property in simple steps</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
            <h2 className="text-sm font-medium text-white mb-3">Property Type</h2>
            <div className="grid grid-cols-3 gap-2">
              {propertyTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = formData.propertyType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, propertyType: type.id }))}
                    className={`p-3 rounded-lg border transition-all ${
                      isSelected
                        ? 'border-amber-600/50 bg-amber-600/10 text-amber-600'
                        : 'border-neutral-700/40 text-gray-400 hover:border-neutral-600 hover:bg-neutral-800/40'
                    }`}
                  >
                    <Icon className={`mx-auto mb-1 transition-colors ${
                      isSelected ? 'text-amber-600' : 'text-gray-400'
                    }`} size={20} />
                    <p className={`text-xs font-medium transition-colors ${
                      isSelected ? 'text-amber-600' : 'text-gray-300'
                    }`}>{type.label}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Basic Details */}
          <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
            <h2 className="text-sm font-medium text-white mb-3">Basic Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-400 mb-1">Property Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Spacious 3BHK Apartment"
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:border-amber-600/50 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Listing Type</label>
                <select
                  name="listingType"
                  value={formData.listingType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md text-sm text-gray-200 outline-none focus:border-amber-600/50 transition cursor-pointer"
                >
                  <option value="Sell">Sell</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Price (₹)</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:border-amber-600/50 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:border-amber-600/50 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:border-amber-600/50 transition"
                />
              </div>
            </div>
          </div>

          {formData.propertyType !== 'plot' && (
            <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
              <h2 className="text-sm font-medium text-white mb-3">Property Details</h2>
              <div className="grid grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">BHK</label>
                  <select
                    name="bhk"
                    value={formData.bhk}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md text-sm text-gray-200 outline-none focus:border-amber-600/50 transition cursor-pointer"
                  >
                    <option value="">Select</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                    <option value="5+">5+ BHK</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Bathrooms</label>
                  <select
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md text-sm text-gray-200 outline-none focus:border-amber-600/50 transition cursor-pointer"
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Area (sq ft)</label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="Area"
                    className="w-full px-3 py-1.5 bg-neutral-800/40 border border-neutral-700/40 rounded-md text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:border-amber-600/50 transition"
                  />
                </div>

                <div className="col-span-3">
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Furnished Status</label>
                  <div className="flex gap-2">
                    {['Unfurnished', 'Semi-Furnished', 'Fully Furnished'].map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, furnished: status }))}
                        className={`flex-1 px-2 py-1.5 rounded-md text-xs font-medium border transition-all ${
                          formData.furnished === status
                            ? 'border-amber-600/50 bg-amber-600/10 text-amber-600'
                            : 'border-neutral-700/40 text-gray-400 hover:border-neutral-600'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {formData.propertyType !== 'plot' && (
            <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
              <h2 className="text-sm font-medium text-white mb-2.5">Amenities</h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-1.5">
                {amenitiesList.map((amenity) => (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => handleAmenityToggle(amenity)}
                    className={`px-2 py-1 rounded-md text-xs font-medium border transition-all ${
                      formData.amenities.includes(amenity)
                        ? 'border-green-500/50 bg-green-500/10 text-green-400'
                        : 'border-neutral-700/40 text-gray-400 hover:border-neutral-600'
                    }`}
                  >
                    {amenity}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-800/30">
            <h2 className="text-sm font-medium text-white mb-2.5">Property Photos</h2>
            <div className="border-2 border-dashed border-neutral-700/40 rounded-lg p-4 text-center hover:border-amber-600/50 transition-all cursor-pointer">
              <Upload className="mx-auto text-gray-400 mb-1.5" size={28} />
              <p className="text-xs text-gray-300 font-medium mb-0.5">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>

          <div className="flex gap-2.5 pt-1">
            <button
              type="button"
              className="flex-1 px-4 py-2 bg-neutral-800/60 hover:bg-neutral-800 text-white text-sm font-medium rounded-md transition-all"
            >
              Save as Draft
            </button>
            <button
              type="submit"
                className="
                  inline-flex text-end items-center gap-3
                  px-10 py-4
                  bg-orange-500/20 backdrop-blur-md
                  border border-white/10
                  text-white
                  rounded-lg
                  transition-all
                  hover:bg-orange-500/30 hover:border-white/20
                  no-underline"
            >
              Submit Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
