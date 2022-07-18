const { Op } = require('sequelize');
const db = require('../database/models');
const errorArray = require('../helpers/error');

const postRouter = async ({ getEmail, allData }) => {
    const { title, content, categoryIds } = allData;
    const data = await db.User.findOne({ attributes: ['id'] }, { where: { email: getEmail } });
    const result = await db.BlogPost.create({ title, content, userId: data.dataValues.id });
    await Promise.all(categoryIds.map(async (id) => {
        await db.PostCategory.create({ postId: result.null, categoryId: id });
    }));
    const send = await db.BlogPost.findByPk(result.null);
    return send.dataValues;
};

const verifyCategory = async (categoryIds) => {
        const data = await db.Category.findAndCountAll({ where: { id: { [Op.in]: categoryIds } } });
        if (data.count === 0) throw errorArray[10];
        return data.count;
};

const getAllBlogPost = async () => {
    const data = await db.BlogPost.findAll({ 
        include: [{ 
            model: db.User, 
            as: 'user', 
            attributes: { exclude: ['password'] },
        },
        { model: db.Category, 
            as: 'categories',
            through: { attributes: [] },
        }],
    });
    return data;
};

const getPostById = async (id) => {
    const data = await db.BlogPost.findAll({ 
        where: { id },
        include: 
        [{ 
            model: db.User, 
            as: 'user', 
            attributes: { exclude: ['password'] },
        },
        { model: db.Category, 
            as: 'categories',
            through: { attributes: [] },
        }],
    });
    if (!data.length > 0) throw errorArray[11];
    return data;
};

const updatePost = async ({ id, newData, getEmail }) => {
    const { title, content } = newData;
    const data = await db.User.findOne({ attributes: ['id'] }, { where: { email: getEmail } });
    const idUser = data.dataValues.id;
    const result = await db.BlogPost.update(
         { title, content }, 
        { where: { id, userId: idUser } },
        );
    if (result[0] === 0) throw errorArray[12];
    return getPostById(id);
};

module.exports = {
    postRouter,
    verifyCategory,
    getAllBlogPost,
    getPostById,
    updatePost,
};

// { title, content }, 
// { where: { id, userId: idUser } },
// { include: 
// [{ model: db.User, 
//     as: 'user', 
//     attributes: { exclude: ['password'] } },
// { model: db.Category, 
//     as: 'categories',
//     through: { attributes: [] },
// }],
// },