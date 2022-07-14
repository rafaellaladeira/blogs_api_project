const errorArray = require('../helpers/error');

const loginValidation = async (req, _res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        next(errorArray[0]);
    }
    next();
};

module.exports = loginValidation;