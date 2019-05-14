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
    let lotteryPick;
    $.ajax("/api/recipes/" + rndRecId, {
        type: "GET",
        async: true
    }).then(
        function (response) {
            $("#divLottery").empty();
            lotteryPick = JSON.stringify(response);
            // console.log(lotteryPick);
            var p = $("<p></p>");
            console.log(response.title);
            p.text(response.title);
            $("#divLottery").append(p);
            
        }
    );
    

});