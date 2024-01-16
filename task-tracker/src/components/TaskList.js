// TaskList.js
import React from 'react';
import Task from './Task';
import './TaskList.css'; // Import the TaskList.css file

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;
