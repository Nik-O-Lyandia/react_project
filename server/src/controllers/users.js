const { UserService } = require('../services/users/user.service');

const getAll = (req, reply) => {
  const users = UserService.new().getAll();

  return users;
};

const register = (app) => {
  app.get('/users', getAll);
};

module.exports = {
  register,
};
