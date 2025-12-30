import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleVerify = async (e) => {
    e.preventDefault();

    // ✅ OTP verification logic later
    // For now assume OTP is correct

    await login(); // register + login (dummy)
    navigate("/citizen/dashboard"); // go to home
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #dbeafe, #fef3c7, #e0f2fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "22px",
          padding: "48px 38px 42px",
          boxShadow: "0 30px 70px rgba(0,0,0,0.25)",
          position: "relative",
        }}
      >
        {/* Icon */}
        <div
          style={{
            position: "absolute",
            top: "-48px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #2563eb, #1e40af)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "34px",
            boxShadow: "0 14px 30px rgba(0,0,0,0.35)",
          }}
        >
          🔐
        </div>

        <h2
          style={{
            marginTop: "38px",
            textAlign: "center",
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Verify OTP
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "14px",
            marginBottom: "28px",
          }}
        >
          Enter the 6-digit OTP sent to your registered email/mobile
        </p>

        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength={6}
            required
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: "12px",
              border: "1.5px solid #d1d5db",
              fontSize: "16px",
              backgroundColor: "#f9fafb",
              marginBottom: "26px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
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
