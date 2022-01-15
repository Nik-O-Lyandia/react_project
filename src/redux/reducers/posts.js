const initState = [
  {
    id: 'd1f84fe5-1870-46c8-a5fa-f0cb09fb1017',
    userId: '6eb13a7c-9410-427c-b2ad-33a9ddb5379e',
    userName: 'Yuriy',
    text: 'Hi, how are you?sdfsfqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqsdfsdfsdfsdfsdfqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq sdfdddddddddddddddddddd',
    likesCount: 12,
  },
  {
    id: 'ba381764-36d0-4806-8a05-f5553bc3011f',
    userId: '6eb13a7c-9410-427c-b2ad-33a9ddb5379e',
    userName: 'Yuriy',
    text: "It's my first post",
    likesCount: 15,
  },
  {
    id: 'cac988bc-41dc-4376-8182-3fa2391554fe',
    userId: '0c5cce93-153b-42f3-91c9-801abfb4c84b',
    userName: 'Yaroslav',
    text: 'Blabla',
    likesCount: 1,
  },
  {
    id: '47436285-17a7-43ff-8aac-2c5cf4175e65',
    userId: '667fe22d-592a-454f-b175-7c705ffcd264',
    userName: 'Dima',
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
