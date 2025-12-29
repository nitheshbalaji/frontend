import React from "react";

const ComplaintHistory = () => {
  // Mock complaint data (replace with backend later)
  const complaints = [
    {
      id: 1,
      title: "Street lights not working near my house",
      category: "Infrastructure",
      description:
        "Street lights have not been functioning for the past 4 days, causing safety issues at night.",
      date: "12 Aug 2025",
      status: "Pending",
      progress: 30,
    },
    {
      id: 2,
      title: "Garbage not collected for 3 days",
      category: "Public Services",
      description:
        "Garbage bins in my area are overflowing and have not been cleared.",
      date: "08 Aug 2025",
      status: "In Progress",
      progress: 65,
    },
    {
      id: 3,
      title: "Water leakage in main road",
      category: "Water & Sanitation",
      description:
        "Continuous water leakage near the main road causing traffic disruption.",
      date: "01 Aug 2025",
      status: "Resolved",
      progress: 100,
    },
  ];

  // Status color mapping
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
          "linear-gradient(180deg, #f1f5ff 0%, #f8fafc 70%)",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <h1 style={{ fontSize: "32px", marginBottom: "6px" }}>
          📂 Complaint History
        </h1>
        <p style={{ color: "#555", marginBottom: "30px" }}>
          Track the progress and resolution of your submitted complaints.
        </p>

        {/* Complaint Cards */}
        {complaints.map((complaint) => (
          <div
            key={complaint.id}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "28px",
              boxShadow: "0 20px 45px rgba(0,0,0,0.1)",
            }}
          >
            {/* Top Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <h2 style={{ margin: 0 }}>
                {complaint.title}
              </h2>

              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: "600",
                  background:
                    statusColor[complaint.status] + "22",
                  color: statusColor[complaint.status],
                }}
              >
                {complaint.status}
              </span>
            </div>

            {/* Meta */}
            <p style={{ marginTop: "6px", color: "#6b7280" }}>
              📅 {complaint.date} • 🗂 {complaint.category}
            </p>

            {/* Description */}
            <p
              style={{
                marginTop: "14px",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              {complaint.description}
            </p>

            {/* Progress */}
            <div style={{ marginTop: "18px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#555" }}>
                  Progress
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: statusColor[complaint.status],
                  }}
                >
                  {complaint.progress}%
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
                    width: `${complaint.progress}%`,
                    height: "100%",
                    background: statusColor[complaint.status],
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintHistory;
