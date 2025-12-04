import React, { useState, useEffect, useRef } from 'react'
import ToDo from './ToDo' 
import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = "todoApp.todos"

export default function ToDoPage() {
    const [todos, setTodos] = useState([])

    const todoNameRef = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) {
            setTodos(storedTodos)
        }
        // console.log("ToDoPage Mounted", storedTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) 
        // console.log("ToDoPage Updated", JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    }, [todos])

    function toggleToDo(id) {
        const newToDos = [...todos]
        const todo = newToDos.find((todo) => todo.id === id)
        todo.completed = !todo.completed
        setTodos(newToDos)
    }

    function handleAddToDo() {
        const newToDo = todoNameRef.current.value
        if (newToDo === "") return
        setTodos((prevTodos) => {
            return [...prevTodos, {"id": uuidv4(), "name": newToDo, "completed": false}]
        })
        todoNameRef.current.value = ""
    }

    function handleClearToDos() {
        const newToDos = todos.filter((todo) => !todo.completed)
        setTodos(newToDos)
    }

  return (
    <>
        <div>ToDoPage</div>

        <p>
            Total ToDO's {todos.length}
        </p>

        <ul>
            {todos.map((todo) => {
                return (
                    <ToDo todo={todo} toggleToDo={toggleToDo} />
                )
            })}
        </ul>

        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddToDo}>Add ToDo</button>
        <button onClick={handleClearToDos}>Clear Completed ToDo's</button>
        <p>
            {todos.filter(todo => !todo.completed).length} Left to do
        </p>
    </>
  )
}
