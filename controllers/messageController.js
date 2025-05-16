const { getMessageByIndex } = require("../dataBase");

async function handleGetMessageByIndex(req, res) {
  const index = Number(req.params.id);
  const message = await getMessageByIndex(index);

  res.render("message", { message: message });
}

module.exports = handleGetMessageByIndex;
