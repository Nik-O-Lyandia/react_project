import axios from 'axios';
import { SET_USER_ID } from '../reducers/user';

export const setUserId = (value) => ({
  type: SET_USER_ID,
  value: value,
});

export const login = (email, password, cb) => (dispatch) => {
  axios
    .post('http://localhost:8000/login', { email, password })
    .then((res) => {
      dispatch(setUserId(res.data.id));
      cb();
    })
    .catch((err) => console.error(err));
};
