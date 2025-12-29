import React from 'react';

const colorMap = {
  pending: '#f0ad4e',
  in_progress: '#5bc0de',
  resolved: '#5cb85c',
  rejected: '#d9534f'
};

export default function StatusBadge({ status }) {
  const s = status?.toLowerCase() || 'pending';
  const style = {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: 12,
    color: '#fff',
    background: colorMap[s] || '#777',
    fontSize: 12
  };
  return <span style={style}>{status}</span>;
}