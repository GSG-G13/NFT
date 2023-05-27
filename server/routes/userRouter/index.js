const { Router } = require('express');
const { login, signup, logout } = require('../../controllers/user');
const products = require('../../controllers/user/products');
const checkAuth = require('../../middleware/checkAuth');

const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.use('/logout', logout);
userRouter.use(checkAuth);
userRouter.get('/main', products);

module.exports = userRouter;
