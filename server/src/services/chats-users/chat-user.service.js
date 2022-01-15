const { Dialog } = require('../../models/dialog.model');
const { ChatService } = require('../chats/chat.service');
const { UserService } = require('../users/user.service');

class ChatUserService {
  constructor(chatService, userService) {
    this.chatService = chatService;
    this.userService = userService;
  }

  getAllUserDialogs(userId) {
    const chats = this.chatService.getAll();

    return chats
      .filter((ch) => ch.getUserIds().includes(userId))
      .map((ch) => this.toDialog(userId, ch));
  }

  getDialog(userId, targetUserId) {
    const chats = this.chatService.getAll();

    const dialog = chats
      .filter(
        (ch) =>
          ch.getUserIds().includes(userId) &&
          ch.getUserIds().includes(targetUserId)
      )
      .map((ch) => this.toDialog(userId, ch))[0];

    dialog.messages = dialog.messages.map((m) => {
      const user = this.userService.getById(m.userId);
      return { ...m, userName: `${user.name} ${user.surname}` };
    });

    return dialog;
  }

  toDialog(userId, chat) {
    const anotherUserId = chat.userIds.find((u) => u !== userId);
    const anotherUser = this.userService.getById(anotherUserId);
    return new Dialog(chat.id, anotherUser, chat.getMessages());
  }
}

const chService = ChatService.new();
const uService = UserService.new();

module.exports = {
  ChatUserService: {
    new(chatService, userService) {
      return new ChatUserService(
        chatService || chService,
        userService || uService
      );
    },
  },
};
