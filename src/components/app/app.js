import React, { Component} from 'react';
import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddButton from '../add-button';
import './app.css'

export default class App extends Component {

  lastId = 4;

  state = {
    toDoData: [
      { label: 'code', important: false, id: 1, done: true },
      { label: 'run', important: true, id: 2, done: false },
      { label: 'eat', important: true, id: 3, done: false },
    ]
  }

  deleteItem = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: toDoData.filter((item) => item.id !==id)
      }
    })
  }

  addItem = (text) => {
    this.lastId++;
  
    const newToDo =  [{ label: `${text} ${this.lastId}`, important: true, id: this.lastId }];

    this.setState(({ toDoData }) => {
      return {
        toDoData: toDoData.concat(newToDo)
      }
    });
  }

  toggleImportant = (id) => {
    console.log(id);
  }

  toggleDone = (id) => {
    console.log(id);
  }

  render() {
    return (
      <div className="wrapper">
        <AppHeader toDo={1} done={2} />
        <div className="d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList 
          todoes={this.state.toDoData}
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.toggleImportant }
          onToggleDone={ this.toggleDone }
        />
        <AddButton 
          addItem={this.addItem}
        />
      </div>
    );
  }
}
