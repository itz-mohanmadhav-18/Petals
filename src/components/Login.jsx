import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

// Replace this URL with your actual school photo
const SCHOOL_IMAGE = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

const SchoolLoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!userId.trim()) {
      setError('User ID is required');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    }

    alert('Login form submitted!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-brown-100 p-4">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row transform hover:scale-[1.02] transition-transform duration-300">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center justify-center mb-4">
            <div className="relative h-16 w-16 mr-3">
              {/* School graphic - you can replace with your logo */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-amber-700"
                fill="currentColor"
              >
                <path d="M50 10L10 40V80H90V40L50 10ZM50 20L80 40V70H20V40L50 20ZM40 70H60V85H40V70Z" />
                <circle cx="50" cy="50" r="10" fill="white" />
                <path d="M50 45L60 55L50 65L40 55L50 45Z" fill="currentColor" />
              </svg>
              <div className="absolute inset-0 bg-amber-100 rounded-full opacity-20 animate-pulse"></div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-brown-800">
              Petals
            </h1>
          </div>
          <p className="text-center text-xs md:text-sm text-brown-600 mb-4">
            Welcome to Prakriti International School Portal
          </p>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center transform transition-all duration-200">
                <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-red-500 mr-2" />
                <span className="text-red-700 text-xs md:text-sm">{error}</span>
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="userId"
                className="block text-xs md:text-sm font-medium text-brown-700 mb-1"
              >
                User ID
              </label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                placeholder="Enter your ID number"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-xs md:text-sm font-medium text-brown-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-end mb-4">
              <button
                type="button"
                className="text-xs md:text-sm text-amber-700 hover:text-amber-900 font-medium transition-colors duration-200"
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-yellow-950/70 text-white py-2 md:py-2.5 px-4 rounded-lg hover:from-amber-700 hover:to-brown-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center font-medium shadow-md text-sm md:text-base"
            >
              Log In to Petals @ Prakriti
            </button>
          </form>
          <div className="mt-6 pt-4 border-t border-amber-200 text-center text-xs md:text-sm text-brown-600">
            <p className="mb-1">
              Need help? Contact Petals @ Prakriti International School IT support
            </p>
            <p>© 2025 Petals @ Prakriti International School. All rights reserved.</p>
          </div>
        </div>

        {/* Right Section - School Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center hidden md:block" style={{ backgroundImage: `url(${SCHOOL_IMAGE})` }}>
          <div className="w-full h-full bg-brown-800 bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white bg-yellow-950 rounded-lg  p-4">
              <h2 className="text-lg md:text-2xl font-bold mb-2">Welcome to Our School</h2>
              <p className="text-xs md:text-sm">Petals @ Prakriti International School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLoginPage;