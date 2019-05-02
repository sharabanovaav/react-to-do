import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  OnLabelChange = (e) => {
    this.setState({ label: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({ label: '' });
  }

  render() {
    return (
      <form className="add-form-wrapper d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control"
          onChange={this.OnLabelChange}
          value={this.state.label}
          placeholder="What needs to be done"></input>
        <button 
          className="btn btn-outline-secondary">
          Add
       </button>
      </form>
    );
  }
}
