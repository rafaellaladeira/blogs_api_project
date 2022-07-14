const { Router } = require('express');

const control = require('../controllers/userControl');
const addUsersValidation = require('../middlewares/addUsersValidation');
const authenticationToken = require('../middlewares/tokenValidation');

const userRouter = Router();

userRouter.post('/', addUsersValidation, control.addUser);
userRouter.get('/', authenticationToken, control.getAllUsers);
userRouter.get('/:id', authenticationToken, control.getById);

module.exports = userRouter;