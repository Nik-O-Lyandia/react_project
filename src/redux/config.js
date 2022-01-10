import logo from '../imgs/flat_pink_logo.png';

// serves as mock data and config, all the state is in redux
export const config = {
  users: [
    { id: 1, username: 'Nik' },
    { id: 2, username: 'Not Nik' },
    { id: 3, username: "No, I'm Nik" },
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
};
