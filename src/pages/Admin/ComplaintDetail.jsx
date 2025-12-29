import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import complaintService from '../../services/complaintService';
import StatusBadge from '../../components/StatusBadge';
import notificationService from '../../services/notificationService';

export default function ComplaintDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState(null);
  const [status, setStatus] = useState('');
  const [adminNote, setAdminNote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await complaintService.getById(id);
        setComplaint(data);
        setStatus(data?.status || 'pending');
      } catch (err) {
        notificationService.error('Failed to load complaint');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const saveStatus = async () => {
    try {
      await complaintService.updateStatus(id, status, adminNote);
      notificationService.notify('Status updated');
      navigate('/admin');
    } catch (err) {
      notificationService.error('Failed to update status');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!complaint) return <div>Complaint not found</div>;

  return (
    <div>
      <h3>Complaint Detail</h3>
      <div style={{ marginBottom: 12 }}>
        <strong>Title:</strong> {complaint.title}
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>Description:</strong>
        <div style={{ marginTop: 6 }}>{complaint.description}</div>
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>Status:</strong> <StatusBadge status={complaint.status} />
      </div>

      <div style={{ marginTop: 16, borderTop: '1px solid #eee', paddingTop: 12 }}>
        <h4>Update Status</h4>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="rejected">Rejected</option>
        </select>
        <div style={{ marginTop: 8 }}>
          <label>Admin Note</label>
          <textarea value={adminNote} onChange={(e) => setAdminNote(e.target.value)} style={{ width: '100%', minHeight: 80 }} />
        </div>
        <div style={{ marginTop: 8 }}>
          <button onClick={saveStatus}>Save</button>
        </div>
      </div>
    </div>
  );
}