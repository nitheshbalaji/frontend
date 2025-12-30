import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-root">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-left">
          <span className="hero-badge">SMART CITY INITIATIVE</span>

          <h1>
            A Smarter Way <br />
            to Resolve <span>Public Issues</span>
          </h1>

          <p>
            Register complaints, track progress in real time, and help build a
            transparent, accountable, and efficient grievance resolution
            system for your city.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => navigate("/login")}
            >
              Citizen Login
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/register")}
            >
              Register Now
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/leader.jpg"
            alt="Smart City Leadership"
          />

          {/* Floating Cards */}
          <div className="float-card fc-1">
            <h3>2,430+</h3>
            <p>Complaints Resolved</p>
          </div>

          <div className="float-card fc-2">
            <h3>48 hrs</h3>
            <p>Avg Resolution Time</p>
          </div>

          <div className="float-card fc-3">
            <h3>92%</h3>
            <p>Citizen Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CITY STATS */}
      <section className="home-stats">
        <div className="stat-card blue">
          <h2>12</h2>
          <p>Departments Connected</p>
        </div>

        <div className="stat-card green">
          <h2>35+</h2>
          <p>City Zones Covered</p>
        </div>

        <div className="stat-card purple">
          <h2>24×7</h2>
          <p>Citizen Support</p>
        </div>
      </section>
    </div>
  );
}
