// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ExplorePage from "./pages/ExplorePage";
import WishlistPage from "./pages/WishlistPage";

import "./style.css";

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />

    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <DashboardPage />
        </PrivateRoute>
      }
    />
    <Route
      path="/explore"
      element={
        <PrivateRoute>
          <ExplorePage />
        </PrivateRoute>
      }
    />
    <Route
      path="/wishlist"
      element={
        <PrivateRoute>
          <WishlistPage />
        </PrivateRoute>
      }
    />

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;






// import './App.css';
// function App() {
//   return (
//     <>
//     <h1>hello react</h1>
//     </>
//   );
// }

// export default App;
