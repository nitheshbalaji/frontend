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
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Decorative Pastel Blobs */}
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          background: "#fde68a",
          borderRadius: "50%",
          top: "-120px",
          left: "-120px",
          filter: "blur(80px)",
          opacity: 0.6,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "380px",
          height: "380px",
          background: "#a5f3fc",
          borderRadius: "50%",
          bottom: "-120px",
          right: "-120px",
          filter: "blur(90px)",
          opacity: 0.6,
        }}
      />

      {/* Login Card */}
      <div
        style={{
          width: "420px",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(18px)",
          borderRadius: "20px",
          padding: "42px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginBottom: "6px",
          }}
        >
          Citizen Login
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Smart Public Complaint Management System
        </p>

        {/* Email */}
        <div style={{ marginBottom: "18px" }}>
          <label style={{ fontSize: "14px" }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "13px",
              marginTop: "6px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "18px" }}>
          <label style={{ fontSize: "14px" }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "13px",
              marginTop: "6px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Options */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "13px",
            marginBottom: "24px",
          }}
        >
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span style={{ color: "#6366f1", cursor: "pointer" }}>
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <button
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "999px",
            border: "none",
            background:
              "linear-gradient(90deg, #6366f1, #9333ea)",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 12px 30px rgba(99,102,241,0.4)",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
