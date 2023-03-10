import React from "react"
import './toDoForm.css'

function ToDoForm({ addToDo, setOpenModal }) {
    const [newToDoValue, setNewToDoValue] = React.useState('')

    //
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewToDoValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        setOpenModal(false)
        addToDo(newToDoValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea
                value={newToDoValue}
                onChange={onChange}
                placeholder='Escribe tu ToDo...'/>

            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit" // por defecto recarga la página
                >Añadir</button>
            </div>
        </form>
    )
}

export { ToDoForm }