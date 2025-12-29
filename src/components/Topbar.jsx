import { useAuth } from "../context/AuthContext";

export default function Topbar() {
  const { logout } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar-title">
        ☰ COMPLAINT MANAGEMENT SYSTEM
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </header>
  );
}
