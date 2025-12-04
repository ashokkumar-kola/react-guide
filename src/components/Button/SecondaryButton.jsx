import React from 'react';

export default function SecondaryButton({ label }) {
  return (
    <button className="px-4 py-2 border border-gray-400 rounded-lg">
      {label}
    </button>
  );
}
