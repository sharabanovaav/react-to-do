import React, { Component} from 'react';
import './add-button.css'

export default class AddButton extends Component {


  render() {

    const { addItem } = this.props;

    return (
      <div className="button-wrapper">
       <button onClick={addItem}
         className="btn btn-outline-success">
         Add
       </button>
      </div>
    );
  }
}
