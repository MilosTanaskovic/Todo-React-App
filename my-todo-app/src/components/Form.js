import React, { useState } from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
 const handleChange = (e) => {
   setInputText(e.target.value);
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  setTodos([...todos, {text: inputText, completed: false, id: Math.random()}])
  setInputText('');
 }
 const statusHandler = (e) => {
  setStatus(e.target.value);
 }
 return (
  <div>
     <form>
      <input type="text" className="todo-input" value={inputText} onChange={handleChange} />
      <button className="todo-button" type="submit" onClick={handleSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  </div>
 )
}

export default Form
