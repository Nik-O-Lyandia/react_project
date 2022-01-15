const { ChatRepository } = require('./chat.repository');

class ChatService {
  constructor(chatRepo) {
    this.chatRepo = chatRepo;
  }

  create(chatId) {
    return this.chatRepo.create(chatId);
  }

  getAll() {
    return this.chatRepo.getAll();
  }

  get(chatId) {
    return this.chatRepo.get(chatId);
  }

  getMessages(chatId) {
    return this.chatRepo.getMessages(chatId);
  }

  addMessage(chatId, message) {
    return this.chatRepo.addMessage(chatId, message);
  }

  addMessageAnyway(chatId, message) {
    if (!this.exists(chatId)) {
      this.create(chatId);
    }

    this.addMessage(chatId, message);
  }

  exists(chatId) {
    return this.chatRepo.exists(chatId);
  }
}

const chRepo = ChatRepository.new();

module.exports = {
  ChatService: {
    new(chatRepo) {
      return new ChatService(chatRepo || chRepo);
    },
  },
};
