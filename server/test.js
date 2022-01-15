// const { createHash } = require('crypto');

// const res = createHash('md5').update('kek').digest('hex');
// console.log(res);

// const { UserService } = require('./src/services/users/user.service');

// const service = UserService.new();

// console.log(service.getUsers());

// const http = require('http');

// const port = 8000;

// http
//   .createServer((req, res) => {
//     res.end('OK\n');
//   })
//   .listen(port, () => console.log(`listening on 127.0.0.1:${port}...`));

// const {
//   UserRepository,
//   userRepository,
// } = require('./src/services/users/user.repository');
// const { UserService } = require('./src/services/users/user.service');
// const { AuthService } = require('./src/services/auth/auth.service');

// const repo = UserRepository.new([
//   { email: 'lol', password: 'kek' },
//   { email: 'kek' },
// ]);

// const service = UserService.new(repo);

// const authService = AuthService.new(service);

// authService.validate('');

const { WebSocket } = require('ws');

const client = new WebSocket('ws://localhost:8000/chats/channel', {
  headers: { token: 'kek' },
});

client.on('open', () => {
  console.log('connected');
  // client.on('message', (data) => console.log(data.toString()));
  client.send('{"kek":"lul"}');
});

client.on('error', (err) => console.log('error:', err));
