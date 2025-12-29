import React, { useEffect } from "react";

const Login = () => {
  // Hide topbar & sidebar on login page
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
          "linear-gradient(135deg, #7c3aed, #3b82f6, #06b6d4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Login Card */}
      <div
        style={{
          width: "380px",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(16px)",
          borderRadius: "24px",
          padding: "40px 30px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
          position: "relative",
        }}
      >
        {/* Avatar */}
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
            fontSize: "36px",
            fontWeight: "700",
            position: "absolute",
            top: "-45px",
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
          }}
        >
          👤
        </div>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            marginTop: "40px",
            marginBottom: "8px",
            fontSize: "26px",
          }}
        >
          Welcome Back
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "14px",
            marginBottom: "25px",
          }}
        >
          Login to access your complaint dashboard
        </p>

        {/* Email */}
        <div style={{ marginBottom: "16px" }}>
          <input
            type="email"
            placeholder="Email ID"
            required
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: "14px",
              border: "1px solid #c7d2fe",
              fontSize: "15px",
              outline: "none",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "14px" }}>
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: "14px",
              border: "1px solid #c7d2fe",
              fontSize: "15px",
              outline: "none",
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
            padding: "14px",
            borderRadius: "999px",
            border: "none",
            background:
              "linear-gradient(135deg, #2563eb, #1e40af)",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(37,99,235,0.5)",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.transform = "translateY(-2px)")
          }
          onMouseOut={(e) =>
            (e.target.style.transform = "translateY(0)")
          }
        >
          🔐 Login
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
          Secure citizen access portal
        </p>
      </div>
    </div>
  );
};

export default Login;
