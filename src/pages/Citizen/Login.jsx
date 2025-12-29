import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 DEV LOGIN (ignore credentials for now)
    await login();       // sets dummy user in AuthContext
    navigate("/");       // go to logged-in home
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Citizen Login</h2>

        {/* Inputs are optional for now */}
        <input type="email" placeholder="Email (ignored)" />
        <input type="password" placeholder="Password (ignored)" />

        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}
