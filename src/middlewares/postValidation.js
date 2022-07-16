const errorArray = require('../helpers/error');

const postValidation = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) next(errorArray[0]);
    next();
};

module.exports = postValidation;