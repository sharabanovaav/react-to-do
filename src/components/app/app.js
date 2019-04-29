import React, { Component} from 'react';
import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddButton from '../add-button';
import './app.css'

export default class App extends Component {

  state = {
    toDoData: [
      { label: 'code', important: true, id: 1 },
      { label: 'run', important: false, id: 2 },
      { label: 'eat', important: false, id: 3 },
    ]
  }

  deleteItem = (id) => {
    // this.setState(({ toDoData }) => {
    //   return {
    //     toDoData: toDoData.filter((item) => item.id !==id)
    //   }
    // })
  }

  addItem = () => {

    const newToDo =  { label: 'sleep', important: true, id: 4 };

    this.setState(({ toDoData }) => {
      return {
        toDoData: toDoData.push(newToDo)
      }
    })
  }

  render() {
    return (
      <div className="wrapper">
        <AppHeader />
        <div className="d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList 
          todoes={this.state.toDoData}
          onDeleted={ this.deleteItem }
        />
        <AddButton 
          addItem={this.addItem}
        />
      </div>
    );
  }
}
