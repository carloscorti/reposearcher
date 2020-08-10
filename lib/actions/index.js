import axios from 'axios';
import { FETCH_REPOS, SET_SEARCH_TERM, FETCH_USER } from '../actions/types';

export const fetchRepos = () => async (dispatch) => {
  const fetchRes = await axios.get(
    'https://api.github.com/users/carloscorti/repos'
  );

  dispatch({
    type: FETCH_REPOS,
    // payload: fetchRes,
    payload: fetchRes.data,
  });
};

export const storeSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  });
};

export const fetchUser = () => async (dispatch) => {
  const fetchRes = await axios.get('https://api.github.com/users/carloscorti');

  dispatch({
    type: FETCH_USER,
    // payload: fetchRes,
    payload: fetchRes.data,
  });
};
