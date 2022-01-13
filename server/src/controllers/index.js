const { register: auth } = require('./auth');
const { register: users } = require('./users');

const registerControllers = (app) => {
  auth(app);
  users(app);
};

module.exports = {
  registerControllers,
};
