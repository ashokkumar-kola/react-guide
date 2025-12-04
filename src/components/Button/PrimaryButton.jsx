import React from 'react';

export default function PrimaryButton({ label }) {
  function handleClick() {
    alert(`Button ${label} clicked!`);
  }
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
