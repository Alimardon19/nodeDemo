const Router = require('express');
const router = new Router();
const loginController = require('../controller/loginController');

router.get('/login', loginController.getLogin);
router.post('/login', loginController.getLoginUser);
router.post('/sign', loginController.postUser);

module.exports = router