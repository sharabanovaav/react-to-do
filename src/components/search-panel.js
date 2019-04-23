import React from 'react';

const SearchPanel = () => {
  const placeholderText = 'search';
  const searchStyle = { fontSize: '20px' };
  return  <input style={searchStyle} placeholder={placeholderText} />;
};

export default SearchPanel;
