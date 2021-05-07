
// Require Modules 

const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

// Invoked App

const app = express();

morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
})

// PORT for Heroku and Localhost

const _PORT = process.env.PORT || 3000;

// middleware that only parses json 
// and only looks at requests where the Content-Type header matches the type option

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/* 

    ========================== FUNCTION HERE SOON ================================
    IF NODE_ENV STRICTLY COMPARED TO production then serve client/build

    FOR RIGHT WE WILL NOT RUN THE APPLICATION TO SERVE OUT FRONT END STATICALLY
    UNTIL THE BUILD FOLDER IS CREATED AND READY TO SERVE ON THE CLIENT FOLDER

*/

app.use('/api', require('./Controllers/API').route)

app.listen( _PORT, () => {
    console.log(`connecting to the ${_PORT} port`)
})


