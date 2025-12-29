import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setError("");

    // 🔐 Backend OTP verification will go here
    navigate("/set-password");
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
              d="M12 15v2m0-10v4m7.07 1.93a10 10 0 11-14.14 0
                 10 10 0 0114.14 0z"
            />
          </svg>
        </div>

        <h2 style={{ marginBottom: "6px" }}>Verify OTP</h2>
        <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "22px" }}>
          Enter the 6-digit OTP sent to your registered mobile/email
        </p>

        <form onSubmit={handleVerify}>
          <div className="auth-input">
            <span>🔢</span>
            <input
              placeholder="Enter OTP"
              value={otp}
              maxLength={6}
              onChange={(e) => setOtp(e.target.value)}
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
            VERIFY OTP
          </button>
        </form>

      </div>
    </div>
  );
}
