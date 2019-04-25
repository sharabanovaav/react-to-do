import React from 'react';
import './search-panel.css'

const SearchPanel = () => {
  const placeholderText = 'type to search';
  return (
    <input className='form-control search-input' 
            placeholder={placeholderText} />
  );
};

export default SearchPanel;
