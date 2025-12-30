import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // later → send OTP
    navigate("/verify-otp");
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
        padding: "40px 20px",
      }}
    >
      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "rgba(255,255,255,0.96)",
          borderRadius: "22px",
          padding: "48px 36px 42px",
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
            fontSize: "36px",
            boxShadow: "0 14px 30px rgba(0,0,0,0.35)",
          }}
        >
          📝
        </div>

        {/* Header */}
        <h2
          style={{
            marginTop: "38px",
            textAlign: "center",
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Citizen Registration
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "14px",
            marginBottom: "32px",
          }}
        >
          Enter your details to create an account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <FormInput label="First Name" placeholder="Enter first name" />
          <FormInput label="Last Name" placeholder="Enter last name" />
          <FormInput label="Email" placeholder="Enter email" />
          <FormInput label="Mobile Number" placeholder="Enter mobile number" />
          <FormInput label="Address" placeholder="Enter address" />
          <FormInput label="City" placeholder="Enter city" />

          {/* 🔐 PASSWORD */}
          <FormInput
            label="Password"
            placeholder="Create password"
            type="password"
          />

          <FormInput
            label="Confirm Password"
            placeholder="Re-enter password"
            type="password"
          />

          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>

        {/* Footer */}
        <p
          style={{
            marginTop: "18px",
            fontSize: "13px",
            textAlign: "center",
            color: "#666",
          }}
        >
          Already have an account?{" "}
          <span
            style={{
              color: "#2563eb",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

/* =====================
   Reusable Input
   ===================== */

function FormInput({ label, placeholder, type = "text" }) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      />
    </div>
  );
}

/* =====================
   Styles
   ===================== */

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#374151",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1.5px solid #d1d5db",
  fontSize: "15px",
  backgroundColor: "#f9fafb",
  boxSizing: "border-box",
  transition: "all 0.25s ease",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "999px",
  border: "none",
  marginTop: "10px",
  background: "linear-gradient(90deg, #2563eb, #1e40af)",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};

const handleFocus = (e) => {
  e.target.style.borderColor = "#2563eb";
  e.target.style.backgroundColor = "#ffffff";
  e.target.style.boxShadow =
    "0 0 0 4px rgba(37,99,235,0.15)";
};

const handleBlur = (e) => {
  e.target.style.borderColor = "#d1d5db";
  e.target.style.backgroundColor = "#f9fafb";
  e.target.style.boxShadow = "none";
};
