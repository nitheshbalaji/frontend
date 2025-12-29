import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Hide topbar only for profile page
  useEffect(() => {
    const topbar = document.querySelector(".topbar");
    if (topbar) topbar.style.display = "none";
    return () => {
      if (topbar) topbar.style.display = "";
    };
  }, []);

  // Mock data (replace with backend later)
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
          "linear-gradient(180deg, #e0e7ff 0%, #f8fafc 65%)",
        padding: "40px 30px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* ================= HERO PROFILE ================= */}
        <div
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, #2563eb, #1e40af)",
            borderRadius: "24px",
            padding: "45px",
            color: "white",
            marginBottom: "90px",
            boxShadow: "0 30px 60px rgba(37,99,235,0.4)",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              position: "absolute",
              bottom: "-45px",
              left: "45px",
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
              boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
            }}
          >
            {user.name.charAt(0)}
          </div>

          <h1 style={{ marginBottom: "6px" }}>{user.name}</h1>
          <p style={{ opacity: 0.9 }}>
            {user.role} • Active Community Member
          </p>
        </div>

        {/* ================= PROFILE HIGHLIGHTS ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "26px",
            marginBottom: "45px",
          }}
        >
          {/* Complaints Filed */}
          <div
            style={{
              position: "relative",
              padding: "28px",
              borderRadius: "22px",
              background:
                "linear-gradient(135deg, #2563eb, #1e40af)",
              color: "white",
              boxShadow: "0 20px 45px rgba(37,99,235,0.45)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                fontSize: "90px",
                opacity: 0.15,
              }}
            >
              📊
            </div>

            <h4 style={{ marginBottom: "14px", fontSize: "16px" }}>
              Complaints Filed
            </h4>

            <div
              style={{
                fontSize: "44px",
                fontWeight: "800",
                lineHeight: "1",
              }}
            >
              {complaints.length}
            </div>

            <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
              Total issues raised by you
            </p>
          </div>

          {/* Email */}
          <div
            style={{
              padding: "28px",
              borderRadius: "22px",
              background:
                "linear-gradient(135deg, #ecfeff, #cffafe)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-18px",
                right: "-10px",
                fontSize: "80px",
                opacity: 0.2,
              }}
            >
              ✉️
            </div>

            <h4 style={{ marginBottom: "14px" }}>
              Email Address
            </h4>

            <p
              style={{
                fontWeight: "600",
                fontSize: "15px",
                wordBreak: "break-word",
              }}
            >
              {user.email}
            </p>

            <p style={{ marginTop: "10px", fontSize: "13px", color: "#555" }}>
              Used for notifications
            </p>
          </div>

          {/* Phone */}
          <div
            style={{
              padding: "28px",
              borderRadius: "22px",
              background:
                "linear-gradient(135deg, #fff7ed, #ffedd5)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-18px",
                right: "-10px",
                fontSize: "80px",
                opacity: 0.25,
              }}
            >
              📞
            </div>

            <h4 style={{ marginBottom: "14px" }}>
              Phone Number
            </h4>

            <p style={{ fontWeight: "600", fontSize: "16px" }}>
              {user.phone}
            </p>

            <p style={{ marginTop: "10px", fontSize: "13px", color: "#555" }}>
              Verified contact
            </p>
          </div>
        </div>

        {/* ================= RECENT COMPLAINTS ================= */}
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(12px)",
            borderRadius: "24px",
            padding: "35px",
            boxShadow: "0 22px 55px rgba(0,0,0,0.12)",
          }}
        >
          <h2 style={{ marginBottom: "22px" }}>
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
