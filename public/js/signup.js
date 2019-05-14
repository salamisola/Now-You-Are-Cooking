$("#btnSignUp").on("click", function (event) {
    event.preventDefault();
    console.log("click");

    var inputName = $("#InputEmail").val();
    var inputPass = $("#InputPassword").val();
    console.log(inputName);
    console.log(inputPass);

    var newSignup = {
        email: $("#InputEmail").val(),
        password: $("#InputPassword").val(),
    };
    console.log(newSignup);
  
    $.ajax("/api/login", {
        type: "POST",
        data: newSignup,
        async: true,
    }).then(
        function () {
            console.log("added member");
            //location.reload();
        }
    );
   
});