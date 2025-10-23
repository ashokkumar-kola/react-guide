import React from 'react'
import './OnePiece.css'

export default function DevilFruit({ fruit }) {
  return (
    <div key={fruit.id} className="devil-fruit-item">
        <img src={fruit.filename} alt={fruit.name} width="100" />
        <h3>{fruit.name} - {fruit.roman_name}</h3>
        <p><strong>Type:</strong> {fruit.type}</p>
        {/* <p>{fruit.description}</p> */}
    </div>
  )
}
