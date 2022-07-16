const jwt = require('jsonwebtoken');
// const errorArray = require('../helpers/error');

require('dotenv').config();

const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '12h',
    algorithm: 'HS256',
};

const getDataFromToken = async (teste) => {
        const data = await jwt.verify(teste, SECRET, jwtConfig);
        return data.email;
};

module.exports = getDataFromToken;
