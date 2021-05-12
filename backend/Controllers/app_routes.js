

const { validiateToken } = require('./JWT');

// Routes

const route = require('express').Router();

// application routes

route.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});


exports = module.exports = route