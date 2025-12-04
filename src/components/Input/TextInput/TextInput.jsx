import React from 'react';

export default function TextInput({
  label,
  name,
  placeholder = '',
  value = 'Amber',
  onChange,
  required = false,
  error = '',
  leftIcon = null,
  rightIcon = null,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div
        className={`flex items-center border rounded-md px-3 py-2 gap-2
        ${
          error
            ? 'border-red-500 focus-within:ring-red-500'
            : 'border-gray-300 focus-within:ring-blue-500'
        } focus-within:ring-2 transition`}
      >
        {leftIcon && <span className="text-gray-500">{leftIcon}</span>}

        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full text-sm outline-none bg-transparent"
        />

        {rightIcon && <span className="text-gray-500">{rightIcon}</span>}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
