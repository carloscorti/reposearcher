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
  }, 1000);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <nav>
        <ul className="repo-nav">
          {/* <li>Repositories {filteredRepos.length}</li> */}
          <li>Repositories {props.repos && props.repos.length}</li>
        </ul>
      </nav>
      <div className="search-bar-wrapper">
        <input
          className="search-bar"
          type="search"
          placeholder="Find a repository..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default connect(null, actions)(SearchBar);
