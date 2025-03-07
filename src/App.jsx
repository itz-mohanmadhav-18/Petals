import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import SchoolLoginPage from "./components/Login";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import Layout from "./Layout";
import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./components/ProtectedRoutes";
import { Navigate } from "react-router-dom";
import AddStudent from "./components/adminFunctions/AddStudent.jsx";
import AddClass from "./components/adminFunctions/AddClass.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SchoolLoginPage />} />

      {/* All dashboard routes are protected */}
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="admin" />} />
          <Route path="admin" element={<AdminDashboard />} />
          
          {/* Student management routes */}
          <Route path="admin/students/create" element={<AddStudent />} />
          <Route path="admin/students/list" element={<div>Student List (placeholder)</div>} />
          
          {/* Class management routes */}
          <Route path="admin/classes/create" element={<AddClass />} />
          <Route path="admin/classes/list" element={<div>Class List (placeholder)</div>} />
          
          {/* Other admin routes */}
          <Route path="admin/settings" element={<div>Settings (placeholder)</div>} />
          <Route path="admin/courses" element={<div>Courses (placeholder)</div>} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
