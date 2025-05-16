const { getMessageByIndex } = require("../dataBase");
const CustomNotFoundError = require("../errors/customNotFoundError");

async function handleGetMessageByIndex(req, res) {
  const index = Number(req.params.id);
  const message = await getMessageByIndex(index);

  if (!message) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("message", { message: message });
}

module.exports = handleGetMessageByIndex;
