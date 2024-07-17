const Sequelize = require('sequelize');

const db = new Sequelize('todoapp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
