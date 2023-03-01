import React from "react"

function useStorageListener(sync) {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change /* el segundo argumento de addEventListener devuelve la información del cambio que hubp */) => {
        console.log('hubaonbsdofa');
        if (change.key === 'ToDos') {
            console.log('Hubo cambios en ToDos')
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        setStorageChange(false)
        sync()
    }

    return {
        show: storageChange,
        toggleShow
    }
}

export { useStorageListener }