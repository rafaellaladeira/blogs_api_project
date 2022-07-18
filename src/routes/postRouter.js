const { Router } = require('express');
const authenticationToken = require('../middlewares/tokenValidation');
const control = require('../controllers/postControl');
const postValidation = require('../middlewares/postValidation');
const postUpdateValidation = require('../middlewares/postUpdateValidation');

const postRouter = Router();

postRouter.get('/search', authenticationToken, control.getPostByQuery);
postRouter.delete('/:id', authenticationToken, control.deletePost);
postRouter.put('/:id', authenticationToken, postUpdateValidation, control.updatePost);
postRouter.get('/:id', authenticationToken, control.getPostById);
postRouter.post('/', authenticationToken, postValidation, control.addNewBlogPost);
postRouter.get('/', authenticationToken, control.getAllBlogPost);

module.exports = postRouter;
