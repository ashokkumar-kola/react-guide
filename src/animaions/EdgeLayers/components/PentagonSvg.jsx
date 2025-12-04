import React from 'react';

/**
 * Props:
 * - size: number or string (e.g. 64, "w-24")
 * - fill: fill color
 * - stroke: border color
 * - strokeWidth: number
 * - className: extra Tailwind classes
 */
export default function PentagonSvg({
  size = 80,
  fill = 'currentColor',
  stroke = 'none',
  strokeWidth = 0,
  className = '',
  title = 'Pentagon shape',
}) {
  // Regular pentagon points inside a 100x100 viewBox
  const points = '50,5 95,35 78,90 22,90 5,35';

  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <title>{title}</title>
      <polygon
        points={points}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Usage
/* 
// Tailwind classes applied to container or svg
<PentagonSvg size={48} fill="#2563EB" className="hover:scale-105 transition-transform" />

// With stroke
<PentagonSvg size={80} fill="#fff" stroke="#111827" strokeWidth={2} className="shadow" />
*/
