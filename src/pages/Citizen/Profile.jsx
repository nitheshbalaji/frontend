import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // 🔹 Hide topbar ONLY on this page
  useEffect(() => {
    const topbar = document.querySelector(".topbar");
    if (topbar) topbar.style.display = "none";

    return () => {
      if (topbar) topbar.style.display = "";
    };
  }, []);

  // 🔹 Mock data (backend later)
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
    <div
      className="content-area"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* ===== PROFILE HEADER ===== */}
        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            display: "flex",
            alignItems: "center",
            gap: "25px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2563eb, #1e40af)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: "700",
            }}
          >
            {user.name.charAt(0)}
          </div>

          <div>
            <h2 style={{ marginBottom: "6px" }}>{user.name}</h2>
            <p style={{ color: "#555", marginBottom: "4px" }}>
              {user.role}
            </p>
            <p style={{ fontSize: "14px", color: "#777" }}>
              Active citizen user
            </p>
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h4>📊 Complaints Filed</h4>
            <p
              style={{
                fontSize: "34px",
                fontWeight: "700",
                color: "#2563eb",
                marginTop: "10px",
              }}
            >
              {complaints.length}
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h4>📧 Email</h4>
            <p style={{ marginTop: "10px", color: "#444" }}>
              {user.email}
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h4>📞 Phone</h4>
            <p style={{ marginTop: "10px", color: "#444" }}>
              {user.phone}
            </p>
          </div>
        </div>

        {/* ===== RECENT COMPLAINTS ===== */}
        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>
            📝 Recent Complaints
          </h3>

          {complaints.map((complaint, index) => (
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
              }}
            >
              <span>
                {index + 1}. {complaint.title}
              </span>

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
          ))}

          <div style={{ textAlign: "right", marginTop: "15px" }}>
            <button
              className="submit-btn"
              style={{
                background: "#e5e7eb",
                color: "#1f2937",
                padding: "8px 20px",
                fontSize: "14px",
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
