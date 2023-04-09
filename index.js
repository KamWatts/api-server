'use strict'

require('dotenv').config();
const server = require('./src/server')
const { sequelize } = require('./src/models/index');

let PORT = process.env.PORT

sequelize.sync()
.then(() => {
  server.start(3001);
})
.catch(error => {
  console.log('SQL Connection Error: ', error);
})