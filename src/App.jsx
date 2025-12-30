import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

/* Layouts */
import CitizenLayout from "./layouts/CitizenLayout";

/* Public Pages */
import Home from "./pages/Home";
import Login from "./pages/Citizen/Login";
import Register from "./pages/Citizen/Register";
import VerifyOtp from "./pages/Citizen/Verifyotp";
import SetPassword from "./pages/Citizen/SetPassword";

/* Citizen Pages */
import Dashboard from "./pages/Citizen/Dashboard";
import Profile from "./pages/Citizen/Profile";
import SubmitComplaint from "./pages/Citizen/SubmitComplaint";
import MyComplaints from "./pages/Citizen/MyComplaints";

/* Admin Pages */
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageComplaints from "./pages/Admin/ManageComplaints";
import ComplaintDetail from "./pages/Admin/ComplaintDetail";

/* ===============================
   Protected Route Component
================================ */
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

/* ===============================
   App Routes
================================ */
export default function App() {
  return (
    <Routes>

      {/* ===============================
         Public Routes
      =============================== */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/set-password" element={<SetPassword />} />

      {/* ===============================
         Citizen Routes (Protected)
      =============================== */}
      <Route
        path="/citizen"
        element={
          <ProtectedRoute role="citizen">
            <CitizenLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="submit" element={<SubmitComplaint />} />
        <Route path="history" element={<MyComplaints />} />
      </Route>

      {/* ===============================
         Admin Routes (Protected)
      =============================== */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <React.Fragment />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="complaints" element={<ManageComplaints />} />
        <Route path="complaints/:id" element={<ComplaintDetail />} />
      </Route>

      {/* ===============================
         Catch-all Route
      =============================== */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}
