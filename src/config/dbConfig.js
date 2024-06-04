const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'NodeTSApi',
  password: 'thelizard23',
  port: 5432,
});

module.exports = pool;
