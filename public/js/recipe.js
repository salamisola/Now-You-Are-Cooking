//RECIPE INPUT
$("#inputSubmit").on("click", function (event) {
  event.preventDefault();
  console.log("click recipe")
  // Here we grab the form elements
  var recInpIng = $("#recipeInputIngredient").val().trim();
  var recInpTime = $("#recipeInputPrepare").val().trim();
  var recInpEase = $("#recipeInputEase").val().trim();
  var recInpTaste = $("#recipeInputTaste").val().trim();

  var recInpLink =$("#recipeInputLink").val().trim();
  var recInpScore = recInpIng + "," + recInpTime + "," + recInpEase + "," + recInpTaste;

  var newRecipe = {
    title: $("#recipeInputName").val().trim(),
    link: recInpLink,
    num_ing: recInpIng,
    time: recInpTime,
    rating_ease: recInpEase,
    rating_taste: recInpTaste,
    recipe_score: recInpScore
  };
  console.log(newRecipe);

  // Send the POST request.
  $.ajax("/api/recipes", {
    type: "POST",
    data: newRecipe
  }).then(
    function () {
      console.log("added recipe");
      window.location.href = "/dash";
    }
  );
  $('#recipe-input-form')[0].reset();
});

$(document).ready(function () {
  // blogContainer holds all of our recipes
  var topPerformList = $(".topPerform");

  var recipes;

  // This function grabs Recipes from the database and updates the view
  function getRecipes() {
    $.get("/api/recipe_top/top", function (data) {
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
    topPerformList.empty();
    var recipesToAdd = [];
    for (var i = 0; i < recipes.length; i++) {
      recipesToAdd.push(createNewRow(recipes[i]));
    }
    topPerformList.append(recipesToAdd);
  }

  // This function constructs a Recipe's HTML
  function createNewRow(recipe) {
    var newRecipeItem= $("<li>");
    newRecipeItem.text(recipe.title + " ");

    newRecipeItem.data("Recipe", recipe);
       return newRecipeItem;
  }

});

