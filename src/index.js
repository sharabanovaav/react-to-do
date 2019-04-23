import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import ToDoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {

  const toDoData = [
    { label: 'code', important: true },
    { label: 'run', important: false },
    { label: 'eat', important: false },
  ];

  return (
    <div>
      <span>{ (new Date()).toString() }</span>
      <AppHeader />
      <SearchPanel />
      <ToDoList todoes = {toDoData}/>
    </div>
  );
};

ReactDOM.render( <App />, document.getElementById('root'));