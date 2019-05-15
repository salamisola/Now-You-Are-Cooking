var blogContainer = $(".blog-container");

var recipes;


$("#keywordSearch").on("click", function (event) {
    event.preventDefault();

    // Save the book they typed into the search input
    var titleSearched = $("#recipeSearchName").val().trim();

    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/recipe_title/" + titleSearched, function (data) {

        console.log(data);
        initializeRows();
        $('#recipe-search-form')[0].reset();
    });

});

$("#ingredSearch").on("click", function (event) {
    event.preventDefault();

    // Save the book they typed into the search input
    var ingredSearched = $("#recipeSearchIngredient").val().trim();

    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/recipe_ingred/" + ingredSearched, function (data) {

        console.log(data);
        // Call our renderBooks function to add our books to the page
        //   renderBooks(data);
        initializeRows();
        $('#recipe-search-form')[0].reset();
    });

});


$("#prepareSearch").on("click", function (event) {
    event.preventDefault();

    // Save the book they typed into the search input
    var prepareSearched = $("#recipeSearchPrepare").val().trim();

    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/recipe_time/" + prepareSearched, function (data) {

        console.log(data);
        initializeRows(data);
        $('#recipe-search-form')[0].reset();
    });

});

$("#easeSearch").on("click", function (event) {
    event.preventDefault();

    // Save the book they typed into the search input
    var easeSearched = $("#recipeSearchEase").val().trim();

    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/recipe_ease/" + easeSearched, function (data) {

        console.log(data);
        // Call our renderBooks function to add our books to the page
        initializeRows();
        $('#recipe-search-form')[0].reset();
    });

});

$("#tasteSearch").on("click", function (event) {
    event.preventDefault();

    // Save the book they typed into the search input
    var tasteSearched = $("#recipeSearchTaste").val().trim();

    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/recipe_taste/" + tasteSearched, function (data) {

        console.log(data);
        // Call our renderBooks function to add our books to the page
        initializeRows();
        $('#recipe-search-form')[0].reset();
    });

});

function initializeRows(data) {
    blogContainer.empty();
    var recipes = data
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



