import { useNavigate } from "react-router-dom";
import { getComplaints } from "./adminUtils";

export default function Complaints() {
    const navigate = useNavigate();
    const complaints = getComplaints();

    const getStatusBadge = (status) => {
        if (status === "Pending") return "badge pending";
        if (status === "In Progress") return "badge progress";
        if (status === "Resolved") return "badge resolved";
        return "badge";
    };

    return (
        <>
            <h2>Complaints Management</h2>
            <p className="subtitle">
                View and manage all registered city grievances.
            </p>

            <div className="table-card">
                <table className="complaints-table">
                    <thead>
                        <tr>
                            <th>Complaint ID</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {complaints.map((c) => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.category}</td>
                                <td>
                                    <span className={getStatusBadge(c.status)}>
                                        {c.status}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        className="view-btn"
                                        onClick={() => navigate(`/admin/complaint/${c.id}`)}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
