import { SET_FRIENDS } from '../reducers/friends';
import axios from 'axios';

export const setFriends = (friends) => ({ type: SET_FRIENDS, value: friends });

export const set = () => {
  return (dispatch) => {
    axios.get(`http://localhost:8000/users`).then((res) => {
      dispatch(setFriends(res.data));
    });
  };
};
