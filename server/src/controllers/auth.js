const login = (req, reply) => {
  const { email, password } = req.body;

  return { statue: 'ok' };
};

const register = (app) => {
  app.post('/login', login);
};

module.exports = {
  register,
};
