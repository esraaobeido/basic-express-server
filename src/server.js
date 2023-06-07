'use strict';

const express = require("express");
const app = express();
const logger = require('./middlewares/logger.js')
const validator = require('./middlewares/validator.js')



const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello From the home!')
  })

app.get('/person', validator,(req, res) => {
    const name = req.query.name;
    res.send({
      name: name
    })
  });


  app.use('*', notFoundHandler);
  app.use(errorHandler)

  function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}