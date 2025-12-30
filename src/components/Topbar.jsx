import { useAuth } from "../context/AuthContext";

export default function Topbar() {
  const { logout } = useAuth();

  return (
    <header className="topbar">
      <div
        className="topbar-title"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {/* HAMBURGER MENU */}
        <button
          title="" // prevents tooltip
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          style={{
            marginTop: "-8px", // ✅ THIS is the key fix (moves UP for real)
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            border: "1px solid rgba(0,0,0,0.06)",
            background: "rgba(255,255,255,0.95)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
            transition: "transform 0.2s ease",
          }}
          aria-label="Open menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1e40af"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* TITLE */}
        <span>COMPLAINT MANAGEMENT SYSTEM</span>
      </div>

      {/* LOGOUT */}
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </header>
  );
}
