import React from 'react';
import EdgeLayers from './EdgeLayers';

import PentagonSvg from './components/PentagonSvg';
import PentagonClip from './components/PentagonClip';

// Simple reusable Pentagon
const Pentagon = ({ size = 80, fill }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={`absolute`}>
    <polygon points="50,5 95,35 78,90 22,90 5,35" fill={fill} />
  </svg>
);

const EdgeLayersPage = () => {
  return (
    <>
      {/* <div className="bg-emerald-950 w-dvw h-dvh">
        <PentagonSvg
          size={80}
          // fill="#fff"
          stroke="#111827"
          strokeWidth={2}
          className="shadow"
        />
        <PentagonSvg
          size={48}
          fill="grey"
          className="hover:scale-105 transition-transform"
        />
      </div> */}

      <div className="w-full flex justify-center mt-10 bg-emerald-900 w-dvw h-dvh">
        {/* Whole cluster rotated so it looks like a V */}
        {/* <div className="relative w-[300px] h-[200px] rotate-90"> */}

        {/* LEFT group (3 layers) */}
        <div className="absolute left-0 top-0 rotate-180">
          <Pentagon size={120} fill="#3B82F6" />
          <Pentagon size={100} fill="#60A5FA" className="-top-2" />
          <Pentagon size={80} fill="#93C5FD" className="-top-1" />
        </div>

        {/* RIGHT group (3 layers) */}
        <div className="absolute right-0 top-0 rotate-180">
          <Pentagon size={120} fill="#3B82F6" />
          <Pentagon size={100} fill="#60A5FA" className="-top-2" />
          <Pentagon size={80} fill="#93C5FD" className="-top-1" />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default EdgeLayersPage;
