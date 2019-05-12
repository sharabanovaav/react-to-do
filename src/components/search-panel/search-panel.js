import React, {Component} from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {

  render () {
    const { searchItems } = this.props;

    const placeholderText = 'type to search';
    return (
      <input className='form-control search-input' 
              placeholder={placeholderText}
              onChange={searchItems} />
    );
  }
}
