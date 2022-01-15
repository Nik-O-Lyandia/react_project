const { v4 } = require('uuid');
const { ChatService } = require('../services/chats/chat.service');
const { ChatSocketService } = require('../services/chats/chat-socket.service');
const { UserService } = require('../services/users/user.service');

const chatService = ChatService.new();
const socketService = new ChatSocketService();

const channel = ({ socket }, req) => {
  const userId = req.params.userId;
  console.log('connected', userId);
  socketService.add(userId, socket);

  socket.on('message', (data) => {
    const parsed = JSON.parse(data);
    // const userId = parsed.userId;

    // socket.send(data);

    console.log(parsed);
    const { chatId, targetUserId, message } = parsed;

    const newMsg = {
      id: v4(),
      userId,
      message,
    };
    chatService.addMessage(chatId, newMsg);

    const friendSocket = socketService.get(targetUserId);
    if (friendSocket) {
      console.log('sending to', targetUserId);
      const user = UserService.new().getById(userId);
      friendSocket.send(
        JSON.stringify({
          message: { ...newMsg, userName: `${user.name} ${user.surname}` },
        })
      );
    }
  });
};

const register = (app) => {
  app.get('/chats/channel/:userId', { websocket: true }, channel);
};

module.exports = {
  register,
};
