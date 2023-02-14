import React from 'react'
import { ToDoContext } from '../toDoContext'
import './ToDoSearch.css'

function ToDoSearch() {
    const { searchValue, setSearchValue, loading } = React.useContext(ToDoContext)
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    if (!loading) {       
        return (
            <input
                placeholder="Buscar ToDo..." 
                className='ToDoSearch'
                value={searchValue}
                onChange={onSearchValueChange}
            />
        )
    } else {
        return
    }
}

export { ToDoSearch }