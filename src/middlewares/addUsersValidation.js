const errorArray = require('../helpers/error');

const addUsersValidation = (req, res, next) => {
    const { displayName, email, password } = req.body;
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
    if (displayName.length < 8) next(errorArray[2]);
    if (!email.match(regexEmail)) next(errorArray[3]);
    if (password.length < 6) next(errorArray[4]);
    next();
};

module.exports = addUsersValidation;