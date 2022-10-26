// const express = require('express');
// const Router = express.Router();

// const urlRoutes = require('./urlRoutes');

// Router.use(urlRoutes);

// module.exports = Router;

var requireDirectory = require('require-directory');
module.exports = requireDirectory(module, './');
