const errorArray = require('../helpers/error');

const postUpdateValidation = (req, _res, next) => {
    const { title, content } = req.body;
    if (!title || !content) throw errorArray[0];
    next();
};

module.exports = postUpdateValidation;