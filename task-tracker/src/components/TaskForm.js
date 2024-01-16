// TaskForm.js
import React, { useState } from 'react';
import './TaskForm.css'; // Import the TaskForm.css file

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() !== '') {
      onAddTask({ id: Date.now().toString(), name: taskName, dateAdded: new Date().toLocaleString(), completed: false });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
