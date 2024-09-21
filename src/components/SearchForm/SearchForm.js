import React from 'react';

const SearchForm = ({ onSearchChange }) => {
  const handleInputChange = event => {
    onSearchChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук за брендом"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchForm;
