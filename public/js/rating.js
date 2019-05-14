var tempArr;
var recipeRatetName = $("#recipeRatetName");

var settings = {
   "async": true,
   "url": "/api/recipes",
   "method": "GET"
}
$.ajax(settings).done(function (response) {
   console.log(response);  
   for (var i=0;i<response.length;i++) {
       var title = response[i].title;
       var id = response[i].id;
        $("#recipeRatetName").append($("<option></option>").val(id).html(title));
   }
});