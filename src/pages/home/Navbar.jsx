import React, { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#12003E] shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & Explore */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/gsr.jpg"
              alt="logo"
              className="w-30 h-10"
            />
            {/* <span className="text-white text-2xl font-extrabold">
              Educ<span className="text-[#00FF9C]">rat</span>
            </span> */}
          </div>
          {/* <a
            href="#"
            className="hidden md:flex items-center text-[#00FF9C] font-semibold text-lg gap-2"
          >
            <Menu className="w-5 h-5" /> Explore
          </a> */}
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav Links + Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm">
          <a href="/" className="hover:text-[#00FF9C]">Home </a>
          <a href="/courses" className="hover:text-[#00FF9C]">Courses </a>
          {/* <a href="#" className="hover:text-[#00FF9C]">Blog </a> */}
          {/* <a href="#" className="hover:text-[#00FF9C]">Shop</a> */}
          <a href="/about" className="hover:text-[#00FF9C]">About</a>
          <a href="/contact" className="hover:text-[#00FF9C]">Contact</a>
        </div>

        {/* Icons + Login (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Search className="text-white w-5 h-5 cursor-pointer" />
          <div className="relative">
            <ShoppingBag className="text-white w-5 h-5 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-[#7C4DFF] text-white text-[10px] px-1 rounded-full">0</span>
          </div>
          <button className="bg-white text-[#12003E] px-5 py-1.5 rounded-xl font-semibold text-sm">
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

          {/* Mobile Icons & Login */}
          <div className="flex gap-4 px-4 pt-2 border-t border-gray-700">
            <Search className="w-5 h-5" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-[#7C4DFF] text-white text-[10px] px-1 rounded-full">0</span>
            </div>
            <button className="bg-white text-[#12003E] px-4 py-1 rounded-xl font-semibold text-sm ml-auto">
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
