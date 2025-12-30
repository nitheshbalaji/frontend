import React, { useEffect, useState } from 'react';
import complaintService from '../../services/complaintService';
import ComplaintCard from '../../components/ComplaintCard';
import notificationService from '../../services/notificationService';

export default function Dashboard() {
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await complaintService.getAll();
        setComplaints(data || []);
      } catch (err) {
        notificationService.error('Failed to load complaints');
      }
    };
    load();
  }, []);

  const visible = complaints.filter((c) => (filter === 'all' ? true : c.status === filter));

  return (
    <div>
      <h3>Admin Dashboard</h3>
      <div style={{ marginBottom: 12 }}>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {visible.length === 0 && <div>No complaints match the filter.</div>}
      {visible.map((c) => (
        <ComplaintCard key={c._id || c.id} complaint={c} />
      ))}
    </div>
  );
}