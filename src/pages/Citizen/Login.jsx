import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();        // DEV login
    navigate("/");        // go to logged-in home
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
      {/* Login Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "22px",
          padding: "45px 35px 40px",
          boxShadow: "0 30px 70px rgba(0,0,0,0.25)",
          position: "relative",
        }}
      >
        {/* Top Icon */}
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
          👤
        </div>

        {/* Title */}
        <h2
          style={{
            marginTop: "35px",
            textAlign: "center",
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Citizen Login
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "14px",
            marginBottom: "30px",
          }}
        >
          Smart Public Complaint Management System
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {/* Options */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "13px",
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

          {/* Button */}
          <button
            type="submit"
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
              transition: "all 0.25s ease",
            }}
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
            Login
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
          Don’t have an account?{" "}
          <span style={{ color: "#2563eb", fontWeight: "600" }}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

/* ======================
   Input Styling Helpers
   ====================== */

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1.5px solid #d1d5db",
  fontSize: "15px",
  backgroundColor: "#f9fafb",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
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
