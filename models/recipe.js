module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_ing: DataTypes.INTEGER,
    time:DataTypes.INTEGER,
    rating_ease: DataTypes.INTEGER,
    rating_taste: DataTypes.INTEGER
  });

  // Post.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Post;
};
