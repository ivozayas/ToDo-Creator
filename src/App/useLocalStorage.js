import React from 'react'

function useLocalStorage(itemName, initialValue){ // Si en vez de asignarle a lo que sea que necesite un valor por defecto específico que requiera para ese caso concreto (en este caso un array vacío), puedo mandar un segundo parámetro que será el valor por defecto para que al llamar al hook pueda mandarle el valor que necesite en ese momento, siendo una solución mucho más versatil para diferentes situaciones

    const [state, dispatch] = React.useReducer(reducer, {
        error: false,
        loading: true,
        syncItem: true,
        item: initialValue
    })

    const {
        error,
        syncItem,
        loading,
        item
    } = state

    // CON ESTADOS SIMPLES
    // const [error, setError] = React.useState(false)
    // const [loading, setLoading] = React.useState(true)
    // const [item, setItem] = React.useState(initialValue) // estado inicial: valor por defecto (initialValue)
    // const [syncItem, setSyncItem] = React.useState(true)
    
    
    // ACTION CREATORS
    const onError = (error) => dispatch({
        type: actionTypes.error,
        payload: error
    })
    const onSuccess = (item) => dispatch({
        type: actionTypes.success,
        payload: item
    })
    const onSave = (item) => dispatch({
        type: actionTypes.save,
        payload: item
    })

    const onSync = () => dispatch({ type: actionTypes.syncItem })

    //
    React.useEffect(() => {
        setTimeout(() => {// para simular la peticion a una API
            try {
                const localStorageItem = localStorage.getItem(itemName)

                let parsedItem

                if(!localStorageItem){
                localStorage[itemName] = JSON.stringify(initialValue) // localStorage solo puede recibir un string como valor
                parsedItem = initialValue
                } else {
                parsedItem = JSON.parse(localStorageItem)
                }

                onSuccess(parsedItem)

                // CON ESTADOS SIMPLES
                // setItem(parsedItem) // cuando "llegue la peticion de la API", va a actualizar el valor de item por el de la variable solicitada
                // setLoading(false) // cuando termine de "cargar", loading va a ser false
                // setSyncItem(true)
            } catch(error) {
                onError(error)
            }
        }, 1500)
    }, [syncItem])

    //
    const saveItem = (newItem) => {
        try {
            localStorage[itemName] = JSON.stringify(newItem)
            onSave(newItem)
        } catch (error) {
            onError(error)
        }
    }

    //
    const sync = () => {
        onSync()
        // setLoading(true)
        // setSyncItem(false)
    }

    //
    return {
        item,
        saveItem,
        loading,
        error,
        sync
    } // si el hook devuelve mas de 2 valores se debe enviar un objeto
}

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    syncItem: 'SYNC',
}

const reducerObject = (state, payload) => ({
    [actionTypes.error]:{
        ...state,
        error: true
    },
    [actionTypes.syncItem]:{
        ...state,
        loading: true,
        syncItem: false
    },
    [actionTypes.save]:{
         ...state,
         item: payload
    },
    [actionTypes.success]:{
        ...state,
        item: payload,
        loading: false,
        error: false,
        syncItem: true
    }
})

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage }

