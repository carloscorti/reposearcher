import { FETCH_USER } from '../actions/types';

export const fetchUser = () => (dispatch) => {
  const fetchRes = {
    name: 'carlos',
    repos: [{ data: 1 }, { data: 2 }, { data: 3 }],
  };

  dispatch({
    type: FETCH_USER,
    payload: fetchRes,
  });
};
