import React from 'react';
import './todo-list-item.css'

const ToDoListItem = ({ label, important = false }) => {

  const spanStyle = {
    color: important ? 'tomato' : 'black'
  }
  return (
    <span className="list-group todo-list-item" style={spanStyle}>
      { label }
    </span>
  );
};

export default ToDoListItem;