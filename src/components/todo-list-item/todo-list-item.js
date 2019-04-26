import React, { Component } from 'react';
import './todo-list-item.css'

export default class ToDoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState({
      done: !this.state.done
    })
  }

  makeImportant = () => {
    this.setState({
      important: !this.state.important
    })
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          onClick={this.onLabelClick}
          className="todo-list-item-label">
          {label}
        </span>

        <button type="button"
          onClick={this.makeImportant}
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
