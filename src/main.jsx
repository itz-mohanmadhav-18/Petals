import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import client from "./apollo-client.js";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ToastContainer
        position="top-right" // Position of toast notifications
        autoClose={5000} // Close after 5 seconds
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Show newest toasts on top
        closeOnClick // Close on click
        rtl={false} // Left-to-right layout
        pauseOnFocusLoss // Pause when window loses focus
        draggable // Allow dragging to dismiss
        pauseOnHover // Pause on hover
        theme="dark" // Change to dark theme
      />
      <App />
    </ApolloProvider>
  </StrictMode>
);
