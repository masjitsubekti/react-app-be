var express = require('express');
var router = express.Router();
var middlewareJwtToken = require('../api/middleware/jwt/JwtToken');

// Master Data
var authController = require('../api/controller/AuthController');
var itemController = require('../api/controller/ItemController');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// No Middleware JWT
router.post('/v1/login', authController.login);

// With Middleware JWT
router.get('/v1/master/item', itemController.getDataPagination);
router.get('/v1/master/item/all', itemController.getAll);
router.get('/v1/master/item/:id', itemController.getById);
router.post('/v1/master/item', itemController.create);
router.put('/v1/master/item/:id', itemController.update);
router.delete('/v1/master/item/:id', itemController.delete);

module.exports = router;
