const STORAGE_KEY = "complaints_data";

export function getComplaints() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        return JSON.parse(data);
    }

    // Initial demo data
    const initialComplaints = [
        {
            id: "C101",
            category: "Sanitation",
            status: "Pending"
        },
        {
            id: "C102",
            category: "Water Supply",
            status: "Resolved"
        },
        {
            id: "C103",
            category: "Traffic & Parking",
            status: "In Progress"
        }
    ];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialComplaints));
    return initialComplaints;
}

export function saveComplaints(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getComplaintById(id) {
    const complaints = getComplaints();
    return complaints.find((c) => c.id === id);
}

