$("#searchSubmit").on("click", function (event) {
    event.preventDefault();
    console.log(click)
    // Here we grab the form elements
    var search = {
        searchName: $("#recipeSearchName").val().trim(),
        searchIngred: $("#recipeSearchIngredient").val().trim(),
    };
    console.log(search);
});
// recipeSearchName
// recipeSearchIngredient
// recipeSearchPrepare
// recipeSearchEase
// recipeSearchTaste
