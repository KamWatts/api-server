'use strict'

const express = require('express')
const app = express();

const cors = require('cors');
const router = ('/router');

app.use(cors());
app.use(express.json());

app.use('/clothes', router);
app.use('/food',router);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server listening on port', PORT);
    })
  }
 }


