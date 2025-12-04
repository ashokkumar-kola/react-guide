import React from 'react';

export default function PentagonClip({
  size = 96, // px
  bg = 'bg-blue-600',
  className = '',
  children,
  ariaLabel = 'Pentagon',
}) {
  // polygon points are percentages (clockwise)
  const clipPath = 'polygon(50% 5%, 95% 35%, 78% 90%, 22% 90%, 5% 35%)';

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`inline-block ${bg} ${className}`}
      style={{
        width: size,
        height: size,
        WebkitClipPath: clipPath,
        clipPath,
      }}
    >
      {children}
    </div>
  );
}

// Usage
/*
<PentagonClip size={120} bg="bg-indigo-500" className="shadow-lg hover:opacity-90 transition" />

// content inside (centered)
<PentagonClip size={140} bg="bg-green-500" className="flex items-center justify-center text-white">
  <span className="font-bold">Hi</span>
</PentagonClip>
*/
