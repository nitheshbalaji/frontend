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
        background:
          "linear-gradient(135deg, #dbeafe, #fef3c7, #e0f2fe)", // same family as register complaint
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Login Card */}
      <div
        style={{
          width: "420px",
          background: "white",
          borderRadius: "20px",
          padding: "40px 36px",
          boxShadow: "0 30px 70px rgba(0,0,0,0.25)",
          textAlign: "center",
        }}
      >
        {/* Avatar Circle */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #2563eb, #1e40af)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 12px",
            boxShadow: "0 10px 25px rgba(37,99,235,0.4)",
          }}
        >
          <span style={{ fontSize: "36px", color: "white" }}>👤</span>
        </div>

        {/* Login Title */}
        <h2 style={{ marginBottom: "4px" }}>Login</h2>
        <div
          style={{
            width: "50px",
            height: "3px",
            background: "#2563eb",
            margin: "0 auto 24px",
            borderRadius: "999px",
          }}
        />

        {/* Email */}
        <div style={{ marginBottom: "18px", textAlign: "left" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "13px",
              marginTop: "6px",
              borderRadius: "10px",
              border: "1.5px solid #cbd5e1",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "18px", textAlign: "left" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "13px",
              marginTop: "6px",
              borderRadius: "10px",
              border: "1.5px solid #cbd5e1",
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
          <span style={{ color: "#2563eb", cursor: "pointer" }}>
            Forgot password?
          </span>
        </div>

        {/* Login Button */}
        <button
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "999px",
            border: "none",
            background:
              "linear-gradient(90deg, #2563eb, #1e40af)",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 12px 30px rgba(37,99,235,0.4)",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
