const { Pool } = require('pg');

const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'NodeTSApi',
  password: 'thelizard23',
  port: 5432,
});

module.exports = pool;


import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('NodeTSApi', 'postgres', 'thelizard23', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

export default sequelize;