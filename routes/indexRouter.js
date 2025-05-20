const { Router } = require("express");
const showAllMessages = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", showAllMessages);

module.exports = indexRouter;
