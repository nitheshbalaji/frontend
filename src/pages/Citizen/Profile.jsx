import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // 🔹 MOCK DATA (replace with API later)
  const user = {
    name: "Aparajhitha",
    email: "aparaar62@gmail.com",
    phone: "+91 9XXXXXXXXX",
    role: "Citizen",
  };

  const complaints = [
    { id: 1, title: "Street lights not working near my house" },
    { id: 2, title: "Garbage not collected for 3 days" },
    { id: 3, title: "Water leakage in main road" },
  ];

  return (
    <div className="content-area">
      <div className="card">
        {/* Header */}
        <h2 className="register-title">Profile Overview</h2>
        <p className="register-subtitle">
          View your personal details and complaint activity.
        </p>

        {/* User Info */}
        <div
          style={{
            background: "#f8fafc",
            padding: "18px",
            borderRadius: "10px",
            marginBottom: "25px",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>👤 Personal Details</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>

        {/* Complaint Summary */}
        <div
          style={{
            background: "#eef2ff",
            padding: "16px",
            borderRadius: "10px",
            marginBottom: "25px",
          }}
        >
          <h3>📊 Complaint Summary</h3>
          <p style={{ fontSize: "18px", marginTop: "8px" }}>
            Total Complaints Submitted:{" "}
            <strong>{complaints.length}</strong>
          </p>
        </div>

        {/* Complaint List */}
        <div>
          <h3 style={{ marginBottom: "12px" }}>
            📝 Your Complaints
          </h3>

          {complaints.length === 0 ? (
            <p style={{ color: "#666" }}>
              You have not submitted any complaints yet.
            </p>
          ) : (
            complaints.map((complaint) => (
              <div
                key={complaint.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 14px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              >
                <span>{complaint.title}</span>
                <button
                  className="submit-btn"
                  style={{
                    padding: "6px 14px",
                    fontSize: "14px",
                  }}
                  onClick={() => navigate("/citizen/history")}
                >
                  View
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
