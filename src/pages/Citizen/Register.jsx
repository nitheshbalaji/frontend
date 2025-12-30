import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-otp"); // go to OTP page
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
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
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
            fontSize: "38px",
            boxShadow: "0 14px 30px rgba(0,0,0,0.35)",
          }}
        >
          📝
        </div>

        <h2 style={titleStyle}>Citizen Registration</h2>
        <p style={subtitleStyle}>
          Enter your details to create an account
        </p>

        <form onSubmit={handleSubmit}>
          <FormInput label="First Name" placeholder="Enter first name" />
          <FormInput label="Last Name" placeholder="Enter last name" />
          <FormInput label="Email" placeholder="Enter email" />
          <FormInput label="Mobile Number" placeholder="Enter mobile number" />
          <FormInput label="Address" placeholder="Enter address" />
          <FormInput label="City" placeholder="Enter city" />
          <FormInput label="Password" placeholder="Create password" type="password" />
          <FormInput label="Confirm Password" placeholder="Confirm password" type="password" />

          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>

        <p style={footerStyle}>
          Already have an account?{" "}
          <span style={linkStyle} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

/* ========= Reusable Input ========= */

function FormInput({ label, placeholder, type = "text" }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
}

/* ========= Styles ========= */

const titleStyle = {
  marginTop: "38px",
  textAlign: "center",
  fontSize: "26px",
  fontWeight: "700",
};

const subtitleStyle = {
  textAlign: "center",
  color: "#555",
  fontSize: "14px",
  marginBottom: "28px",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "6px",
  display: "block",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1.5px solid #d1d5db",
  background: "#f9fafb",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "999px",
  border: "none",
  background: "linear-gradient(90deg, #2563eb, #1e40af)",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  marginTop: "10px",
  cursor: "pointer",
};

const footerStyle = {
  marginTop: "18px",
  fontSize: "13px",
  textAlign: "center",
  color: "#666",
};

const linkStyle = {
  color: "#2563eb",
  fontWeight: "600",
  cursor: "pointer",
};
