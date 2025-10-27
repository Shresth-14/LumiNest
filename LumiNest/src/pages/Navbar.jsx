import { Link } from "react-router-dom";

export default function Navbar() {
  return (<nav className="fixed top-2 left-5 w-[97%] z-50 
  bg-gray-900/40 backdrop-blur-2xl 
  rounded-xl shadow-xl 
  transition-all duration-500">


  <div className="flex justify-start items-start px-8 py-4 max-w-7xl ">
    
    {/* Logo / Brand */}
    <div className="text-2xl font-semibold tracking-tight text-gray-300 py-2.1">
      Luminest
    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex items-center space-x-10 text-gray-200 font-medium mx-10 py-2">
      <Link to="/buy" className="hover:text-blue-600 transition">Buy</Link>
      <Link to="/sell" className="hover:text-blue-600 transition">Sell</Link>
      <Link to="/rent" className="hover:text-blue-600 transition">Rent</Link>
      <Link to="/about" className="hover:text-blue-600 transition">About</Link>
      <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
    </div>
  </div>
</nav>


  );
}
