import React from "react"
import "./toDoError.css"

function ToDoError({ error }) {
    return <p className="error">{error}</p>
}

export { ToDoError }