'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Event = loader.database.define('event', {
  eventId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  startAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endAt: {
    type: Sequelize.DATE,
    allowNull: true
  },
  duration: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Event;
