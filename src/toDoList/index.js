import React from 'react'
import './ToDoList.css'

function ToDoList(props) {
  return (
    <ul className='ToDoList'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalToDos) && props.onEmpty()}
      {(!props.loading && !!props.totalToDos && !props.searchedToDos.length) && props.onEmptySearch(props.searchText)}

      {(!props.loading && !props.error ) && props.searchedToDos.map(props.render /* = toDo => props.render(toDo)*/)}
    </ul>
  ) 
}

export { ToDoList }