import React from 'react';
import { Home, Book, Layout } from 'lucide-react';

// Navigation Component
const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm shadow-light fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/api/placeholder/40/40" 
            alt="FullStackForge Logo" 
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-gray-800">FullStackForge</span>
        </div>
        <div className="flex space-x-6">
          <a 
            href="/" 
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Home
          </a>
          <a 
            href="/docs" 
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Book className="mr-2 h-5 w-5" />
            Documentation
          </a>
          <a 
            href="/dashboard" 
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Layout className="mr-2 h-5 w-5" />
            Dashboard
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;