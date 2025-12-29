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

    // 🔐 Send password to backend (after OTP verified)
    // await authService.setPassword({ password });

    navigate("/login"); // user can now login
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Set Your Password</h2>
        <p>Create a password for future logins</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Save Password</button>
        </form>
      </div>
    </div>
  );
}
