class Chat {
  constructor(id, userIds = [], messages = []) {
    this.id = id;
    this.userIds = userIds;
    this.messages = messages;
  }

  getId() {
    return this.id;
  }

  getUserIds() {
    return this.userIds;
  }

  getMessages() {
    return this.messages;
  }

  addMessage(msg) {
    this.messages.push(msg);
  }
}

module.exports = {
  Chat,
};
