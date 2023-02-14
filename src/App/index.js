import React from 'react'
import { ToDoProvider } from '../toDoContext'
import { AppUI } from './AppUI'

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  )
}

export default App
