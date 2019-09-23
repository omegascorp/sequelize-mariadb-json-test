const sequelize = require('sequelize');
const dbService = require('../../services/dbService');

module.exports = dbService.define(
  'Project',
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
