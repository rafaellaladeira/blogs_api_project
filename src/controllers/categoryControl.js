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

const getAll = async (req, res, next) => {
    try {
        const data = await service.getAll();
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addCategory,
    getAll,
};