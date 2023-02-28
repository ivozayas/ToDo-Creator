import React from 'react'
import './ToDoButton.css'

function ToDoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState) // estado => valor por el que es actualizado el estado
  }
  return (
    <button 
      className='ToDoButton'
      onClick={onClickButton}
    >
      +
    </button>
  ) 
}

export { ToDoButton }