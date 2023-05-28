const { Pool } = require('pg');
require('dotenv').config();

const { PRO_DB_URL } = process.env;

const options = {
  connectionString: PRO_DB_URL,
  ssl: true,
};

const connection = new Pool(options);
module.exports = connection;
