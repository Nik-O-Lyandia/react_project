const { Chat } = require('../../models/chat.model');

class ChatRepository {
  constructor(chats = {}) {
    this.chats = chats;
  }

  create(chatId) {
    this.chats[chatId] = new Chat(chatId);
  }

  getAll() {
    return Object.values(this.chats);
  }

  get(chatId) {
    return this.chats[chatId] || null;
  }

  getMessages(chatId) {
    return this.chats[chatId]?.getMessages() || null;
  }

  addMessage(chatId, message) {
    return this.chats[chatId]?.addMessage(message) || null;
  }

  exists(chatId) {
    return Boolean(this.chats[chatId]);
  }
}

const chatRepo = new ChatRepository({
  1234: new Chat(
    1234,
    [
      '6eb13a7c-9410-427c-b2ad-33a9ddb5379e',
      '0c5cce93-153b-42f3-91c9-801abfb4c84b',
    ],
    [
      {
        id: '6838f7f1-6215-4987-a6a5-616b259fbf40',
        userId: '6eb13a7c-9410-427c-b2ad-33a9ddb5379e',
        message: 'kek',
      },
      {
        id: '6838f7f1-6215-4988-a6a5-616b259fbf40',
        userId: '0c5cce93-153b-42f3-91c9-801abfb4c84b',
        message: 'lul',
      },
    ]
  ),
  4567: new Chat(
    4567,
    [
      '6eb13a7c-9410-427c-b2ad-33a9ddb5379e',
      '667fe22d-592a-454f-b175-7c705ffcd264',
    ],
    []
  ),
});

module.exports = {
  ChatRepository: {
    new(chats) {
      return chats ? new ChatRepository(chats) : chatRepo;
    },
  },
};
