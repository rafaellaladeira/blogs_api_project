const db = require('../database/models');

const addCategory = async (name) => {
    const data = await db.Category.create({ name });
    console.log(data.null);
    return {
        id: data.null,
        name,
    };
};

module.exports = {
    addCategory,
};