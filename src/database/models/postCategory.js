const postCategorySchema = (sequelize, DataTypes) => {
      const postCategory = sequelize.define("PostCategory", {
          postId: {type:DataTypes.INTEGER,primaryKey: true},
          categoryId: {type:DataTypes.INTEGER,primaryKey: true},
      },{
        timestamps: false,
      });

      postCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'category',
          through: postCategory,
          foreignKey:'id',
          otherKey: 'id'
        });

        models.Category.belongsToMany(models.BlogPost, {
          as: 'blogId',
          through: postCategory,
          foreignKey:'id',
          otherKey: 'id'
        });
      }

      return postCategory;
    };
    
    module.exports = postCategorySchema;