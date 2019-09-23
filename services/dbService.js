const Sequelize = require('sequelize');
const config = require('../config');

const dbService = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  port: config.dbPort,
  dialect: 'mariadb',
  define: {
    freezeTableName: true,
  },
});

module.exports = dbService;
