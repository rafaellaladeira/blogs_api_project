const db = require('../database/models');
const errorArray = require('../helpers/error');

const login = async (body) => {
    const { email, password } = body;
    const data = await db.User.findOne({
        where: { email, password },
    });
    if (data === null) {
     throw errorArray[1];
    }
    return data;
};

module.exports = {
    login,
};