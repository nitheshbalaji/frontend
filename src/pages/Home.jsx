import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import HamburgerMenu from "../components/HamburgerMenu";
import "./Home.css";

export default function Home() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">

      {/* NAVBAR */}
      <header className="home-navbar">
        <div className="nav-left">
          {user && (
            <div
              className="hamburger-icon"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </div>
          )}
          {/* Updated Brand Name */}
          <div className="logo">Civic<span>Sphere</span></div>
        </div>

        <nav className="nav-right">
          <Link to="/" className="nav-link">Home</Link>

          {!user ? (
            <div className="nav-actions">
              <Link to="/login" className="btn-outline">Login</Link>
              <Link to="/register" className="btn-primary">Register</Link>
            </div>
          ) : (
            <Link to="/citizen/dashboard" className="btn-primary">
              Dashboard
            </Link>
          )}
        </nav>
      </header>

      {user && <HamburgerMenu open={menuOpen} setOpen={setMenuOpen} />}

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <span className="badge">SMART CITY INITIATIVE</span>

          <h1 className="hero-title">
            A Smarter Way to
            <span> Resolve Public Issues</span>
          </h1>

          <p>
            Register complaints, track progress in real-time, and help build a
            transparent, accountable, and efficient grievance resolution system.
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

        {/* RIGHT VISUAL */}
        <div className="hero-visual">
          <div className="floating-card green">
            <h3>Fast Resolution</h3>
            <p>Issues resolved efficiently</p>
          </div>

          <div className="floating-card blue">
            <h3>Live Tracking</h3>
            <p>Complaints update in real-time</p>
          </div>

          <div className="floating-card purple">
            <h3>Transparency</h3>
            <p>Status visible at every stage</p>
          </div>
        </div>
      </section>

    </div>
  );
}
