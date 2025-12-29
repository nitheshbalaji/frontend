import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Hide topbar for immersive profile view
  useEffect(() => {
    const topbar = document.querySelector(".topbar");
    if (topbar) topbar.style.display = "none";
    return () => {
      if (topbar) topbar.style.display = "";
    };
  }, []);

  // Mock data
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
        background:
          "linear-gradient(180deg, #e0e7ff 0%, #f8fafc 60%)",
        padding: "40px 30px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* ===== HERO PROFILE CARD ===== */}
        <div
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, #2563eb, #1e40af)",
            borderRadius: "22px",
            padding: "40px",
            color: "white",
            marginBottom: "80px",
            boxShadow: "0 30px 60px rgba(37,99,235,0.35)",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              position: "absolute",
              bottom: "-45px",
              left: "40px",
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "white",
              color: "#2563eb",
              fontSize: "38px",
              fontWeight: "800",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            {user.name.charAt(0)}
          </div>

          <h1 style={{ marginBottom: "6px" }}>{user.name}</h1>
          <p style={{ opacity: 0.9 }}>
            {user.role} • Active Community Member
          </p>
        </div>

        {/* ===== STATS GRID ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
            marginBottom: "40px",
          }}
        >
          {/* Complaints */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #dbeafe, #eff6ff)",
              borderRadius: "18px",
              padding: "25px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
            }}
          >
            <h4>📊 Complaints Filed</h4>
            <p
              style={{
                fontSize: "42px",
                fontWeight: "800",
                color: "#2563eb",
                marginTop: "10px",
              }}
            >
              {complaints.length}
            </p>
          </div>

          {/* Email */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #ecfeff, #f0fdfa)",
              borderRadius: "18px",
              padding: "25px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
            }}
          >
            <h4>📧 Email</h4>
            <p style={{ marginTop: "14px", fontWeight: "500" }}>
              {user.email}
            </p>
          </div>

          {/* Phone */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #fff7ed, #ffedd5)",
              borderRadius: "18px",
              padding: "25px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
            }}
          >
            <h4>📞 Phone</h4>
            <p style={{ marginTop: "14px", fontWeight: "500" }}>
              {user.phone}
            </p>
          </div>
        </div>

        {/* ===== RECENT COMPLAINTS ===== */}
        <div
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(12px)",
            borderRadius: "22px",
            padding: "35px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            📝 Recent Complaints
          </h2>

          {complaints.map((c, i) => (
            <div
              key={c.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 18px",
                borderRadius: "14px",
                background: "white",
                marginBottom: "14px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              <span>
                <strong>{i + 1}.</strong> {c.title}
              </span>

              <button
                className="submit-btn"
                style={{
                  padding: "8px 18px",
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
                background: "#e0e7ff",
                color: "#1e40af",
                padding: "10px 22px",
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
