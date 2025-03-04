import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { isAuthenticated, user, loading } = useAuth();
  const location = useLocation();
  
  useEffect(() => {
    console.log("ProtectedRoute rendered. Authenticated:", isAuthenticated);
    console.log("Current path:", location.pathname);
    
    // Log additional user info if available
    if (user) {
      console.log("User role:", user.role);
    }
  }, [isAuthenticated, location.pathname, user]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700 mx-auto"></div>
          <p className="mt-4 text-amber-800">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    toast.error("Please log in to access this page");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user has required role (if roles are specified)
  const hasRequiredRole = 
    allowedRoles.length === 0 || // No specific roles required
    (user && allowedRoles.includes(user.role)); // User has one of the allowed roles

  // If user doesn't have required role
  if (!hasRequiredRole && allowedRoles.length > 0) {
    toast.error("You don't have permission to access this page");
    return <Navigate to="/dashboard" replace />;
  }

  // If everything is ok, render the children
  return <Outlet />;
};

export default ProtectedRoute;