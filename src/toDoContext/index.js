import React from 'react'
import { useLocalStorage } from './useLocalStorage.js'

// createContext() me permite compartir los estados a TODOS los componentes, en vez de estar teniendo que pasárselos uno por uno de padre a hijo
const ToDoContext = React.createContext()
// ToDoContext = { Provider,  Consumer }

//
function ToDoProvider(props) {
    const {item: toDos, saveItem: saveToDos, loading, error} = useLocalStorage('defaultToDos', [])

    const [searchValue, setSearchValue] = React.useState('')
    const [ openModal, setOpenModal ] = React.useState(false)

    const completedToDos = toDos.filter(toDo => !!toDo.completed).length
    const totalToDos = toDos.length

    //
    const addToDo = (text) => {
        const newToDos = [...toDos]
        newToDos.push({text: text, completed: false})
        saveToDos(newToDos)
    }

    //
    const completeToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text)
        const newToDos = [...toDos]


        newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;
        saveToDos(newToDos) // no puedo cambiar directamente toDos (<toDos[toDoIndex].completed = true>), porque para que un componente cambie, tiene que re-renderizarse y para eso existe las funciones setVariable que crea React.useState: PARA ALTERAR EL ESTADO DEL COMPONENTE. Por lo tanto, debo crear una nueva variable, inyectarle el valor de la variable de useState y luego pasarle esta nueva variable como parámetro al setVariable.
    } 
    
    //
    const deleteToDo = (text) => {
        const newToDos = toDos.filter(toDo => toDo.text !== text)

        saveToDos(newToDos)
    }

    //
    let searchedToDos = []
    
    if (!searchValue.length >= 1) {
        searchedToDos = toDos
    } else {
        searchedToDos = toDos.filter(toDo => toDo.text.toLowerCase().includes(searchValue.toLowerCase()))
    } 

    //
    // React.useEffect(() => {
    //   console.log('Use Effect')
    // }, [totalToDos]) // useEffect() va a ejecutar el código que le envíemos después de que el componente se haya renderizado y no cuando apenas estás cargando.
    // // Le puedo mandar un segundo argumento: un array que va decir cúando ejecutar este useEffect. Si se trata de un array vacío, el código se va a ejecutar sólo la primera vez que se renderice el componente, no importa cuantas veces se re-renderice. Si por ejemplo le mando dentro del array la variable totalToDos, cada vez que cambie su valor, se va a volver a ejecutar el código

    //
    return (
        <ToDoContext.Provider value={{
            error,
            loading,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            addToDo,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal
        }/* todas las propiedades que quiera compartir deben estar aquí */}>
            {props.children  /* Los componentes hijo de cualquier componente que llame a toDoProvider. Y van a poder acceder al Consumer */}
        </ToDoContext.Provider>
    )    
}

export { ToDoContext, ToDoProvider }