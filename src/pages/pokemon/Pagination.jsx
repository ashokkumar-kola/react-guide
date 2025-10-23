import React from 'react'
import './PokemonPage.css'

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
        { goToPrevPage && <button className='previous-btn' onClick={goToPrevPage}>Previous</button> }
        { goToNextPage && <button className='next-btn' onClick={goToNextPage}>Next</button> }
    </div>
  )
}
