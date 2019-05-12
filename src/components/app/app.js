import React, { Component} from 'react';
import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css'

export default class App extends Component {

  lastId = 0;

  state = {
    toDoData: [
      this.createToDoItem('code'),
      this.createToDoItem('run'),
      this.createToDoItem('eat'),
      this.createToDoItem('sleep'),
    ],
    term: '',
    filter: 'all'
  }

  createToDoItem(label) {
    return {
      label: label, 
      important: false, 
      id: this.lastId++, 
      done: false
    }
  }

  deleteItem = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: toDoData.filter((item) => item.id !==id)
      }
    })
  }

  addItem = (text) => {
    const newToDo =  this.createToDoItem(text);
    this.setState(({ toDoData }) => {
      return {
        toDoData: toDoData.concat(newToDo)
      }
    });
  }

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);
    const oldItemm = arr[index];
    const newItem = {...oldItemm, [propName]: !oldItemm[propName]};
    const newArr = [...arr];
    newArr[index] = newItem;
    return newArr;
  }

  toggleImportant = (id) => {
   this.setState(({ toDoData }) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, 'important')
      }
   });
  }

  toggleDone = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, 'done')
      }
   });
  }

  setTerm = (e) => {
    const term = e.target.value;
    this.setState({ term });
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  search(items, term) {
    if (!term.length) {
      return items;
    }

    return items.filter((el) => el.label.toLowerCase().includes(term.toLowerCase()));
  }

  filter(items, filter) {
    switch (filter) {
      case 'active':
      return items.filter((el) => !el.done);
      case 'done':
      return items.filter((el) => el.done);
      default: 
      return items;
    }
  }

  render() {
    const { toDoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(toDoData, term), filter);
    const doneCount = toDoData.filter((el) => el.done === true).length;
    const toDoCount = toDoData.length - doneCount;

    return (
      <div className="wrapper">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="d-flex">
          <SearchPanel searchItems={this.setTerm} />
          <ItemStatusFilter 
            filter={filter} 
            filterItems={this.setFilter}
          />
        </div>
        <ToDoList 
          todoes={visibleItems}
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.toggleImportant }
          onToggleDone={ this.toggleDone }
        />
        <ItemAddForm 
          addItem={this.addItem}
        />
      </div>
    );
  }
}
