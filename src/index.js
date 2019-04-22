import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {

  const items = ['eat', 'drink'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  const placeholderText = 'search';
  const searchStyle = { fontSize: '20px' };
  return  <input style={searchStyle} placeholder={placeholderText} />;
};

const App = () => {
  return (
    <div>
      <span>{ (new Date()).toString() }</span>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  );
};

ReactDOM.render( <App />, document.getElementById('root'));