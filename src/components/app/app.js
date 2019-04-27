import React from 'react';
import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import './app.css'

const App = () => {

  const toDoData = [
    { label: 'code', important: true, id: 1 },
    { label: 'run', important: false, id: 2 },
    { label: 'eat', important: false, id: 3 },
  ];

  return (
    <div className="wrapper">
      <AppHeader />
      <div className="d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList 
        todoes={toDoData}
        onDeleted={ (id) => { console.log(id); }}
      />
    </div>
  );
};

export default App;

