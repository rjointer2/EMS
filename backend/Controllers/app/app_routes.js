

const { validiateToken } = require('../JWT');

// Routes

const route = require('express').Router();

// application routes

route.use('/', require('./app'));



exports = module.exports = route