const postCategorySchema = (sequelize, DataTypes) => {
      const postCategory = sequelize.define("PostCategory", {
          postId: {type:DataTypes.INTEGER,primaryKey: true},
          categoryId: {type:DataTypes.INTEGER,primaryKey: true},
      },{
        timestamps: false,
      });

      postCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: postCategory,
          foreignKey:'postId',
          otherKey: 'categoryId'
        });

        models.Category.belongsToMany(models.BlogPost, {
          as: 'blogId',
          through: postCategory,
          foreignKey:'categoryId',
          otherKey: 'postId'
        });
      }

      return postCategory;
    };
    
    module.exports = postCategorySchema;