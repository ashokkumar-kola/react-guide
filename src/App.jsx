import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Pages
import Home from './pages/home/Home';
import PokemonPage from './pages/pokemon/PokemonPage'

import './App.css'

function App() {

  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/pokemon">Pokémon</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonPage />} />
      </Routes>
    </Router>
  )
}

export default App
