import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    // 🔐 Backend will save password here
    navigate("/login"); // user can now login
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">

        {/* Avatar */}
        <div className="auth-avatar">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m0-10v4m4 4a4 4 0 10-8 0v2h8v-2z"
            />
          </svg>
        </div>

        <h2 style={{ marginBottom: "6px" }}>Set Your Password</h2>
        <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "22px" }}>
          Create a password for future logins
        </p>

        <form onSubmit={handleSubmit}>
          <div className="auth-input">
            <span>🔒</span>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="auth-input">
            <span>🔒</span>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && (
            <p
              style={{
                color: "#7f1d1d",
                background: "rgba(255,255,255,0.6)",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "13px",
                marginBottom: "12px"
              }}
            >
              {error}
            </p>
          )}

          <button className="auth-btn" type="submit">
            SAVE PASSWORD
          </button>
        </form>

      </div>
    </div>
  );
}
