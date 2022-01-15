const initState = { id: null };

export const SET_USER_ID = 'SET_USER_ID';

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, id: action.value };

    default:
      return state;
  }
};
