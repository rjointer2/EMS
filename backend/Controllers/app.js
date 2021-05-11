
// Routes

const route = require('express').Router();

// application routes

route.get('/', (req, res) => {
    req.session.viewCount += 1
    res.send(`You viewed this page ${req.session.viewCount}`)
})

exports = module.exports = route