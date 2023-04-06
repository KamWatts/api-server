const cors = require('cors');
const express = require('express')
const router = ('/router');

const app = express;

app.use(cors());
app.use(express.json());

app.use('/clothes');
app.use('/food');

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server listening on port', PORT);
    })
  }
 }


