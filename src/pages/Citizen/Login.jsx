import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login({ email, password });

    if (result?.user?.role === "citizen") {
      navigate("/citizen/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Sign in</h2>
        <p className="login-sub">Stay updated on your grievance status</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="show-text">show</span>
          </div>

          <Link to="#" className="forgot-link">
            Forgot password?
          </Link>

          <button type="submit" className="login-btn">
            Sign in
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <p className="register-text">
          New here? <Link to="/register">Join now</Link>
        </p>
      </div>
    </div>
  );
}
