import React, { useEffect } from "react";

const ComplaintHistory = () => {
  // Hide topbar ONLY on this page
  useEffect(() => {
    const topbar = document.querySelector(".topbar");
    if (topbar) topbar.style.display = "none";
    return () => {
      if (topbar) topbar.style.display = "";
    };
  }, []);

  // Mock complaints (replace with backend later)
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
      image:
        "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    },
    {
      id: 2,
      title: "Garbage not collected for 3 days",
      category: "Public Services",
      description:
        "Garbage bins are overflowing and causing unhygienic conditions. Despite repeated complaints, the issue remains unresolved.",
      date: "08 Aug 2025",
      status: "In Progress",
      progress: 65,
      image:
        "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4",
    },
    {
      id: 3,
      title: "Water leakage in main road",
      category: "Water & Sanitation",
      description:
        "There is continuous water leakage on the main road leading to traffic congestion and wastage of water resources.",
      date: "01 Aug 2025",
      status: "Resolved",
      progress: 100,
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
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
        background:
          "linear-gradient(180deg, #e0e7ff 0%, #f8fafc 70%)",
        padding: "40px 30px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* ===== HERO HEADER ===== */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #2563eb, #1e40af)",
            borderRadius: "26px",
            padding: "45px",
            color: "white",
            marginBottom: "40px",
            boxShadow: "0 30px 60px rgba(37,99,235,0.45)",
          }}
        >
          <h1 style={{ marginBottom: "8px" }}>
            Your Complaint Journey
          </h1>
          <p style={{ opacity: 0.9, maxWidth: "700px" }}>
            Track every complaint you have raised, view its progress, and
            understand how issues are being resolved by authorities.
          </p>
        </div>

        {/* ===== COMPLAINT CARDS ===== */}
        {complaints.map((c) => (
          <div
            key={c.id}
            style={{
              display: "grid",
              gridTemplateColumns: "260px 1fr",
              gap: "25px",
              background: "white",
              borderRadius: "24px",
              padding: "30px",
              marginBottom: "35px",
              boxShadow: "0 22px 50px rgba(0,0,0,0.12)",
            }}
          >
            {/* Image */}
            <img
              src={c.image}
              alt="Complaint"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />

            {/* Content */}
            <div>
              {/* Title + Status */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h2 style={{ margin: 0 }}>{c.title}</h2>

                <span
                  style={{
                    padding: "6px 16px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: "600",
                    background:
                      statusColor[c.status] + "22",
                    color: statusColor[c.status],
                  }}
                >
                  {c.status}
                </span>
              </div>

              {/* Meta */}
              <p style={{ marginTop: "6px", color: "#6b7280" }}>
                📅 {c.date} • 🗂 {c.category}
              </p>

              {/* Description */}
              <p
                style={{
                  marginTop: "14px",
                  color: "#374151",
                  lineHeight: "1.7",
                }}
              >
                {c.description}
              </p>

              {/* Progress */}
              <div style={{ marginTop: "20px" }}>
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
