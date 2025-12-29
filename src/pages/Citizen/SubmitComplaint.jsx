import React, { useEffect, useState } from "react";

const SubmitComplaint = () => {
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

    // Simulate AI processing delay
    setTimeout(() => {
      // Random result for demo
      const isReal = Math.random() > 0.3;

      if (isReal) {
        setAnalysisStatus("real");
      } else {
        setAnalysisStatus("fake");
      }
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
          <span>🤖 AI-verified evidence</span>
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

          {/* IMAGE UPLOAD SECTION */}
          <div className="form-group">
            <label>Upload Image Evidence (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <small style={{ color: "#666" }}>
              Supported formats: JPG, PNG
            </small>
          </div>

          {/* Image Preview */}
          {preview && (
            <div
              style={{
                marginTop: "15px",
                textAlign: "center",
              }}
            >
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

          {/* AI Analysis Status */}
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
                color:
                  analysisStatus === "real"
                    ? "#166534"
                    : analysisStatus === "fake"
                    ? "#991b1b"
                    : "#92400e",
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

          {/* Submit */}
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

        {/* Footer Note */}
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
