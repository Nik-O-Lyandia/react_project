const { hash, equal } = require('../../utils/hash');

class HashService {
  hash(str) {
    return hash(str);
  }

  compareWithHash(str, hashedStr) {
    return this.hash(str) === hashedStr;
  }
}

module.exports = {
  HashService: {
    new() {
      return new HashService();
    },
  },
};
