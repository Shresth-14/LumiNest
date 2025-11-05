import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, Home } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-[#1a120b] to-[#2e1e0f] 
      flex items-center justify-center px-4 font-sans relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full 
          bg-linear-to-r from-[#e8d9b0]/15 via-[#d9c49a]/10 to-[#c4a96a]/5 
          blur-lg opacity-35"></div>

        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full 
          bg-linear-to-r from-[#c4a96a]/15 via-[#d9c49a]/10 to-[#e8d9b0]/5 
          blur-lg opacity-35"></div>
      </div>

      <div className="relative w-full max-w-md bg-[#0f0f0f]/90 border border-neutral-700/60 backdrop-blur-xl rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#e8d9b0]
                     transition-all duration-300 mb-6 group"
        >
          <Home
            size={18}
            className="group-hover:scale-110 transition-transform duration-300 text-gray-400 hover:text-[#e8d9b0]"
          />
          <span className="text-sm font-medium bg-linear-to-r from-gray-400 to-gray-400 
                           group-hover:from-[#e8d9b0] group-hover:to-[#c4a96a] 
                           bg-clip-text text-transparent transition-all duration-300">
            Back to Home
          </span>
        </Link>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold bg-linear-to-r from-[#e8d9b0] via-[#d9c49a] to-[#c4a96a] bg-clip-text text-transparent mb-1 tracking-wide">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm">Sign in to your 
            <span className="bg-linear-to-r from-[#e8d9b0] to-[#c4a96a] bg-clip-text text-transparent font-semibold ml-1">
              LumiNest {" "}
            </span> 
            account.
          </p>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg pl-12 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#d9c49a] focus:ring-2 focus:ring-[#d9c49a]/30 outline-none"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg pl-12 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#d9c49a] focus:ring-2 focus:ring-[#d9c49a]/30 outline-none"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-neutral-600 bg-neutral-800 text-white focus:ring-[#d9c49a]/30 focus:ring-2"
              />
              <span className="text-gray-300">Remember me</span>
            </label>
            <Link
              to="/"
              className="text-gray-400 font-medium transition-all duration-300 
                         hover:bg-linear-to-r hover:from-[#e8d9b0] hover:to-[#c4a96a] 
                         hover:bg-clip-text hover:text-transparent"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-[#e8d9b0] to-[#c4a96a] hover:from-[#f3e6c1] hover:to-[#d9b877] 
                       text-black font-semibold py-3 rounded-lg transition-all duration-200 
                       transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            Sign In <ArrowRight size={18} />
          </button>
        </form>

        <div className="my-4 flex items-center">
          <div className="flex-1 h-px bg-neutral-700"></div>
          <span className="px-3 text-gray-500 text-xs">or</span>
          <div className="flex-1 h-px bg-neutral-700"></div>
        </div>

        {/* Google Login */}
        <button className="w-full border border-neutral-700 hover:border-[#d9c49a]/60 bg-neutral-800/30 hover:bg-[#c4a96a]/5 text-gray-300 hover:text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-3">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="mt-4 text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-gray-300 font-medium transition-all duration-300 
                       hover:bg-linear-to-r hover:from-[#e8d9b0] hover:to-[#c4a96a] 
                       hover:bg-clip-text hover:text-transparent"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
