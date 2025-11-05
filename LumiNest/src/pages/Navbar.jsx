import { useState} from "react";
import { Link } from "react-router-dom";
import { User, LogOut, Settings, UserCircle, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [menuHovered, setMenuHovered] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
const [isLoggedIn, setIsLoggedIn] = useState(false);


  const menuLeft = [
    {
      title: "Buy",
      links: [
        { label: "Apartments", to: "/apartments", description: "Modern residential spaces" },
        { label: "Villas", to: "/villas", description: "Luxury independent homes" },
        { label: "Plots", to: "/plots", description: "Land for development" },
      ],
    },
    {
      title: "Sell",
      links: [
        { label: "Post Property", to: "/sell/post", description: "List your property" },
        { label: "Pricing Plans", to: "/sell/plans", description: "Choose your plan" },
      ],
    },
    {
      title: "Rent",
      links: [
        { label: "Homes for Rent", to: "/rent/homes", description: "Residential rentals" },
        { label: "Commercial Spaces", to: "/rent/commercial", description: "Office & retail spaces" },
      ],
    },
  ];

  const cities = [
    "Delhi", "Gurgaon", "Noida", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Ahmedabad", "Jaipur", "Chandigarh", "Lucknow", "Indore", "Nagpur",
    "Surat", "Kochi", "Bhopal", "Goa", "Dehradun", "Amritsar", "Visakhapatnam",
    "Vadodara", "Coimbatore", "Mysuru", "Trivandrum", "Patna", "Ranchi", "Shimla",
    "Udaipur", "Jodhpur", "Raipur"
  ];

  const handleMenuEnter = (title) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setMenuHovered(title);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => setMenuHovered(null), 150);
    setDropdownTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => setMenuHovered(null), 100);
    setDropdownTimeout(timeout);
  };

  return (
    <nav
  className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50
bg-linear-to-br from-[#1a1a1a]/70 to-[#0d0d0d]/50 
backdrop-blur-5xl
shadow-[0_2px_20px_rgba(0,0,0,0.4)]
px-10 py-3 flex items-center justify-between
transition-all duration-300"

    >
      
   {/* BUY SELL RENT  */}
      <div className="hidden md:flex items-center space-x-6 text-gray-300 font-medium">
        {menuLeft.map((item) => (
          <div
            key={item.title}
            className="relative group"
            onMouseEnter={() => handleMenuEnter(item.title)}
            onMouseLeave={handleMenuLeave}
          >
            <Link

              className="text-gray-300 hover:text-white transition-all duration-200 py-2 px-1"
            >
              {item.title}
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-white to-gray-300 transition-all duration-300 group-hover:w-full rounded-full"></span>

            {item.links.length > 0 && menuHovered === item.title && (
              <div
                className="absolute top-10 left-0 w-64
                bg-[#0a0a0a]/95 backdrop-blur-xl border border-neutral-700/60
                rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]
                py-3 animate-fadeIn overflow-hidden"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="absolute -top-2 left-6 w-4 h-4 bg-linear-to-r from-neutral-900/50 to-neutral-800/50  border-l border-t border-neutral-700/60 rotate-45"></div>
                {item.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="group/item flex items-center justify-between px-5 py-3 text-sm text-gray-300 
                    hover:bg-white/10 hover:text-white transition-all duration-200
                    border-b border-neutral-800/50 last:border-b-0"
                  >
                    <div className="flex-1">
                      <div className="font-medium group-hover/item:text-white transition-colors">
                        {link.label}
                      </div>
                      {link.description && (
                        <div className="text-xs text-gray-500 group-hover/item:text-gray-400 mt-0.5">
                          {link.description}
                        </div>
                      )}
                    </div>
                    <ChevronRight
                      size={14}
                      className="text-gray-600 group-hover/item:text-gray-300 group-hover/item:translate-x-1 transition-all duration-200"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* LUMINEST LOGO */}
      <Link
        to="/"
        className="absolute left-1/2 -translate-x-1/2 text-4xl font-semibold tracking-tight text-white select-none hover:scale-105 transition-transform duration-200"
      >
       <span className="bg-linear-to-r from-[#ba9a2f] via-[#b98a5a] to-[#8b5e3c] bg-clip-text text-transparent">
  LumiNest
</span>

      </Link>

      <div className="flex items-center space-x-6">
        {/* CITY DROPDOWN */}
        <div
          className="relative group"
          onMouseEnter={() => handleMenuEnter("Cities")}
          onMouseLeave={handleMenuLeave}
        >
          <button className="text-gray-300 hover:text-white transition-all duration-200 py-2 px-1 font-medium">
            Select City
          </button>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-white to-gray-300 transition-all duration-300 group-hover:w-full rounded-full"></span>


{menuHovered === "Cities" && (
  <div
    className="absolute top-[calc(100%+20px)] left-0 w-60 max-h-56 overflow-y-auto
               bg-[#0a0a0a]/95 backdrop-blur-xl border border-neutral-700/70
               rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]
               animate-fadeIn z-50 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
  >
    {/* CITIES DROPDOWN HEADER */}
    <div className="px-5 py-3 bg-linear-to-r from-neutral-900/50 to-neutral-800/50 border-b border-neutral-700/50">
      <p className="text-sm font-medium text-white">Select a City</p>
      <p className="text-xs text-gray-400">Explore different locations</p>
    </div>

   {/* LIST OF CITIES */}
    <div className="py-2">
      {cities.map((city) => (
        <Link
          key={city}
          to={`/city/${city.toLowerCase()}`}
          className="group flex items-center justify-between gap-3 px-5 py-2 text-sm text-gray-300 
                     hover:bg-white/10 hover:text-white transition-all duration-200
                     border-b border-neutral-800/50 last:border-b-0"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gray-500 group-hover:bg-white transition-all duration-200"></span>
            <span>{city}</span>
          </div>
          <ChevronRight
            size={14}
            className="text-gray-600 opacity-0 -translate-x-1
                       group-hover:opacity-100 group-hover:translate-x-0
                       transition-all duration-300"
          />
        </Link>
      ))}
    </div>
  </div>
)}

        </div>
{/* CONTACT BUTTON */}
     <Link
  to="/contact"
  className="relative group text-gray-300 hover:text-white transition-all duration-200 py-2 px-1 font-medium"
>
  Contact
  <span
    className="absolute left-0 bottom-1 w-0 h-0.5 bg-white 
               transition-all duration-300 group-hover:w-full"
  ></span>
</Link>
        {/* PROFILE ICON */}
       <div className="relative">
  <div
    className="p-3 rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-all duration-200 
               border border-neutral-700 cursor-pointer hover:scale-105 hover:shadow-lg"
    onClick={() => setProfileOpen((prev) => !prev)}
  >
    <User className="w-4 h-4 text-gray-200" />
  </div>

  {profileOpen && (
    <div
      className="absolute top-[calc(100%+15px)] right-0 w-55
                 bg-[#0a0a0a]/95 backdrop-blur-xl
                 border border-neutral-700/70 
                 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]
                 overflow-hidden animate-fadeIn z-9999"
    >
      <div className="absolute -top-2 right-6 w-4 h-4 bg-[#0a0a0a]/95 border-l border-t border-neutral-700/70 rotate-45"></div>

      <div className="px-5 py-4 bg-linear-to-r from-neutral-900/50 to-neutral-800/50 border-b border-neutral-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-r from-gray-600 to-gray-400 rounded-full flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">
              {isLoggedIn ? "John Doe" : "Guest User"}
            </p>
            <p className="text-xs text-gray-400">
              {isLoggedIn ? "john@example.com" : "Not logged in"}
            </p>
          </div>
        </div>
      </div>

      {/* Dropdown items */}
      {isLoggedIn ? (
        <>
          <Link
            to="/profile"
            onClick={() => setProfileOpen(false)}
            className="group/profile flex items-center gap-3 px-5 py-3 text-sm text-gray-300 
                       hover:bg-white/10 hover:text-white transition-all duration-200
                       border-b border-neutral-800/50"
          >
            <UserCircle size={16} />
            <div className="flex-1">
              <div className="font-medium">Profile</div>
              <div className="text-xs text-gray-500">Manage your account</div>
            </div>
            <ChevronRight size={14} className="text-gray-600 group-hover/profile:text-gray-300 transition-all" />
          </Link>

          <button
            onClick={() => {
              setIsLoggedIn(false);
              setProfileOpen(false);
            }}
            className="w-full flex items-center gap-3 px-5 py-3 text-sm 
                       text-red-400 hover:bg-red-500/10 hover:text-red-300 
                       transition-all duration-200"
          >
            <LogOut size={16} />
            <span className="font-medium">Logout</span>
          </button>
        </>
      ) : (
        <Link
          to="/login"
          onClick={() => setProfileOpen(false)}
          className="group/profile flex items-center gap-3 px-5 py-3 text-sm text-gray-300 
                     hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          <UserCircle size={20} />
          <div className="flex-1">
            <div className="font-medium">Login</div>
            <div className="text-xs text-gray-500">Access your account</div>
          </div>
          <ChevronRight size={14} className="text-gray-600 group-hover/profile:text-gray-300 transition-all" />
        </Link>
      )}
    </div>
  )}
</div>

      </div>
    </nav>
  );
}
