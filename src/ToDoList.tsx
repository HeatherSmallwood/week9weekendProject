import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? `✓ ${task}` : task
    );
    setTasks(updatedTasks);
  };

  const handleDoneClick = (index: number) => {
    handleToggleComplete(index);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter a new task"
          style={{ marginRight: '5px' }}
        />
        <button className="btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: task.startsWith('✓') ? 'line-through' : 'none' }}
              onClick={() => handleToggleComplete(index)}
            >
              {task}
            </span>
            <button className="btn" onClick={() => handleDoneClick(index)}>
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
