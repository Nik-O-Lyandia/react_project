const { users } = require('./users');

class UserRepository {
  constructor(users) {
    this.users = users;
  }

  getAll() {
    return this.users;
  }

  getById(id) {
    return this.users.find((u) => u.id === id) || null;
  }

  getByEmail(email) {
    return this.users.find((u) => u.email === email) || null;
  }
}

const userRepository = new UserRepository(users);

module.exports = {
  UserRepository: {
    new(users) {
      return users ? new UserRepository(users) : userRepository;
    },
  },
};
