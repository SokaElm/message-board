const db = require("../db/queries");
const customNotFoundError = require("../errors/customNotFoundError");

async function handleGetMessageByIndex(req, res) {
  const index = Number(req.params.id);
  const message = await db.getMessageById(index);

  if (!message) {
    throw new customNotFoundError("Message not found");
  }
  res.render("message", { message: message[0] });
}

module.exports = handleGetMessageByIndex;
