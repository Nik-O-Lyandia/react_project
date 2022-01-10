import { SET_USER_ID } from '../reducers/user';

export const setUserId = (value) => ({
  type: SET_USER_ID,
  value: value,
});
