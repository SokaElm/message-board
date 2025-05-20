const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}
let messages = {};
async function loadMessages() {
  messages = await db.getAllMessages();
  console.log(messages);
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows;
}

async function insertNewMessage(text, username) {
  await pool.query(
    "INSERT INTO messages (text,username,added) VALUES ($1,$2,$3)",
    [text, username, new Date()]
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertNewMessage,
};
