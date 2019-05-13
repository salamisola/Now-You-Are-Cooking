//RECIPE INPUT
$("#inputSubmit").on("click", function (event) {
    event.preventDefault();
    console.log("click")
    // Here we grab the form elements
    var newRecipe = {
      title: $("#recipeInputName").val().trim(),
      link: $("#recipeInputLink").val().trim(),
      num_ing: $("#recipeInputIngredient").val().trim(),
      time: $("#recipeInputPrepare").val().trim(),
      rating_ease: $("#recipeInputEase").val().trim(),
      rating_taste: $("#recipeInputTaste").val().trim(),
    };
    console.log(newRecipe);
  
     // Send the POST request.
      $.ajax("/api/recipes", {
        type: "POST",
        data: newRecipe
      }).then(
        function() {
          console.log("added recipe");
          location.reload();
        }
      );
      $('#recipe-input-form')[0].reset();
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
  
  //RATE INPUT
  
  $("#rateSubmit").on("click", function (event) {
    event.preventDefault();
    console.log("rate click")
    // Here we grab the form elements
    var updateRecipe = {
        title: $("#recipeRateName").val().trim(),
        num_ing: $("#recipeRateIngredient").val().trim(),
        time: $("#recipeRatePrepare").val().trim(),
        rating_ease: $("#recipeRateEase").val().trim(),
        rating_taste: $("#recipeRateTaste").val().trim(),
    };
    console.log(updateRecipe);
  
    $('#recipe-rate-form')[0].reset();
  });