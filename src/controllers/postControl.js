const getDataFromToken = require('../middlewares/getDataFromToken');
const service = require('../services/postService');

const addNewBlogPost = async (req, res, next) => {
    try {
        const { categoryIds } = req.body;
        const allData = req.body;
        const data = await service.verifyCategory(categoryIds);
        if (data > 0) {
            const getEmail = await getDataFromToken(req.headers.authorization);
            const send = { allData, getEmail };
            const result = await service.postRouter(send);
            return res.status(201).json(result);
        } 
    } catch (error) {
        next(error);
    }
};

const getAllBlogPost = async (_req, res, next) => {
    try {
        const data = await service.getAllBlogPost();
        return res.status(200).json(data);
    } catch (error) {
        console.log('ERRO NA CONTROL', error);
        next(error);
    }
};

module.exports = {
    addNewBlogPost,
    getAllBlogPost,
};