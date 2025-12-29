import React, { useEffect, useState } from 'react';
import complaintService from '../../services/complaintService';
import { useAuth } from '../../context/AuthContext';
import ComplaintCard from '../../components/ComplaintCard';
import notificationService from '../../services/notificationService';

export default function MyComplaints() {
  const { user } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      try {
        const data = await complaintService.getByUser(user._id || user.id);
        setComplaints(data || []);
      } catch (err) {
        notificationService.error('Failed to load complaints');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user]);

  if (loading) return <div>Loading complaints...</div>;
  return (
    <div>
      <h3>My Complaints</h3>
      {complaints.length === 0 && <div>No complaints found</div>}
      {complaints.map((c) => (
        <ComplaintCard key={c._id || c.id} complaint={c} showDetailLink={false} />
      ))}
    </div>
  );
}