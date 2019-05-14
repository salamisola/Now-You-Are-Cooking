$("#btnSignUp").on("click", function (event) {
    event.preventDefault();
    console.log("click");

    var inputName = $("#InputEmail").val();
    var inputPass = $("#InputPassword").val();
    console.log(inputName);
    console.log(inputPass);

    var newSignup = {
        name: $("#InputEmail").val(),
        pass: $("#InputPassword").val(),
    };
    console.log(newSignup);
  
    $.ajax("/api/newuser", {
        type: "POST",
        data: newSignup,
        async: true,
    }).then(
        function (response) {
            console.log("added member");
            sessionStorage.setItem("user", response.id );
            window.location.href = "/dash";
            
        }
    );
   
});