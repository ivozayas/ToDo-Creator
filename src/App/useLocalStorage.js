import React from 'react'

function useLocalStorage(itemName, initialValue){ // Si en vez de asignarle a lo que sea que necesite un valor por defecto específico que requiera para ese caso concreto (en este caso un array vacío), puedo mandar un segundo parámetro que será el por defecto para que al llamar al hook pueda mandarle el valor que necesite en ese momento, siendo una solución mucho más versatil para diferentes situaciones
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue) // estado inicial: valor por defecto (initialValue)
    const [syncItem, setSyncItem] = React.useState(true)
    
    React.useEffect(() => {
        // simulacion de peticion a una API
        setTimeout(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName)

            let parsedItem

            if(!localStorageItem){
            localStorage[itemName] = JSON.stringify(initialValue) // localStorage solo puede recibir un string como valor
            parsedItem = initialValue
            } else {
            parsedItem = JSON.parse(localStorageItem)
            }

            setItem(parsedItem) // cuando "llegue la peticion de la API", va a actualizar el valor de item por el de la variable solicitada
            setLoading(false) // cuando termine de "cargar", loading va a ser false
            setSyncItem(true)
        } catch(error) {
            setError(error)
        }
        }, 2000)
    }, [syncItem, initialValue, itemName])

    //
    const saveItem = (newItem) => {
        try {
            localStorage[itemName] = JSON.stringify(newItem)
            setItem(newItem)
        } catch (error) {
            setError(error)
        }
    }

    //
    const sync= () => {
        setLoading(true)
        setSyncItem(false)
    }

    //
    return {
        item,
        saveItem,
        loading,
        error,
        sync
    } // si el hook devuelve mas de 2 valores, no es muy recomendable envolverlos en un array, sino enviar un objeto
}

export { useLocalStorage }

