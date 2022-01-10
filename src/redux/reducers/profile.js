const initState = {
  userName: 'Me',
  description: "It's me...",
  email: 'test@gmail.com',
  imgAddress:
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
};

export const SET_USERNAME = 'SET_USERNAME';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_EMAIL = 'SET_EMAIL';

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, userName: action.value };
    case SET_DESCRIPTION:
      return { ...state, description: action.value };
    case SET_EMAIL:
      return { ...state, email: action.value };

    default:
      return state;
  }
};
