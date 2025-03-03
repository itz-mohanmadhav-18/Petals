import React from 'react';
import { Menu, Home, Book, Users, Settings } from 'lucide-react';

const Sidebar = ({ isSidebarOpen }) => {
  // Sidebar navigation items
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Book, label: 'Courses', path: '/courses' },
    { icon: Users, label: 'Students', path: '/students' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside
      className={`bg-white shadow-lg border-r border-amber-200 transform transition-all fixed h-screen duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* <div className="p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-amber-100 focus:outline-none transition-colors duration-200"
        >
          <Menu className="w-6 h-6 text-brown-700" />
        </button>
      </div> */}
      <nav className="mt-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="flex items-center px-6 py-3 text-brown-700 hover:bg-amber-50 hover:text-amber-900 transition-all duration-200 group"
          >
            <item.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
            <span className={`${isSidebarOpen ? 'block' : 'hidden'} text-sm font-medium`}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;