import React from 'react';
import './app-header.css'

const AppHeader = ({ toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1 className="title">My Todo List</h1>
      <h2 className="subtitle">{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
