const sequelize = require('sequelize');
const dbService = require('../../services/dbService');

const User = dbService.define(
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
  {
    indexes: [],
  },
);

module.exports = User;
