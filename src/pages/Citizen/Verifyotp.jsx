import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    // Example validation
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setError("");

    // 🔐 Backend OTP verification happens here
    // const success = await authService.verifyOtp(otp);

    // if (success) {
    navigate("/set-password");   // ✅ THIS LINE IS THE KEY
    // }
  };

  return (
    <div className="verify-otp-page">
      <div className="verify-otp-card">
        <h2>Verify OTP</h2>
        <p>Enter the OTP sent to your registered mobile/email</p>

        <form onSubmit={handleVerify}>
          <input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          {error && <p className="otp-error">{error}</p>}

          <button type="submit">Verify</button>
        </form>
      </div>
    </div>
  );
}
