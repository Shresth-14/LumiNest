import React, { useState } from "react";
import { ShoppingBag, Building2 } from "lucide-react";
import BuyerDashboard from "./BuyerDashboard";
import SellerDashboard from "./SellerDashboard";

export default function Dashboard() {
  const [userRole, setUserRole] = useState(null); 

  if (!userRole) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-5 ">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-semibold tracking-tight text-white mb-3">
              Welcome to LumiNest
            </h1>
            <p className="text-base text-neutral-400">
              Choose your role to get started
            </p>
          </div>
          {/* //BUYER CARD */}
          <div className="grid md:grid-cols-2 gap-10">
            <button
              onClick={() => setUserRole("buyer")}
              className="relative group bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-left transition-all hover:bg-neutral-900/80 hover:border-amber-600/50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-black"
            >
              <div className="mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800 ring-1 ring-amber-600/30 group-hover:bg-neutral-800/80 group-hover:ring-amber-600/50 transition-colors">
                  <ShoppingBag
                    className="h-5 w-5 text-amber-600"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  Buyer / Owner
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Search for places, keep track of your favorites, and connect
                  with sellers to find the perfect home.{" "}
                </p>
              </div>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>Advanced property search</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>Mark favorites and receive alerts instantly</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>Direct seller communication</span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="h-5 w-5 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </button>

            {/* AGENT CARD */}
            <button
              onClick={() => setUserRole("seller")}
              className="relative group bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-left transition-all hover:bg-neutral-900/80 hover:border-orange-600/50 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black"
            >
              <div className="mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800 ring-1 ring-orange-600/30 group-hover:bg-neutral-800/80 group-hover:ring-orange-600/50 transition-colors">
                  <Building2
                    className="h-5 w-5 text-orange-600"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  Agent / Builder
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                 List your properties, manage them easily, track interest, and connect with buyers to grow your business.
                </p>
              </div>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  <span>Unlimited property listings</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  <span>Performance analytics</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  <span>Lead management tools</span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="h-5 w-5 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </button>
          </div>
          <p className="text-center text-sm text-neutral-500 mt-8">
            You can switch roles anytime from your dashboard settings
          </p>
        </div>
      </div>
    );
  }

  if (userRole === "buyer") {
    return <BuyerDashboard onSwitchDashboard={() => setUserRole(null)} />;
  }

  if (userRole === "seller") {
    return <SellerDashboard onSwitchDashboard={() => setUserRole(null)} />;
  }

  return null;
}
