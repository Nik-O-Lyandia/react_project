const {
  ChatUserService,
} = require('../services/chats-users/chat-user.service');

const getAll = (req, reply) => {
  const userId = req.headers.token;
  console.log('GET /chats', { userId });

  const chatUserService = ChatUserService.new();

  return chatUserService
    .getAllUserDialogs(userId)
    .map((e) => ({ ...e, messages: undefined }));
};

const get = (req, reply) => {
  const userId = req.headers.token;
  const targetUserId = req.params.targetUserId;

  const chatUserService = ChatUserService.new();

  return chatUserService.getDialog(userId, targetUserId);
};

const register = (app) => {
  app.get('/chats/', getAll);
  app.get('/chats/:targetUserId', get);
};

module.exports = {
  register,
};
