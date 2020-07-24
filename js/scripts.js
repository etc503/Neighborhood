$(document).ready(function() {
  $("form#answer").submit(function(event){
    const number = parseInt($("#input").val());
    var lowEnd = 0;
    var highEnd = number;
    var arr = [];
    while(lowEnd <= highEnd){
    arr.push(lowEnd++);
 }
 $("#arr").text(arr);
 $("arr").show();

  })
  event.preventDefault();


})

