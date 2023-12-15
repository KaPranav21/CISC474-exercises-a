$(document).ready(function () {
  $("#nameform").submit(function (event) {
    event.preventDefault();
    var firstName = $("#fname").val();
    var lastName = $("#lname").val();
    $("#jumbotron").text("Name: " + firstName + " " + lastName);
  });
});
