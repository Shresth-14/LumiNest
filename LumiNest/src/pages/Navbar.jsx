import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import {
  User,
  LogOut,
  Settings,
  UserCircle,
  ChevronRight,
  Home,
  Building,
  Bed,
  Heart,
  Menu,
  X,
} from "lucide-react";

export default function Navbar({ user }) {
  const [openMenu, setOpenMenu] = useState(null); 
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState(null);
  const hoverTimeout = useRef(null);
  const profileRef = useRef(null);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      setProfileOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const menuLeft = [
    {
      id: "buy",
      title: "Buy",
      icon: <Home size={16} />,
      links: [
        { label: "Apartments", to: "/apartments" },
        { label: "Villas", to: "/villas" },
        { label: "Plots", to: "/plots" },
        { label: "New Projects", to: "/projects" },
      ],
    },
    {
      id: "sell",
      title: "Sell",
      icon: <Building size={16} />,
      links: [
        { label: "Post Property", to: "/sell/post-property" },
        { label: "My Dashboard", to: "/sell/dashboard" },
      ],
    },
    {
      id: "rent",
      title: "Rent",
      icon: <Bed size={16} />,
      links: [
        { label: "Homes for Rent", to: "/rent/homes" },
        { label: "Commercial Spaces", to: "/rent/commercial" },
        { label: "PG & Shared", to: "/rent/pg" },
      ],
    },
  ];

  const openDesktopMenu = (id) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setOpenMenu(id);
  };

  const closeDesktopMenu = (delay = 150) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setOpenMenu(null), delay);
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setProfileOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleKeyToggle = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenMenu((prev) => (prev === id ? null : id));
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 bg-[rgba(7,7,7,0.92)] backdrop-blur-sm border-b border-neutral-800
                   shadow-[0_8px_30px_rgba(0,0,0,0.6)] px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-semibold text-white select-none">
            LumiNest
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-gray-300 font-medium">
          {menuLeft.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => openDesktopMenu(item.id)}
              onMouseLeave={() => closeDesktopMenu(120)}
            >
              <button
                onKeyDown={(e) => handleKeyToggle(e, item.id)}
                aria-haspopup="true"
                aria-expanded={openMenu === item.id}
                className="group relative flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.title}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${openMenu === item.id ? 'rotate-180' : ''}`}
                  style={{ animation: openMenu === item.id ? 'none' : 'chevronBounce 2s ease-in-out infinite' }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openMenu === item.id && (
                <div className="fixed top-16 left-0 w-screen z-40 pointer-events-auto">
                  
                  <div
                    className="relative w-full"
                    style={{ 
                      animation: "fadeIn 0.2s ease-out"
                    }}
                    onMouseEnter={() => {
                      if (hoverTimeout.current) {
                        clearTimeout(hoverTimeout.current);
                        hoverTimeout.current = null;
                      }
                    }}
                    onMouseLeave={() => closeDesktopMenu(100)}
                  >
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 bg-[rgba(12,12,12,0.98)] border-t border-neutral-800/60 backdrop-blur-xl rounded-b-2xl shadow-2xl">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-4">
                          <h4 className="text-sm text-gray-400 font-semibold mb-3 uppercase tracking-wider">
                            {item.title} Categories
                          </h4>
                          <nav className="flex flex-col gap-1.5">
                            {item.links.map((l) => (
                              <Link
                                key={l.label}
                                to={l.to}
                                onClick={() => setOpenMenu(null)}
                                className="group px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors duration-200 text-sm text-gray-200"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="group-hover:text-white transition-colors">{l.label}</span>
                                  <ChevronRight 
                                    size={14} 
                                    className="text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-gray-300 transition-all duration-200" 
                                  />
                                </div>
                              </Link>
                            ))}
                          </nav>
                        </div>

                        <div className="md:col-span-5">
                          <h4 className="text-sm text-gray-400 font-semibold mb-3 uppercase tracking-wider">Featured Options</h4>
                          <div className="grid grid-cols-2 gap-2.5">
                            {item.links.map((l) => (
                              <Link
                                key={`explore-${l.label}`}
                                to={l.to}
                                onClick={() => setOpenMenu(null)}
                                className="group p-3.5 rounded-lg bg-white/3 hover:bg-white/6 transition-colors duration-200 text-sm text-gray-200 border border-transparent hover:border-white/10"
                              >
                                <div className="font-medium group-hover:text-white transition-colors">{l.label}</div>
                                <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">
                                  {l.label === 'Apartments' && 'Modern living spaces'}
                                  {l.label === 'Villas' && 'Luxury properties'}
                                  {l.label === 'Plots' && 'Investment opportunities'}
                                  {l.label === 'New Projects' && 'Under construction'}
                                  {l.label === 'Post Property' && 'List your property'}
                                  {l.label === 'My Dashboard' && 'View your Dashboard'}
                                  {l.label === 'Homes for Rent' && 'Residential rentals'}
                                  {l.label === 'Commercial Spaces' && 'Office & retail'}
                                  {l.label === 'PG & Shared' && 'Shared accommodations'}
                                </div>
                              </Link>
                            ))}
                            <Link
                              to={`/${item.id}`}
                              onClick={() => setOpenMenu(null)}
                              className="group p-3.5 rounded-lg bg-white/5 hover:bg-white/8 transition-colors duration-200 text-sm text-gray-200 border border-white/10 hover:border-white/20 col-span-2"
                            >
                              <div className="text-center">
                                <div className="font-semibold group-hover:text-white transition-colors">View All {item.title}</div>
                                <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">Browse complete collection</div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        <div className="md:col-span-3">
                          <h4 className="text-sm text-gray-400 font-semibold mb-3 uppercase tracking-wider">Quick Actions</h4>
                          <div className="flex flex-col gap-2.5">
                            <Link
                              to="/contact"
                              onClick={() => setOpenMenu(null)}
                              className="group flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors duration-200 text-sm text-gray-200"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/8 flex items-center justify-center transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                              </div>
                              <span className="group-hover:text-white transition-colors">Contact Sales</span>
                            </Link>
                            <Link
                              to="/help"
                              onClick={() => setOpenMenu(null)}
                              className="group flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors duration-200 text-sm text-gray-200"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/8 flex items-center justify-center transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <span className="group-hover:text-white transition-colors">Help Center</span>
                            </Link>
                          </div>

                          <div className="mt-4">
                            <Link
                              to={user ? "/sell/post-property" : "/login"}
                              onClick={() => setOpenMenu(null)}
                              className="group inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 rounded-lg bg-white/8 hover:bg-white/12 text-white text-sm font-semibold transition-colors duration-200"
                            >
                              <span>{item.title === "Sell" ? "List a Property" : `Explore ${item.title}`}</span>
                              <ChevronRight 
                                size={16} 
                                className="group-hover:translate-x-1 transition-transform duration-200" 
                              />
                            </Link>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-2.5">
                            <div className="text-center p-2.5 rounded-lg bg-white/5">
                              <div className="text-lg font-bold text-white">500+</div>
                              <div className="text-xs text-gray-400">Properties</div>
                            </div>
                            <div className="text-center p-2.5 rounded-lg bg-white/5">
                              <div className="text-lg font-bold text-white">50+</div>
                              <div className="text-xs text-gray-400">Cities</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setOpenMenu(null)}
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline text-sm text-gray-300 hover:text-white px-1 py-2 transition-colors"
          >
            Contact
          </Link>

          {!user ? (
            <Link
              to="/login"
              className="px-3 py-1 rounded-md bg-white/6 text-white text-sm font-medium hover:bg-white/12 transition"
            >
              Login
            </Link>
          ) : (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen((p) => !p)}
                aria-expanded={profileOpen}
                className="focus:outline-none focus:ring-2 focus:ring-white/20 rounded-full transition-all hover:ring-2 hover:ring-white/10"
              >
                {user?.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="Profile" 
                    className="w-9 h-9 rounded-full object-cover cursor-pointer border-2 border-neutral-700 hover:border-neutral-600 transition-all"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-linear-to-br from-gray-600 to-gray-400 flex items-center justify-center cursor-pointer border-2 border-neutral-700 hover:border-neutral-600 transition-all">
                    <User size={18} className="text-white" />
                  </div>
                )}
              </button>

              {profileOpen && (
                <div
                  role="menu"
                  aria-label="Account menu"
                  className="absolute right-0 mt-4 w-59 z-50 bg-[rgba(12,12,12,0.96)] border border-neutral-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-neutral-800">
                    <div className="flex items-center gap-3">
                      {user?.photoURL ? (
                        <img 
                          src={user.photoURL} 
                          alt="Profile" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-600 to-gray-400 flex items-center justify-center">
                          <User size={16} className="text-white" />
                        </div>
                      )}
                      <div>
                        <div className="text-sm text-white font-medium">{user?.displayName || 'User'}</div>
                        <div className="text-xs text-gray-400">{user?.email}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <Link
                      to="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition"
                    >
                      <div className="flex items-center gap-3">
                        <UserCircle size={16} />
                        <span>Profile</span>
                      </div>
                    </Link>
                    <Link
                      to="/listings"
                      onClick={() => setProfileOpen(false)}
                      className="px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition"
                    >
                      <div className="flex items-center gap-3">
                        <Building size={16} />
                        <span>My Listings</span>
                      </div>
                    </Link>
                    <Link
                      to="/favorites"
                      onClick={() => setProfileOpen(false)}
                      className="px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition"
                    >
                      <div className="flex items-center gap-3">
                        <Heart size={16} />
                        <span>Favorites</span>
                      </div>
                    </Link>
                    <Link
                      to="/settings"
                      onClick={() => setProfileOpen(false)}
                      className="px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition"
                    >
                      <div className="flex items-center gap-3">
                        <Settings size={16} />
                        <span>Settings</span>
                      </div>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition"
                    >
                      <div className="flex items-center gap-3">
                        <LogOut size={16} />
                        <span>Logout</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            className="md:hidden p-2 rounded-md bg-neutral-800/60 hover:bg-neutral-700 transition"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="text-gray-200" size={18} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full z-50 w-[92%] max-w-[420px]
                    bg-[rgba(10,10,10,0.98)] border-l border-neutral-800 shadow-[ -20px 0 60px rgba(0,0,0,0.7) ]
                    transform transition-transform duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
                    ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!mobileOpen}
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-800">
          <Link to="/" className="text-xl font-semibold text-white">
            LumiNest
          </Link>
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-md bg-neutral-800/50 hover:bg-neutral-700 transition"
              onClick={() => setMobileOpen(false)}
              aria-label="Close"
            >
              <X className="text-gray-200" size={18} />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4 overflow-auto h-[calc(100%-64px)]">
          <div className="space-y-3">
            {menuLeft.map((section) => {
              const open = mobileSectionOpen === section.id;
              return (
                <div key={section.id} className="border border-neutral-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setMobileSectionOpen((s) => (s === section.id ? null : section.id))}
                    className="w-full flex items-center justify-between px-4 py-3 bg-[rgba(11,11,11,0.9)] hover:bg-[rgba(15,15,15,0.95)] transition"
                    aria-expanded={open}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-gray-300">{section.icon}</div>
                      <div>
                        <div className="text-sm text-gray-200 font-medium">{section.title}</div>
                        <div className="text-xs text-gray-500">Explore {section.title}</div>
                      </div>
                    </div>

                    <ChevronRight
                      size={18}
                      className={`text-gray-400 transform transition-transform duration-200 ${open ? "rotate-90" : "rotate-0"}`}
                    />
                  </button>

                  {open && (
                    <div className="px-3 py-2 bg-[rgba(9,9,9,0.95)]">
                      <div className="space-y-2">
                        {section.links.map((l) => (
                          <Link
                            key={l.label}
                            to={l.to}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileSectionOpen(null);
                            }}
                            className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 transition-colors text-gray-200"
                          >
                            <div>
                              <div className="text-sm font-medium">{l.label}</div>
                            </div>
                            <ChevronRight size={14} className="text-gray-400" />
                          </Link>
                        ))}

                        <div className="pt-2">
                          <Link
                            to={user ? "/sell/post-property" : "/login"}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileSectionOpen(null);
                            }}
                            className="block text-center px-4 py-3 rounded-md bg-white/8 text-white font-semibold hover:bg-white/16 transition"
                          >
                            {section.title === "Sell" ? "List a Property" : `Explore ${section.title}`}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-neutral-800">
            <div className="flex items-center gap-3">
              {user?.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="Profile" 
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-gray-600 to-gray-400 flex items-center justify-center">
                  <User size={18} className="text-white" />
                </div>
              )}
              <div>
                <div className="text-sm text-white font-medium">{user ? user.displayName || 'User' : "Guest User"}</div>
                <div className="text-xs text-gray-400">{user ? user.email : "Not logged in"}</div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {user ? (
                <>
                  <Link onClick={() => setMobileOpen(false)} to="/listings" className="block px-4 py-3 rounded-md hover:bg-white/5 text-gray-200">My Listings</Link>
                  <Link onClick={() => setMobileOpen(false)} to="/favorites" className="block px-4 py-3 rounded-md hover:bg-white/5 text-gray-200">Favorites</Link>
                  <Link onClick={() => setMobileOpen(false)} to="/settings" className="block px-4 py-3 rounded-md hover:bg-white/5 text-gray-200">Settings</Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-md text-red-400 hover:bg-red-500/10"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-md hover:bg-white/5 text-gray-200">Login</Link>
                  <Link to="/signup" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-md hover:bg-white/5 text-gray-200">Create account</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
