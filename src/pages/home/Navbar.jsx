import React, { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBookDemo = () => {
    window.open("https://wa.me/919703049286?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo.", "_blank");
  };

  return (
    <header className="bg-[#12003E] shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/gsr.jpg" alt="logo" className="w-30 h-10" />
          </div>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav Links + Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm">
          <a href="/" className="hover:text-[#00FF9C]">Home</a>
          <a href="/courses" className="hover:text-[#00FF9C]">Courses</a>
          <a href="/about" className="hover:text-[#00FF9C]">About</a>
          <a href="/contact" className="hover:text-[#00FF9C]">Contact</a>
        </div>

        {/* Icons + Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="bg-[#00FF9C] text-[#12003E] px-5 py-1.5 rounded-xl font-semibold text-sm hover:bg-[#00e68c]"
            onClick={handleBookDemo}
          >
            Book Demo
          </button>
          <button
            className="bg-white text-[#12003E] px-5 py-1.5 rounded-xl font-semibold text-sm"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-white text-sm">
          <a href="/" className="block px-4 py-2 hover:bg-[#1c065c]">Home ▾</a>
          <a href="/courses" className="block px-4 py-2 hover:bg-[#1c065c]">Courses ▾</a>
          <a href="#" className="block px-4 py-2 hover:bg-[#1c065c]">Blog ▾</a>
          <a href="#" className="block px-4 py-2 hover:bg-[#1c065c]">Shop</a>
          <a href="#" className="block px-4 py-2 hover:bg-[#1c065c]">Pages ▾</a>
          <a href="#" className="block px-4 py-2 hover:bg-[#1c065c]">Contact</a>

          {/* Mobile Icons & Buttons */}
          <div className="flex flex-col gap-2 px-4 pt-2 border-t border-gray-700">
            <button
              className="bg-[#00FF9C] text-[#12003E] px-4 py-2 rounded-xl font-semibold text-sm"
              onClick={handleBookDemo}
            >
              Book Demo
            </button>
            <button
              className="bg-white text-[#12003E] px-4 py-2 rounded-xl font-semibold text-sm"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
