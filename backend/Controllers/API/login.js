
const route = require('express').Router();

/* const jwt = require('jsonwebtoken');

route.post('/', (req, res) => {

    const username = req.body.username;
    const user = { user: username };

    jwt.sign( user, process.env.ACCESS_TOKEN )
    res.json({ accessToken: accessToken })

});

const authenticateToken = (req, res, next) => {
    const authenticateHeader = req.header['authorization'];
    const token = authenticateHeader && authenticateHeader.split(' ')[1];

    if( token == null ) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user
        next()
    })
} */

exports = module.exports = {
    route,
    /* authenticateToken */
}