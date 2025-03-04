import React, { createContext, useState, useContext, useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { toast } from 'react-toastify';

// Context to store authentication state
export const AuthContext = createContext(null);

// Provider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const client = useApolloClient();

  // Load user data from localStorage on init
  useEffect(() => {
    const initAuth = () => {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (token && storedUser) {
        try {
          // Parse stored user data
          const userData = JSON.parse(storedUser);
          setUser(userData);
        } catch (error) {
          console.error('Error parsing stored user data:', error);
          logout();
        }
      }
      
      setLoading(false);
    };
    
    initAuth();
  }, []);

  // Login function
  const login = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    toast.success('Login successful!');
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    // Reset Apollo store
    client.resetStore();
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated: !!user, 
        user, 
        loading, 
        login, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;