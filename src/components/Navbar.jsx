import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Smart Grievance</Link>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>

        {!user && <Link to="/login">Login</Link>}

        {user?.role === "citizen" && (
          <>
            <Link to="/citizen/submit">Submit</Link>
            <Link to="/citizen/my-complaints">My Complaints</Link>
          </>
        )}

        {user?.role === "admin" && (
          <Link to="/admin">Admin</Link>
        )}

        {user && (
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
