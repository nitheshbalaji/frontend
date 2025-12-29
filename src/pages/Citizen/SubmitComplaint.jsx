import React, { useEffect } from "react";

const SubmitComplaint = () => {
  // Hide sidebar & topbar ONLY on this page
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const topbar = document.querySelector(".topbar");

    if (sidebar) sidebar.style.display = "none";
    if (topbar) topbar.style.display = "none";

    // Restore on unmount
    return () => {
      if (sidebar) sidebar.style.display = "";
      if (topbar) topbar.style.display = "";
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #dbeafe, #fef3c7, #e0f2fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "720px",
          borderRadius: "18px",
          padding: "45px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
        }}
      >
        {/* Header */}
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          📝 Submit a Complaint
        </h1>
        <p style={{ color: "#555", marginBottom: "22px" }}>
          Your voice matters. Help us improve public services responsibly.
        </p>

        {/* Trust Bar */}
        <div
          style={{
            background: "#f0f9ff",
            padding: "14px 18px",
            borderRadius: "10px",
            marginBottom: "28px",
            fontSize: "14px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <span>🔒 Identity Protected</span>
          <span>⏱ Resolution: 3–7 working days</span>
          <span>📌 Trackable Complaint ID</span>
        </div>

        <form className="register-form">
          {/* Title */}
          <div className="form-group">
            <label>Complaint Title</label>
            <input
              type="text"
              placeholder="Eg: Street lights not working near my house"
              required
            />
            <small style={{ color: "#666" }}>
              Keep it short and specific
            </small>
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>
            <select required>
              <option value="">Select Category</option>
              <option>Infrastructure</option>
              <option>Public Services</option>
              <option>Water & Sanitation</option>
              <option>Electricity</option>
              <option>Other</option>
            </select>
            <small style={{ color: "#666" }}>
              Choosing the right category speeds up resolution
            </small>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              placeholder="Explain the issue clearly with location and duration..."
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="submit-btn"
            style={{
              marginTop: "10px",
              fontSize: "17px",
              padding: "16px",
              borderRadius: "14px",
            }}
          >
            🚀 Submit Complaint
          </button>
        </form>

        {/* Footer Note */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#777",
            textAlign: "center",
          }}
        >
          Please avoid duplicate complaints. False reporting may delay action.
        </p>
      </div>
    </div>
  );
};

export default SubmitComplaint;

