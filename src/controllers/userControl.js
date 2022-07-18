const { generateJWTToken } = require('../helpers/JWTToken');
const service = require('../services/userService');

const addUser = async (req, res, next) => {
    try {
        const { email } = req.body;
        const data = await service.checkEmailAddNew(email);
        if (data === null) {
            await service.addUser(req.body);
            const token = generateJWTToken({ email });
            return res.status(201).json({ token });
        }
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (_req, res, next) => {
    try {
        const data = await service.getAllUsers();
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await service.getById(id);
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

const deleteOwnUser = async (req, res, next) => {
    try {
        const data = await service.deleteOwnUser(req.user);
        if (data) return res.status(204).end();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addUser,
    getAllUsers,
    getById,
    deleteOwnUser,
};