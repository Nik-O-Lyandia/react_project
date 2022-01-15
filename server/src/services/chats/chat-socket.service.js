class ChatSocketService {
  constructor() {
    this.sockets = {};
  }

  add(userId, socket) {
    this.sockets[userId] = socket;
  }

  get(userId) {
    return this.sockets[userId] || null;
  }
}

module.exports = {
  ChatSocketService,
};
