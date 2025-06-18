import React, { useEffect, useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]); // holds all your to do
  const [input, setInput] = useState('');


  const API  = 'http://127.0.0.1:8000/myapp/todos/';

  useEffect (()=> {
    fetch(API)
    .then(res =>res.json())
    .then(data=> setTasks(data))
  },[])


  const addTask = () => {
    if (input.trim()) {
      fetch(API,{
        method: 'POST',
        headers :{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({title:input})
      })
.then(res=>res.json())
.then(newTasks =>{
  setTasks([newTasks,...tasks]);
  setInput('');
}) }
  };

      
const removeTask = (id) => {
    fetch(`${API}${id}/delete/`, {
      method: 'DELETE'
    })
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      });
  };

  


  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span >{task.title}</span>
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
