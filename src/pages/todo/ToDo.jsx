import React from 'react'

export default function ToDo({ todo, toggleToDo }) {
  function handleToDoClick() {
    toggleToDo(todo.id)
  }
  return (
    <li key={todo.id}> 
        <input type="checkbox" onChange={handleToDoClick} checked={todo.completed} id={todo.name} />
        <label htmlFor={todo.name}>{todo.name}</label>
    </li>
  )
}
