
// Routes

const route = require('express').Router();

// Routes

route.use('/users', require('./users'));
route.use('/chatRooms', require('./chatRooms'));


exports = module.exports = {
    route
}