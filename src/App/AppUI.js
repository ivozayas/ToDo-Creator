import React from "react"
import { Modal } from "../modal"
import { ToDoContext } from "../toDoContext"
import { ToDoCounter } from '../toDoCounter'
import { ToDoSearch } from '../toDoSearch'
import { ToDoList } from '../toDoList'
import { ToDoItem } from '../toDoItem'
import { ToDoButton } from '../toDoButton'
import { ToDoForm } from "../toDoForm"
import { ToDoEmpty } from "../toDoEmpty"
import { ToDoLoading } from "../toDoLoading"
import { ToDoError } from "../toDoError"

function AppUI(){
  const { // recojo unicamente las propiedades del value de Provider que necesito
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal
  } = React.useContext(ToDoContext)

  return (
      <React.Fragment>
        
      <ToDoCounter/>

      <ToDoSearch/>
  
      <ToDoList>
        {error && <ToDoError error={error}/>}
        {loading && <ToDoLoading loading={loading}/>}
        {(!loading && !searchedToDos.length ) && <ToDoEmpty/>}

        {searchedToDos.map(toDo => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => {completeToDo(toDo.text)}}  
            onDelete={() => {deleteToDo(toDo.text)}}
          />
        ))}
      </ToDoList>
 
      
      {!!openModal && (
        <Modal>
          <ToDoForm/>
        </Modal>
      )}
      

      <ToDoButton
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
  )
}

export { AppUI }