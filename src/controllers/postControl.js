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
        next(error);
    }
};

const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await service.getPostById(id);
        return res.status(200).json(data[0]);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addNewBlogPost,
    getAllBlogPost,
    getPostById,
};