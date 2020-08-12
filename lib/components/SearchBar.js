import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

import { connect } from 'react-redux';
import * as actions from '../actions';

/**
 * SearchBar comoponent: Displays repositories tag and search bar,
 * takes actions from redux, if there is any repos displays repos' count,
 * if repos=null doesn' display any number
 */

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  //every time searchTerm changes updates store searchTerm
  useEffect(() => {
    doSearch();
  }, [searchTerm]);

  /**
   * Function doSearch: sets searchTerm redux store value after 1sec,
   * uses storeSearchTerm action from redux
   *
   *  @callback {fuction} debounce  from lodash, execute the callback in first param
   *   at the time of the second param in ms
   */
  const doSearch = debounce(() => {
    props.storeSearchTerm(searchTerm);
  }, 1000);

  /**
   * Function handleChange: sets searchBar searchTerm state with input value
   * every time the input change
   *
   * @param  {Object} e  evento from input
   */
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <nav>
        <ul className="repo-nav">
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
