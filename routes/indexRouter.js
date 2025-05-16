const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    links: res.locals.links,
    title: "Mini Messageboard",
    messages: res.locals.messages,
  });
});

module.exports = indexRouter;
