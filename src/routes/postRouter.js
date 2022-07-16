const { Router } = require('express');
const authenticationToken = require('../middlewares/tokenValidation');
const control = require('../controllers/postControl');
const postValidation = require('../middlewares/postValidation');

const postRouter = Router();

postRouter.post('/', authenticationToken, postValidation, control.addNewBlogPost);
postRouter.get('/', authenticationToken, control.getAllBlogPost);
postRouter.get('/:id', authenticationToken, control.getPostById);

module.exports = postRouter;
