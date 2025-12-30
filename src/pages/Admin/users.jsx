export default function Users() {
    const users = [
        {
            id: "U001",
            name: "Ramesh Kumar",
            area: "Ward 12",
            complaints: 2,
        },
        {
            id: "U002",
            name: "Anita Sharma",
            area: "Ward 8",
            complaints: 1,
        },
        {
            id: "U003",
            name: "Suresh Patel",
            area: "Ward 5",
            complaints: 3,
        },
    ];

    return (
        <>
            <h2>User Management</h2>
            <p className="subtitle">
                View registered citizens who have raised grievances.
            </p>

            <div className="table-card">
                <table className="complaints-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Complaints Raised</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.area}</td>
                                <td>{u.complaints}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
