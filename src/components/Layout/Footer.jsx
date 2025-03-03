import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-amber-200 shadow-lg ml-64">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <p className="text-sm text-brown-600">
              © 2025 Petals @ Prakriti International School. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-sm text-brown-600 hover:text-amber-900 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-brown-600 hover:text-amber-900 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm text-brown-600 hover:text-amber-900 transition-colors duration-200"
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