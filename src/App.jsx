import AppRoutes from './routes/AppRoutes';

export default function App() {
  return <AppRoutes />;
}

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// // Pages
// import Home from './misc/home/Home';
// import PokemonPage from './misc/pokemon/PokemonPage';
// import OnePiece from './misc/onepiece/OnePiece';
// import ToDoPage from './misc/todo/ToDoPage';
// import BooksPage from './misc/books/BooksPage';

// import HooksPage from './misc/hooks/HooksPage';

// import Playground from './misc/playground/Playground';

// import './App.css';

// function App() {
//   return (
//     <Router>
//       {/* Navigation Bar */}
//       <nav className="nav-bar">
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//         <Link to="/pokemon" className="nav-link">
//           Pokémon
//         </Link>
//         <Link to="/onepiece" className="nav-link">
//           OnePiece
//         </Link>
//         <Link to="/todo" className="nav-link">
//           ToDo
//         </Link>
//         <Link to="/books" className="nav-link">
//           Books
//         </Link>
//         <Link to="/hooks" className="nav-link">
//           Hooks
//         </Link>
//         <Link to="/playground" className="nav-link">
//           Live Code Playground
//         </Link>
//       </nav>

//       {/* Define Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/pokemon" element={<PokemonPage />} />
//         <Route path="/onepiece" element={<OnePiece />} />
//         <Route path="/todo" element={<ToDoPage />} />
//         <Route path="/books" element={<BooksPage />} />
//         <Route path="/hooks" element={<HooksPage />} />
//         <Route path="/playground" element={<Playground />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
