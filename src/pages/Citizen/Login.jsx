import React, { useEffect } from "react";

const Login = () => {
  // Hide sidebar & topbar on login page
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const topbar = document.querySelector(".topbar");

    if (sidebar) sidebar.style.display = "none";
    if (topbar) topbar.style.display = "none";

    return () => {
      if (sidebar) sidebar.style.display = "";
      if (topbar) topbar.style.display = "";
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('/assets/city-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* COLOR OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.75), rgba(6,182,212,0.75), rgba(253,224,71,0.6))",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* LOGIN CONTAINER */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        {/* LOGIN CARD */}
        <div
          style={{
            width: "420px",
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(16px)",
            borderRadius: "26px",
            padding: "45px 35px",
            boxShadow: "0 35px 70px rgba(0,0,0,0.35)",
            position: "relative",
          }}
        >
          {/* Floating Avatar */}
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #2563eb, #1e40af)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "34px",
              position: "absolute",
              top: "-45px",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
            }}
          >
            🏙️
          </div>

          {/* Header */}
          <h2
            style={{
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "6px",
              fontSize: "28px",
            }}
          >
            Citizen Login
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#444",
              fontSize: "14px",
              marginBottom: "28px",
            }}
          >
            Access public services & track your complaints
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="Email ID"
            required
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: "14px",
              border: "1.5px solid #c7d2fe",
              fontSize: "15px",
              marginBottom: "16px",
              outline: "none",
              background: "rgba(255,255,255,0.95)",
            }}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: "14px",
              border: "1.5px solid #c7d2fe",
              fontSize: "15px",
              marginBottom: "14px",
              outline: "none",
              background: "rgba(255,255,255,0.95)",
            }}
          />

          {/* Options */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "14px",
              marginBottom: "22px",
            }}
          >
            <label style={{ display: "flex", gap: "6px" }}>
              <input type="checkbox" />
              Remember me
            </label>

            <span
              style={{
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <button
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "999px",
              border: "none",
              background:
                "linear-gradient(90deg, #2563eb, #1e40af)",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 12px 28px rgba(37,99,235,0.45)",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.target.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) =>
              (e.target.style.transform = "translateY(0)")
            }
          >
            🔐 Login to Portal
          </button>

          {/* Footer */}
          <p
            style={{
              marginTop: "22px",
              fontSize: "13px",
              color: "#555",
              textAlign: "center",
            }}
          >
            Secure public grievance redressal system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
