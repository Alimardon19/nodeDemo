const Router = require('express');
const router = new Router();
const userRouter = require('./routes/usersRoutes');
const loginRouter = require('./routes/loginRouter');

router.use(userRouter);
router.use(loginRouter);


module.exports = router;
