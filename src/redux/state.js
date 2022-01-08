import logo from '../imgs/flat_pink_logo.png';

let rerenderEntireTree = () => {}

let state = {
  users: [
    {id: 1, username: "Nik"},
    {id: 2, username: "Not Nik"},
    {id: 3, username: "No, I'm Nik"}
  ],
  posts: [
    {
      userId: 1,
      id: 1,
      message:
        'Hi, how are you?sdfsfqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqsdfsdfsdfsdfsdfqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq sdfdddddddddddddddddddd',
      likesCount: 12,
    },
    { userId: 1, id: 2, message: "It's my first post", likesCount: 15 },
    { userId: 2, id: 3, message: 'Blabla', likesCount: 1 },
    { userId: 3, id: 4, message: 'Dada', likesCount: 11 },
  ],
  chatsPage: {
    chats: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrew' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your it-kamasutra?' },
      { id: 3, message: 'Yo 3' },
      { id: 4, message: 'Yo 4' },
      { id: 5, message: 'Yo 5' },
    ],
  },
  sidebar: {},
  friendsPage: {
    friends: [
      { id: 1, name: 'Dima', surname: 'Dimov' },
      { id: 2, name: 'Yaroslav', surname: 'Koval' },
      { id: 3, name: 'Dima', surname: 'Smirnov' },
      { id: 4, name: 'Uliya', surname: 'Timoshenko' },
      { id: 5, name: 'Yelena', surname: 'Karpova' },
    ],
  },
  headerData: {
    logo: logo,
  },
  profileData: {
    // imgAddress:
    //   'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
    imgAddress:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  },
};

export let addPost = (postMessage) => {
  let newPost = {
      id: state.posts.at(-1).id + 1,
      userId: 1,
      message: postMessage,
      likesCount: 0
  };
  state.posts.push(newPost);
  rerenderEntireTree(state);
}

export const initRerenderEntireTree = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
