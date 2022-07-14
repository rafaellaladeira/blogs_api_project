const blogPostSchema = (sequelize, DataTypes) => {
  const blogPost = sequelize.define("BlogPost", {
      id: {type:DataTypes.INTEGER,primaryKey: true},
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE
  },{
    timestamps: false,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {foreignKey: "id", as: "blogId" })
  }
  return blogPost;
};

module.exports = blogPostSchema;