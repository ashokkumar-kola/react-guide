import { Link } from 'react-router-dom';
import EdgeLayers from '../animaions/EdgeLayers/EdgeLayers';

export default function HomePage() {
  return (
    <div className="p-6 space-y-6">
      {/* <h1 className="text-3xl font-bold">React Guide</h1> */}

      <section>
        <h2 className="text-xl font-semibold">Components</h2>
        <ul className="list-disc ml-6 border-b-2 pb-4 mb-4">
          <li>
            <Link to="/buttons" className="link">
              Buttons
            </Link>
          </li>
          <li>
            <Link to="/cards" className="link">
              Cards
            </Link>
          </li>
          <li>
            <Link to="/inputs" className="link">
              Inputs
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Pages</h2>
        <ul className="list-disc ml-6">
          <li>
            <Link to="/page-a" className="link">
              Page A
            </Link>
          </li>
          <li>
            <Link to="/page-b" className="link">
              Page B
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">UI</h2>
        <ul className="list-disc ml-6">
          <li>
            <Link to="/ui/masonry-gallery" className="link">
              Masonry Gallery
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Animations</h2>
        <ul className="list-disc ml-6">
          <li>
            <Link to="/animations/edge-layers" className="link">
              Edge Layers
            </Link>
          </li>

          {/* <li>
            <Link to="" className="link">
              Edge Layers
            </Link>
          </li> */}
        </ul>
      </section>
    </div>
  );
}
