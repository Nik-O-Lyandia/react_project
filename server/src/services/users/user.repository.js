const { users } = require('./users');

class UserRepository {
  constructor(users) {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }
}

const userRepository = new UserRepository(users);

module.exports = {
  userRepository,
};
