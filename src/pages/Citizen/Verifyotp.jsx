import React from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();

    // later: verify OTP via backend
    navigate("/set-password"); // or dashboard later
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #c7d2fe, #fde68a, #bae6fd)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
          textAlign: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "60px",
            height: "60px",
            margin: "0 auto 20px",
            borderRadius: "50%",
            background: "#2563eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "26px",
          }}
        >
          🔐
        </div>

        <h2 style={{ marginBottom: "8px" }}>Verify OTP</h2>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "25px" }}>
          Enter the 6-digit OTP sent to your registered email / mobile
        </p>

        <form onSubmit={handleVerify}>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontWeight: "500",
              }}
            >
              OTP
            </label>
            <input
              type="text"
              maxLength="6"
              placeholder="Enter OTP"
              required
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "15px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "999px",
              border: "none",
              background: "linear-gradient(90deg, #2563eb, #1e40af)",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}
