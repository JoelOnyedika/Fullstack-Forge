import React from 'react';
import { FaGithubAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginOAuth = () => {
  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth logic
    console.log('Google Login Initiated');
  };

  const handleGitHubLogin = () => {
    // TODO: Implement GitHub OAuth logic
    console.log('GitHub Login Initiated');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to FullStackForge</h2>
          <p className="text-gray-500 mt-2">Sign in with your preferred provider</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
          >
            <FcGoogle className="mr-3 h-5 w-5 text-red-500" />
            Continue with Google
          </button>

          <button 
            onClick={handleGitHubLogin}
            className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
          >
            <FaGithubAlt className="mr-3 h-5 w-5 text-gray-800" />
            Continue with GitHub
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </div>
  );
};

export default LoginOAuth;