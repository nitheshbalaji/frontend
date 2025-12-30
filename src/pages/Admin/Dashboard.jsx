import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getComplaints } from "./adminUtils";

export default function Dashboard() {
    const navigate = useNavigate();
    const [showUsers, setShowUsers] = useState(false);

    const complaints = getComplaints();

    const totalComplaints = complaints.length;
    const solvedComplaints = complaints.filter(
        (c) => c.status === "Resolved"
    ).length;

    // Citizen Registry (Demo Data)
    const users = [
        {
            id: "U001",
            name: "Ramesh Kumar",
            phone: "9876543210",
            address: "12, MG Road",
            ward: "Ward 12",
            area: "T. Nagar",
            aadhaar: "XXXX-XXXX-1234",
            complaints: 2,
        },
        {
            id: "U002",
            name: "Anita Sharma",
            phone: "9123456780",
            address: "45, Lake View Street",
            ward: "Ward 8",
            area: "Velachery",
            aadhaar: "XXXX-XXXX-5678",
            complaints: 1,
        },
        {
            id: "U003",
            name: "Suresh Patel",
            phone: "9988776655",
            address: "78, Market Road",
            ward: "Ward 5",
            area: "Anna Nagar",
            aadhaar: "XXXX-XXXX-9012",
            complaints: 3,
        },
    ];

    return (
        <>
            <h2>Admin Dashboard</h2>

            {/* DASHBOARD CARDS */}
            <div className="cards">
                {/* TOTAL COMPLAINTS */}
                <div className="info-box" style={{ background: "#00c0ef" }}>
                    <div className="icon">💬</div>
                    <h2>{totalComplaints}</h2>
                    <p>Total Complaints</p>
                    <div
                        className="footer"
                        onClick={() => navigate("/admin/complaints")}
                    >
                        More info →
                    </div>
                </div>

                {/* TOTAL USERS */}
                <div className="info-box" style={{ background: "#00a65a" }}>
                    <div className="icon">👥</div>
                    <h2>{users.length}</h2>
                    <p>Total Users</p>
                    <div className="footer" onClick={() => setShowUsers(true)}>
                        More info →
                    </div>
                </div>

                {/* SOLVED COMPLAINTS */}
                <div className="info-box" style={{ background: "#f39c12" }}>
                    <div className="icon">✔</div>
                    <h2>{solvedComplaints}</h2>
                    <p>Complaints Solved</p>
                    <div
                        className="footer"
                        onClick={() => navigate("/admin/complaints")}
                    >
                        More info →
                    </div>
                </div>
            </div>

            {/* TOTAL USERS MODAL */}
            {showUsers && (
                <div className="modal-backdrop">
                    <div className="modal">
                        <h3>Citizen Registry</h3>

                        <div className="user-grid">
                            {users.map((u) => (
                                <div className="user-card" key={u.id}>
                                    <div className="user-header">
                                        <h4>{u.name}</h4>
                                        <span className="user-id">{u.id}</span>
                                    </div>

                                    <div className="user-body">
                                        <p><strong>Phone:</strong> {u.phone}</p>
                                        <p><strong>Address:</strong> {u.address}</p>
                                        <p><strong>Ward:</strong> {u.ward}</p>
                                        <p><strong>Area:</strong> {u.area}</p>
                                        <p><strong>Aadhaar Ref:</strong> {u.aadhaar}</p>
                                    </div>

                                    <div className="user-footer">
                                        Complaints Raised: {u.complaints}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="close-btn"
                            onClick={() => setShowUsers(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
