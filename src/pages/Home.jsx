import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import HamburgerMenu from "../components/HamburgerMenu";
import "./Home.css";

export default function Home() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`home ${menuOpen ? "menu-open" : ""}`}>

      {/* Top Navbar */}
      <header className="home-navbar">
        <div className="nav-left">
          {user && (
            <div
  onClick={() => setMenuOpen(true)}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
  style={{
    marginTop: "-8px",          // ⬅ moves it UP (THIS finally works)
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
</div>

          )}
          <div className="logo">CityConnect</div>
        </div>

        <nav>
          <Link to="/">Home</Link>

          {!user ? (
            <>
              <Link to="/login" className="btn-outline">Login</Link>
              <Link to="/register" className="btn-primary">Register</Link>
            </>
          ) : (
            <Link to="/citizen/dashboard" className="btn-primary">
              Dashboard
            </Link>
          )}
        </nav>
      </header>

      {user && (
        <HamburgerMenu open={menuOpen} setOpen={setMenuOpen} />
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <span className="badge">SMART CITY INITIATIVE</span>

          <h1 className="hero-title">
            A Smarter Way to <br />
            <span>Resolve Public Issues</span>
          </h1>

          <p>
            Register complaints, track progress in real-time, and help build
            a transparent and efficient grievance resolution system.
          </p>

          {!user && (
            <div className="hero-actions">
              <Link to="/login" className="btn-primary">Citizen Login</Link>
              <Link to="/register" className="btn-secondary">Register Now</Link>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">
          <div className="float-card card-blue">
            <h4>Live Tracking</h4>
            <p>Status updates in real-time</p>
          </div>

          <div className="float-card card-green">
            <h4>Fast Resolution</h4>
            <p>Issues solved efficiently</p>
          </div>

          <div className="float-card card-purple">
            <h4>Transparency</h4>
            <p>Visible at every stage</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat-card">
          <h2>15,000+</h2>
          <p>Complaints Filed</p>
        </div>
        <div className="stat-card">
          <h2>94%</h2>
          <p>Resolution Rate</p>
        </div>
        <div className="stat-card">
          <h2>48 Hrs</h2>
          <p>Avg. Resolution Time</p>
        </div>
        <div className="stat-card">
          <h2>1,400+</h2>
          <p>Active Cases</p>
        </div>
      </section>

      {/* Why */}
      <section className="why">
        <h2>Why use the Smart Grievance System?</h2>
        <p className="why-sub">
          A transparent, efficient, and citizen-friendly platform.
        </p>

        <div className="why-cards">
          <div className="why-card">
            <h3>Real-time Tracking</h3>
            <p>Track complaint status anytime with instant updates.</p>
          </div>

          <div className="why-card">
            <h3>Direct Department Access</h3>
            <p>Complaints are routed directly to the responsible authority.</p>
          </div>

          <div className="why-card">
            <h3>24/7 Availability</h3>
            <p>Submit complaints anytime, anywhere.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
