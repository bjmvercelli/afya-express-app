var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/login_controller');
var HomeController = require('../controllers/home_controller');


//rotas
router.get('/', LoginController.index); //aqui chamamos o controller de login método index
router.post('/logar', LoginController.logar);
router.get('/home', HomeController.index );

module.exports = router;
