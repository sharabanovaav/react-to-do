import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import ToDoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {

  const toDoData = [
    { label: 'code', important: true, id: 1 },
    { label: 'run', important: false, id: 2 },
    { label: 'eat', important: false, id: 3 },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todoes = {toDoData}/>
    </div>
  );
};

ReactDOM.render( <App />, document.getElementById('root'));