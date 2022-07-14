const db = require('../database/models');
const errorArray = require('../helpers/error');

const checkEmailAddNew = async (email) => {
    const data = await db.User.findOne({
        where: { email },
    });
    if (data !== null) {
        throw errorArray[5];
    }
    return data;
};

const addUser = async ({ displayName, email, password, image }) => {
    await db.User.create({ displayName, email, password, image });
};

const getAllUsers = async () => {
    const data = await db.User.findAll();
    const result = data.map((user) => user.dataValues);
    
    const teste = result.filter((e) => delete e.password);
    console.log(teste);
    return result;
};

const getById = async (id) => {
    const data = await db.User.findOne({
        where: { id } });
    if (data) {
        return data;
    }
    throw errorArray[8];
};

module.exports = {
    checkEmailAddNew,
    addUser,
    getAllUsers,
    getById,
};