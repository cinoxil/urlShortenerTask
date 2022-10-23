const express = require('express');
const Router = express.Router();

const urlController = require('../controllers/urlController');

Router.post('/', urlController.longUrlConvert);
Router.post('/:hex', urlController.shortUrlConvert);

module.exports = Router;
