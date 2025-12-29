import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 backend will send OTP later
    navigate("/verify-otp");
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">

        {/* Avatar */}
        <div className="auth-avatar">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 7.5a3.75 3.75 0 11-7.5 0
                 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
            />
          </svg>
        </div>

        <h2 style={{ marginBottom: "6px" }}>Citizen Registration</h2>
        <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "22px" }}>
          Enter your details to receive OTP
        </p>

        <form onSubmit={handleSubmit}>
          <div className="auth-input">
            <span>👤</span>
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>

          <div className="auth-input">
            <span>👤</span>
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <div className="auth-input">
            <span>📧</span>
            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>

          <div className="auth-input">
            <span>📱</span>
            <input
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
            />
          </div>

          <div className="auth-input">
            <span>🏠</span>
            <input
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />
          </div>

          <div className="auth-input">
            <span>🏙️</span>
            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
            />
          </div>

          <div className="auth-input">
            <span>🗺️</span>
            <input
              name="state"
              placeholder="State"
              onChange={handleChange}
            />
          </div>

          <div className="auth-input">
            <span>📮</span>
            <input
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
            />
          </div>

          <button className="auth-btn" type="submit">
            SEND OTP
          </button>
        </form>

        <div style={{ marginTop: "16px", fontSize: "13px" }}>
          Already registered?{" "}
          <Link to="/login" style={{ fontWeight: 600 }}>
            Sign in
          </Link>
        </div>

      </div>
    </div>
  );
}
