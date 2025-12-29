import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 DEV LOGIN (ignore credentials for now)
    await login();
    navigate("/"); // logged-in home
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
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "20px",
          padding: "40px 35px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {/* Top Icon */}
        <div
          style={{
            position: "absolute",
            top: "-45px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #2563eb, #1e40af)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "36px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          }}
        >
          👤
        </div>

        {/* Title */}
        <h2
          style={{
            marginTop: "30px",
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
            marginBottom: "28px",
          }}
        >
          Smart Public Complaint Management System
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email (ignored)"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password (ignored)"
            style={inputStyle}
          />

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

            <span style={{ color: "#2563eb", cursor: "pointer" }}>
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
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
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.target.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) =>
              (e.target.style.transform = "translateY(0)")
            }
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

/* Reusable Input Style */
const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: "16px",
  borderRadius: "10px",
  border: "1.5px solid #d1d5db",
  fontSize: "14px",
  outline: "none",
};
