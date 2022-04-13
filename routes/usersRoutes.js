const { Router } = require('express');
const router = new Router();
const usersController = require('../controller/usersController');

router.get('/users', usersController.allUsers);
router.post('/users', usersController.postUsers)
router.put('/users/:id', usersController.putUsers);
router.delete('/users/:id', usersController.deleteUsers);

module.exports = router;