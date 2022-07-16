const { Router } = require('express');
const authenticationToken = require('../middlewares/tokenValidation');
const control = require('../controllers/postControl');
const postValidation = require('../middlewares/postValidation');

const postRouter = Router();

postRouter.post('/', authenticationToken, postValidation, control.addNewBlogPost);

module.exports = postRouter;
