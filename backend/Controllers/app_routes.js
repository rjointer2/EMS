
// Routes

const route = require('express').Router();

// API Routes

route.use('/users', require('./app/users'));
route.use('/shifts', (require('./app/shifts')));
route.use('/chatRooms', require('./app/chatRooms'));

// Application Routes


exports = module.exports = {
    route
};