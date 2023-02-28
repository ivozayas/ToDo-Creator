import React from 'react'
import './ToDoCounter.css'

function ToDoCounter({ totalToDos, completedToDos, loading }) {
    return(
        <div>
            {loading && <h2 className='ToDoCounter'>Cargando ToDos...</h2>}
            
            {!loading && <h2 className='ToDoCounter'>Has completado {completedToDos} de {totalToDos} ToDos</h2>}
        </div>
    )
}

export { ToDoCounter }