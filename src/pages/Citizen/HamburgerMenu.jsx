import { Link } from "react-router-dom";

export default function HamburgerMenu({ open, setOpen }) {
  return (
    <>
      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}

      <div className={`hamburger-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>×</button>

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
        <Link to="/login">Logout</Link>
      </div>
    </>
  );
}
