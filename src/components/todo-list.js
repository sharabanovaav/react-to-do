import React from 'react';
import ToDoListItem from './todo-list-item';
import './todo-list.css'

const ToDoList = ({ todoes }) => {

  const elements = todoes.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={item.id} className="list-group-item">
        <ToDoListItem {...itemProps}/>
      </li>
    );
  });
  return (
    <ul className="list-group todo-list">
      {elements}  
    </ul>
  );
};

export default ToDoList;
