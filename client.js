$(function(){

  $("#employeeForm").on("submit", function(event){
    console.log(event);
    event.preventDefault();

    console.log('serialize', $("#employeeForm").serialize())
    console.log('serializeArray', $("#employeeForm").serializeArray())

    var lastName = $("#nameLast").val();
    var firstName = $("#nameFirst").val();
    var position = $("#position").val();

    console.log('lastName', lastName);
    console.log('firstName', firstName);
    console.log('position', position);

  })


})
