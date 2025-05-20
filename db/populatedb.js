#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages(text,username,added) 
VALUES
  ('Hi there!','Amando',NOW()),
  ('Hello World!','Charles',NOW());

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTIONSTRING_PROD,
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
