
// Routes

const route = require('express').Router();

// application routes

// THIS WILL SEND THE APPLICATION WHEN THE BUILD IS RAN

route.get('/', (req, res) => {
    // THE TOKE HAS TO SENT THROUGH HERE WHEN THE LOGI AUTH SUCCESS 
    req.session.viewCount += 1
    res.send(`You viewed this page ${req.session.viewCount}`)
})

exports = module.exports = route;