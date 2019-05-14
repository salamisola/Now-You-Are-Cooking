var settings = {
    "async": true,
    "url": "/api/recipes",
    "method": "GET"
}
$.ajax(settings).done(function (response) {
    var rndMax = response.length;

    var rndRecId = Math.floor(Math.random() * rndMax+1);
    console.log("Random Max: " + rndMax);
    console.log("Random Recipe ID: " + rndRecId);

});