const express = require('express');
const Router = express.Router();
const urlController = require('../controllers/urlController');
const middlewares = require('../middlewares');

Router.post('/', middlewares.urlMw.verifyUrl, urlController.longUrlConvert);
Router.post('/:hex', urlController.shortUrlConvert);

module.exports = Router;
