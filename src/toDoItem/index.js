import React from 'react'
import './ToDoItem.css'

function ToDoItem(props) {
  return (
    <li className='ToDoItem'>
        <span
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}  
        >
          ✓
        </span>
        <span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        </span>
        <span
          className="Icon Icon-delete"
          onClick={props.onDelete}
        >
          +
        </span>
    </li>
  ) 
}

export { ToDoItem }