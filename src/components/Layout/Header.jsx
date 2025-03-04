import React, { useState, useEffect, useRef } from 'react';
import { User, LogOut, Settings, Bell, Menu } from 'lucide-react';

// Sample user data
const userProfile = {
  name: 'John Doe',
  email: 'john.doe@school.com',
  role: 'Student',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
};

const Header = ({ onSidebarToggle }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New assignment posted in Mathematics', time: '10 min ago', read: false },
    { id: 2, text: 'Your project submission was graded', time: '2 hours ago', read: false },
    { id: 3, text: 'School event this Friday', time: '1 day ago', read: true }
  ]);
  
  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logging out...');
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };
  
  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-white shadow-md border-b border-amber-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Left Section: Logo, Menu Toggle, and School Name */}
          <div className="flex items-center">
            <button 
              onClick={onSidebarToggle}
              className="p-2 mr-2 rounded-full text-amber-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center">
              <div className="relative h-10 w-10 mr-3 transition-transform duration-300 hover:scale-110">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-amber-600 drop-shadow-sm"
                  fill="currentColor"
                >
                  <path d="M50 10L10 40V80H90V40L50 10ZM50 20L80 40V70H20V40L50 20ZM40 70H60V85H40V70Z" />
                  <circle cx="50" cy="50" r="10" fill="white" />
                  <path d="M50 45L60 55L50 65L40 55L50 45Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                  Petals @ Prakriti
                </h1>
                <p className="hidden sm:block text-xs text-amber-600 -mt-1 font-medium">Learning • Growing • Flourishing</p>
              </div>
            </div>
          </div>

          {/* Right Section: Notifications and Profile */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 rounded-full text-amber-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 relative"
              >
                <Bell className="h-6 w-6" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-medium text-white bg-red-500 rounded-full transform translate-x-1 -translate-y-1">
                    {unreadCount}
                  </span>
                )}
              </button>
              
              {/* Notifications Dropdown */}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-amber-200 z-50 overflow-hidden animate-[fadeInDown_0.25s_ease-out_forwards]">
                  <div className="flex items-center justify-between p-4 border-b border-amber-200 bg-amber-50">
                    <h3 className="font-semibold text-amber-800">Notifications</h3>
                    {unreadCount > 0 && (
                      <button 
                        onClick={markAllAsRead}
                        className="text-xs font-medium text-amber-600 hover:text-amber-800"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`p-3 border-b border-amber-100 hover:bg-amber-50 transition-colors ${!notification.read ? 'bg-amber-50/50' : ''}`}
                        >
                          <div className="flex items-start">
                            {!notification.read && (
                              <span className="h-2 w-2 mt-1.5 rounded-full bg-amber-500 mr-2"></span>
                            )}
                            <div className={`${!notification.read ? '' : 'ml-4'}`}>
                              <p className="text-sm text-gray-800">{notification.text}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500 text-sm">
                        No notifications
                      </div>
                    )}
                  </div>
                  <div className="p-3 text-center border-t border-amber-100 bg-amber-50">
                    <button className="text-xs font-medium text-amber-700 hover:text-amber-900">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Profile */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-3 focus:outline-none group"
                aria-expanded={isProfileMenuOpen}
                aria-haspopup="true"
              >
                <div className="relative">
                  <img
                    src={userProfile.avatar}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-amber-300 group-hover:border-amber-500 transition-all duration-200 shadow-sm"
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-800">{userProfile.name}</p>
                  <p className="text-xs text-gray-600">{userProfile.role}</p>
                </div>
              </button>

              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-amber-200 overflow-hidden animate-[fadeInDown_0.25s_ease-out_forwards]">
                  <div className="p-4 border-b border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100/50">
                    <div className="flex items-center">
                      <img 
                        src={userProfile.avatar} 
                        alt="Profile" 
                        className="w-12 h-12 rounded-full border-2 border-amber-300 mr-3 shadow-sm"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{userProfile.name}</p>
                        <p className="text-xs text-gray-600">{userProfile.email}</p>
                        <p className="text-xs mt-1 bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full inline-block font-medium">{userProfile.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <button
                      className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 rounded-lg transition-colors duration-200"
                    >
                      <User className="w-4 h-4 mr-3 text-amber-600" />
                      View Profile
                    </button>
                    <button
                      className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 rounded-lg transition-colors duration-200"
                    >
                      <Settings className="w-4 h-4 mr-3 text-amber-600" />
                      Settings
                    </button>
                    <div className="my-1 border-t border-amber-100"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-red-700 hover:bg-red-50 hover:text-red-900 rounded-lg transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;