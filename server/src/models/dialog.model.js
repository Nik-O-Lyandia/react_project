class Dialog {
  constructor(chatId, { id, name, surname }, messages) {
    this.id = chatId;
    this.user = {
      id,
      name,
      surname,
    };
    this.messages = messages;
  }
}

module.exports = {
  Dialog,
};
