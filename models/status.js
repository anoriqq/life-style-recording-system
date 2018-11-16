'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Status = loader.database.define('status', {
  statusId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  statusName: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Status;
