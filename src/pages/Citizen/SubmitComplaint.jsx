import React, { useState } from 'react';
import complaintService from '../../services/complaintService';
import notificationService from '../../services/notificationService';
import { useAuth } from '../../context/AuthContext';

export default function SubmitComplaint() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('general');
  const { user } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const payload = { title, description, category, userId: user?._id || user?.id };
      await complaintService.createComplaint(payload);
      notificationService.notify('Complaint submitted');
      setTitle('');
      setDescription('');
      setCategory('general');
    } catch (err) {
      notificationService.error('Could not submit complaint');
    }
  };

  return (
    <div style={{ maxWidth: 720 }}>
      <h3>Submit Complaint</h3>
      <form onSubmit={submit}>
        <div style={{ marginBottom: 8 }}>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%' }}>
            <option value="general">General</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="sanitation">Sanitation</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={{ width: '100%', minHeight: 120 }} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}