const { Router } = require('express');
const authenticationToken = require('../middlewares/tokenValidation');
const control = require('../controllers/postControl');
const postValidation = require('../middlewares/postValidation');
const postUpdateValidation = require('../middlewares/postUpdateValidation');

const postRouter = Router();

postRouter.post('/', authenticationToken, postValidation, control.addNewBlogPost);
postRouter.get('/', authenticationToken, control.getAllBlogPost);
postRouter.get('/:id', authenticationToken, control.getPostById);
postRouter.put('/:id', authenticationToken, postUpdateValidation, control.updatePost);
postRouter.delete('/:id', authenticationToken, control.deletePost);

module.exports = postRouter;
