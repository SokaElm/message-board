const db = require("../db/queries");

async function showAllMessages(req, res) {
  res.locals.messages = await db.getAllMessages();
  res.render("index", {
    links: res.locals.links,
    title: "Mini Messageboard",
    messages: res.locals.messages,
  });
}

module.exports = showAllMessages;
