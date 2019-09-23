const config = require('../config');

module.exports = {
  development: {
    host: config.dbHost,
    port: config.dbPort,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    dialect: 'mariadb',
    dialectOptions: {
      multipleStatements: true
    },
    seederStorage: 'sequelize',
  },
};
