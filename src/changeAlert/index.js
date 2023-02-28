import React from "react"
import { useStorageListener } from "./useStorageListener"
import './changeAlert.css'

function ChangeAlert({ sync }) {
    const { show, toggleShow } = useStorageListener(sync)
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste alguno de tus ToDos en otra pestaña o ventana del navegador.</p>
                    <p><b>¿Quieres sincronizar tus ToDos?</b></p>
                    <button className="TodoForm-button TodoForm-button--add" onClick={toggleShow}>
                        Sí    
                    </button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export { ChangeAlert }