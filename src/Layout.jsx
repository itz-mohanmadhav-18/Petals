import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/sidebar';
import Footer from './components/Layout/Footer';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-brown-100">
      <Header onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>
      <Footer isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default Layout;