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
        background: "linear-gradient(180deg, #dbeafe, #e0f2fe)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ILLUSTRATED CITY BACKGROUND */}
      <img
        src="/assets/public-city-bg.png"
        alt="Public Services Background"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.9,
        }}
      />

      {/* Soft overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(219,234,254,0.9), rgba(224,242,254,0.95))",
        }}
      />

      {/* LOGIN CONTENT */}
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
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(18px)",
            borderRadius: "28px",
            padding: "42px 36px",
            boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
          }}
        >
          {/* Header */}
          <h2
            style={{
              textAlign: "center",
              marginBottom: "8px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            Citizen Login
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#555",
              fontSize: "14px",
              marginBottom: "30px",
            }}
          >
            Access public services & track your complaints
          </p>

          {/* Email */}
          <div style={{ marginBottom: "18px" }}>
            <label style={{ fontSize: "14px", color: "#444" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1.5px solid #c7d2fe",
                fontSize: "15px",
                marginTop: "6px",
                outline: "none",
                background: "rgba(255,255,255,0.95)",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "14px" }}>
            <label style={{ fontSize: "14px", color: "#444" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1.5px solid #c7d2fe",
                fontSize: "15px",
                marginTop: "6px",
                outline: "none",
                background: "rgba(255,255,255,0.95)",
              }}
            />
          </div>

          {/* Options */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "14px",
              marginBottom: "26px",
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
              boxShadow: "0 12px 30px rgba(37,99,235,0.45)",
            }}
          >
            Login
          </button>

          {/* Footer */}
          <p
            style={{
              marginTop: "22px",
              fontSize: "13px",
              color: "#666",
              textAlign: "center",
            }}
          >
            Secure Public Complaint Management System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
