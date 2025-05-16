const { Router } = require("express");
const { messages, links } = require("../dataBase");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    links: links,
    title: "Mini Messageboard",
    messages: messages,
  });
});

module.exports = indexRouter;
