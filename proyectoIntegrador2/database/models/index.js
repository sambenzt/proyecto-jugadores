'use strict';

const Sequelize = require('sequelize');
const env = 'development';
const config = require(__dirname + '/../../.database/config/config.js')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql'
});


module.exports = sequelize;
