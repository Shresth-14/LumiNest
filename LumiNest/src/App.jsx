import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />

 <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/realestate.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to <span className="text-blue-400">LumiNest</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
          Discover your perfect property with <span className="font-semibold">Luminest</span> — where luxury meets comfort.
        </p>

        <div className="mt-8 w-full max-w-lg flex bg-white/20 backdrop-blur-md rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search for homes, plots, or apartments..."
            className="grow px-5 py-6 text-gray-900 placeholder-gray-600 bg-transparent outline-none text-l"
          />
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition text-white font-medium">
            Search
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
