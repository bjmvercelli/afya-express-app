var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/login_controller');
var HomeController = require('../controllers/home_controller');
const LoginMiddleware = require('../middlewares/login');

//rotas
router.get('/', LoginController.index); //aqui chamamos o controller de login método index
router.post('/logar', LoginController.logar);
router.get('/logout', LoginController.logout);
router.get('/home', LoginMiddleware ,HomeController.index ); //antes de chamar o home, passa pro middlerare, depois vai pra ação

module.exports = router;
