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
        backgroundColor: "#eef2ff",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Subtle City/Public Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://raw.githubusercontent.com/undraw/undraw/master/illustrations/city_life_re_8tok.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "70%",
          opacity: 0.25, // makes it look transparent
        }}
      />

      {/* Login Card */}
      <div
        style={{
          position: "relative",
          width: "420px",
          background: "white",
          borderRadius: "14px",
          padding: "40px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
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
            marginBottom: "30px",
          }}
        >
          Public Complaint Management System
        </p>

        {/* Email */}
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
            }}
          />
        </div>

        {/* Password */}
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
            }}
          />
        </div>

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
  );
};

export default Login;
