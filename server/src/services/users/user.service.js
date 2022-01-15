const { UserRepository } = require('./user.repository');

class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  getAll() {
    return this.userRepo.getAll().map((e) => ({ ...e, password: undefined }));
  }

  getById(id) {
    return this.userRepo.getById(id);
  }

  getByEmail(email) {
    return this.userRepo.getByEmail(email);
  }
}

module.exports = {
  UserService: {
    new(userRepo) {
      return new UserService(userRepo || UserRepository.new());
    },
  },
};
