import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

import { connect } from 'react-redux';
import * as actions from '../actions';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    doSearch();
  }, [searchTerm]);

  const doSearch = debounce(() => {
    props.storeSearchTerm(searchTerm);
  }, 300);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <label>Search Bar</label>
      <input
        type="search"
        placeholder="Enter Search Term"
        value={searchTerm}
        onChange={handleChange}
      />
    </>
  );
};

export default connect(null, actions)(SearchBar);
