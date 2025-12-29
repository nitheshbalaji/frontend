import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();     // DEV login
    navigate("/");
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-avatar">
          {/* user icon */}
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
            />
          </svg>
        </div>

        <form onSubmit={handleLogin}>
          <div className="auth-input">
            <span>👤</span>
            <input type="email" placeholder="Email ID" />
          </div>

          <div className="auth-input">
            <span>🔒</span>
            <input type="password" placeholder="Password" />
          </div>

          <div className="auth-footer">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button className="auth-btn" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
