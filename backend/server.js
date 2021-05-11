
// Require Modules 

const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

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
app.use(express.static(path.join(__dirname, '../client/build')));

if(process.env.NODE_ENV === 'production')
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, rep) => {
  rep.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.use(session({
    // session configs
    secret: 'secret-key',
    resave: false,
    // reducing server storage usage, or complying with 
    // laws that require permission before setting a cookie.
    saveUninitialized: false
}))

// application routes 

let viewCount = 0


/* 

    ========================== FUNCTION HERE SOON ================================
    IF NODE_ENV STRICTLY COMPARED TO production then serve client/build

    FOR RIGHT WE WILL NOT RUN THE APPLICATION TO SERVE OUT FRONT END STATICALLY
    UNTIL THE BUILD FOLDER IS CREATED AND READY TO SERVE ON THE CLIENT FOLDER

*/

app.use('/', require('./Controllers/app'))

app.use('/api', require('./Controllers/API').route)

app.listen( _PORT, () => {
    console.log(`connecting to the ${_PORT} port`)
})


