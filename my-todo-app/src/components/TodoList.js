import React, {useState} from 'react'
// Import components
import Todo from './Todo';
const TodoList = ({todos, setTodos, filteredTodos}) => {
 
 return (
  <div>
   <div className="todo-container">
      <ul className="todo-list">
       {
        filteredTodos.map((todo) => (
         <Todo text={todo.text} todo={todo} todos={todos} setTodos={setTodos}/>
        ))
       }
      </ul>
    </div>
  </div>
 )
}

export default TodoList
