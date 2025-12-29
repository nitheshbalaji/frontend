import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function HamburgerMenu({ open, setOpen }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  if (!open) return null; // remove from DOM when closed

  const handleLogout = () => {
    logout();          // clear auth (user + token)
    setOpen(false);    // close menu
    navigate("/");     // go to home page (before login)
  };

  return (
    <>
      <div className="menu-overlay" onClick={() => setOpen(false)} />

      <div className="hamburger-menu open">
        <button
          className="close-btn"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <Link to="/citizen/dashboard" onClick={() => setOpen(false)}>
          Dashboard
        </Link>
        <Link to="/citizen/profile" onClick={() => setOpen(false)}>
          Profile
        </Link>
        <Link to="/citizen/submit" onClick={() => setOpen(false)}>
          Register Complaint
        </Link>
        <Link to="/citizen/history" onClick={() => setOpen(false)}>
          History
        </Link>

        {/* REAL LOGOUT */}
        <button className="logout-link" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
}
