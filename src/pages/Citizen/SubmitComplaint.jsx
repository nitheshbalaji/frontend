import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitComplaint = () => {
  const navigate = useNavigate();

  // Hide sidebar & topbar ONLY on this page
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const topbar = document.querySelector(".topbar");

    if (sidebar) sidebar.style.display = "none";
    if (topbar) topbar.style.display = "none";

    return () => {
      if (sidebar) sidebar.style.display = "";
      if (topbar) topbar.style.display = "";
    };
  }, []);

  // Image states
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analysisStatus, setAnalysisStatus] = useState("");

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    analyzeImage(file);
  };

  // Mock AI analysis (replace with backend API later)
  const analyzeImage = (file) => {
    setAnalysisStatus("analyzing");

    setTimeout(() => {
      const isReal = Math.random() > 0.3;
      setAnalysisStatus(isReal ? "real" : "fake");
    }, 2000);
  };

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
        position: "relative",
      }}
    >
    <button
  onClick={() => navigate("/")}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
  style={{
    position: "absolute",
    top: "18px",
    left: "18px",
    width: "42px",
    height: "42px",
    borderRadius: "14px",
    border: "1px solid rgba(0,0,0,0.06)",
    background: "rgba(255,255,255,0.95)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 22px rgba(0,0,0,0.14)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    transition: "transform 0.2s ease",
  }}
  aria-label="Go back"
>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1e40af"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
</button>



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
          <span>🤖 AI-verified evidence</span>
        </div>

        <form className="register-form">
          <div className="form-group">
            <label>Complaint Title</label>
            <input
              type="text"
              placeholder="Eg: Street lights not working near my house"
              required
            />
          </div>

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
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              placeholder="Explain the issue clearly with location and duration..."
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Image Evidence</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <small style={{ color: "#666" }}>
              Supported formats: JPG, PNG
            </small>
          </div>

          {preview && (
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <img
                src={preview}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "220px",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          )}

          {analysisStatus && (
            <div
              style={{
                marginTop: "14px",
                padding: "12px",
                borderRadius: "10px",
                background:
                  analysisStatus === "analyzing"
                    ? "#fef3c7"
                    : analysisStatus === "real"
                    ? "#dcfce7"
                    : "#fee2e2",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {analysisStatus === "analyzing" &&
                "🤖 AI is analyzing the image..."}
              {analysisStatus === "real" &&
                "✅ Image appears to be genuine"}
              {analysisStatus === "fake" &&
                "⚠️ Image may be manipulated or fake"}
            </div>
          )}

          <button
            type="submit"
            className="submit-btn"
            style={{
              marginTop: "18px",
              fontSize: "17px",
              padding: "16px",
              borderRadius: "14px",
            }}
          >
            🚀 Submit Complaint
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#777",
            textAlign: "center",
          }}
        >
          Image evidence helps us verify complaints faster using AI-assisted
          validation.
        </p>
      </div>
    </div>
  );
};

export default SubmitComplaint;
