const { Router } = require('express');

const control = require('../controllers/loginControl');
const loginValidation = require('../middlewares/loginValidation');

const loginRouter = Router();

loginRouter.post('/', loginValidation, control.login);

module.exports = loginRouter;