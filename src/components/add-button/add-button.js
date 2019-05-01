import React, { Component} from 'react';
import './add-button.css'

export default class AddButton extends Component {

  render() {

    const { addItem } = this.props;

    return (
      <div className="button-wrapper">
       <button onClick={ () => addItem('task')}
         className="btn btn-outline-secondary">
         Add
       </button>
      </div>
    );
  }
}
