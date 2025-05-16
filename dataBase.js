const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New messages" },
  { href: "/message", text: "Message Information" },
];

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
async function getMessageByIndex(index) {
  return messages[index];
}

module.exports = { messages, links, getMessageByIndex };
