import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ComplaintHistory = () => {
  const navigate = useNavigate();

  // Hide topbar only on this page
  useEffect(() => {
    const topbar = document.querySelector(".topbar");
    if (topbar) topbar.style.display = "none";
    return () => {
      if (topbar) topbar.style.display = "";
    };
  }, []);

  // Mock complaint data
  const complaints = [
    {
      id: 1,
      title: "Street lights not working near my house",
      category: "Infrastructure",
      description:
        "Street lights in my area have not been functioning for the past four days, making it unsafe for pedestrians and vehicles during night hours.",
      date: "12 Aug 2025",
      status: "Pending",
      progress: 30,
      image: "/complaint-images/streetlight.jpg",
    },
    {
      id: 2,
      title: "Garbage not collected for 3 days",
      category: "Public Services",
      description:
        "Garbage bins are overflowing and have not been cleared despite repeated complaints, causing unhygienic conditions.",
      date: "08 Aug 2025",
      status: "In Progress",
      progress: 65,
      image: "/complaint-images/garbage.jpg",
    },
    {
      id: 3,
      title: "Water leakage in main road",
      category: "Water & Sanitation",
      description:
        "Continuous water leakage on the main road is causing traffic congestion and wastage of water resources.",
      date: "01 Aug 2025",
      status: "Resolved",
      progress: 100,
      image: "/complaint-images/waterleak.jpg",
    },
  ];

  const statusColor = {
    Pending: "#f59e0b",
    "In Progress": "#2563eb",
    Resolved: "#16a34a",
  };

  return (
    <div
      className="content-area"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #e0e7ff 0%, #f8fafc 70%)",
        padding: "40px 30px",
        position: "relative",
      }}
    >
      {/* BACK BUTTON → HOME */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          border: "none",
          background: "#1f2937",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          zIndex: 1000,
        }}
        aria-label="Go back to home"
      >
        ←
      </button>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* HERO SECTION */}
        <div
          style={{
            background: "linear-gradient(135deg, #2563eb, #1e40af)",
            borderRadius: "26px",
            padding: "45px",
            color: "white",
            marginBottom: "45px",
            boxShadow: "0 30px 60px rgba(37,99,235,0.45)",
          }}
        >
          <h1 style={{ marginBottom: "8px" }}>Your Complaint Journey</h1>
          <p style={{ opacity: 0.9, maxWidth: "700px" }}>
            View all complaints you have raised and track their resolution
            progress in real time.
          </p>
        </div>

        {/* COMPLAINT CARDS */}
        {complaints.map((c) => (
          <div
            key={c.id}
            style={{
              display: "grid",
              gridTemplateColumns: "260px 1fr",
              gap: "28px",
              background: "white",
              borderRadius: "26px",
              padding: "32px",
              marginBottom: "38px",
              boxShadow: "0 22px 55px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={c.image}
              alt="User uploaded evidence"
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <h2 style={{ margin: 0 }}>{c.title}</h2>

                <span
                  style={{
                    padding: "6px 18px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: "600",
                    background: statusColor[c.status] + "22",
                    color: statusColor[c.status],
                  }}
                >
                  {c.status}
                </span>
              </div>

              <p style={{ marginTop: "6px", color: "#6b7280" }}>
                {c.date} • {c.category}
              </p>

              <p
                style={{
                  marginTop: "14px",
                  color: "#374151",
                  lineHeight: "1.7",
                }}
              >
                {c.description}
              </p>

              <div style={{ marginTop: "22px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ fontSize: "14px", color: "#555" }}>
                    Resolution Progress
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: statusColor[c.status],
                    }}
                  >
                    {c.progress}%
                  </span>
                </div>

                <div
                  style={{
                    height: "10px",
                    borderRadius: "999px",
                    background: "#e5e7eb",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${c.progress}%`,
                      height: "100%",
                      background: statusColor[c.status],
                      borderRadius: "999px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintHistory;
