#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
DROP TABLE IF EXISTS messages; 

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
  const isProd = process.env.NODE_ENV === "production";
  const client = new Client({
    connectionString: isProd
      ? process.env.CONNECTIONTOSTRING_PROD
      : process.env.CONNECTIONTOSTRING_DEV,
    ssl: isProd ? { rejectUnauthorized: false } : false,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
