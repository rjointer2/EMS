

// Routes

const route = require('express').Router();

// application routes

route.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    
});


route.get('/test', (req, res) => {
    req.session.viewCount += 1
    res.send(`You viewed this page ${req.session.viewCount}`)
})
  

exports = module.exports = route