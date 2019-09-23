const sequelize = require('sequelize');
const dbService = require('../../services/dbService');

module.exports = dbService.define(
  'Project',
  {
    id: {
      type: sequelize.UUID,
      defaultValue: sequelize.UUIDV1,
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
