const sequelize = require('sequelize');
const dbService = require('../../services/dbService');

module.exports = dbService.define(
  'User',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    data: {
      type: sequelize.JSON,
      defaultValue: '',
    },
  },
);
