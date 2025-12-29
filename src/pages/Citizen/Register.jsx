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

    // send registration data + address to backend
    // backend sends OTP
    navigate("/verify-otp");
  };

  return (
    <div className="register-page">
      <div className="register-card">

        {/* LEFT FORM */}
        <div className="register-form">
          <h2>Citizen Registration</h2>
          <p>Enter your details to receive OTP</p>

          <form onSubmit={handleSubmit}>
            <input name="firstName" placeholder="First Name" onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" onChange={handleChange} />
            <input name="email" placeholder="Email Address" onChange={handleChange} />
            <input name="phone" placeholder="Mobile Number" onChange={handleChange} />

            <textarea
              name="address"
              placeholder="Address"
              rows="3"
              onChange={handleChange}
            />

            <input name="city" placeholder="City" onChange={handleChange} />
            <input name="state" placeholder="State" onChange={handleChange} />
            <input name="pincode" placeholder="Pincode" onChange={handleChange} />

            <button type="submit">Send OTP</button>
          </form>

          <p className="login-link">
            Already registered? <Link to="/login">Sign in</Link>
          </p>
        </div>

        {/* RIGHT INFO */}
        <div className="register-info">
          <div className="lock-icon">🔐</div>
          <h3>Secure Registration</h3>
          <p>
            Your information will be verified using OTP before account activation.
          </p>
        </div>

      </div>
    </div>
  );
}
