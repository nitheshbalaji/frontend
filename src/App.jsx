import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

/* =====================
   LAYOUTS
===================== */
import CitizenLayout from "./layouts/CitizenLayout";

/* =====================
   PUBLIC PAGES
===================== */
import Home from "./pages/Home";
import Login from "./pages/Citizen/Login";
import Register from "./pages/Citizen/Register";
import VerifyOtp from "./pages/Citizen/VerifyOtp";
import SetPassword from "./pages/Citizen/SetPassword";

/* =====================
   CITIZEN PAGES
===================== */
import CitizenDashboard from "./pages/Citizen/Dashboard";
import Profile from "./pages/Citizen/Profile";
import SubmitComplaint from "./pages/Citizen/SubmitComplaint";
import MyComplaints from "./pages/Citizen/MyComplaints";

/* =====================
   PROTECTED ROUTE
===================== */
function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

/* =====================
   APP ROUTES
===================== */
export default function App() {
  return (
    <Routes>

      {/* ---------- PUBLIC ---------- */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/set-password" element={<SetPassword />} />

      {/* ---------- CITIZEN DASHBOARD (NO LAYOUT) ---------- */}
      <Route
        path="/citizen/dashboard"
        element={
          <ProtectedRoute role="citizen">
            <CitizenDashboard />
          </ProtectedRoute>
        }
      />

      {/* ---------- CITIZEN PAGES (WITH LAYOUT) ---------- */}
      <Route
        path="/citizen"
        element={
          <ProtectedRoute role="citizen">
            <CitizenLayout />
          </ProtectedRoute>
        }
      >
        <Route path="profile" element={<Profile />} />
        <Route path="submit" element={<SubmitComplaint />} />
        <Route path="history" element={<MyComplaints />} />
      </Route>

      {/* ---------- FALLBACK ---------- */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}
