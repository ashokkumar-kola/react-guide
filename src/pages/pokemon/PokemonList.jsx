import React from 'react'
import './PokemonPage.css'

export default function PokemonList({ pokemon }) {
  return (
    <div className="pokemon-list">
      {pokemon.map ((p, index) => (
        <div kep={p}>
          { index + 1 }. { p }
        </div>
      ))}
    </div>
  )
}
