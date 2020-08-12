/**
 * Actions entry point
 */

import axios from 'axios';
import { FETCH_REPOS, SET_SEARCH_TERM, FETCH_USER } from '../actions/types';

/**
 * Action fetchRepos: fetchs repos data
 */
export const fetchRepos = () => async (dispatch) => {
  const fetchRes = await axios.get(
    'https://api.github.com/users/carloscorti/repos'
  );

  dispatch({
    type: FETCH_REPOS,
    payload: fetchRes.data,
  });
};

/**
 * Action storeSearchTerm: sets store searchTerm value,
 *
 *  @param  {string}  searchTerm  search word to store
 */
export const storeSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  });
};

/**
 * Action fetchUser: fetchs user data
 */
export const fetchUser = () => async (dispatch) => {
  const fetchRes = await axios.get('https://api.github.com/users/carloscorti');

  dispatch({
    type: FETCH_USER,
    payload: fetchRes.data,
  });
};
