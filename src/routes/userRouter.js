const { Router } = require('express');

const control = require('../controllers/loginControl');
const addUsersValidation = require('../middlewares/addUsersValidation');

const userRouter = Router();

userRouter.post('/', addUsersValidation, control.addUser);

module.exports = userRouter;