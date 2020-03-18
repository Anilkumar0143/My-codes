
// $(document).ready(() => {
//     $("#sub").click(() => {
//         let obj = {
//             Email: document.getElementById("email").value,
//             Password: document.getElementById("pass").value,
//             Phone: document.getElementById("ph").value
//         }

//         $("p").addClass("text-left");


//         if (obj.Email == "") {
//             $("#email").css("border-color", "red");
//             $("#erro").html(" error ");
//             $("#erro").css("color", "red");

//         } else {
//             $("#email").css("border-color", "blue");
//             $("#erro").html(" success ");
//             $("#erro").css("color", "blue");
//             if (obj.Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
//                 if (obj.Phone == "") {
//                     $("#ph").css("border-color", "red");
//                     $("#tex").animate("      ");
//                     $("#tex").html(" Enter phone No");
//                     $("#tex").css("color", "red");
//                 } else {
//                     if (obj.Phone.length >= 10) {
//                         if (obj.Phone.match(/^\d{10}$/)) {
//                             $("#ph").css("border-color", "blue");
//                             $("#tex").html(" success ");
//                             $("#tex").css("color", "blue");
//                             if (obj.Password == "") {
//                                 $("#pass").css("border-color", "red");
//                                 $("#text").html("Enter   password");
//                                 $("#text").css("color", "red");
//                             } else {
//                                 if (obj.Password.length >= 4) {
//                                     if (obj.Password.match(/^[A-z0-9]/)) {
//                                         $("#pass").css("border-color", "blue");
//                                         $("#text").html(" success ");
//                                         $("#text").css("color", "blue");
//                                         console.log(obj);
//                                     } else {
//                                         $("#pass").css("border-color", "red");
//                                         $("#text").html(" error ");
//                                         $("#text").css("color", "red");
//                                     }
//                                 } else {
//                                     $("#pass").css("border-color", "red");
//                                     $("#text").html("enter minimum 4 characters of password ");
//                                     $("#text").css("color", "red");
//                                 }
//                             }

//                         } else {
//                             $("#ph").css("border-color", "red");
//                             $("#tex").html("Enter correct phoneNo");
//                             $("#tex").css("color", "red");
//                         }
//                     } else {
//                         $("#ph").css("border-color", "red");
//                         $("#tex").html("enter minimum 10 characters of password ");
//                         $("#tex").css("color", "red");
//                     }
//                 }
//             } else {
//                 $("#email").css("border-color", "red");
//                 $("#erro").html(" Enter correct email id ");
//                 $("#erro").css("color", "red");

//             }
//         }
//     })
// });


 // DO GET
    // $("#sub").click(() => {
    //     function ajaxGet() {
    //         // var router = express.Router();
    //         // MongoClient = require('mongodb').MongoClient;
    //         // //     Server = require('mongodb').Server;

    //         // var mongoclient = new MongoClient(new Server("localhost", 27017));
    //         // var db = mongoclient.db('logindata');
    //         var obj = {
    //             Email: document.getElementById("email").value,
    //             Password: document.getElementById("pass").value
    //         }


    //     }
    //     ajaxGet();
    // });