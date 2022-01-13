const { createHash } = require('crypto');

const hash = (str) => createHash('md5').update(str).digest('hex');

const equal = (hash1, hash2) => hash1 === hash2;

module.exports = {
  hash,
  equal,
};
