
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/4e22d660-1d8d-480e-a8c2-366da979c859.png#x=58&y=10&width=20&height=20"
            alt="CodeFlow Logo"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#" className="text-sm text-white/80 hover:text-white transition-colors">
            Product
          </Link>
          <Link to="#" className="text-sm text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link to="#" className="text-sm text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="#" className="text-sm text-white/80 hover:text-white transition-colors">
            Company
          </Link>
          <Link to="#" className="text-sm text-white/80 hover:text-white transition-colors">
            Blog
          </Link>
        </nav>

        <div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};
