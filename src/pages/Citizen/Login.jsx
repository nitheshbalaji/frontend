import React, { useEffect } from "react";

const Login = () => {
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
        position: "relative",
        background:
          "linear-gradient(180deg, #dbeafe 0%, #e0f2fe 60%, #bae6fd 100%)",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* SVG CITY BACKGROUND (NO IMAGE FILE) */}
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "50%",
          opacity: 0.35,
        }}
      >
        <path
          d="M0,250L80,230C160,210,320,170,480,165C640,160,800,190,960,200C1120,210,1280,200,1360,195L1440,190L1440,400L0,400Z"
          fill="#2563eb"
        />
        <path
          d="M0,280L120,260C240,240,480,200,720,195C960,190,1200,230,1320,250L1440,270L1440,400L0,400Z"
          fill="#1e40af"
        />
      </svg>

      {/* LOGIN CARD */}
      <div
        style={{
          width: "420px",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(16px)",
          borderRadius: "28px",
          padding: "44px 36px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "6px",
          }}
        >
          Citizen Login
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "14px",
            marginBottom: "28px",
          }}
        >
          Access public services & track complaints
        </p>

        {/* Email */}
        <div style={{ marginBottom: "18px" }}>
          <label style={{ fontSize: "14px", color: "#444" }}>
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "1.5px solid #c7d2fe",
              marginTop: "6px",
              fontSize: "15px",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontSize: "14px", color: "#444" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "1.5px solid #c7d2fe",
              marginTop: "6px",
              fontSize: "15px",
            }}
          />
        </div>

        {/* Options */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          <label style={{ display: "flex", gap: "6px" }}>
            <input type="checkbox" />
            Remember me
          </label>
          <span style={{ color: "#2563eb", cursor: "pointer" }}>
            Forgot password?
          </span>
        </div>

        {/* Button */}
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
          }}
        >
          Login
        </button>

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
  );
};

export default Login;
