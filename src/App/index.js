import React from 'react'
import { Modal } from "../modal"
import { useToDos } from './useToDos'
import { ToDoHeader } from "../toDoHeader"
import { ToDoCounter } from '../toDoCounter'
import { ToDoSearch } from '../toDoSearch'
import { ToDoList } from '../toDoList'
import { ToDoItem } from '../toDoItem'
import { ToDoButton } from '../toDoButton'
import { ToDoForm } from "../toDoForm"
import { ToDoEmpty } from "../toDoEmpty"
import { ToDoEmptySearch } from "../toDoEmptySearch"
import { ToDoLoading } from "../toDoLoading"
import { ToDoError } from "../toDoError"
import { ChangeAlert } from '../changeAlert'

function App() {
  const {
    states,
    stateUpdaters
  } = useToDos()

  const {
    error,
    loading,
    completedToDos,
    totalToDos,
    searchValue,
    searchedToDos,
    openModal,
  } = states

  const {
    setSearchValue,      
    addToDo,
    completeToDo,
    deleteToDo,
    setOpenModal,
    sync
  } = stateUpdaters

  return (
    <React.Fragment>
      
      <ToDoHeader>
        <ToDoCounter
          totalToDos={totalToDos}
          completedToDos={completedToDos}
          loading={loading}
        />

        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </ToDoHeader>

      <ToDoList
        error={error}
        loading={loading}
        totalToDos={totalToDos}
        searchedToDos={searchedToDos}
        searchText={searchValue}
        onError={() => <ToDoError error={error}/>}
        onLoading={() => <ToDoLoading loading={loading}/>}
        onEmpty={() => <ToDoEmpty/>}
        onEmptySearch={(searchValue) => <ToDoEmptySearch searchText={searchValue}/>}
        render={(toDo) => 
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => {completeToDo(toDo.text)}}  
            onDelete={() => {deleteToDo(toDo.text)}}
          />
        }
      />
      
      {!!openModal && (
        <Modal>
          <ToDoForm addToDo={addToDo} setOpenModal={setOpenModal}/>
        </Modal>
      )}
      

      <ToDoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sync={sync}
      />

    </React.Fragment>
  )
}

export default App
