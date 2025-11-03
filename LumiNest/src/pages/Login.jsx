import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, Home } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 font-sans relative overflow-hidden">
      <div className="absolute inset-0">
  <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-linear-to-r from-gray-200/20 to-white/10 blur-3xl"></div>
  <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-linear-to-r from-white/20 to-gray-300/10 blur-3xl"></div>
</div>


      <div className="relative w-full max-w-md bg-[#0f0f0f]/90 border border-neutral-700/60 backdrop-blur-xl rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-fadeIn">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-6 group"
        >
          <Home size={18} className="group-hover:scale-110 transition-transform duration-200" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-1 tracking-wide">Welcome Back</h1>
          <p className="text-gray-400 text-sm">Sign in to your account to continue.</p>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg pl-12 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gray-400 focus:ring-2 focus:ring-gray-500/20 outline-none"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg pl-12 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gray-400 focus:ring-2 focus:ring-gray-500/20 outline-none"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-neutral-600 bg-neutral-800 text-white focus:ring-gray-500/20 focus:ring-2"
              />
              <span className="text-gray-300">Remember me</span>
            </label>
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            Sign In <ArrowRight size={18} />
          </button>
        </form>

        <div className="my-4 flex items-center">
          <div className="flex-1 h-px bg-neutral-700"></div>
          <span className="px-3 text-gray-500 text-xs">or</span>
          <div className="flex-1 h-px bg-neutral-700"></div>
        </div>

        {/* Google Button */}
        <button className="w-full border border-neutral-700 hover:border-gray-500 bg-neutral-800/30 hover:bg-white/10 text-gray-300 hover:text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-3">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
        </button>

        <div className="mt-4 text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-gray-300 hover:text-white font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
