import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Pages
import Home from './pages/home/Home';
import PokemonPage from './pages/pokemon/PokemonPage'
import OnePiece from './pages/onepiece/OnePiece';
import ToDoPage from './pages/todo/ToDoPage';
import BooksPage from './pages/books/BooksPage';

import HooksPage from './pages/hooks/HooksPage';

import './App.css'

function App() {

  return (
    <Router>
      {/* Navigation Bar */}
      <nav className='nav-bar'>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/pokemon" className='nav-link'>Pokémon</Link>
        <Link to="/onepiece" className='nav-link'>OnePiece</Link>
        <Link to="/todo" className='nav-link'>ToDo</Link>
        <Link to="/books" className='nav-link'>Books</Link>
        <Link to="/hooks" className='nav-link'>Hooks</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/onepiece" element={<OnePiece />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/hooks" element={<HooksPage />} />
      </Routes>
    </Router>
  )
}

export default App
