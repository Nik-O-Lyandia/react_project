const initState = [
  {
    id: 1,
    userId: 1,
    userName: 'Nik',
    text: 'Hi, how are you?sdfsfqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqsdfsdfsdfsdfsdfqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq sdfdddddddddddddddddddd',
    likesCount: 12,
  },
  {
    userId: 1,
    id: 2,
    userName: 'Nik',
    text: "It's my first post",
    likesCount: 15,
  },
  { userId: 2, id: 3, userName: 'Not Nik', text: 'Blabla', likesCount: 1 },
  {
    userId: 3,
    id: 4,
    userName: "No, I'm  Nik",
    text: 'Dada',
    likesCount: 11,
  },
];

export const ADD_POST = 'ADD_POST';

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [action.value, ...state];

    default:
      return state;
  }
};
