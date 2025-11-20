import React from "react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-10 w-72 h-72 bg-orange-500/10 blur-[140px]" />
        <div className="absolute -bottom-20 left-0 w-72 h-72 bg-amber-500/10 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-amber-600 leading-tight">
                Get in touch with us
              </h1>
              <p className="text-lg text-neutral-400 mt-4 max-w-lg leading-relaxed">
                Need help or have questions? Our team is here to assist you
                anytime.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-amber-600 mb-1">Email</p>
                <a href="mailto:helpluminest@gmail.com"
                   className="text-lg text-neutral-300 hover:text-white transition">
                  helpluminest@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-amber-600 mb-1">Phone</p>
                <a href="tel:+91123456789"
                   className="text-lg text-neutral-300 hover:text-white transition">
                  +91 123456789
                </a>
                <p className="text-sm text-neutral-500 mt-1">
                  Monday – Friday, 9 AM – 6 PM
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md
                               border border-white/20 text-white rounded-full hover:bg-white/20 transition">
              Live Chat
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/60 rounded-2xl p-8 lg:p-10 shadow-lg shadow-black/20">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    required
                    className="w-full px-4 py-3 bg-neutral-800/60 border border-neutral-700 rounded-lg 
                               text-white placeholder:text-neutral-500 focus:border-amber-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    required
                    className="w-full px-4 py-3 bg-neutral-800/60 border border-neutral-700 rounded-lg 
                               text-white placeholder:text-neutral-500 focus:border-amber-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-neutral-800/60 border border-neutral-700 rounded-lg 
                             text-white placeholder:text-neutral-500 focus:border-amber-600 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Enter your message..."
                  required
                  className="w-full px-4 py-3 bg-neutral-800/60 border border-neutral-700 rounded-lg 
                             text-white placeholder:text-neutral-500 focus:border-amber-600 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-10 py-4 bg-orange-500/20 
                           backdrop-blur-md border border-white/10 text-white font-semibold rounded-lg 
                           hover:bg-orange-500/30 hover:border-white/20 transition">
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
