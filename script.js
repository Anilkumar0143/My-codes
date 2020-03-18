function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
$(document).ready(() => {
    $("form").css({
        "background-color": "darkslategray",
        "border-radius": "15px",
        "margin": "100PX 550px",
        "padding": "90px 100px"
    });

    $("#sub").click(() => {
        var obj = {
            id: "",
            Email: document.getElementById("email").value,
            Password: document.getElementById("pass").value
        } 

        $("p").addClass("text-left");
        if (obj.Email !== "") {
            if (obj.Email.match(/^([a-zA-Z0-9 _\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/) || obj.Email.match(/^\d/)) {
                if (obj.Email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/)) {
                    $("#email").css("border-color", "blue");
                    $("#erro").html(" email success ");
                    $("#erro").css("color", "blue");
                } else {
                    if (obj.Email.match(/^\d{10}$/)) {
                        $("#email").css("border-color", "blue");
                        $("#erro").html(" ph no success ");
                        $("#erro").css("color", "blue");
                    } else {
                        $("#email").css("border-color", "red");
                        $("#erro").html("enter 10 digits ph no or correct email id");
                        $("#erro").css("color", "red");
                    }
                }
            } else {
                $("#email").css("border-color", "red");
                $("#erro").html(" error correct email id ");
                $("#erro").css("color", "red");
            }
            if (obj.Password.length >= 4) {
                if (obj.Password.match(/^[A-z0-9]/)) {
                    $("#pass").css("border-color", "blue");
                    $("#text").html(" success ");
                    $("#text").css("color", "blue");
                    console.log(obj);
                    var jsonData = JSON.stringify(obj);

                    $.ajax({
                        //http://localhost:3000/posts api
                        type: "post",
                        url: " http://localhost:3000/posts",
                        data: jsonData,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (msg) {
                            alert('Success');
                        }
                    });
                } else {
                    $("#pass").css("border-color", "red");
                    $("#text").html(" error password should not start with any symbals ");
                    $("#text").css("color", "red");
                }
            } else {
                $("#pass").css("border-color", "red");
                $("#text").html("enter minimum 4 characters of password ");
                $("#text").css("color", "red");
            }
        } else {
            $("#email").css("border-color", "red");
            $("#erro").html(" error ");
            $("#erro").css("color", "red");
        }
    })
});