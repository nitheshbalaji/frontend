import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import HamburgerMenu from "../components/HamburgerMenu";
import "./home.css";


export default function Home() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">

      {/* Top Navbar */}
      <header className="home-navbar">

        {/* LEFT */}
        <div className="nav-left">
          {user && (
            <div
              className="hamburger-icon"
              onClick={() => setMenuOpen(true)}
              title="Menu"
            >
              ☰
            </div>
          )}
          <div className="logo">CityConnect</div>
        </div>

        {/* RIGHT */}
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

      {/* Hamburger Menu */}
      {user && (
        <HamburgerMenu open={menuOpen} setOpen={setMenuOpen} />
      )}

      {/* HERO (NO IMAGE – PURE DESIGN) */}
      <section className="hero hero-gradient">
        <div className="hero-text centered">

          <span className="badge">SMART CITY INITIATIVE</span>

          <h1>
            A Smarter Way to <br />
            Resolve <span>Public Issues</span>
          </h1>

          <p>
            Register complaints, track progress in real-time, and help build
            a transparent, accountable, and efficient grievance resolution system.
          </p>

          {!user && (
            <div className="hero-actions">
              <Link to="/login" className="btn-primary">
                Citizen Login
              </Link>
              <Link to="/register" className="btn-secondary">
                Register Now
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* STATS */}
      <section className="stats pastel">
        <div className="stat-card soft-blue">
          <h2>15,000+</h2>
          <p>Complaints Filed</p>
        </div>

        <div className="stat-card soft-green">
          <h2>94%</h2>
          <p>Resolution Rate</p>
        </div>

        <div className="stat-card soft-purple">
          <h2>48 Hrs</h2>
          <p>Avg. Resolution Time</p>
        </div>

        <div className="stat-card soft-orange">
          <h2>1,400+</h2>
          <p>Active Cases</p>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <h2>Why use the Smart Grievance System?</h2>
        <p className="why-sub">
          A transparent, efficient, and citizen-friendly platform.
        </p>

        <div className="why-cards">
          <div className="why-card glow-blue">
            <h3>Real-time Tracking</h3>
            <p>Track complaint status anytime with instant updates.</p>
          </div>

          <div className="why-card glow-green">
            <h3>Direct Department Access</h3>
            <p>Complaints are routed directly to the responsible authority.</p>
          </div>

          <div className="why-card glow-purple">
            <h3>24/7 Availability</h3>
            <p>Submit complaints anytime, anywhere.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
