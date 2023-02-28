import React from "react"
import "../toDoEmpty/toDoEmpty.css"

function ToDoEmptySearch({searchText}) {
    return (
        <p>No hay resultados para <b>{searchText.toLowerCase()}.</b></p>
    )
}

export { ToDoEmptySearch }