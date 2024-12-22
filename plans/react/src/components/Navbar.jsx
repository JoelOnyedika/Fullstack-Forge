import React, { useState } from 'react';
import { Home, Layout, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm shadow-light fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/api/placeholder/40/40" 
            alt="FullStackForge Logo" 
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-gray-800">FullStackForge</span>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="/" 
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Home
          </a>
          <a 
            href="/dashboard" 
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Layout className="mr-2 h-5 w-5" />
            Dashboard
          </a>
          <div className="flex space-x-4">
            <a 
              href="/login" 
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Log In
            </a>
            <a 
              href="/signup" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a 
                href="/" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                <Home className="mr-2 h-5 w-5" />
                Home
              </a>
              <a 
                href="/dashboard" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                <Layout className="mr-2 h-5 w-5" />
                Dashboard
              </a>
              <div className="border-t pt-4 space-y-4">
                <a 
                  href="/login" 
                  className="block w-full text-center px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                  onClick={toggleMenu}
                >
                  Log In
                </a>
                <a 
                  href="/signup" 
                  className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;