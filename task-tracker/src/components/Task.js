// Task.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Task.css'; // Import the Task.css file

const Task = ({ task, onDelete, onToggle, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`task ${task.completed ? 'completed-task' : ''}`}
        >
          <div>
            <h3>{task.name}</h3>
            <p>Date Added: {task.dateAdded}</p>
          </div>
          <div>
            <button onClick={() => onToggle(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
