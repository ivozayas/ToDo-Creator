import React from "react"
import "./toDoLoading.css"
import { ThreeDots } from 'react-loader-spinner'

function ToDoLoading() {
    return <div className="loading-div">
        <ThreeDots height='80' width='80' color='cadetblue' ariaLabel="Loading" />
    </div>
}

export { ToDoLoading }