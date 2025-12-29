import { Link } from "react-router-dom";

export default function HamburgerMenu({ open, setOpen }) {
  if (!open) return null; // 🔥 completely remove from DOM when closed

  return (
    <>
      <div className="menu-overlay" onClick={() => setOpen(false)} />

      <div className="hamburger-menu open">
        <button
          className="close-btn"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ×
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
        <Link to="/login" onClick={() => setOpen(false)}>
          Logout
        </Link>
      </div>
    </>
  );
}
