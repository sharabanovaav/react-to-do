import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
  return (
    <ul>
      <li>Учица</li>
      <li>Плакать</li>
      <li>Какать</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return  <input placeholder="search" />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  );
};

ReactDOM.render( <App />, document.getElementById('root'));