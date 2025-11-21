import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  ChevronRight,
  Home,
  Building,
  Bed,
  Menu,
  X,
  User,
  Phone,
  HelpCircle,
} from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState(null);

  const dropdownContent = [
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

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 bg-[rgba(7,7,7,0.92)] backdrop-blur-sm border-b border-neutral-800
        shadow-[0_8px_30px_rgba(0,0,0,0.6)] px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between"
      >
        <Link to="/" className="text-2xl font-semibold text-white select-none">
          LumiNest
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-gray-300 font-medium">
          {dropdownContent.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.id)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="group relative flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.icon}
                <span className="font-medium">{item.title}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openMenu === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openMenu === item.id && (
                <div className="fixed top-16 left-0 w-screen z-40 pointer-events-auto">
                  <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 bg-[rgba(12,12,12,0.98)]
                      border-t border-neutral-800/60 backdrop-blur-xl rounded-b-2xl shadow-2xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      {/* Column 1 */}
                      <div className="md:col-span-4">
                        <h4 className="text-sm text-gray-400 font-semibold mb-3 uppercase">
                          {item.title} Categories
                        </h4>
                        <nav className="flex flex-col gap-1.5">
                          {item.links.map((l) => (
                            <Link
                              key={l.label}
                              to={l.to}
                              onClick={() => setOpenMenu(null)}
                              className="group px-4 py-2.5 rounded-lg hover:bg-white/5 transition"
                            >
                              <div className="flex items-center justify-between">
                                <span>{l.label}</span>
                                <ChevronRight
                                  size={14}
                                  className="text-gray-500 opacity-0 group-hover:opacity-100 transition"
                                />
                              </div>
                            </Link>
                          ))}
                        </nav>
                      </div>

                      {/* Column 2 */}
                      <div className="md:col-span-5">
                        <h4 className="text-sm text-gray-400 font-semibold mb-3 uppercase">
                          Featured Options
                        </h4>
                        <div className="grid grid-cols-2 gap-2.5">
                          {item.links.map((l) => (
                            <Link
                              key={`feature-${l.label}`}
                              to={l.to}
                              onClick={() => setOpenMenu(null)}
                              className="group p-3.5 rounded-lg bg-white/3 hover:bg-white/6 transition"
                            >
                              <div className="font-medium">
                                {l.label}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                Explore {l.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-3 space-y-3">
                        <Link
                          to="/contact"
                          className="group flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 transition"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                            <Phone size={16} className="text-gray-300" />
                          </div>
                          <span>Contact Sales</span>
                        </Link>

                        <Link
                          to="/help"
                          className="group flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 transition"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                            <HelpCircle size={16} className="text-gray-300" />
                          </div>
                          <span>Help Center</span>
                        </Link>

                        <Link
                          to="/login"
                          className="group inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 rounded-lg bg-white/8 hover:bg-white/12 text-white text-sm font-semibold transition"
                        >
                          Explore {item.title}
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setOpenMenu(null)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

    <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline text-sm text-gray-300 hover:text-white transition"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="px-3 py-1 rounded-md bg-white/6 text-white text-sm font-medium hover:bg-white/12 transition"
          >
            Login
          </Link>



          <button
            className="md:hidden p-2 rounded-md bg-neutral-800/60 hover:bg-neutral-700 transition"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="text-gray-200" size={18} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 right-0 h-full z-50 w-[92%] max-w-[420px]
        bg-[rgba(10,10,10,0.98)] border-l border-neutral-800 shadow-[ -20px 0 60px rgba(0,0,0,0.7) ]
        transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-800">
          <Link to="/" className="text-xl font-semibold text-white">
            LumiNest
          </Link>

          <button
            className="p-2 rounded-md bg-neutral-800/50 hover:bg-neutral-700 transition"
            onClick={() => setMobileOpen(false)}
          >
            <X size={18} className="text-gray-200" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-auto h-[calc(100%-64px)]">
          {dropdownContent.map((section) => {
            const open = mobileSectionOpen === section.id;

            return (
              <div
                key={section.id}
                className="border border-neutral-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setMobileSectionOpen(open ? null : section.id)
                  }
                  className="w-full flex items-center justify-between px-4 py-3 bg-[rgba(11,11,11,0.9)] hover:bg-[rgba(15,15,15,0.95)] transition"
                >
                  <div className="flex items-center gap-3">
                    {section.icon}
                    <span className="text-sm text-gray-200 font-medium">
                      {section.title}
                    </span>
                  </div>

                  <ChevronRight
                    size={18}
                    className={`text-gray-400 transition ${
                      open ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>

                {open && (
                  <div className="px-3 py-2 bg-[rgba(9,9,9,0.95)] space-y-2">
                    {section.links.map((l) => (
                      <Link
                        key={l.label}
                        to={l.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 text-gray-200"
                      >
                        {l.label}
                        <ChevronRight size={14} className="text-gray-400" />
                      </Link>
                    ))}

                    <Link
                      to="/login"
                      onClick={() => setMobileOpen(false)}
                      className="block text-center px-4 py-3 rounded-md bg-white/8 text-white font-semibold hover:bg-white/16 transition"
                    >
                      Explore {section.title}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 rounded-md hover:bg-white/5 text-gray-200"
          >
            Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 rounded-md hover:bg-white/5 text-gray-200"
          >
            Create account
          </Link>
        </div>
      </aside>
    </>
  );
}
