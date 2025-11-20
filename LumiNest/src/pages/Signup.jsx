import { Home } from "lucide-react";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "../config/firebaseConfig";

export default function Signup() {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // const signInWithGoogle = async () => {
  //   try {
  //     setLoading(true);
  //     setError("");
  //     const result = await signInWithPopup(auth, googleProvider);
  //     console.log("User signed up:", result.user.email);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Google Sign-up Error:", error);
  //     setError(error.message || "Failed to sign up with Google");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full 
          bg-linear-to-r from-gray-500/10 via-gray-400/10 to-gray-300/10 
          blur-3xl opacity-40"></div>

        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full 
          bg-linear-to-r from-gray-500/10 via-gray-400/10 to-gray-300/10 
          blur-3xl opacity-40"></div>
      </div>

      <div className="relative w-full max-w-md rounded-xl bg-zinc-900 p-8 shadow-2xl border border-zinc-800 backdrop-blur-md">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-all duration-300 mb-4 group"
        >
          <Home
            size={18}
            className="group-hover:scale-110 transition-transform duration-300 text-gray-400"
          />
          <span className="text-sm font-medium group-hover:text-gray-200 transition-all duration-300">
            Back to Home
          </span>
        </Link>

        <div className="flex items-center justify-center flex-col mt-3">
          <p className="text-4xl font-bold bg-linear-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Create Account
          </p>
          <p className="text-sm mt-3 text-gray-400">
            Join <span className="text-gray-200 font-semibold">LumiNest</span> today
          </p>
        </div>

        <div className="flex flex-col mt-7">
          <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Shresth Juyal"
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <label htmlFor="email" className="mt-5 mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <label htmlFor="password" className="mt-5 mb-2 text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="w-full rounded-md bg-zinc-900 border border-zinc-800 px-3 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <button
          className="w-full mt-9 h-11 rounded-lg border border-[#3F3F46]/30 
          bg-linear-to-b from-[#FAFAFA] to-[#E4E4E7] 
          text-[#18181B] font-semibold shadow-sm hover:shadow-md
          hover:from-[#EDEDED] hover:to-[#D4D4D8] 
          active:scale-95 transition-all duration-200 ease-out"
        >
          Sign Up
        </button>

        <div className="relative flex items-center mt-5">
          <div className="grow border-t border-[#3F3F46]" />
          <span className="mx-3 text-xs text-[#A1A1AA]">Or continue with</span>
          <div className="grow border-t border-[#3F3F46]" />
        </div>

        {/* {error && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )} */}

        {/* Google Sign-up */}
        {/* <div className="flex justify-center gap-5 mt-6">
          <button
            onClick={signInWithGoogle}
            disabled={loading}
            className="flex items-center justify-center gap-3 w-60 h-12 rounded-lg 
            border border-white/20 bg-white/5 backdrop-blur-sm 
            text-white font-medium shadow-sm 
            hover:bg-white/10 hover:border-white/30 hover:shadow-md 
            active:scale-95 transition-all duration-200 ease-out
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/5"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="text-sm tracking-wide">Signing up...</span>
              </>
            ) : (
              <>
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="text-sm tracking-wide">Sign up with Google</span>
              </>
            )}
          </button>
        </div> */}

        <div className="relative flex items-center justify-center mt-6 gap-1 text-sm text-gray-400">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
