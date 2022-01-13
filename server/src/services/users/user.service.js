const { userRepository } = require('./user.repository');

class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  getUsers() {
    return this.userRepo.getUsers().map((e) => ({ ...e, password: undefined }));
  }
}

module.exports = {
  UserService: {
    new() {
      return new UserService(userRepository);
    },
  },
};
