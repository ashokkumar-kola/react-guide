import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Pages
import Home from './pages/home/Home';
import PokemonPage from './pages/pokemon/PokemonPage'
import ToDoPage from './pages/todo/ToDoPage';
import BooksPage from './pages/books/BooksPage';

import HooksPage from './pages/hooks/HooksPage';

import './App.css'

function App() {

  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/pokemon">Pokémon</Link>
        <Link to="/todo" style={{ marginLeft: '10px' }}>ToDo</Link>
        <Link to="/books" style={{ marginLeft: '10px' }}>Books</Link>
        <Link to="/hooks" style={{ marginLeft: '10px' }}>Hooks</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/hooks" element={<HooksPage />} />
      </Routes>
    </Router>
  )
}

export default App
