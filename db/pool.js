const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.CONNECTIONSTRING_PROD,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});
