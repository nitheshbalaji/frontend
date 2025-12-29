import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // 🔹 Mock data (replace with backend later)
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
        {/* ===== PROFILE HEADER ===== */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "#2563eb",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            {user.name.charAt(0)}
          </div>

          <div>
            <h2 className="register-title" style={{ marginBottom: "4px" }}>
              {user.name}
            </h2>
            <p className="register-subtitle">
              {user.role} • Active User
            </p>
          </div>
        </div>

        {/* ===== PERSONAL DETAILS ===== */}
        <div
          style={{
            background: "#f8fafc",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "30px",
          }}
        >
          <h3 style={{ marginBottom: "12px" }}>👤 Personal Information</h3>

          <div style={{ lineHeight: "1.8" }}>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>

        {/* ===== COMPLAINT STATS ===== */}
        <div
          style={{
            background: "linear-gradient(135deg, #dbeafe, #eef2ff)",
            padding: "22px",
            borderRadius: "14px",
            marginBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3>📊 Complaint Activity</h3>
            <p style={{ color: "#555" }}>
              Overview of your complaint submissions
            </p>
          </div>

          <div
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#2563eb",
            }}
          >
            {complaints.length}
          </div>
        </div>

        {/* ===== RECENT COMPLAINTS ===== */}
        <div>
          <h3 style={{ marginBottom: "14px" }}>
            📝 Recent Complaints
          </h3>

          {complaints.length === 0 ? (
            <p style={{ color: "#666" }}>
              You have not submitted any complaints yet.
            </p>
          ) : (
            complaints.map((complaint, index) => (
              <div
                key={complaint.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  marginBottom: "12px",
                  background: "#ffffff",
                }}
              >
                <div>
                  <p style={{ margin: 0, fontWeight: "500" }}>
                    {index + 1}. {complaint.title}
                  </p>
                </div>

                <button
                  className="submit-btn"
                  style={{
                    padding: "6px 16px",
                    fontSize: "14px",
                  }}
                  onClick={() => navigate("/citizen/history")}
                >
                  View
                </button>
              </div>
            ))
          )}

          {/* View All */}
          <div style={{ textAlign: "right", marginTop: "10px" }}>
            <button
              className="submit-btn"
              style={{
                padding: "8px 18px",
                fontSize: "14px",
                background: "#e5e7eb",
                color: "#1f2937",
              }}
              onClick={() => navigate("/citizen/history")}
            >
              View All Complaints →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
