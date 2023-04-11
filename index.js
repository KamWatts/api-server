'use strict'

require('dotenv').config();
const server = require('./src/error-handlers/server')
const { sequelize, foodItemModel } = require('./src/error-handlers/models/food')

sequelize.sync()
.then(() => {
  server.start(3001);
})
.catch(error => {
  console.log('SQL Connection Error: ', error);
})