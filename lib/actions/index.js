import axios from 'axios';
import { FETCH_USER } from '../actions/types';

export const fetchUser = () => async (dispatch) => {
  const fetchRes = await axios.get(
    'https://api.github.com/users/carloscorti/repos'
  );

  dispatch({
    type: FETCH_USER,
    payload: fetchRes,
  });
};
