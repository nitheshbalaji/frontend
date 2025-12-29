import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';

export default function ComplaintCard({ complaint, showDetailLink = true }) {
  const snippet = complaint.description?.slice(0, 120) + (complaint.description?.length > 120 ? '...' : '');
  return (
    <div style={{ border: '1px solid #eee', padding: 12, marginBottom: 12, borderRadius: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4 style={{ margin: '0 0 6px 0' }}>{complaint.title}</h4>
          <div style={{ fontSize: 14, color: '#555' }}>{snippet}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <StatusBadge status={complaint.status} />
          <div style={{ fontSize: 12, color: '#777', marginTop: 8 }}>{new Date(complaint.createdAt).toLocaleString()}</div>
        </div>
      </div>
      {showDetailLink && (
        <div style={{ marginTop: 10 }}>
          <Link to={complaint._id ? `/admin/complaint/${complaint._id}` : '#'}>View details</Link>
        </div>
      )}
    </div>
  );
}