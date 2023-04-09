'use strict'

function logger(request, response, next) {
  console.log('logger is operational');
  next();
}

module.exports = {
  logger
}