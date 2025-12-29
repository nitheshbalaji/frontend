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
        backgroundImage: "url('/bg/smart-city.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* TRANSPARENT OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255, 255, 255, 0.55)", // controls transparency
          zIndex: 1,
        }}
      />

      {/* CENTERED CONTENT */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LOGIN CARD */}
        <div
          style={{
            width: "420px",
            background: "rgba(255,255,255,0.96)",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 30px 70px rgba(0,0,0,0.25)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "6px" }}>
            Citizen Login
          </h2>

          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#555",
              marginBottom: "28px",
            }}
          >
            Smart Public Complaint Management System
          </p>

          {/* EMAIL */}
          <div style={{ marginBottom: "18px" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>

          {/* PASSWORD */}
          <div style={{ marginBottom: "16px" }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>

          {/* OPTIONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              marginBottom: "22px",
            }}
          >
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span style={{ color: "#2563eb", cursor: "pointer" }}>
              Forgot password?
            </span>
          </div>

          {/* LOGIN BUTTON */}
          <button
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
