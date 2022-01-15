const { register: auth } = require('./auth');
const { register: users } = require('./users');
const { register: chats } = require('./chats');
const { register: chat } = require('./chat');

const registerControllers = (app) => {
  auth(app);
  users(app);
  chats(app);
  chat(app);
};

module.exports = {
  registerControllers,
};
