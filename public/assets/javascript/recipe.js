// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newrecipe = {
      recipe_name: $("#newrecipe")
        .val()
        .trim(),
      devoured: 0
    };

    $.ajax("/api/recipes", {
      type: "POST",
      data: newrecipe
    }).then(function () {
      console.log("Added new recipe");
      location.reload();
    });
  });

  $(".eatrecipe").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    $.ajax("/api/recipes/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function () {
      console.log("recipe devoured");
      location.reload();
    });
  });

  $(".trashrecipe").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/recipes/" + id
    }).then(location.reload());
  });
});






