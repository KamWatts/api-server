'use strict'

function handle500( request, response, next ) {

  response.status(500).send('Server error');
  next();
  
}

module.exports = handle500;