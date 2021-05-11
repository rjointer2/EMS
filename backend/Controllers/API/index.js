
// Routes

const route = require('express').Router();

// API Routes

route.use('/users', require('./users'));
route.use('/chatRooms', require('./chatRooms'));


exports = module.exports = {
    route
}