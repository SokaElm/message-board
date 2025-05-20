const db = require("../db/queries");

async function showForm(req, res) {
  res.render("form");
}

async function postNewMessage(req, res) {
  const text = req.body.message;
  const username = req.body.username;
  await db.insertNewMessage(text, username);
  res.redirect("/");
}

module.exports = { showForm, postNewMessage };
