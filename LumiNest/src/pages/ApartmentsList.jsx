import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";

export default function ApartmentsList() {
  const apartments = [
    {
      id: 1,
      name: "Skyline Heights",
      slug: "skyline-heights",
      location: "Downtown Metro City",
      price: "₹2.5 - 4.2 Cr",
      bedrooms: "2-4 BHK",
      bathrooms: "2-3",
      area: "1200-2000 sq ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description: "Luxury high-rise apartments with panoramic city views and premium amenities.",
    },
    {
      id: 2,
      name: "Ocean View Residency",
      slug: "ocean-view-residency",
      location: "Coastal Boulevard",
      price: "₹3.8 - 6.5 Cr",
      bedrooms: "3-5 BHK",
      bathrooms: "3-4",
      area: "1800-3200 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      description: "Beachfront luxury residences with private balconies and ocean views.",
    },
    {
      id: 3,
      name: "Greenwood Villas",
      slug: "greenwood-villas",
      location: "Green Valley Hills",
      price: "₹4.2 - 7.8 Cr",
      bedrooms: "4-6 BHK",
      bathrooms: "4-5",
      area: "2500-4000 sq ft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      description: "Independent villas surrounded by lush greenery and modern architecture.",
    },
    {
  id: 4,
  name: "Emerald Enclave",
  slug: "emerald-enclave",
  location: "Greenwood Avenue",
  price: "₹2.9 - 5.4 Cr",
  bedrooms: "2-4 BHK",
  bathrooms: "2-3",
  area: "1500-2800 sq ft",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  description: "Modern eco-friendly apartments surrounded by landscaped gardens and walking trails.",
},
{
  id: 5,
  name: "Aurora Heights",
  slug: "aurora-heights",
  location: "Central Business District",
  price: "₹4.2 - 7.8 Cr",
  bedrooms: "3-5 BHK",
  bathrooms: "3-4",
  area: "2000-3600 sq ft",
  image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
  description: "High-rise luxury living with skyline views, rooftop pool, and world-class amenities.",
},
{
  id: 6,
  name: "Serenity Villas",
  slug: "serenity-villas",
  location: "Palm Grove Estate",
  price: "₹5.5 - 9.2 Cr",
  bedrooms: "4-6 BHK",
  bathrooms: "4-5",
  area: "2500-4200 sq ft",
  image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
  description: "Exclusive villa community with private gardens, pools, and serene surroundings.",
},

  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-0">
        <div className="bg-red-400 h-60 mx-30 mb-10">hello</div>
        <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {apartments.map(
            ({ id, slug, image, name, location, description, bedrooms, bathrooms, area, price }) => (
              <Link
                key={id}
                to={`/apartments/${slug}`}
                className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden 
                           hover:border-[#b98a5a]/40 hover:scale-[1.02] transition-all duration-300"
              >

                <img src={image} alt={name} className="w-full h-50 object-cover" />

                <div className="p-5">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <MapPin size={16} /> <span>{location}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1 text-white hover:text-[#d4b48a] transition-colors">
                    {name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1"><Bed size={16} /> {bedrooms}</div>
                    <div className="flex items-center gap-1"><Bath size={16} /> {bathrooms}</div>
                    <div className="flex items-center gap-1"><Square size={16} /> {area}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#d4b48a] font-semibold">{price}</span>
                    <div className="flex items-center gap-1 text-gray-400 hover:text-white transition">
                      <span className="text-sm">View</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </section>
    </main>
  );
}
