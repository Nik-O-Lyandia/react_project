const { UserService } = require('../services/users/user.service');

const getAll = (req, reply) => {
  const users = UserService.new().getUsers();

  return users;
};

const register = (app) => {
  app.get('/users', getAll);
};

module.exports = {
  register,
};
