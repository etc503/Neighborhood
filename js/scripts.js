$(document).ready(function() {
  $("form#answer").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#input").val());
    var lowEnd = 0;
    var highEnd = number;
    var arr = [];
    while(lowEnd <= highEnd){
    arr.push(lowEnd++);
    }
    console.log(arr);
    var arrMod = [];
    arr.forEach(function(number,i) {
    
    var digits = number.toString().split("");
    if (digits.includes ("3")) arrMod[i] = "Won't you be my neighbor?"; 
     else if (digits.includes("2")) arrMod[i] = "Boop!"; 
     else if (digits.includes ("1")) arrMod[i] = "Beep!"; 
     else {
       arrMod[i] = number.toString();
    
    };
  });
  console.log(arrMod);
  var result = arrMod.join(", ");
  console.log(result); 
  $("#arrMod").text(result);
  $("#output").show();
  });



  
})
