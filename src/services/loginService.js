const db = require('../database/models');
const errorArray = require('../helpers/error');

const checkEmailLogin = async (body) => {
    const { email, password } = body;
    const data = await db.User.findOne({
        where: { email, password },
    });
    if (data === null) {
     throw errorArray[1];
    }
    return data;
};

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

module.exports = {
    checkEmailLogin,
    checkEmailAddNew,
    addUser,
};