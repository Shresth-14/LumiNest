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
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none tracking-tight">
              LumiNest
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Illuminating Your Path Home
            </p>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl">
              With a focus on modern design, we create homes that blend
              functionality with beauty.
            </p>

            <Link
              to="/apartments"
              className="inline-flex items-center gap-3 px-8 py-4 
              bg-orange-500/20 backdrop-blur-md border border-white/10
              text-white font-semibold rounded-lg transition-all 
              hover:bg-orange-500/30 hover:border-white/20
              no-underline"
            >
              <span>Start Building</span>
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="absolute right-8 inset-y-0 my-auto space-y-4 hidden lg:flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-68 h-25 shadow-2xl border border-white/20 hover:bg-white/20 transition-all items-center justify-center">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-bold text-lg align-middle">
                  Our Latest Projects
                </p>
                <div className="w-10 h-10 bg-linear-to-br from-orange-600 via-amber-600 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-68 h-25 shadow-2xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-bold text-lg items-center justify-center">
                  Meet Our Experts
                </p>
                <div className="w-10 h-10 bg-linear-to-br from-orange-600 via-amber-600 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </div>
            </div>

            <div
              className="bg-orange-500/30 backdrop-blur-md border border-white/10 
              p-6 rounded-2xl w-68 h-35 shadow-md"
            >
              <div className="flex items-center gap-5 mb-2 mt-3">
                <span className="w-13 h-13 bg-white/15 rounded-full flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </span>
                <h3 className="text-white font-bold text-lg">
                  LumiNest Smart Living Solutions
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen h-screen snap-start snap-always py-12 px-4 bg-black flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div>
            <div className="inline-block bg-orange-600/40 px-4 py-2 mb-4 mt-4 rounded-md">
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                Categories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white/95">
              Browse Listings By
              <br />
              <span className="text-amber-600/90">Categories</span>
            </h2>
            <p className="text-gray-400 mb-3">
              Curated by expert real estate agents!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto">
            <Link
              to="/apartments"
              className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 rounded-xl"
            >
              <div className="h-54 overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Apartment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black via-black/90 to-transparent">
                <h3 className="text-xl font-bold mb-1 text-white">Apartment</h3>
                <p className="text-gray-400 text-xs">175 Properties</p>
              </div>
            </Link>

            <Link
              to="/villas"
              className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 rounded-xl"
            >
              <div className="h-54 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600252016254-f3edb5f3ae95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Farmhouse"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black via-black/90 to-transparent">
                <h3 className="text-xl font-bold mb-1 text-white">Farmhouse</h3>
                <p className="text-gray-400 text-xs">42 Properties</p>
              </div>
            </Link>

            <Link
              to="/apartments"
              className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 rounded-xl"
            >
              <div className="h-54 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Condominium"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black via-black/90 to-transparent">
                <h3 className="text-xl font-bold mb-1 text-white">
                  Condominium
                </h3>
                <p className="text-gray-400 text-xs">4 Properties</p>
              </div>
            </Link>

            <Link
              to="/villas"
              className="group relative overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 lg:col-span-2 rounded-xl"
            >
              <div className="relative h-64 overflow-hidden w-full">
                <img
                  src="https://images.unsplash.com/photo-1571168538867-ad36fe110cc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Bungalow"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black via-black/90 to-transparent">
                <h3 className="text-xl font-bold mb-1 text-white">Bungalow</h3>
                <p className="text-gray-400 text-xs">8 Properties</p>
              </div>
            </Link>

            <Link
              to="/buy"
              className="group relative overflow-hidden bg-white/5 border border-orange-400/30 backdrop-blur-md hover:bg-orange-200/10 mt-7 transition-all duration-300 flex items-center justify-center min-h-[200px] rounded-xl h-fit"
            >
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <ArrowRight size={24} className="text-white" />
                </div>

                <h3 className="text-white text-lg font-bold">View All</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="snap-start pt-20 pb-18 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-linear-to-br from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen h-screen snap-start snap-always bg-black px-4 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Our <span className="text-gray-400">Services</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="p-10 bg-neutral-900/50 backdrop-blur-sm border-2 border-neutral-800 hover:bg-neutral-900 hover:shadow-2xl hover:shadow-orange-600/20 hover:border-orange-600/50 transition-all group rounded-2xl"
              >
                <div className="w-16 h-16 bg-linear-to-br from-orange-600 via-amber-600 to-orange-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform rounded-xl">
                  <span className="text-2xl font-bold text-white">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-linear-to-r group-hover:from-orange-600 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen h-screen snap-start snap-always py-32 px-4 bg-neutral-950 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-500/20 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 -left-10 w-80 h-80 bg-amber-500/10 blur-[160px] rounded-full" />
        </div>

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-denim.png')] opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center w-full">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            Ready to Find Your
            <br />
            <span className="text-transparent bg-linear-to-r from-gray-300 to-gray-500 bg-clip-text">
              Dream Home?
            </span>
          </h2>

          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with our expert team and let us guide you to the perfect
            property that matches your vision and lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/apartments"
              className="inline-flex items-center gap-3 px-8 py-4 
                        bg-orange-500/20 backdrop-blur-md border border-white/10
                        text-white font-semibold rounded-lg transition-all 
                        hover:bg-orange-500/30 hover:border-white/20
                        no-underline"
                        >
              Browse Properties
            </Link>

            <Link
              to="/contact"
              className="px-10 py-4 rounded-xl border border-orange-400/30 bg-white/5 backdrop-blur-md
                  font-semibold hover:bg-white/10
                 transition-all text-amber-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <footer className="snap-start bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">LumiNest</h3>
              <p className="text-gray-400 leading-relaxed">
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

          <div className="pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 LumiNest. All rights reserved.
            </div>
            <div className="flex items-center gap-8 text-sm">
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
