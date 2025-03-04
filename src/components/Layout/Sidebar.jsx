// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, Book, Users, Settings, FolderPlus, UserPlus, List } from 'lucide-react';

const Sidebar = ({ isSidebarOpen }) => {
  const location = useLocation();
  
  // Sidebar navigation items - fixed paths to match router structure
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard/admin' },
    { icon: Book, label: 'Courses', path: '/dashboard/admin/courses' },
    // Student management section
    { icon: Users, label: 'Students', path: '/dashboard/admin/students' },
    { icon: UserPlus, label: 'Add Student', path: '/dashboard/admin/students/create' },
    { icon: List, label: 'Student List', path: '/dashboard/admin/students/list' },
    // Class management section
    { icon: FolderPlus, label: 'Classes', path: '/dashboard/admin/classes' },
    { icon: FolderPlus, label: 'Add Class', path: '/dashboard/admin/classes/create' },
    { icon: List, label: 'Class List', path: '/dashboard/admin/classes/list' },
    // Settings
    { icon: Settings, label: 'Settings', path: '/dashboard/admin/settings' },
  ];

  return (
    <aside
      className={`bg-white shadow-lg border-r border-amber-200 transform transition-all fixed h-screen duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      <nav className="mt-4">
        <div className="mb-4 px-6 py-2">
          <h2 className={`font-bold text-amber-900 ${isSidebarOpen ? 'block' : 'hidden'}`}>Admin Panel</h2>
        </div>
        
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-6 py-3 hover:bg-amber-50 hover:text-amber-900 transition-all duration-200 group ${
              location.pathname === item.path ? 'bg-amber-100 text-amber-900' : 'text-brown-700'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
            <span className={`${isSidebarOpen ? 'block' : 'hidden'} text-sm font-medium`}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;