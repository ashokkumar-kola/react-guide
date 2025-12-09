import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ButtonsPage from '../pages/ButtonsPage';
import InputsPage from '../pages/InputsPage';
import MasonryGalleryPage from '../ui/masonry_gallery/MasonryGalleryPage';

// Animations
import { EdgeLayersPage } from '../animaions/EdgeLayers';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buttons" element={<ButtonsPage />} />
      <Route path="/inputs" element={<InputsPage />} />

      <Route path="/animations/edge-layers" element={<EdgeLayersPage />} />

      <Route path="/ui/masonry-gallery" element={<MasonryGalleryPage />} />
    </Routes>
  );
}
