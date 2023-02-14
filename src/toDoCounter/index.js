import React from 'react'
import './ToDoCounter.css'
import { ToDoContext } from "../toDoContext";

function ToDoCounter() {
    const { totalToDos, completedToDos, loading } = React.useContext(ToDoContext)

    if (!loading) {
        return <h2 className='ToDoCounter'>Has completado {completedToDos} de {totalToDos} ToDos</h2>
    } else {
        return <h2 className='ToDoCounter'>Cargando ToDos...</h2>
    }

}

export { ToDoCounter }