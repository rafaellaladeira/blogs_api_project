const db = require('../database/models');

const addCategory = async (name) => {
    const data = await db.Category.create({ name });
    return {
        id: data.null,
        name,
    };
};

const getAll = async () => {
    const data = await db.Category.findAll();
    return data;
};

module.exports = {
    addCategory,
    getAll,
};