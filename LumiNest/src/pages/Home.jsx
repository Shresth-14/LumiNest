import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const stats = [
    { value: "500+", label: "Properties Listed" },
    { value: "200+", label: "Happy Clients" },
    { value: "50+", label: "Cities Covered" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <main className="w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white font-sans">
      <section className="relative min-h-screen h-screen snap-start snap-always pt-20 pb-16 flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-none tracking-tight">
              LumiNest
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 font-light">
              Illuminating Your Path Home
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl">
              With a focus on modern design, we create homes that blend
              functionality with beauty.
            </p>

            <Link
              to="/apartments"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 
              bg-orange-500/20 backdrop-blur-md border border-white/10
              text-white text-sm sm:text-base font-semibold rounded-lg transition-all 
              hover:bg-orange-500/30 hover:border-white/20
              no-underline"
            >
              <span>Start Building</span>
              <ArrowRight
                size={16}
                className="sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="absolute right-4 sm:right-8 inset-y-0 my-auto space-y-3 sm:space-y-4 hidden xl:flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl w-56 sm:w-64 lg:w-68 shadow-2xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-bold text-sm sm:text-base lg:text-lg">
                  Our Latest Projects
                </p>
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-linear-to-br from-orange-600 via-amber-600 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl w-56 sm:w-64 lg:w-68 shadow-2xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-bold text-sm sm:text-base lg:text-lg">
                  Meet Our Experts
                </p>
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-linear-to-br from-orange-600 via-amber-600 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-orange-500/30 backdrop-blur-md border border-white/10 p-4 sm:p-6 rounded-2xl w-56 sm:w-64 lg:w-68 shadow-md">
              <div className="flex items-center gap-3 sm:gap-5 mb-2 mt-2 sm:mt-3">
                <span className="w-10 sm:w-12 lg:w-13 h-10 sm:h-12 lg:h-13 bg-white/15 rounded-full flex items-center justify-center">
                  <Zap className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" />
                </span>
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg">
                  LumiNest Smart Living Solutions
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen snap-start snap-always py-8 sm:py-12 px-4 bg-black flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-6 sm:mb-8">
            <div className="inline-block bg-orange-600/40 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 rounded-md">
              <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
                Categories
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-white/95">
              Browse Listings By
              <br />
              <span className="text-amber-600/90">Categories</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-3">
              Curated by expert real estate agents!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-h-[450px] sm:max-h-[550px] lg:max-h-[600px] overflow-y-auto">
            <Link
              to="/apartments"
              className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 rounded-xl"
            >
              <div className="h-40 sm:h-48 md:h-54 overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Apartment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-linear-to-t from-black via-black/90 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">Apartment</h3>
                <p className="text-gray-400 text-xs">175 Properties</p>
              </div>
            </Link>

            <Link
              to="/villas"
              className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 rounded-xl"
            >
              <div className="h-40 sm:h-48 md:h-54 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600252016254-f3edb5f3ae95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Farmhouse"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-linear-to-t from-black via-black/90 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">Farmhouse</h3>
                <p className="text-gray-400 text-xs">42 Properties</p>
              </div>
            </Link>

            <Link
              to="/apartments"
              className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 rounded-xl"
            >
              <div className="h-40 sm:h-48 md:h-54 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Condominium"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-linear-to-t from-black via-black/90 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">
                  Condominium
                </h3>
                <p className="text-gray-400 text-xs">4 Properties</p>
              </div>
            </Link>

            <Link
              to="/villas"
              className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 sm:col-span-2 lg:col-span-2 rounded-xl"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden w-full">
                <img
                  src="https://images.unsplash.com/photo-1571168538867-ad36fe110cc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Bungalow"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-linear-to-t from-black via-black/90 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">Bungalow</h3>
                <p className="text-gray-400 text-xs">8 Properties</p>
              </div>
            </Link>

            <Link
              to="/buy"
              className="group relative overflow-hidden bg-white/5 border border-orange-400/30 backdrop-blur-md hover:bg-orange-200/10 transition-all duration-300 flex items-center justify-center min-h-40 sm:min-h-44 lg:min-h-50 rounded-xl h-fit"
            >
              <div className="text-center py-4 sm:py-6 lg:py-8">
                <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>

                <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold">View All</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="snap-start pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-18 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 bg-linear-to-br from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen snap-start snap-always bg-black px-4 py-8 sm:py-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white">
              Our <span className="text-gray-400">Services</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Buy Property",
                des: "Explore our extensive collection of premium properties. Find your perfect home with expert guidance and transparent pricing.",
              },
              {
                title: "Sell Property",
                des: "List your property with us and reach thousands of verified buyers. Get the best value with our marketing expertise.",
              },
              {
                title: "Rent Property",
                des: "Find rental homes and commercial spaces that fit your budget. Flexible terms and verified listings.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 md:p-10 bg-neutral-900/50 backdrop-blur-sm border-2 border-neutral-800 hover:bg-neutral-900 hover:shadow-2xl hover:shadow-orange-600/20 hover:border-orange-600/50 transition-all group rounded-2xl"
              >
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-linear-to-br from-orange-600 via-amber-600 to-orange-500 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform rounded-xl">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{i + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:bg-linear-to-r group-hover:from-orange-600 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen snap-start snap-always py-16 sm:py-24 md:py-32 px-4 bg-neutral-950 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-orange-500/20 blur-[100px] sm:blur-[120px] md:blur-[140px] rounded-full" />
          <div className="absolute bottom-0 -left-10 w-56 sm:w-68 md:w-80 h-56 sm:h-68 md:h-80 bg-amber-500/10 blur-[120px] sm:blur-[140px] md:blur-[160px] rounded-full" />
        </div>

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-denim.png')] opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center w-full px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            Ready to Find Your
            <br />
            <span className="text-transparent bg-linear-to-r from-gray-300 to-gray-500 bg-clip-text">
              Dream Home?
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with our expert team and let us guide you to the perfect
            property that matches your vision and lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/apartments"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 
                        bg-orange-500/20 backdrop-blur-md border border-white/10
                        text-white text-sm sm:text-base font-semibold rounded-lg transition-all 
                        hover:bg-orange-500/30 hover:border-white/20
                        no-underline w-full sm:w-auto justify-center"
                        >
              Browse Properties
            </Link>

            <Link
              to="/contact"
              className="px-6 sm:px-10 py-3 sm:py-4 rounded-xl border border-orange-400/30 bg-white/5 backdrop-blur-md
                  text-sm sm:text-base font-semibold hover:bg-white/10
                 transition-all text-amber-600 w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <footer className="snap-start bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">LumiNest</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Creating timeless properties that blend modern design with
                functionality. Your dream home awaits.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-amber-600">
                About
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider  text-amber-600 mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/apartments"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Buy Property
                  </Link>
                </li>
                <li>
                  <Link
                    to="/post-property"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sell Property
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apartments"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Rent Property
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider  text-amber-600 mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    Instagram
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2025 LumiNest. All rights reserved.
            </div>
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm">
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
