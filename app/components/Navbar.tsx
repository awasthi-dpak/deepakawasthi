"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            
          </div>
          
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.slice(0, 4).map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-linear-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Contact
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 border-t border-purple-500/20 py-4 md:hidden">
            <div className="flex flex-col gap-3 px-6">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white font-medium"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
