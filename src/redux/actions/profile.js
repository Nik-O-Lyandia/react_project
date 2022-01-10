import { SET_USERNAME, SET_DESCRIPTION, SET_EMAIL } from '../reducers/profile';

export const setUserName = (value) => ({
  type: SET_USERNAME,
  value,
});

export const setUserDescription = (value) => ({
  type: SET_DESCRIPTION,
  value,
});

export const setUserEmail = (value) => ({ type: SET_EMAIL, value });
