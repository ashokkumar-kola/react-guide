import React from 'react';
import MasonryGallery from './MasonryGallery';

const sampleImages = [
  'https://c4.wallpaperflare.com/wallpaper/119/612/15/one-piece-monkey-d-luffy-hat-anime-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/119/612/15/one-piece-monkey-d-luffy-hat-anime-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/119/612/15/one-piece-monkey-d-luffy-hat-anime-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/119/612/15/one-piece-monkey-d-luffy-hat-anime-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/119/612/15/one-piece-monkey-d-luffy-hat-anime-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/119/612/15/one-piece-monkey-d-luffy-hat-anime-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/119/612/15/one-piece-monkey-d-luffy-hat-anime-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/119/612/15/one-piece-monkey-d-luffy-hat-anime-wallpaper-preview.jpg',
];

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-center my-2.5">My Masonry Gallery</h1>
      <MasonryGallery images={sampleImages} />
    </div>
  );
};

export default GalleryPage;
