import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by company name..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
