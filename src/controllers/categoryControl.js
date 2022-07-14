const service = require('../services/categoryService');

const addCategory = async (req, res, next) => {
    try {
        const { name } = req.body;
        const data = await service.addCategory(name);
        return res.status(201).json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addCategory,
};