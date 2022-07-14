const { Router } = require('express');
const control = require('../controllers/categoryControl');
const categoryValidation = require('../middlewares/categoryValidation');
const authenticationToken = require('../middlewares/tokenValidation');

const categoryRouter = Router();

categoryRouter.post('/', authenticationToken, categoryValidation, control.addCategory);

module.exports = categoryRouter;