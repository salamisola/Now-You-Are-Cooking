module.exports = function(sequelize, DataTypes) {
    var Rating = sequelize.define("Rating", {
  
      userId: DataTypes.INTEGER,    // links to user table
      recipeId: DataTypes.INTEGER, // links to recipe table
      rating_ease: DataTypes.INTEGER,
      rating_taste: DataTypes.INTEGER

    });
  
    // Author.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   Author.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Rating;
  };
  