import React from "react";

function Task({ task, text, category, onDelete }) {
  // Use individual props if provided, otherwise use task object
  const taskText = text || task?.text;
  const taskCategory = category || task?.category;

  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button 
        className="delete"
        onClick={() => onDelete?.(taskText)}
      >
        X
      </button>
    </div>
  );
}

export default Task;