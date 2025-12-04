import React from 'react';

export default function Input({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  className = '',
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${className}`}
      />
    </div>
  );
}
