import React from 'react';
import { SearchInput, SearchWrap } from './SearchForm.styled';

const SearchForm = ({ onSearchChange }) => {
  const handleInputChange = event => {
    onSearchChange(event.target.value);
  };

  return (
    <SearchWrap>
      <SearchInput
        type="text"
        placeholder="Search by brand"
        onChange={handleInputChange}
      />
    </SearchWrap>
  );
};

export default SearchForm;
