import { ApolloProvider } from "@apollo/client";
import SchoolLoginPage from "./components/Login";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import Layout from "./Layout";
import LandingPage from "./components/LandingPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes without Layout */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SchoolLoginPage />} />
      
      {/* Protected routes with Layout */}
      <Route path="/dashboard" element={<Layout />}>  
        <Route path="admin" element={<AdminDashboard />} />
        {/* Add other dashboard routes here */}
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;