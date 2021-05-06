
// Require Modules 

const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

// Invoked App

const app = express();

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

/* 

    -> API Routes Here <-

*/

app.listen( PORT, () => {
    console.log(`coneecting to the ${PORT} port`)
})


