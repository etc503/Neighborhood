$(document).ready(function() {
  $("form#answer").submit(function() {
    event.preventDefault();
    const number = parseInt($("number").val());
  })

  var lowEnd = 1;
  var highEnd = "number";
  var reveal = [];
  while(lowEnd <= highEnd){
     reveal.push(lowEnd++);
  }


  $("#number").text(number);
  $("#reveal").show();
  



})
