
// Routes

const route = require('express').Router();

// Routes

route.use('/users', require('./users'));
route.use('/chatRooms', require('./chatRooms'));
route.use('/login', require('./login'));


exports = module.exports = {
    route
}