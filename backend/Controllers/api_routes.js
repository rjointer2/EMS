
// Routes

const route = require('express').Router();

// API Routes

route.use('/users', require('./API/Users'));
route.use('/chatRooms', require('./API/chatRooms'));

// Application Routes


exports = module.exports = {
    route
}