
// Routes

const route = require('express').Router();

// API Routes

route.use('/users', require('./app/Users'));
route.use('/chatRooms', require('./app/chatRooms'));

// Application Routes


exports = module.exports = {
    route
}