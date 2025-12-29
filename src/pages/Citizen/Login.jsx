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
        background:
          "linear-gradient(135deg, #dbeafe, #fef3c7, #e0f2fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      {/* Login Card */}
      <div
        style={{
          width: "420px",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(14px)",
          borderRadius: "22px",
          padding: "45px 35px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {/* Floating Icon */}
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
            boxShadow: "0 15px 35px rgba(37,99,235,0.45)",
          }}
        >
          👤
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
            color: "#555",
            fontSize: "14px",
            marginBottom: "26px",
          }}
        >
          Access your complaints and track resolution progress
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
            boxShadow: "0 10px 25px rgba(37,99,235,0.45)",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.transform = "translateY(-2px)")
          }
          onMouseOut={(e) =>
            (e.target.style.transform = "translateY(0)")
          }
        >
          🔐 Login Securely
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
          Secure access to the Complaint Management System
        </p>
      </div>
    </div>
  );
};

export default Login;
