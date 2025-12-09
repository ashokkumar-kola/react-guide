import React from 'react';
import './MasonryGallery.css';

const MasonryGallery = ({ images }) => {
  return (
    <div className="masonry">
      {images.map((img, index) => (
        <div key={index} className="masonry-item">
          <img src={img} alt={`masonry-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;
