const { UserService } = require('../users/user.service');
const { HashService } = require('./hash.service');

class AuthService {
  constructor(userService, hashService) {
    this.userService = userService;
    this.hashService = hashService;
  }

  validate(email, password) {
    const user = this.userService.getByEmail(email);
    if (!user) return null;
    return this.hashService.compareWithHash(password, user.password)
      ? user
      : null;
  }
}

const uService = UserService.new();
const hService = HashService.new();

module.exports = {
  AuthService: {
    new(userService, hashService) {
      return new AuthService(userService || uService, hashService || hService);
    },
  },
};
