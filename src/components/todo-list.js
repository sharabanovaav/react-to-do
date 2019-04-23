import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = ({ todoes }) => {

  const elements = todoes.map((item) => {
    return (
      <li>
        <ToDoListItem {...item}/>
      </li>
    );
  });
  return (
    <ul>
      {elements}  
    </ul>
  );
};

export default ToDoList;
