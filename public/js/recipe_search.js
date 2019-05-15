$(document).ready(function () {
  // blogContainer holds all of our recipes
  var blogContainer = $(".blog-container");

  var recipes;

  // This function grabs Recipes from the database and updates the view
  function getRecipes() {
    $.get("/api/recipes", function (data) {
      console.log("Recipes", data);
      recipes = data;
      if (!recipes || !recipes.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }


  // Getting the initial list of Recipes
  getRecipes();
  // InitializeRows handles appending all of our constructed Recipe HTML inside
  // blogContainer
  function initializeRows() {
    blogContainer.empty();
    var recipesToAdd = [];
    for (var i = 0; i < recipes.length; i++) {
      recipesToAdd.push(createNewRow(recipes[i]));
    }
    blogContainer.append(recipesToAdd);
  }

  // This function constructs a Recipe's HTML
  function createNewRow(recipe) {
    var newRecipeCard = $("<div>");
    newRecipeCard.addClass("card");
    newRecipeCard.addClass("recipeCard");
    var newRecipeCardHeading = $("<div>");
    newRecipeCardHeading.addClass("card-header");
    var newRecipeTitle = $("<h2>");
    var newRecipeCardBody = $("<div>");
    newRecipeCardBody.addClass("card-body");
    var newRecipeBody = $("<div>");
    var newRecipeLink = $("<a>");
    newRecipeLink.addClass("recipeLink")
    newRecipeLink.addClass("button")
    newRecipeTitle.text(recipe.title + " ");
    newRecipeBody.text(recipe.link);
    newRecipeCardHeading.append(newRecipeTitle);

    newRecipeCardBody.append(newRecipeBody);
    newRecipeCard.append(newRecipeCardHeading);
    newRecipeCard.append(newRecipeCardBody);
    newRecipeCard.data("Recipe", recipe);
    $(".recipeLink").attr("href",recipe.link)
    return newRecipeCard;
  }

});

//SEARCH INPUT

$("#searchSubmit").on("click", function (event) {
  event.preventDefault();
  console.log("click")
  // Here we grab the form elements
  var search = {
    searchName: $("#recipeSearchName").val().trim(),
    searchIngred: $("#recipeSearchIngredient").val().trim(),
    searchPrepare: $("#recipeSearchPrepare").val().trim(),
    searchEase: $("#recipeSearchEase").val().trim(),
    searchTaste: $("#recipeSearchTaste").val().trim(),
  };
  console.log(search);

  $('#recipe-search-form')[0].reset();
});