import React from 'react';

const Footer = ({ isSidebarOpen }) => {
  return (
    <footer className={`bg-white border-t border-amber-200 shadow-lg transition-all duration-300 ${
      isSidebarOpen ? 'ml-64' : 'ml-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center text-center md:text-left w-full md:w-auto">
            <p className="text-xs sm:text-sm text-brown-600">
              © 2025 Petals @ Prakriti International School. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 w-full md:w-auto">
            <a
              href="/privacy"
              className="text-xs sm:text-sm text-brown-600 hover:text-amber-900 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-xs sm:text-sm text-brown-600 hover:text-amber-900 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-xs sm:text-sm text-brown-600 hover:text-amber-900 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;