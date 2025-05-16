const express = require("express");
const app = express();
const path = require("node:path");
const { messages, links } = require("./dataBase");
const customNotFoundError = require("./errors/customNotFoundError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.messages = messages;
  res.locals.links = links;
  next();
});

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter);

app.use((req, res, next) => {
  next(new customNotFoundError("Page not found"));
});

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal server error";

  console.error(`[${status}] ${err.name}: ${message}`);

  res.status(status).render("error", { message, status });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
