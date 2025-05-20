const { Router } = require("express");
const { showForm, postNewMessage } = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", showForm);

newRouter.post("/", postNewMessage);

module.exports = newRouter;
