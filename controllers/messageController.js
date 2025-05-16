const { getMessageByIndex } = require("../dataBase");
const customNotFoundError = require("../errors/customNotFoundError");

async function handleGetMessageByIndex(req, res) {
  const index = Number(req.params.id);
  const message = await getMessageByIndex(index);

  if (!message) {
    throw new customNotFoundError("Message not found");
  }

  res.render("message", { message: message });
}

module.exports = handleGetMessageByIndex;
