import React from "react";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // registration logic later
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
          Enter your details to receive OTP
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: "0 4px" }}>
          <FormInput label="First Name" placeholder="Enter first name" />
          <FormInput label="Last Name" placeholder="Enter last name" />
          <FormInput label="Email" placeholder="Enter your email" />
          <FormInput label="Mobile Number" placeholder="Enter mobile number" />
          <FormInput label="Address" placeholder="Enter address" />
          <FormInput label="City" placeholder="Enter city" />

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow =
                "0 10px 25px rgba(37,99,235,0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
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
          <span style={{ color: "#2563eb", fontWeight: "600" }}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

/* =====================
   Reusable Input Block
   ===================== */

function FormInput({ label, placeholder }) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <label style={labelStyle}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
  boxSizing: "border-box",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1.5px solid #d1d5db",
  fontSize: "15px",
  backgroundColor: "#f9fafb",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
  transition: "all 0.25s ease",
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
  cursor: "pointer",
  transition: "all 0.25s ease",
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
  e.target.style.boxShadow =
    "inset 0 1px 2px rgba(0,0,0,0.05)";
};
