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
          "linear-gradient(180deg, #dbeafe 0%, #bfdbfe 40%, #93c5fd 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* ===== CLOUD LAYER ===== */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "-10%",
          width: "120%",
          height: "180px",
          background:
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.9), transparent 60%), radial-gradient(circle at 60% 50%, rgba(255,255,255,0.85), transparent 65%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.9), transparent 60%)",
        }}
      />

      {/* ===== FAR CITY LAYER ===== */}
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: 0,
          width: "100%",
          height: "200px",
          background:
            "linear-gradient(180deg, rgba(59,130,246,0.35), rgba(37,99,235,0.45))",
          clipPath:
            "polygon(0 60%, 10% 50%, 20% 55%, 30% 45%, 40% 50%, 50% 42%, 60% 48%, 70% 40%, 80% 45%, 90% 38%, 100% 42%, 100% 100%, 0 100%)",
        }}
      />

      {/* ===== NEAR CITY / INFRASTRUCTURE LAYER ===== */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "260px",
          background:
            "linear-gradient(180deg, #1e40af, #1e3a8a)",
          clipPath:
            "polygon(0 55%, 8% 45%, 18% 50%, 28% 42%, 38% 48%, 48% 40%, 58% 46%, 68% 38%, 78% 44%, 88% 36%, 100% 42%, 100% 100%, 0 100%)",
        }}
      />

      {/* ===== LOGIN CARD ===== */}
      <div
        style={{
          width: "420px",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(18px)",
          borderRadius: "28px",
          padding: "44px 36px",
          boxShadow: "0 40px 90px rgba(0,0,0,0.3)",
          zIndex: 5,
        }}
      >
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
