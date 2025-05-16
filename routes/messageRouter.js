const { Router } = require("express");
const handleGetMessageByIndex = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:id", handleGetMessageByIndex);

module.exports = messageRouter;
