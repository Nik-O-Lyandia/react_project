const { AuthService } = require('../services/auth/auth.service');

const login = (req, reply) => {
  const { email, password } = req.body;
  console.log('login', req.body);

  const authService = AuthService.new();
  const user = authService.validate(email, password);

  if (user === null) {
    console.log('Error: no such user');
    reply.code(400);
    return { ok: false, error: 'No such user' };
  }

  return { ok: true, id: user.id };
};

const register = (app) => {
  app.post('/login', login);
};

module.exports = {
  register,
};
