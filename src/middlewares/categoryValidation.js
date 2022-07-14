const errorArray = require('../helpers/error');

const categoryValidation = (req, res, next) => {
    const { name } = req.body;
    if (!name) next(errorArray[9]);
    next();
};

module.exports = categoryValidation;